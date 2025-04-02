import { useState, useEffect, useRef } from "react";

const Footer = () => {
    const scrollButtonRef = useRef(null);
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScroll(window.scrollY > 300);
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="footer">
            <div className="container text-center">
                <p>&copy; {new Date().getFullYear()} Foodie . All rights reserved.</p>
            </div>
            {showScroll && (
                <button
                    ref={scrollButtonRef}
                    onClick={scrollToTop}
                    className="btn btn-danger scroll-to-top"
                    style={{
                        position: "fixed",
                        bottom: "20px",
                        right: "20px",
                        zIndex: 1000,
                        borderRadius: "50%",
                        padding: "10px 15px",
                        fontSize: "18px",
                    }}
                >
                    &#8679;
                </button>
            )}
        </footer>
    );
};

export default Footer;
