import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    // Only redirect once auth status is determined
    if (authentication && !authStatus) {
      navigate('/login', { state: { from: location }, replace: true });
    } else if (!authentication && authStatus) {
      navigate('/', { replace: true });
    }
    setLoader(false);
  }, [authStatus, navigate, authentication, location]);

  return loader ? (
    <div className="flex justify-center items-center min-h-screen">
      <h1 className="text-xl font-semibold">Loading...</h1>
    </div>
  ) : (
    <>{children}</>
  );
}
