import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Buy/Sell", path: "/property" },
    { name: "Contact", path: "#contact" },
  ];

  const sideLinks = [
    { name: "Cart", path: "/cart" },
    { name: "Login", path: "/login" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full h-20 text-black fixed top-0 left-0 z-50 shadow-md flex items-center  transition-colors duration-300 ${
        isScrolled ? "bg-black text-white" : "bg-transparent"
      }`}
    >
      <div className="flex w-full max-w-[80%] mx-auto justify-between items-center px-4 md:px-0">
        {/* Logo */}
        <div className="text-lg font-bold text-white">Logo</div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-white hover:text-gray-300 transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Side Links */}
        <div className="hidden md:flex space-x-4">
          {sideLinks.map((link, index) => (
            <button
              key={index}
              className="border-2 border-white rounded-xl px-4 py-2 text-white hover:bg-white hover:text-black transition"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <span className="text-white text-3xl">&#9776;</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-40 flex flex-col items-center pt-24 space-y-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setMenuOpen(false)}
              className="text-white text-2xl hover:text-gray-300 transition"
            >
              {link.name}
            </a>
          ))}
          {sideLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => setMenuOpen(false)}
              className="border-2 border-white rounded-xl px-6 py-2 text-white hover:bg-white hover:text-black transition"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
