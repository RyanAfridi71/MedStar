import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, Clock } from 'lucide-react';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section style={{
                background: 'linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)',
                padding: '6rem 0',
                marginBottom: '4rem'
            }}>
                <div className="container grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <span style={{
                            display: 'inline-block',
                            padding: '0.5rem 1rem',
                            backgroundColor: 'rgba(20, 184, 166, 0.1)',
                            color: 'var(--primary-color)',
                            borderRadius: '2rem',
                            fontWeight: '600',
                            fontSize: '0.9rem',
                            marginBottom: '1.5rem'
                        }}>
                            Premier Medical Equipment
                        </span>
                        <h1 style={{ marginBottom: '1.5rem', lineHeight: '1.1' }}>
                            Equipping Tomorrow's <span style={{ color: 'var(--primary-color)' }}>Healthcare</span> Today.
                        </h1>
                        <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '500px' }}>
                            Top-quality medical supplies for hospitals, clinics, and home care. Trusted by professionals worldwide.
                        </p>
                        <div className="flex" style={{ gap: '1rem' }}>
                            <Link to="/products" className="btn btn-primary">
                                Shop Equipment <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                            </Link>
                            <Link to="/contact" className="btn btn-secondary">
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                    <div style={{ position: 'relative' }}>
                        {/* Decorative blob or circle could go here */}
                        <img
                            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000"
                            alt="Medical Equipment"
                            style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}
                        />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section container">
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    <div className="text-center" style={{ padding: '2rem', backgroundColor: 'white', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                        <div style={{ display: 'inline-flex', padding: '1rem', backgroundColor: '#ecfdf5', borderRadius: '50%', color: 'var(--primary-color)', marginBottom: '1rem' }}>
                            <ShieldCheck size={32} />
                        </div>
                        <h3>Certified Quality</h3>
                        <p>ISO certified equipment meeting international standards.</p>
                    </div>
                    <div className="text-center" style={{ padding: '2rem', backgroundColor: 'white', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                        <div style={{ display: 'inline-flex', padding: '1rem', backgroundColor: '#eff6ff', borderRadius: '50%', color: '#3b82f6', marginBottom: '1rem' }}>
                            <Truck size={32} />
                        </div>
                        <h3>Fast Delivery</h3>
                        <p>Same-day shipping for orders placed before 2 PM.</p>
                    </div>
                    <div className="text-center" style={{ padding: '2rem', backgroundColor: 'white', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                        <div style={{ display: 'inline-flex', padding: '1rem', backgroundColor: '#fff7ed', borderRadius: '50%', color: '#f97316', marginBottom: '1rem' }}>
                            <Clock size={32} />
                        </div>
                        <h3>24/7 Support</h3>
                        <p>Expert technical support available round the clock.</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
