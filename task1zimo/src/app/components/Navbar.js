const React = require('react');
const Link = require('next/link').default;
import '../Pages/about.js'
import '../Pages/home.js'
const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-lg font-semibold">My App</div>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <p className="text-white hover:text-gray-300">Home</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p className="text-white hover:text-gray-300">About</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

module.exports = Navbar;
