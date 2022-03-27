import React from "react";
import { Routes, Route } from "react-router-dom";
// import About from "./About";
import FeaturedProducts from "./FeaturedProducts";
import Home from "./Home";
import Login from "./Login";
import Navbar from "./Navbar";
import NewProducts from "./NewProducts";
import NoMatch from "./NoMatch";
import OrderSummary from "./OrderSummary";
import Products from "./Products";
import Profile from "./Profile";
import { UserAdmin } from "./UserAdmin";
import UserDetails from "./UserDetails";
import Users from "./Users";
import { AuthProvider } from "./utilities/auth";
import RequireAuth from "./utilities/requireAuth";
const LazyAbout = React.lazy(() => import("./About"));

function MainRouter() {
  return (
    <AuthProvider>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="about"
            element={
              <React.Suspense fallback="Loading...">
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route path="order-summary" element={<OrderSummary />} />
          <Route path="products" element={<Products />}>
            <Route index element={<FeaturedProducts />} />
            <Route path="featured" element={<FeaturedProducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />} />
            <Route path="admin" element={<UserAdmin />} />
          </Route>
          <Route
            path="profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default MainRouter;
