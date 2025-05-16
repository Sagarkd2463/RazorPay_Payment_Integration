const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const Razorpay = require('razorpay');
const crypto = require('crypto');
const { orderModel } = require('./models/Order');
require('./database/db');
require('dotenv');

const app = express();

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
}));

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/payment/checkout', async (req, res) => {
    const { name, amount } = req.body;

    const order = await razorpay.orders.create({
        amount: Number(amount * 100),
        currency: "INR"
    });

    await orderModel.create({
        order_id: order.id,
        name: name,
        amount: amount,
    });

    console.log({ order });
    res.json({ order });
});

app.post('/payment/payment-verification', async (req, res) => {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

    const body_data = razorpay_order_id + "|" + razorpay_payment_id;

    const expect = crypto
        .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
        .update(body_data)
        .digest('hex');

    const isValid = expect === razorpay_signature;

    if (isValid) {
        await orderModel.findOneAndUpdate(
            { order_id: razorpay_order_id },
            {
                $set: {
                    razorpay_payment_id,
                    razorpay_order_id,
                    razorpay_signature
                }
            },
            { new: true }
        );

        res.redirect(`http://localhost:5173/success?payment_id=${razorpay_payment_id}&order_id=${razorpay_order_id}`);
    } else {
        res.redirect('http://localhost:5173/failed');
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
});