import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import '../styles/global.css';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#f1f5f9', paddingTop: '4rem', paddingBottom: '2rem', marginTop: 'auto' }}>
            <div className="container">
                <div className="grid footer-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

                    {/* Brand Column */}
                    <div>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>SkyMedical.</h3>
                        <p style={{ maxWidth: '300px' }}>
                            Providing top-tier used & refurbished medical equipment imported directly from Japan to healthcare professionals and hospitals across Pakistan. Quality you can trust.
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
                            <li>
                                <a
                                    href="https://wa.me/923469197496"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-light)', textDecoration: 'none', transition: 'color 0.2s' }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = '#25D366'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-light)'}
                                >
                                    <Phone size={18} /> +92 346 9197496
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/923469197496"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        backgroundColor: '#25D366',
                                        color: 'white',
                                        padding: '0.4rem 0.8rem',
                                        borderRadius: 'var(--radius-md)',
                                        fontWeight: '600',
                                        fontSize: '0.85rem',
                                        textDecoration: 'none',
                                        marginTop: '0.25rem',
                                        boxShadow: '0 2px 5px rgba(37, 211, 102, 0.3)'
                                    }}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.707 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                    </svg>
                                    WhatsApp Us
                                </a>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-light)' }}>
                                <Mail size={18} /> info@skymedical.store
                            </li>
                        </ul>
                    </div>

                </div>

                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '2rem', textAlign: 'center', color: '#94a3b8', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} SkyMedical Equipment. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
