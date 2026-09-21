import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ProductCard from '../components/ProductCard';
import { getProductBySlug, getProductDetails, getRelatedProducts } from '../data/products';
import {
    CheckCircle2,
    ShieldCheck,
    Truck,
    MapPin,
    Phone,
    Mail,
    ChevronRight,
    ArrowLeft,
    FileText,
    HelpCircle,
    Calendar,
    Award,
    Activity
} from 'lucide-react';

const ProductDetail = () => {
    const { slug } = useParams();
    const product = getProductBySlug(slug);

    if (!product) {
        return (
            <div className="container section text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <SEO
                    title="Product Not Found | SkyMedical Pakistan"
                    description="The requested medical equipment model could not be found in our current catalog."
                />
                <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Equipment Model Not Found</h1>
                <p style={{ maxWidth: '500px', marginBottom: '2rem' }}>
                    The machine you are looking for might have been updated, renamed, or temporarily relocated in our inventory.
                </p>
                <div className="flex" style={{ gap: '1rem' }}>
                    <Link to="/products" className="btn btn-primary">
                        Browse All Equipment
                    </Link>
                    <Link to="/contact" className="btn btn-secondary">
                        Contact SkyMedical
                    </Link>
                </div>
            </div>
        );
    }

    const details = getProductDetails(product);
    const relatedProducts = getRelatedProducts(product, 4);

    const whatsappMessage = encodeURIComponent(
        `Assalamualaikum SkyMedical,\n\nI am inquiring about the following Japanese import machine listed on your website:\n• Model: ${product.name}\n• Brand: ${product.brand}\n• Category: ${product.category}\n\nPlease share current price in Pakistan, machine condition, available probes, and warehouse availability.`
    );
    const whatsappUrl = `https://wa.me/923469197496?text=${whatsappMessage}`;

    const contactParams = new URLSearchParams({
        product: product.name,
        brand: product.brand,
        category: product.category
    }).toString();

    // Combined JSON-LD Schema for Product, BreadcrumbList, and FAQPage
    const jsonLdData = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Product',
                '@id': `https://skymedical.store/products/${product.slug}#product`,
                name: `${product.name} ${product.category === 'Ultrasound' ? 'Ultrasound Machine' : product.category}`,
                description: details.highlight,
                brand: {
                    '@type': 'Brand',
                    name: product.brand
                },
                category: product.category,
                itemCondition: 'https://schema.org/RefurbishedCondition',
                offers: {
                    '@type': 'Offer',
                    url: `https://skymedical.store/products/${product.slug}`,
                    priceCurrency: 'PKR',
                    price: '0',
                    priceValidUntil: '2027-12-31',
                    availability: 'https://schema.org/InStock',
                    itemCondition: 'https://schema.org/RefurbishedCondition',
                    seller: {
                        '@type': 'Organization',
                        name: 'SkyMedical',
                        url: 'https://skymedical.store/'
                    }
                }
            },
            {
                '@type': 'BreadcrumbList',
                '@id': `https://skymedical.store/products/${product.slug}#breadcrumbs`,
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
                        name: product.category,
                        item: `https://skymedical.store/category/${product.categorySlug}`
                    },
                    {
                        '@type': 'ListItem',
                        position: 4,
                        name: product.name,
                        item: `https://skymedical.store/products/${product.slug}`
                    }
                ]
            },
            {
                '@type': 'FAQPage',
                '@id': `https://skymedical.store/products/${product.slug}#faq`,
                mainEntity: details.faqs.map(faq => ({
                    '@type': 'Question',
                    name: faq.question,
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: faq.answer
                    }
                }))
            }
        ]
    };

    const seoTitle = `${product.name} ${product.category === 'Ultrasound' ? 'Ultrasound Machine' : product.category} Price in Pakistan | SkyMedical`;
    const seoDescription = `Buy certified refurbished ${product.name} (${product.brand}) imported from Japan. Check current price in Pakistan, probe options, inspection report, warranty, and nationwide delivery.`;
    const seoKeywords = `${product.name} price in Pakistan, used ${product.name}, refurbished ${product.name}, ${product.brand} ${product.category} Pakistan, Japanese ultrasound machines Peshawar, medical equipment Pakistan`;

    return (
        <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '4rem' }}>
            <SEO
                title={seoTitle}
                description={seoDescription}
                keywords={seoKeywords}
                canonical={`https://skymedical.store/products/${product.slug}`}
                jsonLd={jsonLdData}
                jsonLdId={`product-${product.slug}-schema`}
            />

            {/* Breadcrumb Bar */}
            <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '0.85rem 0' }}>
                <div className="container flex item-center" style={{ gap: '0.5rem', fontSize: '0.875rem', flexWrap: 'wrap' }}>
                    <Link to="/" style={{ color: 'var(--text-light)', textDecoration: 'none' }}>Home</Link>
                    <ChevronRight size={14} color="#94a3b8" />
                    <Link to="/products" style={{ color: 'var(--text-light)', textDecoration: 'none' }}>Products</Link>
                    <ChevronRight size={14} color="#94a3b8" />
                    <Link to={`/category/${product.categorySlug}`} style={{ color: 'var(--text-light)', textDecoration: 'none' }}>
                        {product.category}
                    </Link>
                    <ChevronRight size={14} color="#94a3b8" />
                    <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>{product.name}</span>
                </div>
            </div>

            <div className="container section" style={{ paddingTop: '2.5rem' }}>
                <Link
                    to="/products"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        color: 'var(--text-light)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        marginBottom: '1.5rem',
                        fontWeight: '500'
                    }}
                >
                    <ArrowLeft size={16} /> Back to Full Catalog
                </Link>

                {/* Hero Product Showcase Grid */}
                <div
                    className="grid"
                    style={{
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2.5rem',
                        backgroundColor: '#ffffff',
                        borderRadius: 'var(--radius-lg)',
                        padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                        boxShadow: 'var(--shadow-sm)',
                        border: '1px solid #e2e8f0',
                        marginBottom: '3rem'
                    }}
                >
                    {/* Left Column: Visual & Trust Badges */}
                    <div>
                        <div
                            style={{
                                backgroundColor: '#f1f5f9',
                                borderRadius: 'var(--radius-md)',
                                padding: '2.5rem 1.5rem',
                                textAlign: 'center',
                                border: '1px solid #e2e8f0',
                                position: 'relative',
                                marginBottom: '1.5rem'
                            }}
                        >
                            <span
                                style={{
                                    position: 'absolute',
                                    top: '12px',
                                    left: '12px',
                                    backgroundColor: 'var(--primary-color)',
                                    color: '#ffffff',
                                    fontSize: '0.75rem',
                                    fontWeight: '700',
                                    padding: '0.3rem 0.75rem',
                                    borderRadius: '1rem',
                                    letterSpacing: '0.04em'
                                }}
                            >
                                JAPAN DIRECT IMPORT
                            </span>

                            <div style={{ display: 'inline-flex', padding: '1.5rem', backgroundColor: '#ffffff', borderRadius: '50%', boxShadow: 'var(--shadow-sm)', marginBottom: '1rem' }}>
                                <Activity size={60} color="var(--primary-color)" />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{product.name}</h3>
                            <p style={{ fontSize: '0.875rem', color: 'var(--text-light)', marginBottom: 0 }}>
                                Verified Japanese Diagnostic Equipment &bull; Direct Stock
                            </p>
                        </div>

                        {/* Quick Trust Checklist */}
                        <div style={{ backgroundColor: '#f8fafc', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0' }}>
                            <h4 style={{ fontSize: '0.95rem', marginBottom: '0.75rem', color: 'var(--text-dark)' }}>
                                Quality &amp; Purchase Protection
                            </h4>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--text-light)' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <CheckCircle2 size={16} color="var(--primary-color)" /> 100% Genuine Japanese Hospital Sourcing
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <CheckCircle2 size={16} color="var(--primary-color)" /> Complete 30-point Biomedical Testing &amp; Calibration
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <CheckCircle2 size={16} color="var(--primary-color)" /> Live Physical Demonstration at Peshawar Warehouse
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <CheckCircle2 size={16} color="var(--primary-color)" /> Insured Cargo Delivery across all Pakistan
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Title, Overview, Price & Action CTAs */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                            <span
                                style={{
                                    backgroundColor: '#eff6ff',
                                    color: '#2563eb',
                                    fontSize: '0.8rem',
                                    fontWeight: '700',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '1rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}
                            >
                                {product.brand}
                            </span>
                            <span
                                style={{
                                    backgroundColor: '#f0fdf4',
                                    color: '#16a34a',
                                    fontSize: '0.8rem',
                                    fontWeight: '700',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '1rem'
                                }}
                            >
                                {product.category}
                            </span>
                            <span
                                style={{
                                    backgroundColor: '#fffbeb',
                                    color: '#b45309',
                                    fontSize: '0.8rem',
                                    fontWeight: '700',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '1rem'
                                }}
                            >
                                Refurbished &bull; Japan Import
                            </span>
                        </div>

                        <h1 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)', marginBottom: '0.75rem', lineHeight: '1.2' }}>
                            {product.name}
                        </h1>

                        <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                            {details.highlight}
                        </p>

                        {/* Pricing Box */}
                        <div
                            style={{
                                backgroundColor: '#f0fdfa',
                                border: '1px solid #99f6e4',
                                borderRadius: 'var(--radius-md)',
                                padding: '1.25rem',
                                marginBottom: '1.75rem'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: '700', color: 'var(--primary-dark)', letterSpacing: '0.05em' }}>
                                    Current Pricing &amp; Stock Status
                                </span>
                                <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#047857' }}>
                                    In Stock / Available for Dispatch
                                </span>
                            </div>
                            <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                                Request Current Price &amp; Availability
                            </div>
                            <p style={{ fontSize: '0.85rem', color: '#0f766e', marginBottom: 0, lineHeight: '1.5' }}>
                                {details.pricingNotice}
                            </p>
                        </div>

                        {/* CTAs: WhatsApp & Official Quote Request */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.6rem',
                                    backgroundColor: '#25D366',
                                    color: '#ffffff',
                                    padding: '0.85rem 1.5rem',
                                    borderRadius: 'var(--radius-md)',
                                    fontWeight: '700',
                                    fontSize: '1rem',
                                    textDecoration: 'none',
                                    boxShadow: '0 4px 10px rgba(37, 211, 102, 0.3)',
                                    transition: 'transform 0.2s, background 0.2s'
                                }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.707 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
                                Inquire on WhatsApp (+92 346 9197496)
                            </a>

                            <div className="flex" style={{ gap: '0.75rem', flexWrap: 'wrap' }}>
                                <Link
                                    to={`/contact?${contactParams}`}
                                    className="btn btn-primary"
                                    style={{ flex: 1, textAlign: 'center', justifyContent: 'center' }}
                                >
                                    <Mail size={16} style={{ marginRight: '0.4rem' }} /> Submit Quote Form
                                </Link>
                                <a
                                    href="tel:+923469197496"
                                    className="btn btn-secondary"
                                    style={{ flex: 1, textAlign: 'center', justifyContent: 'center' }}
                                >
                                    <Phone size={16} style={{ marginRight: '0.4rem' }} /> Direct Call
                                </a>
                            </div>
                        </div>

                        {/* Warehouse inspection notice */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-light)' }}>
                            <MapPin size={16} color="var(--primary-color)" />
                            <span>Physical inspection available at our Peshawar warehouse (Main Umar Gul Rd, Manakrao).</span>
                        </div>
                    </div>
                </div>

                {/* Technical Specifications Table */}
                <div
                    style={{
                        backgroundColor: '#ffffff',
                        borderRadius: 'var(--radius-lg)',
                        padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                        boxShadow: 'var(--shadow-sm)',
                        border: '1px solid #e2e8f0',
                        marginBottom: '3rem'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                        <FileText size={24} color="var(--primary-color)" />
                        <h2 style={{ fontSize: '1.5rem', margin: 0 }}>
                            {product.name} Technical Specifications
                        </h2>
                    </div>

                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                            <tbody>
                                {details.specs.map((spec, index) => (
                                    <tr
                                        key={spec.label}
                                        style={{
                                            backgroundColor: index % 2 === 0 ? '#f8fafc' : '#ffffff',
                                            borderBottom: '1px solid #e2e8f0'
                                        }}
                                    >
                                        <td
                                            style={{
                                                padding: '0.9rem 1.2rem',
                                                fontWeight: '600',
                                                color: 'var(--text-dark)',
                                                width: '32%',
                                                minWidth: '180px'
                                            }}
                                        >
                                            {spec.label}
                                        </td>
                                        <td
                                            style={{
                                                padding: '0.9rem 1.2rem',
                                                color: 'var(--text-light)',
                                                lineHeight: '1.5'
                                            }}
                                        >
                                            {spec.value}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Clinical Applications & Engineering Features */}
                <div
                    className="grid"
                    style={{
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem',
                        marginBottom: '3rem'
                    }}
                >
                    <div
                        style={{
                            backgroundColor: '#ffffff',
                            borderRadius: 'var(--radius-lg)',
                            padding: '2rem',
                            border: '1px solid #e2e8f0',
                            boxShadow: 'var(--shadow-sm)'
                        }}
                    >
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Award size={20} color="var(--primary-color)" /> Clinical Applications
                        </h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '1.25rem' }}>
                            Suitability and imaging protocols supported by the {product.name}:
                        </p>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                            {details.clinicalApplications.map(app => (
                                <li key={app} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-dark)' }}>
                                    <CheckCircle2 size={16} color="var(--primary-color)" /> {app}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div
                        style={{
                            backgroundColor: '#ffffff',
                            borderRadius: 'var(--radius-lg)',
                            padding: '2rem',
                            border: '1px solid #e2e8f0',
                            boxShadow: 'var(--shadow-sm)'
                        }}
                    >
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <ShieldCheck size={20} color="var(--primary-color)" /> Refurbishment &amp; Inspection
                        </h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '1.25rem' }}>
                            Every machine passes our stringent biomedical multi-point review:
                        </p>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                            {details.features.map((feat, idx) => (
                                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-dark)' }}>
                                    <CheckCircle2 size={16} color="var(--primary-color)" style={{ marginTop: '3px', flexShrink: 0 }} />
                                    <span>{feat}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Frequently Asked Questions (FAQ) Section */}
                <div
                    style={{
                        backgroundColor: '#ffffff',
                        borderRadius: 'var(--radius-lg)',
                        padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                        boxShadow: 'var(--shadow-sm)',
                        border: '1px solid #e2e8f0',
                        marginBottom: '3.5rem'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                        <HelpCircle size={24} color="var(--primary-color)" />
                        <h2 style={{ fontSize: '1.5rem', margin: 0 }}>
                            Frequently Asked Questions &bull; {product.name}
                        </h2>
                    </div>
                    <p style={{ color: 'var(--text-light)', marginBottom: '2rem', fontSize: '0.95rem' }}>
                        Common questions from doctors, radiologists, and hospital procurement officers in Pakistan regarding this model:
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        {details.faqs.map((faq, i) => (
                            <div
                                key={i}
                                style={{
                                    backgroundColor: '#f8fafc',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: 'var(--radius-md)',
                                    padding: '1.25rem'
                                }}
                            >
                                <h3 style={{ fontSize: '1.05rem', color: 'var(--text-dark)', marginBottom: '0.5rem', fontWeight: '700' }}>
                                    {faq.question}
                                </h3>
                                <p style={{ color: 'var(--text-light)', fontSize: '0.925rem', lineHeight: '1.6', marginBottom: 0 }}>
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Related / Alternative Models */}
                {relatedProducts.length > 0 && (
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                            <div>
                                <h2 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>
                                    Alternative &amp; Related {product.category} Machines
                                </h2>
                                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', margin: 0 }}>
                                    Explore other models from {product.brand} and related Japanese inventory
                                </p>
                            </div>
                            <Link to={`/category/${product.categorySlug}`} className="btn btn-secondary" style={{ fontSize: '0.85rem' }}>
                                View All {product.category}
                            </Link>
                        </div>

                        <div
                            className="grid product-grid"
                            style={{
                                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                                gap: '1.5rem'
                            }}
                        >
                            {relatedProducts.map(rel => (
                                <ProductCard key={rel.id} product={rel} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetail;
