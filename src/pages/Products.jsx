import { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Search, X } from 'lucide-react';

const Products = () => {
    const [urlParams] = useSearchParams();
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState(urlParams.get('search') || '');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [activeSuggestion, setActiveSuggestion] = useState(-1);
    const searchRef = useRef(null);
    const suggestionsRef = useRef(null);

    // Dynamic categories from products
    const uniqueCategories = [...new Set(products.map(p => p.category))].sort();
    const categories = ['All', ...uniqueCategories];

    // Live autocomplete suggestions (max 8)
    const suggestions = searchQuery.trim().length >= 1
        ? products
            .filter(p =>
                p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.brand.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .slice(0, 8)
        : [];

    // Filtered product grid (search + category combined)
    const filteredProducts = products.filter(p => {
        const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
        const matchesSearch = searchQuery.trim() === '' ||
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Close suggestions when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                searchRef.current && !searchRef.current.contains(e.target) &&
                suggestionsRef.current && !suggestionsRef.current.contains(e.target)
            ) {
                setShowSuggestions(false);
                setActiveSuggestion(-1);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setShowSuggestions(true);
        setActiveSuggestion(-1);
    };

    const handleSuggestionClick = (product) => {
        setSearchQuery(product.name);
        setShowSuggestions(false);
        setActiveSuggestion(-1);
        setSelectedCategory('All');
    };

    const clearSearch = () => {
        setSearchQuery('');
        setShowSuggestions(false);
        setActiveSuggestion(-1);
        searchRef.current?.focus();
    };

    // Keyboard navigation through suggestions
    const handleKeyDown = (e) => {
        if (!showSuggestions || suggestions.length === 0) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActiveSuggestion(prev => Math.min(prev + 1, suggestions.length - 1));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActiveSuggestion(prev => Math.max(prev - 1, -1));
        } else if (e.key === 'Enter' && activeSuggestion >= 0) {
            e.preventDefault();
            handleSuggestionClick(suggestions[activeSuggestion]);
        } else if (e.key === 'Escape') {
            setShowSuggestions(false);
            setActiveSuggestion(-1);
        }
    };

    // Highlight matching text in suggestions
    const highlightMatch = (text, query) => {
        if (!query.trim()) return text;
        const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        const parts = text.split(regex);
        return parts.map((part, i) =>
            regex.test(part)
                ? <mark key={i} style={{ backgroundColor: '#ccfbf1', color: 'var(--primary-dark)', borderRadius: '2px', padding: '0 1px' }}>{part}</mark>
                : part
        );
    };

    return (
        <div className="container section">
            <h1 className="text-center" style={{ marginBottom: '0.75rem' }}>Medical Equipment</h1>
            <p className="text-center" style={{ maxWidth: '500px', margin: '0 auto 2.5rem', color: 'var(--text-light)' }}>
                Japan import machines — verified working condition, available across Pakistan
            </p>

            {/* ── Search Bar ── */}
            <div style={{ maxWidth: '600px', margin: '0 auto 2.5rem', position: 'relative' }}>
                <div
                    ref={searchRef}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        backgroundColor: 'white',
                        border: `2px solid ${showSuggestions && suggestions.length > 0 ? 'var(--primary-color)' : '#e2e8f0'}`,
                        borderRadius: showSuggestions && suggestions.length > 0 ? 'var(--radius-md) var(--radius-md) 0 0' : 'var(--radius-md)',
                        padding: '0.75rem 1rem',
                        boxShadow: showSuggestions && suggestions.length > 0
                            ? '0 0 0 3px rgba(15, 118, 110, 0.1)'
                            : 'var(--shadow-sm)',
                        transition: 'border-color 0.2s, box-shadow 0.2s',
                    }}
                >
                    <Search size={20} style={{ color: 'var(--primary-color)', flexShrink: 0 }} />
                    <input
                        type="text"
                        placeholder="Search by machine name or brand… e.g. Toshiba Aplio, GE LOGIQ"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        onKeyDown={handleKeyDown}
                        onFocus={() => searchQuery && setShowSuggestions(true)}
                        style={{
                            flex: 1,
                            border: 'none',
                            outline: 'none',
                            fontSize: '0.95rem',
                            color: 'var(--text-dark)',
                            backgroundColor: 'transparent',
                            fontFamily: 'inherit',
                        }}
                        aria-label="Search medical equipment"
                        aria-autocomplete="list"
                        aria-expanded={showSuggestions && suggestions.length > 0}
                        autoComplete="off"
                    />
                    {searchQuery && (
                        <button
                            onClick={clearSearch}
                            aria-label="Clear search"
                            style={{
                                background: 'none',
                                border: 'none',
                                padding: '2px',
                                cursor: 'pointer',
                                color: 'var(--text-light)',
                                display: 'flex',
                                alignItems: 'center',
                                flexShrink: 0,
                                transition: 'color 0.2s',
                            }}
                            onMouseEnter={e => e.currentTarget.style.color = 'var(--text-dark)'}
                            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-light)'}
                        >
                            <X size={18} />
                        </button>
                    )}
                </div>

                {/* ── Suggestions Dropdown ── */}
                {showSuggestions && suggestions.length > 0 && (
                    <div
                        ref={suggestionsRef}
                        role="listbox"
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            backgroundColor: 'white',
                            border: '2px solid var(--primary-color)',
                            borderTop: '1px solid #e2e8f0',
                            borderRadius: '0 0 var(--radius-md) var(--radius-md)',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                            zIndex: 999,
                            overflow: 'hidden',
                        }}
                    >
                        {suggestions.map((product, index) => (
                            <div
                                key={product.id}
                                role="option"
                                aria-selected={index === activeSuggestion}
                                onClick={() => handleSuggestionClick(product)}
                                style={{
                                    padding: '0.75rem 1rem',
                                    cursor: 'pointer',
                                    backgroundColor: index === activeSuggestion ? '#f0fdfa' : 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    borderBottom: index < suggestions.length - 1 ? '1px solid #f1f5f9' : 'none',
                                    transition: 'background-color 0.15s',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.backgroundColor = '#f0fdfa';
                                    setActiveSuggestion(index);
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.backgroundColor = index === activeSuggestion ? '#f0fdfa' : 'white';
                                }}
                            >
                                <Search size={14} style={{ color: 'var(--primary-light)', flexShrink: 0 }} />
                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <div style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-dark)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                        {highlightMatch(product.name, searchQuery)}
                                    </div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '1px' }}>
                                        {product.brand} · {product.category}
                                    </div>
                                </div>
                                <span style={{
                                    fontSize: '0.7rem',
                                    padding: '0.2rem 0.5rem',
                                    backgroundColor: '#f0fdfa',
                                    color: 'var(--primary-color)',
                                    borderRadius: '1rem',
                                    border: '1px solid var(--primary-light)',
                                    fontWeight: '600',
                                    flexShrink: 0,
                                    whiteSpace: 'nowrap',
                                }}>
                                    {product.category}
                                </span>
                            </div>
                        ))}

                        {/* Footer hint */}
                        <div style={{
                            padding: '0.5rem 1rem',
                            backgroundColor: '#f8fafc',
                            fontSize: '0.72rem',
                            color: 'var(--text-light)',
                            display: 'flex',
                            gap: '1rem',
                        }}>
                            <span>↑↓ navigate</span>
                            <span>↵ select</span>
                            <span>Esc close</span>
                        </div>
                    </div>
                )}

                {/* No results hint */}
                {showSuggestions && searchQuery.trim().length >= 2 && suggestions.length === 0 && (
                    <div style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        backgroundColor: 'white',
                        border: '2px solid #e2e8f0',
                        borderTop: '1px solid #e2e8f0',
                        borderRadius: '0 0 var(--radius-md) var(--radius-md)',
                        padding: '1rem',
                        textAlign: 'center',
                        color: 'var(--text-light)',
                        fontSize: '0.875rem',
                        zIndex: 999,
                    }}>
                        No machines found for "<strong>{searchQuery}</strong>"
                    </div>
                )}
            </div>

            {/* ── Result count ── */}
            {searchQuery.trim() && (
                <p className="text-center" style={{ marginBottom: '1.5rem', color: 'var(--text-light)', fontSize: '0.875rem' }}>
                    {filteredProducts.length === 0
                        ? 'No machines found'
                        : `${filteredProducts.length} machine${filteredProducts.length !== 1 ? 's' : ''} found`
                    }
                    {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                    {' '}for "<strong style={{ color: 'var(--text-dark)' }}>{searchQuery}</strong>"
                </p>
            )}

            {/* ── Category Filter ── */}
            <div className="flex justify-center" style={{ gap: '0.6rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`btn ${selectedCategory === cat ? 'btn-primary' : 'btn-secondary'}`}
                        style={{ minWidth: '90px', fontSize: '0.85rem', padding: '0.5rem 1rem' }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* ── Product Grid ── */}
            <div className="grid" style={{
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '2rem'
            }}>
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div style={{ textAlign: 'center', marginTop: '4rem', padding: '2rem' }}>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '0.5rem' }}>
                        No machines found
                    </p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>
                        Try a different search term or{' '}
                        <button
                            onClick={clearSearch}
                            style={{ background: 'none', border: 'none', color: 'var(--primary-color)', fontWeight: '600', cursor: 'pointer', fontSize: '0.875rem' }}
                        >
                            clear the search
                        </button>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Products;
