import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const ProductCard = ({ product }) => {
    // Build the inquiry URL with encoded query params
    const inquiryParams = new URLSearchParams({
        product: product.name,
        brand: product.brand,
        category: product.category
    }).toString();

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
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            }}
        >
            {/* Category Badge */}
            <div style={{ marginBottom: '1rem' }}>
                <span style={{
                    backgroundColor: 'var(--bg-light, #f0fdfa)',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '1rem',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    color: 'var(--primary-color)',
                    display: 'inline-block',
                    letterSpacing: '0.02em',
                    border: '1px solid var(--primary-light)',
                }}>
                    {product.category}
                </span>
            </div>

            {/* Brand & Name */}
            <div style={{ flex: 1 }}>
                <p style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-light)',
                    marginBottom: '0.25rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: '600'
                }}>
                    {product.brand}
                </p>
                <h3 style={{
                    fontSize: '1.05rem',
                    fontWeight: '700',
                    color: 'var(--text-dark)',
                    lineHeight: '1.4'
                }}>
                    {product.name}
                </h3>
                <p style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-light)',
                    marginTop: '0.5rem',
                    marginBottom: 0
                }}>
                    Japan Import &bull; Direct Stock
                </p>
            </div>

            {/* Clickable "Contact for Price" Button */}
            <div style={{ marginTop: '1.25rem', borderTop: '1px solid #e2e8f0', paddingTop: '1rem' }}>
                <Link
                    to={`/contact?${inquiryParams}`}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.45rem',
                        width: '100%',
                        padding: '0.6rem 1rem',
                        backgroundColor: 'var(--primary-color)',
                        color: 'white',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        transition: 'var(--transition)',
                        textDecoration: 'none',
                        letterSpacing: '0.01em',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--primary-dark)';
                        e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--primary-color)';
                        e.currentTarget.style.transform = 'scale(1)';
                    }}
                >
                    <Mail size={15} />
                    Contact for Price
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
