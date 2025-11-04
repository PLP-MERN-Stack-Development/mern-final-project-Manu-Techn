import React from 'react';
import './Features.css'; // Import CSS 

// Features component to display main app features
const Features = () => {
    // Array containing feature info (icon, title, and description)
    const features = [
        {
            icon: '😊',
            title: 'Mood Tracker',
            description: 'Track your daily emotions and patterns!'
        },
        {
            icon: '📓',
            title: 'Journal',
            description: 'Write your thoughts and reflections!'
        },
    ]

    return (
        // Features section wrapper
        <section className="features">
            <div className="container">
                {/* Section heading */}
                <h2>How Mind Ease Helps You...</h2>
                {/* Grid layout for feature cards */}
                <div className="features-grid">
                    {/* Loop through each feature and create a card */}
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            {/* Feature title */}
                            <h3>{feature.title}</h3>
                            {/* Feature description */}
                            <p>{feature.description}</p>
                            {/* Learn more button */}
                            <button className="feature-btn">Learn More</button>
                            </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Export the component so it can be used in other files
export default Features;