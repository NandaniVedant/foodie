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
                const filteredRecipes = data.recipes.filter(recipe =>
                    recipe.mealType.includes(categoryName)
                );
                setRecipes(filteredRecipes);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching recipes:", error);
                setLoading(false);
            });
    }, [categoryName]);

    if (loading) return <p>Loading {categoryName} recipes...</p>;

    return (
        <div className="category-page">
            <h2 style={{ color: "#dc2f2f", textDecoration: "none" }}>
                {categoryName} Recipes
            </h2>
            <div className="food-items">
                {recipes.length > 0 ? (
                    recipes.map((recipe) => (
                        <Link 
                            key={recipe.id} 
                            to={`/recipe/${recipe.id}`} 
                            className="food-card"
                            style={{ color: "#dc2f2f", textDecoration: "none" }}
                        >
                            <img src={recipe.image} alt={recipe.name} />
                            <p>{recipe.name}</p>
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
