import React from "react";
import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <>
      <h4 className="mt-4">Product Page</h4>
      <input
        className="form-control mt-4 mb-4"
        type="text"
        placeholder="Search Product..."
      />
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent1"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="featured">
                  Featured
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="new">
                  New
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Products;
