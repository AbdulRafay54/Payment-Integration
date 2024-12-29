import React from "react";

const Success = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">
      <div className="text-center p-8 bg-white rounded-lg shadow-xl max-w-lg w-full">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">
          Thank You for Your Order!
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Your order has been successfully placed. We appreciate your business!
        </p>
        <p className="text-lg text-gray-500">
          You will receive an email confirmation shortly. If you have any questions, feel free to contact us.
        </p>
      </div>
    </div>
  );
};

export default Success;
