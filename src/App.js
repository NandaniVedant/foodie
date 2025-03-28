import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import './Style.css';
import About from './Pages/About';
// import Recipedetail from './Pages/Recipedetail';
import Footer from './Pages/Footer';
import Navbar from './Pages/Navbar';
import Recipe from './Pages/Recipe';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName" element={<Recipe />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/recipes" element={<Recipe />} />
        
        <Route path="/recipes/:id" element={<Recipedetail />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
