import React from 'react';
import { Link } from 'react-router-dom';


function Logo({ width = '100px' }) {
  return (
    <Link to="/" className="block" style={{ width }}>
      <h1 className="text-2xl font-bold text-blue-600">SufianBlog</h1>
    </Link>
  );
}


export default Logo;
