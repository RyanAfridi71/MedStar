const About = () => {
    return (
        <div className="container section">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>About SkyMedical</h1>
                <p style={{ fontSize: '1.2rem', textAlign: 'center', marginBottom: '4rem', color: 'var(--text-light)' }}>
                    Pakistan's trusted provider of certified used & refurbished Japanese medical equipment.
                </p>

                <img
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000"
                    alt="Medical Team"
                    style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: 'var(--radius-lg)', marginBottom: '4rem' }}
                />

                <h2 style={{ marginBottom: '1rem' }}>Our Mission</h2>
                <p style={{ marginBottom: '2rem' }}>
                    At SkyMedical, our mission is to empower healthcare providers across Pakistan with reliable, certified used and refurbished medical equipment directly imported from Japan. We make high-performance diagnostic tools—such as ultrasound machines, CR systems, and anesthesia units—accessible and affordable without compromising on quality or accuracy.
                </p>

                <h2 style={{ marginBottom: '1rem' }}>Our Story</h2>
                <p style={{ marginBottom: '2rem' }}>
                    Founded in 2010 in Peshawar, SkyMedical began with a vision to bridge the gap in healthcare infrastructure by providing thoroughly tested, pre-owned medical machinery. Over the past decade, we have grown into a leading distributor, serving hundreds of clinics, diagnostic centers, and hospitals nationwide.
                </p>
            </div>
        </div>
    );
};

export default About;
