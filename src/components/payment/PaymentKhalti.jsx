import React from "react";
import KhaltiCheckout from "khalti-checkout-web";

const KhaltiPayment = () => {
  const khaltiConfig = {
    publicKey: "live_public_key_68791341fdd94846a146f0457ff7b455",
    productIdentity: "1234567890",
    productName: "GauGhar Oil",
    productUrl: "http://localhost:3000/product/123",
    eventHandler: {
      onSuccess(payload) {
        console.log("Khalti payment success!", payload);
      },
      onError(error) {
        console.error("Khalti payment error!", error);
      },
      onClose() {
        console.log("Khalti widget closed");
      },
    },
    paymentPreference: [
      "KHALTI",
      "EBANKING",
      "MOBILE_BANKING",
      "CONNECT_IPS",
      "SCT",
    ],
  };

  const checkout = new KhaltiCheckout(khaltiConfig);

  const handlePayment = () => {
    checkout.show({ amount: 1000 }); // Rs. 10
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-50 p-6">
      {/* Khalti Logo */}
      <img
        src="https://imgs.search.brave.com/WQ70utfOffHvvU6Sx6F3M0IypZbSGrNc05y0S0Q6BPM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/a2luZHBuZy5jb20v/cGljYy9tLzQ2My00/NjM5NzA5X2toYWx0/aS1kaWdpdGFsLXdh/bGxldC1sb2dvLXNp/Z24taGQtcG5nLWRv/d25sb2FkLnBuZw"
        alt="Khalti Logo"
        className="w-32 mb-6"
      />

      {/* Title */}
      <h2 className="text-2xl font-semibold text-[#5e338e] mb-4">
        Pay with Khalti
      </h2>

      {/* Button */}
      <button
        onClick={handlePayment}
        className="bg-[#5e338e] hover:bg-[#4b2874] text-white px-6 py-2 rounded-md font-medium transition"
      >
        Pay Rs. 10 via Khalti
      </button>
    </div>
  );
};

export default KhaltiPayment;
