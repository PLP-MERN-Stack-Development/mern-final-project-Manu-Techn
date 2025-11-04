// Import React and CSS for Hero component
import React from 'react';
import './Hero.css';

// Hero component (displays the banner section)
const Hero = () => {
    return (
        // Hero section with background styling
        <section className="hero">
            <div className="container"> {/* Container for layout and spacing */}
                <div className="hero-content">
                    {/* Main heading */}
                    <h1>Find Your Inner Peace.</h1>
                    {/* Description paragraph */}
                    <p>Simple tools for mental wellness. Track your mood, journal your thoughts, and practice gratitude daily!</p>
                    {/*Call to action button */}
                    <button className="btn btn-primary">Get Started</button>
                </div>
                <div className="hero-image">
                    {/* Main hero image */ }
                    <img src="/images/It-is-well.jpg" alt="Encouragement" className="hero-img"/>
                        
                </div>
            </div>
        </section>
    );
};
// Export the component
export default Hero;