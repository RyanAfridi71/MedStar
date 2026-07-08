import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import '../styles/global.css';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#f1f5f9', paddingTop: '4rem', paddingBottom: '2rem', marginTop: 'auto' }}>
            <div className="container">
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

                    {/* Brand Column */}
                    <div>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>MedStar.</h3>
                        <p style={{ maxWidth: '300px' }}>
                            Providing top-tier medical equipment to healthcare professionals and individuals. Quality you can trust.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Quick Links</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><a href="/" style={{ color: 'var(--text-light)' }}>Home</a></li>
                            <li><a href="/products" style={{ color: 'var(--text-light)' }}>Products</a></li>
                            <li><a href="/about" style={{ color: 'var(--text-light)' }}>About Us</a></li>
                            <li><a href="/contact" style={{ color: 'var(--text-light)' }}>Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Contact Us</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-light)' }}>
                                <MapPin size={18} /> Main Umar Gul Rd, Manakrao, Peshawar, 25000
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-light)' }}>
                                <Phone size={18} /> +92 300 5956747
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-light)' }}>
                                <Mail size={18} /> ms85marketing@gmail.com
                            </li>
                        </ul>
                    </div>

                </div>

                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '2rem', textAlign: 'center', color: '#94a3b8', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} MedStar Equipment. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
