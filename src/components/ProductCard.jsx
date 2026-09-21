import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';

const ProductCard = ({ product }) => {
    const productSlug = product.slug || product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    const categorySlug = product.categorySlug || 'ultrasound';

    // WhatsApp quick message
    const waText = encodeURIComponent(
        `Assalamualaikum SkyMedical, I am interested in the ${product.name} (${product.brand}) listed on your site. Please share current price, probe configuration, and availability.`
    );
    const waUrl = `https://wa.me/923469197496?text=${waText}`;

    return (
        <div
            style={{
                backgroundColor: 'white',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
                transition: 'var(--transition)',
                border: '1px solid #e2e8f0',
                display: 'flex',
                flexDirection: 'column',
                padding: '1.5rem',
                height: '100%'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            }}
        >
            {/* Category Badge Linking to Category Hub */}
            <div style={{ marginBottom: '0.85rem' }}>
                <Link
                    to={`/category/${categorySlug}`}
                    style={{
                        backgroundColor: 'var(--bg-light, #f0fdfa)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '1rem',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        color: 'var(--primary-color)',
                        display: 'inline-block',
                        letterSpacing: '0.02em',
                        border: '1px solid var(--primary-light)',
                        textDecoration: 'none',
                        transition: 'background 0.2s'
                    }}
                >
                    {product.category}
                </Link>
            </div>

            {/* Brand & Name (with direct SEO link) */}
            <div style={{ flex: 1 }}>
                <p style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-light)',
                    marginBottom: '0.25rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: '700'
                }}>
                    {product.brand}
                </p>
                <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    lineHeight: '1.35',
                    marginBottom: '0.5rem'
                }}>
                    <Link
                        to={`/products/${productSlug}`}
                        style={{
                            color: 'var(--text-dark)',
                            textDecoration: 'none',
                            transition: 'color 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-color)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-dark)'}
                    >
                        {product.name}
                    </Link>
                </h3>
                <p style={{
                    fontSize: '0.8rem',
                    color: '#0d9488',
                    fontWeight: '500',
                    marginTop: '0.25rem',
                    marginBottom: 0
                }}>
                    Japan Direct Import &bull; Biomedical Tested
                </p>
            </div>

            {/* Action Buttons: View Details + Quick WhatsApp */}
            <div style={{ marginTop: '1.25rem', borderTop: '1px solid #f1f5f9', paddingTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                <Link
                    to={`/products/${productSlug}`}
                    style={{
                        flex: 1,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.4rem',
                        padding: '0.6rem 0.8rem',
                        backgroundColor: 'var(--primary-color)',
                        color: 'white',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        transition: 'var(--transition)',
                        textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--primary-dark)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--primary-color)';
                    }}
                >
                    View Specs <ArrowRight size={14} />
                </Link>

                <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Inquire about ${product.name} on WhatsApp`}
                    title="Quick WhatsApp Inquiry"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0.6rem 0.8rem',
                        backgroundColor: '#25D366',
                        color: 'white',
                        borderRadius: 'var(--radius-md)',
                        transition: 'transform 0.2s, background 0.2s',
                        textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    <MessageCircle size={16} />
                </a>
            </div>
        </div>
    );
};

export default ProductCard;
