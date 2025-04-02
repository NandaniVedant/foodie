import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RecipePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortOption, setSortOption] = useState("name-asc");

    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
            .then(res => res.json())
            .then(data => {
                setRecipes(data.recipes);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading recipes...</p>;

    const sortedRecipes = [...recipes].sort((a, b) => {
        if (sortOption === "name-asc") return a.name.localeCompare(b.name);
        if (sortOption === "name-desc") return b.name.localeCompare(a.name);
        if (sortOption === "time-asc") return a.cookingTime - b.cookingTime;
        if (sortOption === "time-desc") return b.cookingTime - a.cookingTime;
        if (sortOption === "rating-asc") return a.rating - b.rating;
        if (sortOption === "rating-desc") return b.rating - a.rating;
        return 0;
    });

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
            <div className="row">
                {sortedRecipes.length > 0 ? (
                    sortedRecipes.map(recipe => (
                        <div key={recipe.id} className="col-md-4 mb-4">
                            <div className="card">
                                <img src={recipe.image} alt={recipe.name} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title" style={{color:"#dc2f2f"}}>{recipe.name}</h5>
                                    <p><strong>Cooking Time:</strong> {recipe.cookTimeMinutes} mins</p>
                                    <p><strong>Rating:</strong> {recipe.rating} ⭐</p>
                                    <Link to={`/recipe/${recipe.id}`} className="btn btn-danger">
                                        View Recipes
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No recipes found.</p>
                )}
            </div>
        </div>
    );
};

export default RecipePage;