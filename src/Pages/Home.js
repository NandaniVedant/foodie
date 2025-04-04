import { motion, AnimatePresence, color } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import ContactUs from "./Contactus";


const images = [
    {
        src: "/Img/slider.jpg",
        title: "Welcome to Foodie",
        description: "Explore delicious recipes and cook amazing dishes at home.",
        text: "Slide 1"
    },
    {
        src: "/Img/slider.jpg",
        title: "Healthy & Tasty Recipes",
        description: "Discover nutritious and mouth-watering meals for every occasion.",
        text: "Slide 2"
    },
    {
        src: "/Img/slider.jpg",
        title: "Cook Like a Pro",
        description: "Step-by-step guides and expert cooking tips to elevate your skills.",
        text: "Slide 3"
    }
];

const Home = () => {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };


    return (
        <>
            <div className="home-container" style={{ backgroundImage: `url(${images[index].src})` }}>
                <AnimatePresence>
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="overlay"
                    >
                        <h1>{images[index].title}</h1>
                        <p>{images[index].description}</p>
                        <button className="next-button" onClick={nextSlide}>Next</button>
                    </motion.div>
                </AnimatePresence>
            </div>
            <About />
            <Filterrecipi />
            <Services />
            <ContactUs />

        </>
    );

};

const categoryImages = {
    Breakfast: "/Img/breakfast.jpg",
    Lunch: "/Img/Lunch.jpg",
    Dinner: "/Img/dinner.jpg",
    Snacks: "/Img/snaks2.jpg",
    Dessert: "/Img/dessert.jpg",
    "Side Dish": "/Img/sidedish1.jpg",
    Appetizer: "/Img/sidedish.jpg",
    Snack: "/Img/snacks.jpg",
    Beverage: "/Img/bevrages.jpg",

};

const Filterrecipi = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
            .then((res) => res.json())
            .then((data) => {
                const uniqueCategories = [...new Set(data.recipes.flatMap((recipe) => recipe.mealType))];
                setCategories(uniqueCategories);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching recipes:", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading categories...</p>;

    return (
        <>
            <div className="category-container">
                <h2 className="mb-5 font-bold" style={{ color: "#dc2f2f", fontWeight: "bold" }}>Food Categories</h2>

                <div className="category-list">
                    {categories.map((category) => (
                        <Link to={`/category/${category}`} key={category} className="category-card">
                            <img src={categoryImages[category] || "https://via.placeholder.com/150"} alt={category} />
                            <p>{category}</p>
                        </Link>
                    ))}
                </div>
            </div >
        </>
    );
};

const Services = () => {
    const services = [
        "Delicious Recipe Collections",
        "Cooking Tips & Tricks",
        "Exclusive Video Lessons",
        "Diet-Friendly Meal Ideas",
        "Seasonal & Festive Recipes",
        "Personalized Meal Plans",
        "Ingredient Substitutions",


    ];

    return (
        <div className="container">
            <div className="p-6 max-w-4xl mx-auto">
                <h1 className=" service-title text-3xl font-bold text-center mb-6 mt-5">Our Services</h1>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                        <li
                            key={index}
                            className="p-4 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition duration-300"
                        >
                            <span className="text-lg font-semibold">{service}</span>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
};
<ContactUs/>
export default Home;
