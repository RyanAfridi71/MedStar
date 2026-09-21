import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ProductCard from '../components/ProductCard';
import { categoriesMeta, getProductsByCategory, reverseCategorySlugMap } from '../data/products';
import { ChevronRight, ShieldCheck, Truck, CheckCircle2, Phone, MapPin, HelpCircle } from 'lucide-react';

const CategoryPage = () => {
    const { categorySlug } = useParams();
    const meta = categoriesMeta[categorySlug];

    const categoryName = meta ? meta.name : (reverseCategorySlugMap[categorySlug] || categorySlug);
    const categoryProducts = getProductsByCategory(categoryName);

    if (!meta && categoryProducts.length === 0) {
        return (
            <div className="container section text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <SEO title="Category Not Found | SkyMedical Pakistan" />
                <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Category Not Found</h1>
                <p style={{ maxWidth: '500px', marginBottom: '2rem' }}>
                    The requested medical equipment category could not be found.
                </p>
                <Link to="/products" className="btn btn-primary">
                    View All Medical Equipment
                </Link>
            </div>
        );
    }

    const title = meta ? meta.title : `${categoryName} in Pakistan | Used & Refurbished | SkyMedical`;
    const description = meta ? meta.metaDescription : `Buy certified used & refurbished ${categoryName} imported from Japan. Tested, calibrated, and delivered across Pakistan with warranty by SkyMedical.`;
    const h1 = meta ? meta.h1 : `Used & Refurbished ${categoryName} in Pakistan`;
    const summary = meta ? meta.summary : `Explore our inventory of Japanese imported ${categoryName}. Every unit is inspected by biomedical engineers and delivered nationwide.`;
    const brands = meta ? meta.keyBrands : [];

    // Category Breadcrumbs and CollectionPage JSON-LD
    const jsonLdData = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'CollectionPage',
                '@id': `https://skymedical.store/category/${categorySlug}#webpage`,
                name: h1,
                description: description,
                url: `https://skymedical.store/category/${categorySlug}`,
                about: {
                    '@type': 'Thing',
                    name: categoryName
                }
            },
            {
                '@type': 'BreadcrumbList',
                '@id': `https://skymedical.store/category/${categorySlug}#breadcrumbs`,
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        name: 'Home',
                        item: 'https://skymedical.store/'
                    },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        name: 'Products',
                        item: 'https://skymedical.store/products'
                    },
                    {
                        '@type': 'ListItem',
                        position: 3,
                        name: categoryName,
                        item: `https://skymedical.store/category/${categorySlug}`
                    }
                ]
            }
        ]
    };

    return (
        <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '4rem' }}>
            <SEO
                title={title}
                description={description}
                canonical={`https://skymedical.store/category/${categorySlug}`}
                jsonLd={jsonLdData}
                jsonLdId={`category-${categorySlug}-schema`}
            />

            {/* Breadcrumbs */}
            <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '0.85rem 0' }}>
                <div className="container flex item-center" style={{ gap: '0.5rem', fontSize: '0.875rem', flexWrap: 'wrap' }}>
                    <Link to="/" style={{ color: 'var(--text-light)', textDecoration: 'none' }}>Home</Link>
                    <ChevronRight size={14} color="#94a3b8" />
                    <Link to="/products" style={{ color: 'var(--text-light)', textDecoration: 'none' }}>Products</Link>
                    <ChevronRight size={14} color="#94a3b8" />
                    <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>{categoryName}</span>
                </div>
            </div>

            {/* Category Banner */}
            <div
                style={{
                    background: 'linear-gradient(135deg, #0f766e 0%, #115e59 100%)',
                    color: '#ffffff',
                    padding: 'clamp(2.5rem, 5vw, 4rem) 0'
                }}
            >
                <div className="container" style={{ maxWidth: '900px' }}>
                    <span
                        style={{
                            display: 'inline-block',
                            backgroundColor: 'rgba(255, 255, 255, 0.15)',
                            padding: '0.35rem 0.85rem',
                            borderRadius: '1rem',
                            fontSize: '0.8rem',
                            fontWeight: '600',
                            letterSpacing: '0.05em',
                            marginBottom: '1rem',
                            textTransform: 'uppercase'
                        }}
                    >
                        Direct Japan Import Inventory
                    </span>
                    <h1 style={{ color: '#ffffff', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', marginBottom: '1rem', lineHeight: '1.2' }}>
                        {h1}
                    </h1>
                    <p style={{ color: '#ccfbf1', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                        {summary}
                    </p>

                    {brands.length > 0 && (
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                            <span style={{ fontSize: '0.85rem', color: '#99f6e4', fontWeight: '600' }}>
                                Featured Manufacturers:
                            </span>
                            {brands.map(brand => (
                                <span
                                    key={brand}
                                    style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        padding: '0.25rem 0.6rem',
                                        borderRadius: '0.375rem',
                                        fontSize: '0.8rem',
                                        color: '#ffffff'
                                    }}
                                >
                                    {brand}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Products Listing */}
            <div className="container section">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>
                            Available {categoryName} Inventory ({categoryProducts.length} Models)
                        </h2>
                        <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', margin: 0 }}>
                            Select any machine to view detailed specifications, compatible probes, and request current Pakistan pricing.
                        </p>
                    </div>

                    <a
                        href="https://wa.me/923469197496?text=Hello%20SkyMedical,%20I%20would%20like%20to%20inquire%20about%20your%20current%20stock%20of%20medical%20equipment."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}
                    >
                        <Phone size={15} /> WhatsApp Stock Inquiry
                    </a>
                </div>

                {categoryProducts.length > 0 ? (
                    <div
                        className="grid product-grid"
                        style={{
                            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                            gap: '2rem'
                        }}
                    >
                        {categoryProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: '#ffffff', borderRadius: 'var(--radius-md)' }}>
                        <p>No machines currently listed in this category.</p>
                        <Link to="/products" className="btn btn-primary">
                            Browse All Machines
                        </Link>
                    </div>
                )}

                {/* Trust & Inspection Card */}
                <div
                    style={{
                        marginTop: '4rem',
                        backgroundColor: '#ffffff',
                        borderRadius: 'var(--radius-lg)',
                        padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                        border: '1px solid #e2e8f0',
                        boxShadow: 'var(--shadow-sm)'
                    }}
                >
                    <h3 style={{ fontSize: '1.35rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>
                        Why Healthcare Providers Across Pakistan Choose SkyMedical for {categoryName}
                    </h3>
                    <div
                        className="grid"
                        style={{
                            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                            gap: '1.5rem',
                            marginTop: '1.5rem'
                        }}
                    >
                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            <ShieldCheck size={24} color="var(--primary-color)" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <div>
                                <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Direct Japanese Sourcing</h4>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-light)', margin: 0 }}>
                                    Decommissioned directly from Japanese healthcare institutions with well-documented service histories.
                                </p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            <CheckCircle2 size={24} color="var(--primary-color)" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <div>
                                <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Biomedical Calibration</h4>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-light)', margin: 0 }}>
                                    Tested for electronic safety, transducer acoustic integrity, and clinical image quality before dispatch.
                                </p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            <Truck size={24} color="var(--primary-color)" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <div>
                                <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Nationwide Delivery</h4>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-light)', margin: 0 }}>
                                    Insured delivery to hospitals, clinics, and labs in Peshawar, Islamabad, Lahore, Karachi, and all cities.
                                </p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            <MapPin size={24} color="var(--primary-color)" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <div>
                                <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Peshawar Inspection Facility</h4>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-light)', margin: 0 }}>
                                    Visit our warehouse on Main Umar Gul Rd, Peshawar to test any equipment in person before purchasing.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
