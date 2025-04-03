import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import './Style.css';
import About from './Pages/About';
import Footer from './Pages/Footer';
import Navbar from './Pages/Navbar';
import Recipe from './Pages/Recipe';
import RecipePage from './Pages/RecipePage';
import RecipeDetails from './Pages/Recipiedetail';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        
        {/* Main content area should expand */}
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryName" element={<Recipe />} />
            <Route path="/about" element={<About />} />
            <Route path="/recipes" element={<RecipePage />} />
            <Route path="/searchproduct/:search" element={<RecipePage />} />

            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
