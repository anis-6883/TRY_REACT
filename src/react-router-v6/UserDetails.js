import React from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  const { userId } = useParams();
  return (
    <div className="mt-3">
      <h4>Detail About User...Id is: {userId}</h4>
    </div>
  );
}

export default UserDetails;
