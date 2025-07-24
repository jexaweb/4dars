import { useState } from "react";

function Header() {
  const [isOpen, Open] = useState();

  const hederEl = () => Open(!isOpen);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">
          <img className="w30  h10" src="./img/logo_coupang_w350.png" alt="" />
        </div>

        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-600">
            Home
          </a>
          <a href="#" className="hover:text-blue-600">
            About
          </a>
          <a href="#" className="hover:text-blue-600">
            Contact
          </a>
        </nav>

        <div>
          <button onClick={hederEl} className="btn btn-soft mr-5">
            <a href="https://6-dars-woad-six.vercel.app/">
              {" "}
              <i className="fa-regular fa-user text-2xl"></i>
            </a>
          </button>
          <button className="btn btn-soft">
            <i className="fa-solid fa-cart-shopping text-2xl"></i>
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white px-4 py-2 shadow">
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">
            Home
          </a>
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">
            About
          </a>
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;
