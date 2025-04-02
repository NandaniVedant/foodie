import { motion, AnimatePresence, color } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import About from "./About";


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

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
    };

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="contactus-title">Contact Us</h2>
                    <p>If you have any questions, feel free to reach out to us.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Message</label>
                            <textarea className="form-control" name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Your message..." required></textarea>
                        </div>
                        <button type="submit" className="btn btn-danger">Send Message</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <h2 className="ourlocationtital">Our Location</h2>
                    <p>Find us at our office or reach us via the contact form.</p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086166!2d144.95373631590425!3d-37.81627977975181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1b1e0b1%3A0x5045675218ce6e0!2sMelbourne!5e0!3m2!1sen!2sau!4v1611705833484!5m2!1sen!2sau"
                        width="100%" height="300" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
                </div>
            </div>
        </div>
    );
};


export default Home;
