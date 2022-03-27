import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <div className="mt-3">
      <h4>List of users...</h4>
      <ul>
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
      </ul>
      <Outlet />
      <div className="mt-4">
        <button
          onClick={() => setSearchParams({ filter: "active" })}
          className="btn btn-sm btn-info me-2"
        >
          Active Users
        </button>
        <button
          onClick={() => setSearchParams({})}
          className="btn btn-sm btn-secondary"
        >
          Reset Filter
        </button>
      </div>
      {showActiveUsers ? (
        <h4 className="mt-3">Showing Active Users...</h4>
      ) : (
        <h4 className="mt-3">Show All users...</h4>
      )}
    </div>
  );
}

export default Users;
