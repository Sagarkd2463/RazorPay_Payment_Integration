import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const Success = () => {
    const [query] = useSearchParams();
    const paymentId = query.get('payment_id');

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
                <div className="flex justify-center mb-4">
                    <CheckCircle className="text-green-500" size={64} />
                </div>
                <h2 className="text-3xl font-semibold text-gray-800 mb-2">Payment Successful!</h2>
                <p className="text-gray-600 mb-6">
                    Thank you for your payment. Your transaction has been completed successfully.
                </p>
                <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
                    <span className="block text-sm text-gray-500 mb-1">Payment ID</span>
                    <span className="font-mono font-semibold text-gray-700 break-all">
                        {paymentId || "N/A"}
                    </span>
                </div>
                <div className="mt-6">
                    <a href="/" className="text-blue-600 hover:underline text-normal">
                        Go back to homepage
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Success;