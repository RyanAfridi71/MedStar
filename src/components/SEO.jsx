import { useEffect } from 'react';

const setMetaTag = (attrName, attrValue, content) => {
    if (!content) return;
    let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
    if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
    }
    element.setAttribute('content', content);
};

const setCanonical = (url) => {
    if (!url) return;
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
    }
    link.setAttribute('href', url);
};

const setJsonLd = (id, data) => {
    if (!data) return;
    let script = document.getElementById(id);
    if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('id', id);
        document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
};

const removeJsonLd = (id) => {
    const script = document.getElementById(id);
    if (script) {
        script.remove();
    }
};

const SEO = ({
    title,
    description,
    keywords,
    canonical,
    ogType = 'website',
    ogImage = 'https://skymedical.store/og-image.jpg',
    jsonLd = null,
    jsonLdId = 'page-schema'
}) => {
    useEffect(() => {
        const fullTitle = title
            ? (title.includes('SkyMedical') ? title : `${title} | SkyMedical Pakistan`)
            : 'Used & Refurbished Medical Equipment in Pakistan | SkyMedical';

        const fullDescription = description ||
            'Buy certified used and refurbished Japanese medical equipment in Pakistan. Ultrasound machines, CR systems, anesthesia, and ventilators with warranty, inspection, and nationwide delivery from SkyMedical Peshawar.';

        const currentCanonical = canonical || window.location.origin + window.location.pathname;

        // Title
        document.title = fullTitle;

        // Standard Meta
        setMetaTag('name', 'description', fullDescription);
        if (keywords) setMetaTag('name', 'keywords', keywords);
        setMetaTag('name', 'robots', 'index, follow');

        // Canonical
        setCanonical(currentCanonical);

        // Open Graph
        setMetaTag('property', 'og:title', fullTitle);
        setMetaTag('property', 'og:description', fullDescription);
        setMetaTag('property', 'og:type', ogType);
        setMetaTag('property', 'og:url', currentCanonical);
        setMetaTag('property', 'og:image', ogImage);

        // Twitter
        setMetaTag('property', 'twitter:title', fullTitle);
        setMetaTag('property', 'twitter:description', fullDescription);
        setMetaTag('property', 'twitter:url', currentCanonical);
        setMetaTag('property', 'twitter:image', ogImage);

        // JSON-LD Structured Data
        if (jsonLd) {
            setJsonLd(jsonLdId, jsonLd);
        }

        return () => {
            if (jsonLd) {
                removeJsonLd(jsonLdId);
            }
        };
    }, [title, description, keywords, canonical, ogType, ogImage, jsonLd, jsonLdId]);

    return null;
};

export default SEO;
