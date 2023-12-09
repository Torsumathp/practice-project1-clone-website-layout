import React from "react";

function navbar() {
  return (
    <nav className="py-4 bg-white">
      <div className="flex justify-between items-center px-16">
        <div className="">
          <a href="#home" className="text-gray-600 text-2xl font-semibold">Site Name</a>
        </div>
        <div>
          <ul className="flex space-x-6">
            <li className="text-gray-600 text-1xl font-semibold">HOME</li>
            <li className="text-gray-600 text-1xl font-semibold">ABOUT</li>
            <li className="text-gray-600 text-1xl font-semibold">SERVICES</li>
            <li className="text-gray-600 text-1xl font-semibold">PROJECT</li>
            <li className="text-gray-600 text-1xl font-semibold">BLOG</li>
            <li className="text-gray-600 text-1xl font-semibold">CONTACT</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
