import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./utilities/auth";

function Profile() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <>
      <h4 className="mt-4">Profile Page</h4>
      <p className="lead">
        Welcome <b>{auth.user}</b>...How is going?
      </p>
      <button onClick={handleLogout} className="btn btn-danger mt-3">
        Logout
      </button>
    </>
  );
}

export default Profile;
