const About = () => {
    return (
        <div className="container about-container">
            <div className="row align-items-center">
                {/* Left Side - Image */}
                <div className="col-md-6">
                    <img src="/Img/about.jpg" alt="About Us" className="about-img img-fluid" />
                </div>

                {/* Right Side - Content */}
                <div className="col-md-6">
                    <h2 className="about-title">About Us</h2>
                    <p className="about-text">
                        Welcome to <strong>Tasty Bites</strong>! We are passionate about bringing you the best recipes, 
                        cooking tips, and meal ideas to make your kitchen experience amazing.
                    </p>
                    <p className="about-text">
                        Our mission is to inspire food lovers and home cooks by sharing healthy, tasty, 
                        and innovative recipes. We believe that food connects people, and we’re here to make 
                        that connection even stronger.
                    </p>
                    <p className="about-text">
                        Join us on this delicious journey and explore a world of flavors!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
