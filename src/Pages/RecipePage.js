import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const RecipePage = () => {
    const { search } = useParams();  
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortOption, setSortOption] = useState("name-asc");
    
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const recipesPerPage = 6; // Number of recipes per page

    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
            .then(res => res.json())
            .then(data => {
                setRecipes(data.recipes);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) 
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );

    // Ensure recipes exist before sorting
    let sortedRecipes = [...recipes];
    if (recipes.length > 0) {
        sortedRecipes.sort((a, b) => {
            if (sortOption === "name-asc") return a.name.localeCompare(b.name);
            if (sortOption === "name-desc") return b.name.localeCompare(a.name);
            if (sortOption === "time-asc") return a.cookTimeMinutes - b.cookTimeMinutes;
            if (sortOption === "time-desc") return b.cookTimeMinutes - a.cookTimeMinutes;
            if (sortOption === "rating-asc") return a.rating - b.rating;
            if (sortOption === "rating-desc") return b.rating - a.rating;
            return 0;
        });
    }

    // Filter Recipes Based on Search Query
    const filteredRecipes = search
        ? sortedRecipes.filter(recipe =>
            recipe.name.toLowerCase().includes(search.toLowerCase())
        )
        : sortedRecipes;

    // Pagination Logic
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = filteredRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

    const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="AllRecipestital">All Recipes</h2>
                <select
                    className="form-select w-auto"
                    value={sortOption}
                    onChange={e => setSortOption(e.target.value)}
                >
                    <option value="name-asc">Name (A-Z)</option>
                    <option value="name-desc">Name (Z-A)</option>
                    <option value="time-asc">Cooking Time (Shortest-Longest)</option>
                    <option value="time-desc">Cooking Time (Longest-Shortest)</option>
                    <option value="rating-asc">Rating (Lowest-Highest)</option>
                    <option value="rating-desc">Rating (Highest-Lowest)</option>
                </select>
            </div>

            {/* Display Recipes */}
            <div className="row">
                {currentRecipes.length > 0 ? (
                    currentRecipes.map(recipe => (
                        <div key={recipe.id} className="col-md-4 mb-4">
                            <div className="card">
                                <img src={recipe.image} alt={recipe.name} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title text-danger">{recipe.name}</h5>
                                    <p><strong>Cooking Time:</strong> {recipe.cookTimeMinutes} mins</p>
                                    <p><strong>Rating:</strong> {recipe.rating} ⭐</p>
                                    <Link to={`/recipe/${recipe.id}`} className="btn btn-danger">
                                        View Recipe
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No recipes found.</p>
                )}
            </div>

            {/* Pagination Controls */}
            <div className="d-flex justify-content-center mt-4">
                <button 
                    className="btn btn-outline-danger mx-2 mb-5"
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                <span className="align-self-center mb-5">
                    Page {currentPage} of {totalPages}
                </span>

                <button 
                    className="btn btn-outline-danger mx-2 mb-5"
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default RecipePage;
