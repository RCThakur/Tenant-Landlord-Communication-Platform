import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          TenantConnect
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-gray-700">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Requests</li>
          <li className="hover:text-blue-600 cursor-pointer">Chat</li>
          <li className="hover:text-blue-600 cursor-pointer">Profile</li>
        </ul>

        {/* Login/Logout Button */}
        <div className="hidden md:block">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Login
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-2 text-gray-700">
            <li className="hover:text-blue-600">Home</li>
            <li className="hover:text-blue-600">Requests</li>
            <li className="hover:text-blue-600">Chat</li>
            <li className="hover:text-blue-600">Profile</li>
            <li>
              <button className="bg-blue-600 w-full text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Login
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
