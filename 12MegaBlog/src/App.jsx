import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./store/authSlice";
import authService from "./appwrite/auth";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((user) => {
        if (user) {
          dispatch(login(user));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  const handleLogout = async () => {
    await authService.logout();
    dispatch(logout());
    navigate("/login");
  };

  if (loading) {
    return <h2 className="text-center text-xl mt-8">Loading...</h2>;
  }

  return (
    <div className="p-4">
      {authStatus ? (
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">Welcome, {userData?.name || "User"} 👋</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="text-center mb-4">
          <h1 className="text-xl font-semibold text-gray-700">
            You are not logged in
          </h1>
          <p className="text-sm">Please <a href="/login" className="text-blue-600 underline">login</a> or <a href="/signup" className="text-blue-600 underline">sign up</a>.</p>
        </div>
      )}

      {/* 👇 This renders your nested routes */}
      <Outlet />
    </div>
  );
}

export default App;
