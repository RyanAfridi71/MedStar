import { Plus } from 'lucide-react';

const ProductCard = ({ product }) => {
    return (
        <div style={{
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
            <div style={{ marginBottom: '1rem' }}>
                <span style={{
                    backgroundColor: 'var(--bg-light)',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '1rem',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    color: 'var(--primary-color)',
                    display: 'inline-block'
                }}>
                    {product.category}
                </span>
            </div>

            <div style={{ flex: 1 }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '0.25rem' }}>
                    {product.brand}
                </p>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-dark)' }}>
                    {product.name}
                </h3>
            </div>

            <div style={{ marginTop: '1.5rem', borderTop: '1px solid #e2e8f0', paddingTop: '1rem' }}>
                <span style={{
                    fontSize: '0.9rem',
                    color: 'var(--primary-dark)',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    Contact for Price
                </span>
            </div>
        </div>
    );
};

export default ProductCard;
