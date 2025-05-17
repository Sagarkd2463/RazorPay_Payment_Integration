import React from 'react';
import { XCircle } from 'lucide-react';

const Failed = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
                <div className="flex justify-center mb-4">
                    <XCircle className="text-red-500" size={64} />
                </div>
                <h2 className="text-3xl font-semibold text-gray-800 mb-2">Payment Failed</h2>
                <p className="text-gray-600 mb-6">
                    Unfortunately, your transaction could not be completed. Please try again or contact support if the issue persists.
                </p>
                <div className="mt-6">
                    <a href="/" className="inline-block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                        Try Again
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Failed;