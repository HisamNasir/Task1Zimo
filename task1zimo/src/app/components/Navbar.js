import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-lg font-semibold">My App</div>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <h1 className="text-white hover:text-gray-300">Home</h1>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <h1 className="text-white hover:text-gray-300">About</h1>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <h1 className="text-white hover:text-gray-300">Contact</h1>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
