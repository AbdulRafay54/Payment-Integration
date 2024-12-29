import React from "react";

const Cancel = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-red-400 via-red-500 to-red-600">
      <div className="text-center p-8 bg-white rounded-lg shadow-xl max-w-lg w-full">
        <h1 className="text-4xl font-bold text-red-700 mb-4">
          Payment Rejected!
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Unfortunately, your payment was not successful. Please try again or contact support if the issue persists.
        </p>
        <p className="text-lg text-gray-500">
          If you need assistance, feel free to reach out to our support team.
        </p>
      </div>
    </div>
  );
};

export default Cancel;
