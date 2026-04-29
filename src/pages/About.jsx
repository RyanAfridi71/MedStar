const About = () => {
    return (
        <div className="container section">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>About MedStar</h1>
                <p style={{ fontSize: '1.2rem', textAlign: 'center', marginBottom: '4rem', color: 'var(--text-light)' }}>
                    Dedicated to improving patient care through innovative medical technology.
                </p>

                <img
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000"
                    alt="Medical Team"
                    style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: 'var(--radius-lg)', marginBottom: '4rem' }}
                />

                <h2 style={{ marginBottom: '1rem' }}>Our Mission</h2>
                <p style={{ marginBottom: '2rem' }}>
                    At MedStar, our mission is to provide healthcare professionals with the highest quality equipment they need to save lives and improve patient outcomes. We believe that better tools lead to better care, and we are committed to sourcing the best medical technologies from around the globe.
                </p>

                <h2 style={{ marginBottom: '1rem' }}>Our History</h2>
                <p style={{ marginBottom: '2rem' }}>
                    Founded in 2010, MedStar began as a small family-owned business supplying local clinics. Over the past decade, we have grown into a leading distributor of medical equipment, serving major hospitals and healthcare networks across the country.
                </p>
            </div>
        </div>
    );
};

export default About;
