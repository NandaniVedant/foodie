import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetails = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://dummyjson.com/recipes/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setRecipe(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching recipe details:", error);
                setLoading(false);
            });
    }, [id]);

    if (loading)
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                <div className="spinner-border" style={{ color: "#dc2f2f", width: "3rem", height: "3rem" }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );

    if (!recipe)
        return <p style={{ color: "#dc2f2f", textAlign: "center", fontSize: "18px" }}>Recipe not found.</p>;

    return (
        <div className="container mt-5">
            {/* Title & Rating */}
            <div style={{ textAlign: "center", marginBottom: "30px", color: "#dc2f2f" }}>
                <h2 style={{ fontWeight: "bold", marginBottom: "10px" }}>{recipe.name}</h2>
                <p style={{ fontSize: "18px", fontWeight: "bold" }}>⭐ Rating: {recipe.rating} / 5</p>
            </div>

            {/* Image & Cooking Details */}
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="img-fluid mb-3"
                        style={{
                            borderRadius: "10px",
                            maxWidth: "100%",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                        }}
                    />
                </div>
                <div className="col-md-6" style={{ color: "#dc2f2f", paddingLeft: "20px" }}>
                    <h4 style={{ fontWeight: "bold", borderBottom: "2px solid #dc2f2f", paddingBottom: "5px" }}>Preparation & Cooking Time</h4>
                    <p><strong>Preparation Time:</strong> {recipe.prepTimeMinutes} minutes</p>
                    <p><strong>Cooking Time:</strong> {recipe.cookTimeMinutes} minutes</p>
                    <p><strong>Servings:</strong> {recipe.servings} People</p>
                </div>
            </div>

            {/* Ingredients */}
            <div style={{ marginTop: "30px", color: "#dc2f2f", padding: "15px", borderRadius: "10px" }}>
                <h4 style={{ fontWeight: "bold", borderBottom: "2px solid #dc2f2f", paddingBottom: "5px" }}>Ingredients</h4>
                <ul style={{ listStyleType: "square", paddingLeft: "20px" }}>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index} style={{ color: "#dc2f2f", fontSize: "16px", marginBottom: "5px" }}>{ingredient}</li>
                    ))}
                </ul>
            </div>

            {/* Instructions */}
            <div style={{ marginTop: "30px", color: "#dc2f2f", padding: "15px", borderRadius: "10px" }}>
                <h4 style={{ fontWeight: "bold", borderBottom: "2px solid #dc2f2f", paddingBottom: "5px" }}>Recipe Instructions</h4>
                <p style={{ fontSize: "16px", lineHeight: "1.6" }}>{recipe.instructions}</p>
            </div>

            {/* Back Button */}
            <div className="text-center mt-4 mb-5">
                <Link
                    to="/"
                    className="btn"
                    style={{
                        backgroundColor: "#dc2f2f",
                        color: "white",
                        fontWeight: "bold",
                        borderRadius: "5px",
                        padding: "12px 25px",
                        textDecoration: "none",
                        fontSize: "16px",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                    }}
                >
                    Back to Recipes
                </Link>
            </div>
        </div>
    );
};

export default RecipeDetails;
