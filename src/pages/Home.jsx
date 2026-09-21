import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import {
    ArrowRight,
    ShieldCheck,
    Truck,
    Clock,
    MapPin,
    Phone,
    CheckCircle2,
    Award,
    Activity,
    Layers,
    FileCheck
} from 'lucide-react';

const Home = () => {
    // Select popular flagship models to feature on homepage
    const featuredSlugs = [
        'toshiba-aplio-500',
        'ge-logiq-p8',
        'philips-epiq-5',
        'fujifilm-fcr-prima',
        'drager-fabius',
        'candela-gentlemax-laser-system'
    ];
    const featuredProducts = products.filter(p => featuredSlugs.includes(p.slug));

    const homeFaqs = [
        {
            question: 'Why choose refurbished Japanese medical equipment instead of local used units?',
            answer: 'Medical equipment in Japan is maintained under rigorous preventative maintenance contracts and decommissioned after scheduled hospital upgrade cycles. As a result, these machines have significantly lower operating hours, superior cosmetic condition, and genuine OEM components compared to locally recycled units.'
        },
        {
            question: 'Can I physically inspect and test the machine before buying?',
            answer: 'Yes, absolutely. We welcome doctors, radiologists, and biomedical hospital engineers to visit our physical warehouse at Main Umar Gul Rd, Manakrao, Peshawar. You can conduct real-time scanning tests, inspect probe arrays, and verify all technical diagnostic functions in person.'
        },
        {
            question: 'Do you deliver medical equipment outside Peshawar to other cities in Pakistan?',
            answer: 'Yes. SkyMedical provides secure, insured freight delivery across all cities in Pakistan, including Islamabad, Rawalpindi, Lahore, Karachi, Multan, Faisalabad, Quetta, and Abbottabad with on-site installation support.'
        },
        {
            question: 'What warranty and biomedical technical support is included?',
            answer: 'Every machine comes with an operational startup warranty. Our in-house biomedical engineering team also provides preventative maintenance, spare parts sourcing, transducer replacements, and ongoing technical support.'
        }
    ];

    const homeJsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'MedicalBusiness',
                '@id': 'https://skymedical.store/#organization',
                name: 'SkyMedical',
                alternateName: 'SkyMedical Pakistan',
                url: 'https://skymedical.store/',
                logo: 'https://skymedical.store/og-image.jpg',
                image: 'https://skymedical.store/og-image.jpg',
                description: 'Leading Pakistan supplier of certified used & refurbished Japanese medical equipment, ultrasound machines, CR systems, and anesthesia workstations.',
                telephone: '+923469197496',
                email: 'info@skymedical.store',
                priceRange: '$$',
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Main Umar Gul Rd, Manakrao',
                    addressLocality: 'Peshawar',
                    postalCode: '25000',
                    addressCountry: 'PK'
                },
                geo: {
                    '@type': 'GeoCoordinates',
                    latitude: 33.9931,
                    longitude: 71.5647
                },
                openingHoursSpecification: {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                    opens: '09:00',
                    closes: '18:00'
                }
            },
            {
                '@type': 'FAQPage',
                '@id': 'https://skymedical.store/#faq',
                mainEntity: homeFaqs.map(faq => ({
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

    const categoriesList = [
        { name: 'Ultrasound Machines', slug: 'ultrasound', count: '100+ Models', desc: 'Toshiba, GE, Philips, Siemens, Aloka color Doppler systems' },
        { name: 'Computed Radiography (CR)', slug: 'computed-radiography', count: 'Digitizers & Workstations', desc: 'Fujifilm FCR Prima & Konica Minolta Regius systems' },
        { name: 'Anesthesia Workstations', slug: 'anesthesia', count: 'OT Ready', desc: 'Dräger Fabius and GE Datex-Ohmeda surgical units' },
        { name: 'ICU Ventilators', slug: 'ventilators', count: 'Critical Care', desc: 'Hamilton, Dräger Evita, and Covidien critical care systems' },
        { name: 'Aesthetic & Skin Lasers', slug: 'aesthetic-lasers', count: 'Dermatology', desc: 'Candela GentleMax and Lumenis laser systems' },
        { name: 'Infusion & Syringe Pumps', slug: 'infusion-pumps', count: 'Precision Dosing', desc: 'Terumo and JMS hospital-grade pumps' }
    ];

    return (
        <>
            <SEO
                title="Used & Refurbished Medical Equipment in Pakistan | SkyMedical"
                description="Pakistan's premier supplier of certified used & refurbished Japanese medical equipment. Ultrasound machines, CR systems, anesthesia workstations, and ventilators with warranty, testing, and delivery across Pakistan."
                keywords="used medical equipment Pakistan, refurbished medical equipment Pakistan, medical equipment Peshawar, used ultrasound machines Pakistan, Japan import ultrasound machines, Toshiba ultrasound Pakistan, GE Logiq used, CR systems Pakistan, SkyMedical Peshawar"
                canonical="https://skymedical.store/"
                jsonLd={homeJsonLd}
                jsonLdId="homepage-schema"
            />

            {/* Hero Section */}
            <section
                className="hero-section"
                style={{
                    background: 'linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)',
                    padding: 'clamp(3.5rem, 6vw, 5.5rem) 0',
                    marginBottom: '3rem',
                }}
            >
                <div
                    className="container grid hero-grid"
                    style={{
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '3rem',
                        alignItems: 'center',
                    }}
                >
                    <div>
                        <span
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                padding: '0.4rem 0.9rem',
                                backgroundColor: 'rgba(20, 184, 166, 0.15)',
                                color: 'var(--primary-dark)',
                                borderRadius: '2rem',
                                fontWeight: '700',
                                fontSize: '0.85rem',
                                marginBottom: '1.25rem',
                                letterSpacing: '0.03em'
                            }}
                        >
                            <Award size={16} /> Direct Japan Import Medical Equipment
                        </span>
                        <h1 style={{ marginBottom: '1.25rem', lineHeight: '1.15', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                            Used &amp; Refurbished <span style={{ color: 'var(--primary-color)' }}>Medical Equipment</span> in Pakistan
                        </h1>
                        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '540px', lineHeight: '1.6', color: '#475569' }}>
                            Equip your hospital, diagnostic clinic, or private practice with certified pre-owned ultrasound machines, CR digital X-ray digitizers, and anesthesia workstations imported directly from Japan. Tested, calibrated, and backed by biomedical support.
                        </p>
                        <div
                            className="flex"
                            style={{ gap: '1rem', flexWrap: 'wrap' }}
                        >
                            <Link to="/products" className="btn btn-primary" style={{ padding: '0.75rem 1.4rem' }}>
                                Browse All Machines <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                            </Link>
                            <a
                                href="https://wa.me/923469197496?text=Hello%20SkyMedical,%20I%20am%20interested%20in%20inquiring%20about%20your%20medical%20equipment."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                                style={{ padding: '0.75rem 1.4rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                            >
                                <Phone size={16} color="var(--primary-color)" /> WhatsApp Inquiry
                            </a>
                        </div>

                        {/* Location trust tagline */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem', fontSize: '0.875rem', color: '#64748b' }}>
                            <MapPin size={16} color="var(--primary-color)" />
                            <span>Peshawar Warehouse: Main Umar Gul Rd, Manakrao &bull; Insured Nationwide Shipping</span>
                        </div>
                    </div>

                    <div className="hero-image-mobile-hide" style={{ position: 'relative' }}>
                        <img
                            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000"
                            alt="Refurbished Medical Equipment in Pakistan"
                            style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', width: '100%', maxHeight: '420px', objectFit: 'cover' }}
                        />
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '20px',
                                left: '20px',
                                right: '20px',
                                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                backdropFilter: 'blur(8px)',
                                padding: '1rem 1.25rem',
                                borderRadius: 'var(--radius-md)',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <div>
                                <div style={{ fontWeight: '700', color: 'var(--text-dark)', fontSize: '0.9rem' }}>Direct Japanese Hospital Stock</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>170+ Diagnostic &amp; Surgical Units</div>
                            </div>
                            <span style={{ backgroundColor: '#ecfdf5', color: '#047857', fontWeight: '700', fontSize: '0.8rem', padding: '0.3rem 0.6rem', borderRadius: '1rem' }}>
                                Verified Stock
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Categories Grid */}
            <section className="container section" style={{ paddingTop: '1rem', paddingBottom: '3rem' }}>
                <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2.5rem auto' }}>
                    <span style={{ textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.8rem', fontWeight: '700', color: 'var(--primary-color)' }}>
                        Specialized Diagnostic &amp; Surgical Departments
                    </span>
                    <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
                        Browse Equipment by Category
                    </h2>
                    <p style={{ color: 'var(--text-light)', fontSize: '1rem' }}>
                        Select a department to view certified models, technical specifications, and available probe configurations.
                    </p>
                </div>

                <div
                    className="grid"
                    style={{
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '1.5rem'
                    }}
                >
                    {categoriesList.map(cat => (
                        <Link
                            key={cat.slug}
                            to={`/category/${cat.slug}`}
                            style={{
                                backgroundColor: '#ffffff',
                                border: '1px solid #e2e8f0',
                                borderRadius: 'var(--radius-md)',
                                padding: '1.5rem',
                                textDecoration: 'none',
                                transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                                e.currentTarget.style.borderColor = 'var(--primary-light)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.borderColor = '#e2e8f0';
                            }}
                        >
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                                    <h3 style={{ fontSize: '1.15rem', margin: 0, color: 'var(--text-dark)' }}>
                                        {cat.name}
                                    </h3>
                                    <span style={{ fontSize: '0.75rem', backgroundColor: '#f0fdfa', color: 'var(--primary-color)', padding: '0.2rem 0.5rem', borderRadius: '1rem', fontWeight: '600' }}>
                                        {cat.count}
                                    </span>
                                </div>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-light)', lineHeight: '1.5', marginBottom: '1rem' }}>
                                    {cat.desc}
                                </p>
                            </div>
                            <span style={{ color: 'var(--primary-color)', fontWeight: '600', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                Explore Models <ArrowRight size={14} />
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Featured Equipment Grid */}
            <section style={{ backgroundColor: '#ffffff', padding: '4rem 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                            <span style={{ textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.8rem', fontWeight: '700', color: 'var(--primary-color)' }}>
                                High-Demand Japanese Units
                            </span>
                            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginTop: '0.4rem', margin: 0 }}>
                                Featured Medical Systems in Stock
                            </h2>
                        </div>
                        <Link to="/products" className="btn btn-secondary" style={{ fontSize: '0.875rem' }}>
                            View All 170+ Models
                        </Link>
                    </div>

                    <div
                        className="grid product-grid"
                        style={{
                            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                            gap: '2rem'
                        }}
                    >
                        {featuredProducts.map(prod => (
                            <ProductCard key={prod.id} product={prod} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose SkyMedical Trust Signals */}
            <section className="container section">
                <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
                    <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', marginBottom: '0.75rem' }}>
                        Why Healthcare Providers Across Pakistan Trust SkyMedical
                    </h2>
                    <p style={{ color: 'var(--text-light)', fontSize: '1rem' }}>
                        We eliminate the uncertainty of buying pre-owned equipment with strict Japanese sourcing and biomedical validation.
                    </p>
                </div>

                <div
                    className="grid feature-grid"
                    style={{
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '2rem',
                    }}
                >
                    <div
                        style={{
                            padding: '2rem',
                            backgroundColor: 'white',
                            borderRadius: 'var(--radius-md)',
                            boxShadow: 'var(--shadow-sm)',
                            border: '1px solid #e2e8f0'
                        }}
                    >
                        <div style={{ display: 'inline-flex', padding: '0.85rem', backgroundColor: '#ecfdf5', borderRadius: '50%', color: 'var(--primary-color)', marginBottom: '1.25rem' }}>
                            <ShieldCheck size={28} />
                        </div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>100% Japanese Sourcing</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: '1.6' }}>
                            Imported directly from Japanese healthcare facilities and accredited auctions. No locally abused or roughly rebuilt machinery.
                        </p>
                    </div>

                    <div
                        style={{
                            padding: '2rem',
                            backgroundColor: 'white',
                            borderRadius: 'var(--radius-md)',
                            boxShadow: 'var(--shadow-sm)',
                            border: '1px solid #e2e8f0'
                        }}
                    >
                        <div style={{ display: 'inline-flex', padding: '0.85rem', backgroundColor: '#eff6ff', borderRadius: '50%', color: '#3b82f6', marginBottom: '1.25rem' }}>
                            <FileCheck size={28} />
                        </div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Biomedical Calibration</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: '1.6' }}>
                            Each system undergoes comprehensive multi-point quality testing, transducer acoustic verification, and voltage tuning for Pakistan.
                        </p>
                    </div>

                    <div
                        style={{
                            padding: '2rem',
                            backgroundColor: 'white',
                            borderRadius: 'var(--radius-md)',
                            boxShadow: 'var(--shadow-sm)',
                            border: '1px solid #e2e8f0'
                        }}
                    >
                        <div style={{ display: 'inline-flex', padding: '0.85rem', backgroundColor: '#fef3c7', borderRadius: '50%', color: '#d97706', marginBottom: '1.25rem' }}>
                            <MapPin size={28} />
                        </div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Peshawar Inspection Hub</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: '1.6' }}>
                            Visit our showroom and warehouse on Main Umar Gul Rd, Peshawar. Test scan quality and evaluate hardware in person before purchase.
                        </p>
                    </div>

                    <div
                        style={{
                            padding: '2rem',
                            backgroundColor: 'white',
                            borderRadius: 'var(--radius-md)',
                            boxShadow: 'var(--shadow-sm)',
                            border: '1px solid #e2e8f0'
                        }}
                    >
                        <div style={{ display: 'inline-flex', padding: '0.85rem', backgroundColor: '#f0fdfa', borderRadius: '50%', color: '#0d9488', marginBottom: '1.25rem' }}>
                            <Truck size={28} />
                        </div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Insured Pakistan Delivery</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: '1.6' }}>
                            Secure freight logistics to Islamabad, Lahore, Karachi, Quetta, Multan, and all surrounding clinical centers nationwide.
                        </p>
                    </div>
                </div>
            </section>

            {/* Homepage FAQs */}
            <section style={{ backgroundColor: '#ffffff', padding: '4rem 0', borderTop: '1px solid #e2e8f0' }}>
                <div className="container" style={{ maxWidth: '840px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <span style={{ textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.8rem', fontWeight: '700', color: 'var(--primary-color)' }}>
                            Buyer Guidance &amp; Information
                        </span>
                        <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', marginTop: '0.4rem', marginBottom: '0.75rem' }}>
                            Frequently Asked Questions
                        </h2>
                        <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>
                            Essential details regarding procurement, inspection, and delivery of refurbished medical systems in Pakistan.
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        {homeFaqs.map((faq, index) => (
                            <div
                                key={index}
                                style={{
                                    backgroundColor: '#f8fafc',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: 'var(--radius-md)',
                                    padding: '1.5rem'
                                }}
                            >
                                <h3 style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '0.5rem', fontWeight: '700' }}>
                                    {faq.question}
                                </h3>
                                <p style={{ color: 'var(--text-light)', fontSize: '0.925rem', lineHeight: '1.6', margin: 0 }}>
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA Box */}
                    <div
                        style={{
                            marginTop: '3.5rem',
                            backgroundColor: '#f0fdfa',
                            border: '1px solid #99f6e4',
                            borderRadius: 'var(--radius-lg)',
                            padding: '2.5rem 2rem',
                            textAlign: 'center'
                        }}
                    >
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-dark)', marginBottom: '0.75rem' }}>
                            Looking for a Specific Ultrasound or Medical Machine?
                        </h3>
                        <p style={{ color: '#0f766e', maxWidth: '600px', margin: '0 auto 1.5rem auto', fontSize: '0.95rem', lineHeight: '1.5' }}>
                            Our Peshawar warehouse receives regular container shipments from Japan. Contact our team to check incoming stock or request custom probe configurations.
                        </p>
                        <div className="flex justify-center" style={{ gap: '1rem', flexWrap: 'wrap' }}>
                            <a
                                href="https://wa.me/923469197496?text=Hello%20SkyMedical,%20I%20am%20looking%20for%20a%20specific%20machine%20model."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                            >
                                <Phone size={16} /> WhatsApp Inquiry (+92 346 9197496)
                            </a>
                            <Link to="/contact" className="btn btn-secondary">
                                Send Written Inquiry
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
