import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Filterrecipi from "./Filterrecipi";
import Services from "./Services";
import ContactUs from "./ContactUs";

const images = [
    {
        src: "/Img/slider.jpg",
        title: "Welcome to Foodie",
        description: "Explore delicious recipes and cook amazing dishes at home."
    },
    {
        src: "/Img/slider.jpg",
        title: "Healthy & Tasty Recipes",
        description: "Discover nutritious and mouth-watering meals for every occasion."
    },
    {
        src: "/Img/slider.jpg",
        title: "Cook Like a Pro",
        description: "Step-by-step guides and expert cooking tips to elevate your skills."
    }
];

const Home = () => {
    const [index, setIndex] = useState(0);

    // Refs for scrolling
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const recipesRef = useRef(null);
    const servicesRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (section) => {
        if (section === 'home' && homeRef.current) homeRef.current.scrollIntoView({ behavior: "smooth" });
        if (section === 'about' && aboutRef.current) aboutRef.current.scrollIntoView({ behavior: "smooth" });
        if (section === 'recipes' && recipesRef.current) recipesRef.current.scrollIntoView({ behavior: "smooth" });
        if (section === 'services' && servicesRef.current) servicesRef.current.scrollIntoView({ behavior: "smooth" });
        if (section === 'contact' && contactRef.current) contactRef.current.scrollIntoView({ behavior: "smooth" });
    };

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <>
            <Navbar scrollToSection={scrollToSection} />

            {/* Hero Section / Slider */}
            <div ref={homeRef} className="home-container" style={{ backgroundImage: `url(${images[index].src})` }}>
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

            {/* About Section */}
            <div ref={aboutRef}>
                <About />
            </div>

            {/* Recipes / Categories Section */}
            <div ref={recipesRef}>
                <Filterrecipi />
            </div>

            {/* Services Section */}
            <div ref={servicesRef}>
                <Services />
            </div>

            {/* Contact Us Section */}
            <div ref={contactRef}>
                <ContactUs />
            </div>
        </>
    );
};

export default Home;
