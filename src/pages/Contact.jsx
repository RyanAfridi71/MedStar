import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message. We will get back to you shortly.");
    };

    return (
        <div className="container section">
            <h1 className="text-center" style={{ marginBottom: '3rem' }}>Contact Us</h1>

            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                {/* Contact Info */}
                <div>
                    <h2 style={{ marginBottom: '1.5rem' }}>Get in Touch</h2>
                    <p style={{ marginBottom: '2rem' }}>
                        Have questions about our products or need a custom quote? Our team is here to help.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div className="flex item-center" style={{ gap: '1rem' }}>
                            <div style={{ padding: '1rem', backgroundColor: '#e0f2fe', borderRadius: '50%', color: 'var(--primary-color)' }}>
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem' }}>Phone</h4>
                                <p style={{ margin: 0, color: 'var(--text-dark)' }}>+92 300 5956747</p>
                            </div>
                        </div>

                        <div className="flex item-center" style={{ gap: '1rem' }}>
                            <div style={{ padding: '1rem', backgroundColor: '#e0f2fe', borderRadius: '50%', color: 'var(--primary-color)' }}>
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem' }}>Email</h4>
                                <p style={{ margin: 0, color: 'var(--text-dark)' }}>sales@medstar.com</p>
                            </div>
                        </div>

                        <div className="flex item-center" style={{ gap: '1rem' }}>
                            <div style={{ padding: '1rem', backgroundColor: '#e0f2fe', borderRadius: '50%', color: 'var(--primary-color)' }}>
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem' }}>Office</h4>
                                <p style={{ margin: 0, color: 'var(--text-dark)' }}>Main Umar Gul Rd, Manakrao, Peshawar, 25000</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
                            <input type="text" required style={{
                                width: '100%',
                                padding: '0.75rem',
                                border: '1px solid #cbd5e1',
                                borderRadius: 'var(--radius-md)',
                                outline: 'none'
                            }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                                onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                            <input type="email" required style={{
                                width: '100%',
                                padding: '0.75rem',
                                border: '1px solid #cbd5e1',
                                borderRadius: 'var(--radius-md)',
                                outline: 'none'
                            }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                                onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
                            <textarea rows="4" required style={{
                                width: '100%',
                                padding: '0.75rem',
                                border: '1px solid #cbd5e1',
                                borderRadius: 'var(--radius-md)',
                                fontFamily: 'inherit',
                                outline: 'none'
                            }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                                onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%', gap: '0.5rem' }}>
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;
