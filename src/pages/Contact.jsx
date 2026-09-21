import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle, Package } from 'lucide-react';
import SEO from '../components/SEO';

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
        phone: '',
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

        const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'a6a810ac-b6eb-4ff2-8604-eb1080b5f233';
        if (!accessKey) {
            setStatus('error');
            setErrorMessage('Web3Forms Access Key is missing.');
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
                    phone: formData.phone,
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
                setFormData({ name: '', email: '', phone: '', message: '' });
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
            <SEO
                title={hasInquiry ? `Price Inquiry: ${inquiryProduct} (${inquiryBrand}) | SkyMedical` : 'Contact SkyMedical Peshawar | Price Inquiries & WhatsApp'}
                description={hasInquiry
                    ? `Request price quote, probe availability, and delivery details for ${inquiryProduct} (${inquiryBrand}) from SkyMedical Peshawar.`
                    : 'Get in touch with SkyMedical in Peshawar, Pakistan for certified refurbished Japanese ultrasound machines, CR systems, and healthcare equipment. Phone: +92 346 9197496.'
                }
                canonical="https://skymedical.store/contact"
            />
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

            <div className="grid contact-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', maxWidth: '1000px', margin: '0 auto' }}>

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
                                <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Phone & WhatsApp</h4>
                                <a
                                    href="https://wa.me/923469197496"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ margin: 0, color: 'var(--primary-color)', fontWeight: '600', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                                >
                                    +92 346 9197496
                                </a>
                            </div>
                        </div>

                        {/* Direct WhatsApp Chat Action Button */}
                        <a
                            href="https://wa.me/923469197496"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.65rem',
                                backgroundColor: '#25D366',
                                color: 'white',
                                padding: '0.75rem 1.25rem',
                                borderRadius: 'var(--radius-md)',
                                fontWeight: '700',
                                textDecoration: 'none',
                                boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)',
                                transition: 'transform 0.2s, box-shadow 0.2s',
                                width: '100%',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 6px 16px rgba(37, 211, 102, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.3)';
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.707 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                            Contact via WhatsApp
                        </a>

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
                            <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>
                                Contact / WhatsApp Number <span style={{ color: '#ef4444' }}>*</span>
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                required
                                placeholder="e.g. +92 346 9197496"
                                disabled={status === 'submitting'}
                                value={formData.phone}
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
