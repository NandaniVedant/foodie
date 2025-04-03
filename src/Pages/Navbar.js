import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [word, setword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (word.trim() !== "") {
      navigate(`/searchproduct/${word}`);
    }
  };
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#dc2f2f', padding: '10px' }}>
      <div className="container d-flex align-items-center justify-content-between">
        {/* Logo */}
        <Link className="navbar-brand text-white fw-bold d-flex align-items-center" to="/">
          Foodie
        </Link>

        {/* Mobile Search Bar (Always Visible) */}
        <form className="d-flex d-lg-none flex-grow-1 mx-3" style={{ maxWidth: '200px' }} onSubmit={handleSubmit}>
          <input
            className="form-control form-control-sm me-1"
            type="search"
            placeholder="Search..."
            aria-label="Search"
            style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
            onChange={(a) => setword(a.target.value)}
          />
          <button
            className="btn btn-light btn-sm"
            type="submit"
            style={{ border: 'none' }}
          >
            serch
          </button>
        </form>

        {/* Navbar Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          style={{ border: 'none' }} // Remove border from button
        >
          <span
            className="navbar-toggler-icon"
            style={{ filter: 'invert(1)' }} // Make icon white
          ></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/recipes">Recipes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="">Contact</Link>
            </li>
          </ul>

          {/* Desktop Search Bar (Larger Screens) */}
          <form className="d-flex ms-3 d-none d-lg-flex" style={{ maxWidth: '250px' }} onSubmit={handleSubmit}>

            <input
              className="form-control form-control-sm me-1"
              type="search"
              placeholder="Search..."
              aria-label="Search"
              style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
              onChange={(a) => setword(a.target.value)}
            />
            <button
              className="btn btn-light btn-sm"
              type="submit"
              style={{ border: 'none' }}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
