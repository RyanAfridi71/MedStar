import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle, Package } from 'lucide-react';

const Contact = () => {
    const [searchParams] = useSearchParams();

    // Read product inquiry params from URL
    const inquiryProduct = searchParams.get('product') || '';
    const inquiryBrand = searchParams.get('brand') || '';
    const inquiryCategory = searchParams.get('category') || '';
    const hasInquiry = Boolean(inquiryProduct);

    // Build pre-filled message when coming from a product card
    const buildInquiryMessage = () => {
        if (!hasInquiry) return '';
        return `Hello SkyMedical Team,

I am interested in inquiring about the following Japanese import machine:

  • Machine: ${inquiryProduct}
  • Brand: ${inquiryBrand}
  • Category: ${inquiryCategory}

Please send me the availability, specifications, and pricing details at your earliest convenience.

Thank you.`;
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: buildInquiryMessage()
    });
    const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
    const [errorMessage, setErrorMessage] = useState('');

    // Re-populate form if the user navigates to a different product
    useEffect(() => {
        setFormData(prev => ({
            ...prev,
            message: buildInquiryMessage()
        }));
        setStatus('idle');
        setErrorMessage('');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inquiryProduct, inquiryBrand, inquiryCategory]);

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

        // Build a clear subject line
        const subject = hasInquiry
            ? `Price Inquiry: ${inquiryProduct} (${inquiryBrand}) — from ${formData.name}`
            : `New SkyMedical Inquiry from ${formData.name}`;

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
                    subject,
                    from_name: 'SkyMedical Website',
                    // Extra structured fields sent to the inbox
                    ...(hasInquiry && {
                        product_name: inquiryProduct,
                        product_brand: inquiryBrand,
                        product_category: inquiryCategory
                    })
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

    const inputStyle = (isDisabled) => ({
        width: '100%',
        padding: '0.75rem 1rem',
        border: '1.5px solid #cbd5e1',
        borderRadius: 'var(--radius-md)',
        outline: 'none',
        fontFamily: 'inherit',
        fontSize: '0.95rem',
        backgroundColor: isDisabled ? '#f1f5f9' : 'white',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        color: 'var(--text-dark)'
    });

    return (
        <div className="container section">
            <h1 className="text-center" style={{ marginBottom: '0.75rem' }}>
                {hasInquiry ? 'Request a Price Quote' : 'Contact Us'}
            </h1>
            <p className="text-center" style={{ marginBottom: '3rem', maxWidth: '540px', margin: '0 auto 3rem' }}>
                {hasInquiry
                    ? 'Your selected machine has been pre-filled below. Complete the form to send your inquiry directly to our team.'
                    : 'Have questions about our products or need a custom quote? Our team is here to help.'
                }
            </p>

            {/* Product Inquiry Banner */}
            {hasInquiry && (
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    backgroundColor: '#f0fdfa',
                    border: '1.5px solid var(--primary-light)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1rem 1.5rem',
                    marginBottom: '2.5rem',
                    maxWidth: '700px',
                    margin: '0 auto 2.5rem'
                }}>
                    <Package size={28} style={{ color: 'var(--primary-color)', flexShrink: 0 }} />
                    <div>
                        <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Inquiring About
                        </p>
                        <p style={{ margin: 0, fontWeight: '700', color: 'var(--text-dark)', fontSize: '1.05rem' }}>
                            {inquiryProduct}
                        </p>
                        <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-light)' }}>
                            {inquiryBrand} &bull; {inquiryCategory}
                        </p>
                    </div>
                </div>
            )}

            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', maxWidth: '1000px', margin: '0 auto' }}>

                {/* Contact Info Panel */}
                <div>
                    <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Get in Touch</h2>
                    <p style={{ marginBottom: '2rem' }}>
                        Our team is available to assist hospitals, clinics, and procurement officers across Pakistan with Japanese import medical equipment.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div className="flex" style={{ gap: '1rem', alignItems: 'flex-start' }}>
                            <div style={{ padding: '0.85rem', backgroundColor: '#e0f2fe', borderRadius: '50%', color: 'var(--primary-color)', flexShrink: 0 }}>
                                <Phone size={20} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Phone</h4>
                                <p style={{ margin: 0, color: 'var(--text-dark)', fontWeight: '500' }}>+92 300 5956747</p>
                            </div>
                        </div>

                        <div className="flex" style={{ gap: '1rem', alignItems: 'flex-start' }}>
                            <div style={{ padding: '0.85rem', backgroundColor: '#e0f2fe', borderRadius: '50%', color: 'var(--primary-color)', flexShrink: 0 }}>
                                <Mail size={20} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Email</h4>
                                <p style={{ margin: 0, color: 'var(--text-dark)', fontWeight: '500' }}>info@skymedical.store</p>
                            </div>
                        </div>

                        <div className="flex" style={{ gap: '1rem', alignItems: 'flex-start' }}>
                            <div style={{ padding: '0.85rem', backgroundColor: '#e0f2fe', borderRadius: '50%', color: 'var(--primary-color)', flexShrink: 0 }}>
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Office</h4>
                                <p style={{ margin: 0, color: 'var(--text-dark)' }}>Main Umar Gul Rd, Manakrao,<br />Peshawar, 25000</p>
                            </div>
                        </div>
                    </div>

                    {/* Why SkyMedical Trust Block */}
                    <div style={{
                        marginTop: '2.5rem',
                        padding: '1.25rem',
                        backgroundColor: '#f8fafc',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid #e2e8f0'
                    }}>
                        <p style={{ fontWeight: '700', color: 'var(--text-dark)', marginBottom: '0.75rem', fontSize: '0.9rem' }}>
                            Why buy from SkyMedical?
                        </p>
                        {[
                            '🇯🇵 Direct Japan import machines',
                            '✅ Verified working condition',
                            '🚚 Delivery across Pakistan',
                            '🔧 After-sales technical support',
                            '🏥 Trusted by hospitals & clinics'
                        ].map((item, i) => (
                            <p key={i} style={{ margin: '0.3rem 0', fontSize: '0.85rem', color: 'var(--text-light)' }}>{item}</p>
                        ))}
                    </div>
                </div>

                {/* Contact Form */}
                <div style={{
                    backgroundColor: 'white',
                    padding: '2rem',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-md)',
                    border: '1px solid #e2e8f0'
                }}>
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

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <div>
                            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>
                                Full Name <span style={{ color: '#ef4444' }}>*</span>
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                placeholder="e.g. Dr. Ahmed Khan"
                                disabled={status === 'submitting'}
                                value={formData.name}
                                onChange={handleChange}
                                style={inputStyle(status === 'submitting')}
                                onFocus={(e) => {
                                    e.target.style.borderColor = 'var(--primary-color)';
                                    e.target.style.boxShadow = '0 0 0 3px rgba(15, 118, 110, 0.1)';
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = '#cbd5e1';
                                    e.target.style.boxShadow = 'none';
                                }}
                            />
                        </div>

                        <div>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>
                                Email Address <span style={{ color: '#ef4444' }}>*</span>
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="e.g. doctor@hospital.pk"
                                disabled={status === 'submitting'}
                                value={formData.email}
                                onChange={handleChange}
                                style={inputStyle(status === 'submitting')}
                                onFocus={(e) => {
                                    e.target.style.borderColor = 'var(--primary-color)';
                                    e.target.style.boxShadow = '0 0 0 3px rgba(15, 118, 110, 0.1)';
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = '#cbd5e1';
                                    e.target.style.boxShadow = 'none';
                                }}
                            />
                        </div>

                        <div>
                            <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>
                                Message <span style={{ color: '#ef4444' }}>*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="7"
                                required
                                disabled={status === 'submitting'}
                                value={formData.message}
                                onChange={handleChange}
                                style={{ ...inputStyle(status === 'submitting'), resize: 'vertical' }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = 'var(--primary-color)';
                                    e.target.style.boxShadow = '0 0 0 3px rgba(15, 118, 110, 0.1)';
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = '#cbd5e1';
                                    e.target.style.boxShadow = 'none';
                                }}
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
                                padding: '0.875rem',
                                fontSize: '1rem',
                                fontWeight: '700',
                                opacity: status === 'submitting' ? 0.7 : 1,
                                cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                                letterSpacing: '0.02em'
                            }}
                        >
                            {status === 'submitting' ? (
                                <>
                                    Sending...
                                    <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
                                </>
                            ) : (
                                <>
                                    Send Inquiry <Send size={18} />
                                </>
                            )}
                        </button>

                        <p style={{ fontSize: '0.78rem', color: 'var(--text-light)', textAlign: 'center', margin: 0 }}>
                            We typically respond within 24 hours on business days.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
