import SEO from '../components/SEO';
import { ShieldCheck, Award, MapPin, Phone, Mail, CheckCircle2, FileText, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    const aboutJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        '@id': 'https://skymedical.store/about#webpage',
        name: 'About SkyMedical | Japanese Medical Equipment Supplier in Pakistan',
        description: 'Founded in 2010 in Peshawar, SkyMedical supplies certified used and refurbished medical equipment imported directly from Japan to clinics and hospitals across Pakistan.',
        publisher: {
            '@type': 'Organization',
            name: 'SkyMedical',
            url: 'https://skymedical.store/'
        }
    };

    return (
        <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '4rem' }}>
            <SEO
                title="About SkyMedical | Japanese Medical Equipment Supplier in Pakistan"
                description="Learn about SkyMedical's 15+ years supplying certified used & refurbished ultrasound machines, CR systems, and healthcare equipment imported directly from Japan to clinics across Pakistan."
                keywords="about SkyMedical, medical equipment supplier Peshawar, refurbished medical equipment Pakistan, Japanese ultrasound importer Pakistan, medical warehouse Umar Gul Road"
                canonical="https://skymedical.store/about"
                jsonLd={aboutJsonLd}
                jsonLdId="about-page-schema"
            />

            {/* Header Banner */}
            <div style={{ background: 'linear-gradient(135deg, #0f766e 0%, #115e59 100%)', color: '#ffffff', padding: '4rem 0' }}>
                <div className="container" style={{ maxWidth: '850px', textAlign: 'center' }}>
                    <span style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', color: '#ffffff', padding: '0.35rem 0.85rem', borderRadius: '1rem', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.05em', textTransform: 'uppercase', display: 'inline-block', marginBottom: '1rem' }}>
                        Established 2010 &bull; Peshawar, Pakistan
                    </span>
                    <h1 style={{ color: '#ffffff', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem', lineHeight: '1.2' }}>
                        About SkyMedical Equipment
                    </h1>
                    <p style={{ color: '#ccfbf1', fontSize: '1.15rem', lineHeight: '1.6', margin: '0 auto', maxWidth: '700px' }}>
                        Pakistan’s trusted source for certified used and refurbished Japanese diagnostic imaging and surgical equipment.
                    </p>
                </div>
            </div>

            <div className="container section" style={{ maxWidth: '900px' }}>
                <img
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000"
                    alt="SkyMedical Healthcare Equipment Inspection"
                    style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: 'var(--radius-lg)', marginBottom: '3.5rem', boxShadow: 'var(--shadow-md)' }}
                />

                {/* Company Story & Mission */}
                <div style={{ backgroundColor: '#ffffff', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '1.25rem', color: 'var(--text-dark)' }}>
                        Our Story &amp; Commitment to Pakistan's Healthcare
                    </h2>
                    <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#334155', marginBottom: '1.5rem' }}>
                        Founded in 2010 in Peshawar, Khyber Pakhtunkhwa, <strong>SkyMedical</strong> began with a clear mission: to make high-performance, hospital-grade diagnostic systems accessible and affordable for clinics, diagnostic centers, and tertiary care hospitals across Pakistan.
                    </p>
                    <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-light)', marginBottom: '1.5rem' }}>
                        New diagnostic machinery from original equipment manufacturers often carries prohibitive price tags, forcing community health facilities and private practitioners to either operate with outdated technology or compromise patient diagnostic accuracy. By establishing direct sourcing relationships in Japan, SkyMedical bridges this crucial infrastructure gap.
                    </p>
                    <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-light)', margin: 0 }}>
                        Over the past decade and a half, we have equipped hundreds of healthcare practices throughout Khyber Pakhtunkhwa, Punjab, Sindh, Balochistan, and Azad Kashmir with dependable ultrasound, digital CR radiography, and anesthesia machines.
                    </p>
                </div>

                {/* Japanese Sourcing & Biomedical Testing Process */}
                <div style={{ backgroundColor: '#ffffff', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '1.25rem', color: 'var(--text-dark)' }}>
                        Direct Japanese Import &amp; Inspection Protocol
                    </h2>
                    <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-light)', marginBottom: '2rem' }}>
                        Every system in our 170+ machine catalog is imported directly from Japanese hospital upgrades and certified healthcare auctions:
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ padding: '0.75rem', backgroundColor: '#ecfdf5', borderRadius: '50%', color: 'var(--primary-color)', height: 'fit-content' }}>
                                <Award size={24} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.35rem', color: 'var(--text-dark)' }}>
                                    1. Hospital Decommissioning Sourcing
                                </h3>
                                <p style={{ fontSize: '0.925rem', color: 'var(--text-light)', lineHeight: '1.6', margin: 0 }}>
                                    Equipment in Japan is maintained under strict OEM manufacturer contracts. When major medical centers upgrade their systems, the decommissioned machines have low operational hours and pristine internal electronics.
                                </p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ padding: '0.75rem', backgroundColor: '#eff6ff', borderRadius: '50%', color: '#3b82f6', height: 'fit-content' }}>
                                <ShieldCheck size={24} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.35rem', color: 'var(--text-dark)' }}>
                                    2. Multi-Point Biomedical Engineering Calibration
                                </h3>
                                <p style={{ fontSize: '0.925rem', color: 'var(--text-light)', lineHeight: '1.6', margin: 0 }}>
                                    Upon arrival at our Peshawar technical facility, every machine undergoes thorough functional testing, probe element crystal verification, acoustic lens inspection, power supply tuning, and software diagnostics.
                                </p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ padding: '0.75rem', backgroundColor: '#fef3c7', borderRadius: '50%', color: '#d97706', height: 'fit-content' }}>
                                <FileText size={24} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.35rem', color: 'var(--text-dark)' }}>
                                    3. Startup Warranty &amp; On-Site Support
                                </h3>
                                <p style={{ fontSize: '0.925rem', color: 'var(--text-light)', lineHeight: '1.6', margin: 0 }}>
                                    We stand behind the equipment we sell. All machines are covered by an operational startup warranty with technical guidance, spare probe sourcing, and engineer assistance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Warehouse Location & Facility Details */}
                <div style={{ backgroundColor: '#ffffff', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)' }}>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>
                        Peshawar Warehouse &amp; Physical Demonstrations
                    </h2>
                    <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-light)', marginBottom: '1.5rem' }}>
                        We believe that purchasing medical equipment requires total transparency. We invite doctors, sonologists, radiologists, and procurement managers to visit our Peshawar warehouse for a live scanning demonstration:
                    </p>

                    <div style={{ backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', marginBottom: '2rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <MapPin size={20} color="var(--primary-color)" />
                                <span><strong>Address:</strong> Main Umar Gul Rd, Manakrao, Peshawar, 25000, Khyber Pakhtunkhwa, Pakistan</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Phone size={20} color="var(--primary-color)" />
                                <span><strong>WhatsApp / Mobile:</strong> +92 346 9197496</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Mail size={20} color="var(--primary-color)" />
                                <span><strong>Official Email:</strong> info@skymedical.store</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex" style={{ gap: '1rem', flexWrap: 'wrap' }}>
                        <Link to="/products" className="btn btn-primary">
                            Browse Available Equipment
                        </Link>
                        <a
                            href="https://wa.me/923469197496?text=Hello%20SkyMedical,%20I%20would%20like%20to%20schedule%20a%20warehouse%20visit%20in%20Peshawar."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                        >
                            Schedule Warehouse Visit
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
