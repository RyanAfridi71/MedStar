import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
        if (!accessKey) {
            setStatus('error');
            setErrorMessage('Web3Forms Access Key is missing. Please configure it in your .env.local file as VITE_WEB3FORMS_ACCESS_KEY.');
            return;
        }

        setStatus('submitting');
        setErrorMessage('');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `New MedStar Inquiry from ${formData.name}`,
                    from_name: 'MedStar Website'
                })
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
                setErrorMessage(data.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage('Failed to send message. Please check your internet connection and try again.');
            console.error('Submission error:', error);
        }
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
                                <p style={{ margin: 0, color: 'var(--text-dark)' }}>ms85marketing@gmail.com</p>
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
                    {status === 'success' && (
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            backgroundColor: '#ecfdf5',
                            border: '1px solid #10b981',
                            color: '#065f46',
                            padding: '1rem',
                            borderRadius: 'var(--radius-md)',
                            marginBottom: '1.5rem',
                            animation: 'fadeIn 0.3s ease'
                        }}>
                            <CheckCircle2 size={24} style={{ flexShrink: 0, color: '#10b981' }} />
                            <div>
                                <strong style={{ display: 'block' }}>Thank you!</strong>
                                <span style={{ fontSize: '0.9rem' }}>Your inquiry was sent successfully. We will get back to you shortly.</span>
                            </div>
                        </div>
                    )}

                    {status === 'error' && (
                        <div style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.75rem',
                            backgroundColor: '#fef2f2',
                            border: '1px solid #ef4444',
                            color: '#991b1b',
                            padding: '1rem',
                            borderRadius: 'var(--radius-md)',
                            marginBottom: '1.5rem',
                            animation: 'fadeIn 0.3s ease'
                        }}>
                            <AlertCircle size={24} style={{ flexShrink: 0, color: '#ef4444', marginTop: '0.1rem' }} />
                            <div>
                                <strong style={{ display: 'block' }}>Submission Failed</strong>
                                <span style={{ fontSize: '0.9rem' }}>{errorMessage}</span>
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                disabled={status === 'submitting'}
                                value={formData.name}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    border: '1px solid #cbd5e1',
                                    borderRadius: 'var(--radius-md)',
                                    outline: 'none',
                                    backgroundColor: status === 'submitting' ? '#f1f5f9' : 'white',
                                    transition: 'border-color 0.2s'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                                onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                            />
                        </div>

                        <div>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                disabled={status === 'submitting'}
                                value={formData.email}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    border: '1px solid #cbd5e1',
                                    borderRadius: 'var(--radius-md)',
                                    outline: 'none',
                                    backgroundColor: status === 'submitting' ? '#f1f5f9' : 'white',
                                    transition: 'border-color 0.2s'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                                onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                            />
                        </div>

                        <div>
                            <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                required
                                disabled={status === 'submitting'}
                                value={formData.message}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    border: '1px solid #cbd5e1',
                                    borderRadius: 'var(--radius-md)',
                                    fontFamily: 'inherit',
                                    outline: 'none',
                                    backgroundColor: status === 'submitting' ? '#f1f5f9' : 'white',
                                    transition: 'border-color 0.2s'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                                onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={status === 'submitting'}
                            style={{
                                width: '100%',
                                gap: '0.5rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                opacity: status === 'submitting' ? 0.7 : 1,
                                cursor: status === 'submitting' ? 'not-allowed' : 'pointer'
                            }}
                        >
                            {status === 'submitting' ? (
                                <>
                                    Sending...
                                    <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
                                </>
                            ) : (
                                <>
                                    Send Message <Send size={18} />
                                </>
                            )}
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;

