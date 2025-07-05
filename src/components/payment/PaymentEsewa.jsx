import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CryptoJS from "crypto-js";

const PaymentEsewa = () => {
  const [formData, setFormData] = useState({
    amount: "",
    tax_amount: "0",
    total_amount: "10",
    transaction_uuid: uuidv4(),
    product_service_charge: "0",
    product_delivery_charge: "0",
    product_code: "EPAYTEST",
    success_url: "http://localhost:3000/paymentsuccess",
    failure_url: "http://localhost:3000/paymentfailure",
    signed_field_names: "total_amount,transaction_uuid,product_code",
    signature: "",
    secret: "8gBm/:&EnhH.1/q",
  });

  const generateSignature = (
    total_amount,
    transaction_uuid,
    product_code,
    secret
  ) => {
    const hashString = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code}`;
    const hash = CryptoJS.HmacSHA256(hashString, secret);
    return CryptoJS.enc.Base64.stringify(hash);
  };

  useEffect(() => {
    const { total_amount, transaction_uuid, product_code, secret } = formData;
    const hashedSignature = generateSignature(
      total_amount,
      transaction_uuid,
      product_code,
      secret
    );
    setFormData((prev) => ({ ...prev, signature: hashedSignature }));
  }, [formData.amount]);

  return (
    <div className=" bg-[#f5fdf0] flex items-center justify-center px-4">
      <form
        action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
        method="POST"
        className="bg-white border-2 border-[#8cc63f] shadow-xl rounded-2xl p-8 md:p-10 w-full max-w-md"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-center text-[#8cc63f] mb-6">
          eSewa Checkout
        </h1>

        {/* Amount */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount (Rs.)
          </label>
          <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={({ target }) =>
              setFormData({
                ...formData,
                amount: target.value,
                total_amount: target.value,
              })
            }
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8cc63f]"
          />
        </div>

        {/* First Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8cc63f]"
          />
        </div>

        {/* Last Name */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8cc63f]"
          />
        </div>

        {/* Hidden Inputs */}
        {[
          "tax_amount",
          "total_amount",
          "transaction_uuid",
          "product_code",
          "product_service_charge",
          "product_delivery_charge",
          "success_url",
          "failure_url",
          "signed_field_names",
          "signature",
        ].map((name) => (
          <input
            key={name}
            type="hidden"
            name={name}
            value={formData[name]}
            required
          />
        ))}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#8cc63f] hover:bg-[#76aa35] text-white font-semibold py-2 rounded-lg transition duration-200"
        >
          Pay via eSewa
        </button>
      </form>
    </div>
  );
};

export default PaymentEsewa;
