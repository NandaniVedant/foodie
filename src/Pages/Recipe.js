import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Recipe = () => {
    const { categoryName } = useParams();
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
            .then((response) => response.json())
            .then((data) => {
                setRecipes(data.recipes.filter(recipe => recipe.mealType.includes(categoryName)));
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching recipes:", error);
                setLoading(false);
            });
    }, [categoryName]);

    if (loading)
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );

    return (
        <div className="category-page text-center">
            <h2 style={{ color: "#dc2f2f" }}>{categoryName} Recipes</h2>
            <div className="food-items d-flex flex-wrap justify-content-center">
                {recipes.length > 0 ? (
                    recipes.map((recipe) => (
                        <Link key={recipe.id} to={`/recipe/${recipe.id}`} className="food-card text-decoration-none text-danger m-3">
                            <img src={recipe.image} alt={recipe.name} className="img-fluid rounded" style={{ maxWidth: "200px", height: "auto" }} />
                            <p className="mt-2">{recipe.name}</p>
                        </Link>
                    ))
                ) : (
                    <p>No recipes found for {categoryName}</p>
                )}
            </div>
        </div>
    );
};

export default Recipe;
