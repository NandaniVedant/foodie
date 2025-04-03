import { useState } from "react";
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
                    <h2 className="contactus-title text-center">Contact Us</h2>
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
                        <button type="submit" className="btn btn-danger mb-5">Send Message</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <h2 className="ourlocationtital  text-center">Our Location</h2>
                    <p>Find us at our office or reach us via the contact form.</p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086166!2d144.95373631590425!3d-37.81627977975181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1b1e0b1%3A0x5045675218ce6e0!2sMelbourne!5e0!3m2!1sen!2sau!4v1611705833484!5m2!1sen!2sau"
                        width="100%" height="300" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;