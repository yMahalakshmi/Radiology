import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logowell.jpg";

export default function Header() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const [active, setActive] = useState("Home");
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: "Home", id: "/home#home" },
    { name: "About Us", id: "/home#about" },
    {
      name: "Services",
      id: "/home#services",
      dropdown: [
        { name: "Functional Medicine", id: "/functional" },
        { name: "Teleradiology", id: "/teleradiology" },
      ],
    },
    { name: "Blogs", id: "/home#pages" },
    { name: "Contact Us", id: "/home#contact" },
  ];

  const scrollToSection = () => {
    if (location.hash) {
      const elementId = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  useEffect(() => {
    scrollToSection();
  }, [location.hash]);

  const handleNavigation = (path) => {
    const [route] = path.split("#");
    if (location.pathname !== route) {
      navigate(route);
    } else {
      scrollToSection();
    }
    setActive(path);
    setIsToggleOpen(false);
    setDesktopDropdownOpen(null);
    setMobileDropdownOpen(null);
  };

  return (
    <header className="fixed top-0 z-50 w-full min-h-[4vh] bg-[#9AAE96] shadow-md">
    <div className="w-full px-4 sm:px-6 lg:px-10   py-2 flex justify-between items-center">
{/* <header className="w-full fixed top-0 z-50 bg-white shadow-md border-b border-gray-200 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3 flex justify-between items-center"> */}
        {/* Logo */}<Link to="/" className="flex items-center mr-auto">

          <img src={logo} alt="Logo" className="h-[72px] md:h-20 lg:h-[40px]" />
        </Link>

        {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 lg:space-x-10 text-base lg:text-xl items-center ml-auto">

          {menuItems.map((item) =>
            item.dropdown ? (
              <div key={item.name} className="relative group">
                <button
                  onClick={() =>
                    setDesktopDropdownOpen(
                      desktopDropdownOpen === item.name ? null : item.name
                    )
                  }
                  className={`flex items-center gap-1 transition ${
                    active === item.id ? "text-[#E5B8A8]" : "text-white"
                  } hover:text-[#E5B8A8]`}
                >
                  {item.name}
                  <span>{desktopDropdownOpen === item.name ? "▲" : "▼"}</span>
                </button>
                {desktopDropdownOpen === item.name && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.id}
                        onClick={() => handleNavigation(subItem.id)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#E5B8A8] hover:text-white transition"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`transition ${
                  active === item.id ? "text-[#E5B8A8]" : "text-white"
                } hover:text-[#E5B8A8]`}
              >
                {item.name}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsToggleOpen(!isToggleOpen)}
        >
          ☰
        </button>

        {/* Mobile Dropdown Menu */}
        {isToggleOpen && (
          <div className="absolute top-full left-0 w-full bg-[#07332f] text-white flex flex-col items-center py-4 space-y-4 md:hidden z-50 shadow-lg">
            {menuItems.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="w-full flex flex-col items-center">
                  <button
                    onClick={() =>
                      setMobileDropdownOpen(
                        mobileDropdownOpen === item.name ? null : item.name
                      )
                    }
                    className={`transition font-semibold flex items-center gap-1 ${
                      active === item.id ? "text-[#E5B8A8]" : "text-white"
                    } hover:text-[#E5B8A8]`}
                  >
                    {item.name}
                    <span>{mobileDropdownOpen === item.name ? "▲" : "▼"}</span>
                  </button>
                  {mobileDropdownOpen === item.name &&
                    item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.id}
                        onClick={() => handleNavigation(sub.id)}
                        className="text-sm mt-2 text-[#F7A582] hover:underline"
                      >
                        {sub.name}
                      </Link>
                    ))}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`transition ${
                    active === item.id ? "text-[#E5B8A8]" : "text-white"
                  } hover:text-[#E5B8A8]`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </header>
  );
}
