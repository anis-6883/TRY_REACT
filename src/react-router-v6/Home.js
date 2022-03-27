import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h4 className="mt-4">Home Page</h4>
      <button
        onClick={() => navigate("order-summary", { replace: true })}
        className="btn btn-warning mt-4"
      >
        Place Order
      </button>
    </>
  );
}

export default Home;
