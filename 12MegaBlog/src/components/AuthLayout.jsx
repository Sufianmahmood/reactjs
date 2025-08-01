import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

// AuthLayout ensures that only authenticated users can access certain routes
export default function AuthLayout({ children, authentication = true }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    // Wait for authStatus to be determined before routing
    if (authentication && !authStatus) {
      navigate('/login', { state: { from: location }, replace: true });
    } else if (!authentication && authStatus) {
      navigate('/', { replace: true });
    }
    setLoading(false);
  }, [authStatus, navigate, authentication, location]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-xl font-semibold">Loading...</h1>
      </div>
    );
  }

  return <>{children}</>;
}
