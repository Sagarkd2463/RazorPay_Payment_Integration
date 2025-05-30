import React from 'react';

const Card = ({ image, title, price, description, category, onCheckout }) => {
    return (
        <>
            <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img className="lg:h-60 md:h-44 w-full object-cover object-center" src={image} alt="blog" />
                    <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{category}</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
                        <p className="leading-relaxed mb-3">{description}</p>
                        <div className='flex items-center flex-wrap'>
                            <button className='bg-black px-6 py-2 text-white rounded-sm' onClick={() => onCheckout({ name: title, amount: price })}>
                                Buy Now &#8377;{price}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Card;