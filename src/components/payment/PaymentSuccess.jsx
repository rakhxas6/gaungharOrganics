import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const [search] = useSearchParams();
  const dataQuery = search.get("data");
  const [data, setData] = useState({});

  useEffect(() => {
    if (!dataQuery) return;

    try {
      const urlDecoded = decodeURIComponent(dataQuery);
      const base64Decoded = atob(urlDecoded);
      const resObject = JSON.parse(base64Decoded);
      setData(resObject);
    } catch (error) {
      console.error("Failed to decode or parse payment data:", error.message);
    }
  }, [dataQuery]);

  return (
    <div className="min-h-screen bg-[#f5fdf0] flex items-center justify-center px-4">
      <div className="bg-white p-8 md:p-10 rounded-2xl border-2 border-[#8cc63f] shadow-xl text-center max-w-md w-full animate-fade-in">
        <FaCheckCircle className="text-[#8cc63f] text-5xl mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-[#8cc63f] mb-4">
          Payment Successful
        </h1>
        <p className="text-lg text-gray-700 mb-2">
          Amount Paid:{" "}
          <span className="font-semibold">
            Rs. {data?.total_amount || "10.00"}
          </span>
        </p>
        <p className="text-sm text-gray-500">
          Transaction ID: {data?.transaction_uuid || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
