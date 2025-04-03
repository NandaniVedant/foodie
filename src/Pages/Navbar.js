import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Track if mobile menu is open
  const [searchText, setSearchText] = useState(""); // Store search input value
  const navigate = useNavigate();
  const location = useLocation(); // Get current page path

  // Function to handle search submission
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent page reload
    if (searchText.trim() !== "") {
      navigate(`/searchproduct/${searchText}`); // Go to search page
      setIsOpen(false); // Close navbar after search
    }
  };

  // Close navbar automatically when the route (page) changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#dc2f2f", padding: "10px" }}>
      <div className="container d-flex align-items-center justify-content-between">
        
        {/* Logo */}
        <Link className="navbar-brand text-white fw-bold" to="/" onClick={() => setIsOpen(false)}>
          Foodie
        </Link>

        {/* Mobile Search Bar */}
        <form className="d-flex d-lg-none mx-3" style={{ maxWidth: "200px" }} onSubmit={handleSearch}>
          <input
            className="form-control form-control-sm me-1"
            type="search"
            placeholder="Search..."
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="btn btn-light btn-sm" type="submit">Search</button>
        </form>

        {/* Navbar Toggle Button (for mobile) */}
        <button className="navbar-toggler" onClick={() => setIsOpen(!isOpen)}>
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link text-white" to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/recipes" onClick={() => setIsOpen(false)}>Recipes</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>

          {/* Desktop Search Bar (Only for large screens) */}
          <form className="d-flex ms-3 d-none d-lg-flex" style={{ maxWidth: "250px" }} onSubmit={handleSearch}>
            <input
              className="form-control form-control-sm me-1"
              type="search"
              placeholder="Search..."
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="btn btn-light btn-sm" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
