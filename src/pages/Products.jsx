import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Dynamic categories from products
    const uniqueCategories = [...new Set(products.map(p => p.category))].sort();
    const categories = ["All", ...uniqueCategories];

    const filteredProducts = selectedCategory === "All"
        ? products
        : products.filter(p => p.category === selectedCategory);

    return (
        <div className="container section">
            <h1 className="text-center" style={{ marginBottom: '3rem' }}>Medical Equipment</h1>

            {/* Category Filter */}
            <div className="flex justify-center" style={{ gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`btn ${selectedCategory === cat ? 'btn-primary' : 'btn-secondary'}`}
                        style={{ minWidth: '100px' }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="grid" style={{
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '2rem'
            }}>
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <p className="text-center" style={{ marginTop: '2rem' }}>No products found in this category.</p>
            )}
        </div>
    );
};

export default Products;
