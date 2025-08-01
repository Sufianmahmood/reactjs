import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gray-400 border-t-2 border-t-black">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          
          {/* Logo & Copyright */}
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <p className="text-sm text-gray-600">
                &copy; {new Date().getFullYear()} All Rights Reserved by SufianBlog.
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="tracking-px mb-4 text-xs font-semibold uppercase text-gray-500">Company</h3>
            <ul>
              <li className="mb-2">
                <Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">Features</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">Pricing</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">Affiliate</Link>
              </li>
              <li>
                <Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">Press Kit</Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="tracking-px mb-4 text-xs font-semibold uppercase text-gray-500">Support</h3>
            <ul>
              <li className="mb-2">
                <Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">Account</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">Help</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">Contact Us</Link>
              </li>
              <li>
                <Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">Customer Support</Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <h3 className="tracking-px mb-4 text-xs font-semibold uppercase text-gray-500">Legals</h3>
            <ul>
              <li className="mb-2">
                <Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">Terms & Conditions</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">Licensing</Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Footer;
