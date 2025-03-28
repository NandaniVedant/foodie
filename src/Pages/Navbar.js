import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png'; // Make sure to import your logo

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#dc2f2f', padding: '10px' }}>
      <div className="container">
        {/* Logo and Brand */}
        <Link className="navbar-brand text-white fw-bold d-flex align-items-center" to="/">
          {/* <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} /> */}
     Foodie
        </Link>

        {/* Navbar Toggle Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links and Search Bar */}
        <div className="collapse navbar-collapse" id="navbarNav">
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
          </ul>

          {/* Search Bar */}
          <form className="d-flex ms-3">
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="Search recipes..." 
              aria-label="Search" 
            />
            <button className="btn btn-light" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
