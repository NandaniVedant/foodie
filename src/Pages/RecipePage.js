import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RecipePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
            .then((response) => response.json())
            .then((data) => {
                setRecipes(data.recipes);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching recipes:", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading recipes...</p>;

    return (
        <div className="container mt-4">
            <h2>All Recipes</h2>
            <div className="row">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="col-md-4 mb-4">
                        <div className="card">
                            <img src={recipe.image} alt={recipe.name} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{recipe.name}</h5>
                                <Link to={`/category/${recipe.mealType[0]}`} className="btn btn-danger">
                                    View Category
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecipePage;
