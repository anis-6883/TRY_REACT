import React from "react";
import { useNavigate } from "react-router-dom";

function OrderSummary() {
  const navigate = useNavigate();
  return (
    <>
      <div className="alert alert-primary mt-3" role="alert">
        Confirm Your Order Successfully...
      </div>
      <button onClick={() => navigate(-1)} className="btn btn-info mt-4">
        Go Back
      </button>
    </>
  );
}

export default OrderSummary;
