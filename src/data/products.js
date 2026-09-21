const rawProducts = [
    // --- ULTRASOUND MACHINES ---
    { "id": 1, "name": "Toshiba Aplio 300", "category": "Ultrasound", "brand": "Toshiba" },
    { "id": 2, "name": "Toshiba Aplio 400", "category": "Ultrasound", "brand": "Toshiba" },
    { "id": 3, "name": "Toshiba Aplio 500", "category": "Ultrasound", "brand": "Toshiba" },
    { "id": 4, "name": "Toshiba Aplio XV", "category": "Ultrasound", "brand": "Toshiba" },
    { "id": 5, "name": "Toshiba Aplio XG", "category": "Ultrasound", "brand": "Toshiba" },
    { "id": 6, "name": "Toshiba Aplio MX", "category": "Ultrasound", "brand": "Toshiba" },
    { "id": 7, "name": "Toshiba Aplio i600", "category": "Ultrasound", "brand": "Toshiba" },
    { "id": 8, "name": "Toshiba Aplio i800", "category": "Ultrasound", "brand": "Toshiba" },
    { "id": 9, "name": "Toshiba Aplio Alpha", "category": "Ultrasound", "brand": "Toshiba" },
    { "id": 10, "name": "Toshiba Aplio Go", "category": "Ultrasound", "brand": "Toshiba" },
    { "id": 11, "name": "Toshiba Xario 100", "category": "Ultrasound", "brand": "Toshiba" },
    { "id": 12, "name": "Toshiba Xario 200", "category": "Ultrasound", "brand": "Toshiba" },
    { "id": 13, "name": "Toshiba Xario Prime", "category": "Ultrasound", "brand": "Toshiba" },
    { "id": 14, "name": "Toshiba Xario XG", "category": "Ultrasound", "brand": "Toshiba" },
    { "id": 15, "name": "Toshiba Femio 5", "category": "Ultrasound", "brand": "Toshiba" },
    { "id": 16, "name": "Toshiba Femio 8", "category": "Ultrasound", "brand": "Toshiba" },
    { "id": 17, "name": "Toshiba Femio XG", "category": "Ultrasound", "brand": "Toshiba" },
    { "id": 18, "name": "Toshiba Viamo SV7", "category": "Ultrasound", "brand": "Toshiba" },
    { "id": 19, "name": "Toshiba Viamo", "category": "Ultrasound", "brand": "Toshiba" },
    { "id": 20, "name": "Toshiba Viamo Alpha", "category": "Ultrasound", "brand": "Toshiba" },
    { "id": 21, "name": "Toshiba Nemio 10", "category": "Ultrasound", "brand": "Toshiba" },
    { "id": 22, "name": "Toshiba Nemio 17", "category": "Ultrasound", "brand": "Toshiba" },
    { "id": 23, "name": "Toshiba Nemio 20", "category": "Ultrasound", "brand": "Toshiba" },
    { "id": 24, "name": "Toshiba Nemio 30", "category": "Ultrasound", "brand": "Toshiba" },
    { "id": 25, "name": "Toshiba Nemio 35", "category": "Ultrasound", "brand": "Toshiba" },
    { "id": 26, "name": "Toshiba Nemio XG", "category": "Ultrasound", "brand": "Toshiba" },
    { "id": 27, "name": "Toshiba Nemio MX", "category": "Ultrasound", "brand": "Toshiba" },
    { "id": 28, "name": "Toshiba Capasee", "category": "Ultrasound", "brand": "Toshiba" },
    { "id": 29, "name": "Toshiba Powervision 6000", "category": "Ultrasound", "brand": "Toshiba" },
    { "id": 30, "name": "Toshiba Powervision 8000", "category": "Ultrasound", "brand": "Toshiba" },
    { "id": 31, "name": "Toshiba justvision 200", "category": "Ultrasound", "brand": "Toshiba" },
    { "id": 32, "name": "Toshiba Justvision 400", "category": "Ultrasound", "brand": "Toshiba" },

    { "id": 33, "name": "GE LOGIQ 200", "category": "Ultrasound", "brand": "GE" },
    { "id": 34, "name": "GE LOGIQ 200 PRO", "category": "Ultrasound", "brand": "GE" },
    { "id": 35, "name": "GE LOGIQ 400", "category": "Ultrasound", "brand": "GE" },
    { "id": 36, "name": "GE LOGIQ 500", "category": "Ultrasound", "brand": "GE" },
    { "id": 37, "name": "GE LOGIQ 400 Pro", "category": "Ultrasound", "brand": "GE" },
    { "id": 38, "name": "GE LOGIQ 500 Pro", "category": "Ultrasound", "brand": "GE" },
    { "id": 39, "name": "GE LOGIQ P5", "category": "Ultrasound", "brand": "GE" },
    { "id": 40, "name": "GE LOGIQ P6", "category": "Ultrasound", "brand": "GE" },
    { "id": 41, "name": "GE LOGIQ P8", "category": "Ultrasound", "brand": "GE" },
    { "id": 42, "name": "GE LOGIQ S6", "category": "Ultrasound", "brand": "GE" },
    { "id": 43, "name": "GE LOGIQ S7", "category": "Ultrasound", "brand": "GE" },
    { "id": 44, "name": "GE LOGIQ S8", "category": "Ultrasound", "brand": "GE" },
    { "id": 45, "name": "GE LOGIQ E9", "category": "Ultrasound", "brand": "GE" },
    { "id": 46, "name": "GE LOGIQ E2", "category": "Ultrasound", "brand": "GE" },
    { "id": 47, "name": "GE LOGIQ IM", "category": "Ultrasound", "brand": "GE" },
    { "id": 48, "name": "GE LOGIQ I", "category": "Ultrasound", "brand": "GE" },
    { "id": 49, "name": "GE LOGIQ E", "category": "Ultrasound", "brand": "GE" },
    { "id": 50, "name": "GE LOGIQ V5", "category": "Ultrasound", "brand": "GE" },
    { "id": 51, "name": "GE LOGIQ V5 expert", "category": "Ultrasound", "brand": "GE" },
    { "id": 52, "name": "GE LOGIQ", "category": "Ultrasound", "brand": "GE" },
    { "id": 53, "name": "GE Vivid 5", "category": "Ultrasound", "brand": "GE" },
    { "id": 54, "name": "GE Vivid 7", "category": "Ultrasound", "brand": "GE" },
    { "id": 55, "name": "GE Vivid 9", "category": "Ultrasound", "brand": "GE" },
    { "id": 56, "name": "GE Vivid E9", "category": "Ultrasound", "brand": "GE" },
    { "id": 57, "name": "GE Vivid i", "category": "Ultrasound", "brand": "GE" },
    { "id": 58, "name": "GE Voluson S6", "category": "Ultrasound", "brand": "GE" },
    { "id": 59, "name": "GE Voluson P6", "category": "Ultrasound", "brand": "GE" },
    { "id": 60, "name": "GE Voluson P8", "category": "Ultrasound", "brand": "GE" },
    { "id": 61, "name": "GE Voluson P9", "category": "Ultrasound", "brand": "GE" },
    { "id": 62, "name": "GE Voluson E", "category": "Ultrasound", "brand": "GE" },
    { "id": 63, "name": "GE Voluson E6", "category": "Ultrasound", "brand": "GE" },
    { "id": 64, "name": "GE Voluson E8", "category": "Ultrasound", "brand": "GE" },
    { "id": 65, "name": "GE Voluson E10", "category": "Ultrasound", "brand": "GE" },

    { "id": 66, "name": "Aloka SSD-1000", "category": "Ultrasound", "brand": "Aloka" },
    { "id": 67, "name": "Aloka SSD-1700", "category": "Ultrasound", "brand": "Aloka" },
    { "id": 68, "name": "Aloka SSD-3500", "category": "Ultrasound", "brand": "Aloka" },
    { "id": 69, "name": "Aloka SSD-4000", "category": "Ultrasound", "brand": "Aloka" },
    { "id": 70, "name": "Aloka SSD-5000", "category": "Ultrasound", "brand": "Aloka" },
    { "id": 71, "name": "Aloka SSD-3500SX", "category": "Ultrasound", "brand": "Aloka" },
    { "id": 72, "name": "Aloka SSD-3500SV", "category": "Ultrasound", "brand": "Aloka" },
    { "id": 73, "name": "Aloka ProSound Alpha 6", "category": "Ultrasound", "brand": "Aloka" },
    { "id": 74, "name": "Aloka ProSound Alpha 7", "category": "Ultrasound", "brand": "Aloka" },
    { "id": 75, "name": "Aloka ProSound 6", "category": "Ultrasound", "brand": "Aloka" },
    { "id": 76, "name": "Aloka ProSound F31", "category": "Ultrasound", "brand": "Aloka" },
    { "id": 77, "name": "Aloka ProSound F37", "category": "Ultrasound", "brand": "Aloka" },
    { "id": 78, "name": "Aloka ProSound F75", "category": "Ultrasound", "brand": "Aloka" },
    { "id": 79, "name": "Aloka Arietta 60", "category": "Ultrasound", "brand": "Aloka" },
    { "id": 80, "name": "Aloka Arietta 65", "category": "Ultrasound", "brand": "Aloka" },
    { "id": 81, "name": "Aloka Arietta 70", "category": "Ultrasound", "brand": "Aloka" },

    { "id": 82, "name": "Hitachi EUB-5500", "category": "Ultrasound", "brand": "Hitachi" },
    { "id": 83, "name": "Hitachi EUB-6500", "category": "Ultrasound", "brand": "Hitachi" },
    { "id": 84, "name": "Hitachi EUB-7000", "category": "Ultrasound", "brand": "Hitachi" },
    { "id": 85, "name": "Hitachi EUB-7500", "category": "Ultrasound", "brand": "Hitachi" },
    { "id": 86, "name": "Hitachi EUB-8500", "category": "Ultrasound", "brand": "Hitachi" },
    { "id": 87, "name": "Hitachi EUB-500", "category": "Ultrasound", "brand": "Hitachi" },
    { "id": 88, "name": "Hitachi HI VISION 900", "category": "Ultrasound", "brand": "Hitachi" },
    { "id": 89, "name": "Hitachi HI VISION Avius", "category": "Ultrasound", "brand": "Hitachi" },
    { "id": 90, "name": "Hitachi HI VISION Ascendus", "category": "Ultrasound", "brand": "Hitachi" },
    { "id": 91, "name": "Hitachi HI VISION Preirus", "category": "Ultrasound", "brand": "Hitachi" },
    { "id": 92, "name": "Hitachi HI VISION Noblus", "category": "Ultrasound", "brand": "Hitachi" },
    { "id": 93, "name": "Hitachi EUB-405", "category": "Ultrasound", "brand": "Hitachi" },
    { "id": 94, "name": "Hitachi EUB-420", "category": "Ultrasound", "brand": "Hitachi" },

    { "id": 95, "name": "Philips iU22", "category": "Ultrasound", "brand": "Philips" },
    { "id": 96, "name": "Philips HD11", "category": "Ultrasound", "brand": "Philips" },
    { "id": 97, "name": "Philips HD15", "category": "Ultrasound", "brand": "Philips" },
    { "id": 98, "name": "Philips HD7", "category": "Ultrasound", "brand": "Philips" },
    { "id": 99, "name": "Philips CX50", "category": "Ultrasound", "brand": "Philips" },
    { "id": 100, "name": "Philips EPIQ 5", "category": "Ultrasound", "brand": "Philips" },
    { "id": 101, "name": "Philips EPIQ 7", "category": "Ultrasound", "brand": "Philips" },

    { "id": 102, "name": "Siemens Acuson S2000", "category": "Ultrasound", "brand": "Siemens" },
    { "id": 103, "name": "Siemens Acuson S3000", "category": "Ultrasound", "brand": "Siemens" },
    { "id": 104, "name": "Siemens Acuson S1000", "category": "Ultrasound", "brand": "Siemens" },
    { "id": 105, "name": "Siemens Acuson X300", "category": "Ultrasound", "brand": "Siemens" },
    { "id": 106, "name": "Siemens Acuson X700", "category": "Ultrasound", "brand": "Siemens" },
    { "id": 107, "name": "Siemens Acuson Sequoia", "category": "Ultrasound", "brand": "Siemens" },

    { "id": 108, "name": "Fujifilm Sonosite X-Porte", "category": "Ultrasound", "brand": "Fujifilm" },
    { "id": 109, "name": "Fujifilm Sonosite Edge", "category": "Ultrasound", "brand": "Fujifilm" },
    { "id": 110, "name": "Fujifilm Sonosite M-Turbo", "category": "Ultrasound", "brand": "Fujifilm" },
    { "id": 111, "name": "Fujifilm Sonosite S-Series", "category": "Ultrasound", "brand": "Fujifilm" },

    // --- CR (COMPUTED RADIOGRAPHY) SYSTEMS ---
    { "id": 112, "name": "Fujifilm FCR XG", "category": "Computed Radiography", "brand": "Fujifilm" },
    { "id": 113, "name": "Fujifilm FCR Prima", "category": "Computed Radiography", "brand": "Fujifilm" },
    { "id": 114, "name": "Fujifilm FCR Prima T", "category": "Computed Radiography", "brand": "Fujifilm" },
    { "id": 115, "name": "Fujifilm FCR Prima T2", "category": "Computed Radiography", "brand": "Fujifilm" },
    { "id": 116, "name": "Fujifilm FCR Prima V", "category": "Computed Radiography", "brand": "Fujifilm" },
    { "id": 117, "name": "Fujifilm FCR F2", "category": "Computed Radiography", "brand": "Fujifilm" },
    { "id": 118, "name": "Fujifilm FCR Capsula", "category": "Computed Radiography", "brand": "Fujifilm" },
    { "id": 119, "name": "Fujifilm FCR Capsula 2", "category": "Computed Radiography", "brand": "Fujifilm" },
    { "id": 120, "name": "Fujifilm FCR Carbon", "category": "Computed Radiography", "brand": "Fujifilm" },
    { "id": 121, "name": "Fujifilm FCR Carbon T2", "category": "Computed Radiography", "brand": "Fujifilm" },
    { "id": 122, "name": "Fujifilm FCR Speedia", "category": "Computed Radiography", "brand": "Fujifilm" },
    { "id": 123, "name": "Fujifilm FCR Speedia CS", "category": "Computed Radiography", "brand": "Fujifilm" },

    { "id": 124, "name": "Konica Minolta REGIUS 110", "category": "Computed Radiography", "brand": "Konica Minolta" },
    { "id": 125, "name": "Konica Minolta REGIUS 190", "category": "Computed Radiography", "brand": "Konica Minolta" },
    { "id": 126, "name": "Konica Minolta REGIUS Sigma", "category": "Computed Radiography", "brand": "Konica Minolta" },
    { "id": 127, "name": "Konica Minolta REGIUS Sigma II", "category": "Computed Radiography", "brand": "Konica Minolta" },

    // --- ANESTHESIA MACHINES ---
    { "id": 128, "name": "Dräger Fabius", "category": "Anesthesia", "brand": "Dräger" },
    { "id": 129, "name": "Dräger Fabius GS", "category": "Anesthesia", "brand": "Dräger" },
    { "id": 130, "name": "Dräger Fabius Tiro", "category": "Anesthesia", "brand": "Dräger" },
    { "id": 131, "name": "Dräger Primus", "category": "Anesthesia", "brand": "Dräger" },

    { "id": 132, "name": "GE Aisys", "category": "Anesthesia", "brand": "GE" },
    { "id": 133, "name": "GE Aisys CS", "category": "Anesthesia", "brand": "GE" },
    { "id": 134, "name": "GE Avance", "category": "Anesthesia", "brand": "GE" },
    { "id": 135, "name": "GE Avance CS", "category": "Anesthesia", "brand": "GE" },
    { "id": 136, "name": "GE Datex-Ohmeda Aestiva", "category": "Anesthesia", "brand": "GE" },
    { "id": 137, "name": "GE Datex-Ohmeda Aespire View", "category": "Anesthesia", "brand": "GE" },
    { "id": 138, "name": "GE Datex-Ohmeda Aespire Pro", "category": "Anesthesia", "brand": "GE" },

    // --- INFUSION & SYRINGE PUMPS ---
    { "id": 139, "name": "Terumo TE-331 Syringe Pump", "category": "Pumps", "brand": "Terumo" },
    { "id": 140, "name": "Terumo TE-372 Infusion Pump", "category": "Pumps", "brand": "Terumo" },
    { "id": 141, "name": "Terumo TE-112 Infusion Pump", "category": "Pumps", "brand": "Terumo" },

    { "id": 142, "name": "JMS SP-500 Syringe Pump", "category": "Pumps", "brand": "JMS" },
    { "id": 143, "name": "JMS IP-770 Infusion Pump", "category": "Pumps", "brand": "JMS" },

    { "id": 144, "name": "Kangaroo ePump Enteral Feeding Pump", "category": "Pumps", "brand": "Kangaroo" },
    { "id": 145, "name": "Kangaroo Joey Enteral Feeding Pump", "category": "Pumps", "brand": "Kangaroo" },

    // --- LASER / AESTHETIC SYSTEMS ---
    { "id": 146, "name": "Candela Vbeam", "category": "Aesthetic", "brand": "Candela" },
    { "id": 147, "name": "Candela Vbeam Perfecta Pulsed Dye Laser", "category": "Aesthetic", "brand": "Candela" },
    { "id": 148, "name": "Candela GentleMax Laser System", "category": "Aesthetic", "brand": "Candela" },
    { "id": 149, "name": "Candela GentlePro Series", "category": "Aesthetic", "brand": "Candela" },
    { "id": 150, "name": "Candela GentleYAG Laser", "category": "Aesthetic", "brand": "Candela" },

    { "id": 151, "name": "Lumenis M22 Multi-Application Platform", "category": "Aesthetic", "brand": "Lumenis" },
    { "id": 152, "name": "Lumenis Lightsheer Duet", "category": "Aesthetic", "brand": "Lumenis" },
    { "id": 153, "name": "Lumenis Lightsheer Desire", "category": "Aesthetic", "brand": "Lumenis" },
    
    { "id": 154, "name": "JMEC Laser System", "category": "Aesthetic", "brand": "JMEC" },
    { "id": 155, "name": "Curia Laser System", "category": "Aesthetic", "brand": "Curia" },

    // --- ELECTROSURGICAL / CAUTERY UNITS ---
    { "id": 156, "name": "Valleylab Force 40", "category": "Electrosurgical", "brand": "Valleylab" },
    { "id": 157, "name": "Valleylab Force 20", "category": "Electrosurgical", "brand": "Valleylab" },
    { "id": 158, "name": "Valleylab Force Triad", "category": "Electrosurgical", "brand": "Valleylab" },
    { "id": 159, "name": "Valleylab Valleylab 200", "category": "Electrosurgical", "brand": "Valleylab" },
    { "id": 160, "name": "Valleylab Valleylab 300", "category": "Electrosurgical", "brand": "Valleylab" },
    { "id": 161, "name": "Valleylab Valleylab 400", "category": "Electrosurgical", "brand": "Valleylab" },

    // --- OPHTHALMOLOGY (EYE MACHINES) & OR EQUIPMENT ---
    { "id": 162, "name": "Ophthalmic Operating Microscope (Surgical Microscope)", "category": "Ophthalmology & OR", "brand": "Generic" },
    { "id": 163, "name": "Nd:YAG Laser System (Ophthalmic)", "category": "Ophthalmology & OR", "brand": "Generic" },
    { "id": 164, "name": "Lense Meter", "category": "Ophthalmology & OR", "brand": "Generic" },
    { "id": 165, "name": "Slit Lamp Biomicroscope", "category": "Ophthalmology & OR", "brand": "Generic" },
    { "id": 166, "name": "Ophthalmic B-Scan Ultrasound", "category": "Ophthalmology & OR", "brand": "Generic" },
    { "id": 167, "name": "OT Operating Table", "category": "Ophthalmology & OR", "brand": "Generic" },
    { "id": 168, "name": "OT Surgical Lights", "category": "Ophthalmology & OR", "brand": "Generic" },
    { "id": 169, "name": "Medical Autoclave", "category": "Ophthalmology & OR", "brand": "Generic" },

    // --- VENTILATORS ---
    { "id": 170, "name": "IMI Ventilator Systems", "category": "Ventilators", "brand": "IMI" },
    { "id": 171, "name": "Hamilton C2 Ventilator", "category": "Ventilators", "brand": "Hamilton" },
    { "id": 172, "name": "Dräger Evita Series Ventilator", "category": "Ventilators", "brand": "Dräger" },
    { "id": 173, "name": "Dräger Savina Ventilator", "category": "Ventilators", "brand": "Dräger" },
    { "id": 174, "name": "Covidien PB840 Ventilator", "category": "Ventilators", "brand": "Covidien" },
    { "id": 175, "name": "Covidien PB980 Ventilator", "category": "Ventilators", "brand": "Covidien" },
    { "id": 176, "name": "Covidien Bunnet", "category": "Ventilators", "brand": "Covidien" },
    { "id": 177, "name": "Newport e840 Ventilator", "category": "Ventilators", "brand": "Newport" },
    { "id": 178, "name": "Newport e500 Ventilator", "category": "Ventilators", "brand": "Newport" }
];

export const slugify = (text) => {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/&/g, '-and-')
        .replace(/[\s\W-]+/g, '-')
        .replace(/^-+|-+$/g, '');
};

export const categorySlugMap = {
    'Ultrasound': 'ultrasound',
    'Computed Radiography': 'computed-radiography',
    'Anesthesia': 'anesthesia',
    'Pumps': 'infusion-pumps',
    'Aesthetic': 'aesthetic-lasers',
    'Electrosurgical': 'electrosurgical-units',
    'Ophthalmology & OR': 'ophthalmology-or-equipment',
    'Ventilators': 'ventilators'
};

export const reverseCategorySlugMap = Object.entries(categorySlugMap).reduce((acc, [cat, slug]) => {
    acc[slug] = cat;
    return acc;
}, {});

export const products = rawProducts.map(p => ({
    ...p,
    slug: slugify(p.name),
    categorySlug: categorySlugMap[p.category] || slugify(p.category)
}));

export const getProductBySlug = (slug) => {
    if (!slug) return null;
    const cleanSlug = slug.toLowerCase().trim();
    return products.find(p => p.slug === cleanSlug) || null;
};

export const getProductsByCategory = (categoryOrSlug) => {
    if (!categoryOrSlug || categoryOrSlug === 'All') return products;
    const actualCategory = reverseCategorySlugMap[categoryOrSlug] || categoryOrSlug;
    return products.filter(p => p.category.toLowerCase() === actualCategory.toLowerCase());
};

export const getRelatedProducts = (currentProduct, limit = 4) => {
    if (!currentProduct) return [];
    return products
        .filter(p => p.id !== currentProduct.id && (p.category === currentProduct.category || p.brand === currentProduct.brand))
        .slice(0, limit);
};

// Bespoke metadata overrides for high-intent search models
const bespokeModelDetails = {
    'toshiba-aplio-500': {
        shortHighlight: 'Flagship premium diagnostic ultrasound with High Density Architecture and Precision Imaging.',
        specialFeatures: [
            'Precision Imaging & ApliPure+ multi-frequency compound imaging for crisp tissue demarcation',
            'Differential Tissue Harmonic Imaging (D-THI) for deep penetration in difficult-to-image patients',
            'Superb Micro-vascular Imaging (SMI) for high-frame-rate microvascular flow visualisation',
            'Smart 3D / 4D Surface Rendering and Fly Thru virtual endoscopy',
            'High-resolution 19" LCD monitor on articulating arm with fully customizable touch command screen'
        ],
        clinicalApplications: ['Radiology & General Imaging', 'Cardiology & Vascular', 'OB/GYN 3D/4D', 'Musculoskeletal (MSK)', 'Small Parts & Breast', 'Urology']
    },
    'toshiba-aplio-300': {
        shortHighlight: 'High-performance workhorse ultrasound delivering premium Aplio image quality for busy diagnostic clinics.',
        specialFeatures: [
            'Differential Tissue Harmonic Imaging and Advanced Dynamic Flow',
            'QuickScan single-button automatic image optimization in 2D and Doppler',
            'Comprehensive DICOM 3.0 connectivity and patient reporting package',
            '19-inch high-definition digital display with ergonomic height and angle adjustments'
        ],
        clinicalApplications: ['Abdominal & Pelvic', 'Obstetrics & Gynaecology', 'Peripheral Vascular', 'Small Organs & Thyroid']
    },
    'ge-logiq-p8': {
        shortHighlight: 'Advanced, lightweight console ultrasound system engineered for high patient throughput and fast workflow.',
        specialFeatures: [
            'CrossXBeam spatial compounding and SRI-HD Speckle Reduction Imaging',
            'Auto Optimization (AO) and Auto IMT for vascular assessment',
            '21.5" widescreen LCD monitor and 10.4" responsive touch panel',
            'Fully digital architecture with ultra-fast boot time and quiet acoustic operation'
        ],
        clinicalApplications: ['General Radiology', 'Vascular & Doppler', 'OB/GYN', 'MSK & Orthopedics', 'Pediatrics']
    },
    'ge-vivid-e9': {
        shortHighlight: 'World-class 4D cardiovascular ultrasound system with accelerated volume architecture.',
        specialFeatures: [
            '4D TEE & 4D Transthoracic Cardiac Imaging capabilities',
            'Automated Function Imaging (AFI) for speckle tracking strain analysis',
            'Triplane imaging for simultaneous multi-plane cardiac evaluation',
            'AFI 2.0 and Quantification Tools tailored for cardiology centers'
        ],
        clinicalApplications: ['Adult & Pediatric Cardiology', 'Cardiac Surgery & TEE', 'Vascular & Hemodynamics', 'Stress Echo']
    },
    'philips-epiq-5': {
        shortHighlight: 'Premium ultrasound platform powered by nSIGHT Imaging architecture for extraordinary resolution.',
        specialFeatures: [
            'nSIGHT Imaging technology delivers crisp acoustic fidelity at frame rates up to 40% higher',
            'PureWave crystal transducer technology for improved penetration on technically difficult patients',
            'SmartExam guided workflow with automated protocol sequencing',
            '21.5-inch high-resolution flat panel display with silent cart design'
        ],
        clinicalApplications: ['Radiology', 'Cardiology & Vascular', 'Obstetrics & Fetal Echo', 'Small Parts & MSK']
    },
    'fujifilm-fcr-prima': {
        shortHighlight: 'Compact, high-throughput tabletop Computed Radiography (CR) reader ideal for clinics and hospitals.',
        specialFeatures: [
            'Processing capacity of up to 73 IP plates per hour (14"x14")',
            'Image Intelligence (TM) automated image optimization algorithms',
            'Ultra-compact footprint of just 0.24 m² fitting in minimal darkroom/clinic spaces',
            'Seamless PACS and DICOM connectivity for digital radiography workflows'
        ],
        clinicalApplications: ['General Chest & Skeletal X-Ray', 'Orthopedic Radiography', 'Trauma Imaging', 'Pediatric Radiography']
    },
    'drager-fabius': {
        shortHighlight: 'Industry-standard anesthesia workstation with electrically driven, electronically controlled E-vent piston ventilator.',
        specialFeatures: [
            'E-vent piston ventilator requires no drive gas, saving hospital central gas supply',
            'Comprehensive ventilation modes: Volume Control, Pressure Control, and Pressure Support',
            'High-precision multi-gas vaporizers (Isoflurane / Sevoflurane mount)',
            'Integrated compact breathing system (COSY) with quick-release canister'
        ],
        clinicalApplications: ['General Surgery Anesthesia', 'Operating Room Theatres', 'Pediatric & Adult Surgery']
    },
    'candela-gentlemax-laser-system': {
        shortHighlight: 'Gold-standard dual-wavelength (755 nm Alexandrite and 1064 nm Nd:YAG) aesthetic laser workstation.',
        specialFeatures: [
            'Dual-wavelength delivery for all Fitzpatrick skin types (I-VI)',
            'Patented Dynamic Cooling Device (DCD) for consistent epidermal cryogen protection',
            'Large spot sizes up to 24mm for ultra-fast treatment sessions',
            'Multi-indication treatment: permanent hair reduction, vascular lesions, pigmented lesions'
        ],
        clinicalApplications: ['Laser Hair Removal', 'Facial & Leg Veins', 'Benign Pigmented Lesions', 'Skin Tightening']
    }
};

export const getProductDetails = (product) => {
    if (!product) return null;

    const bespoke = bespokeModelDetails[product.slug] || {};
    const isUltrasound = product.category === 'Ultrasound';
    const isCR = product.category === 'Computed Radiography';
    const isAnesthesia = product.category === 'Anesthesia';
    const isVentilator = product.category === 'Ventilators';
    const isLaser = product.category === 'Aesthetic';
    const isPump = product.category === 'Pumps';
    const isElectrosurgical = product.category === 'Electrosurgical';

    let defaultHighlight = `Certified pre-owned and refurbished ${product.brand} ${product.name} directly imported from Japan. Tested, calibrated, and ready for immediate deployment in hospitals, clinics, and diagnostic labs across Pakistan.`;
    if (bespoke.shortHighlight) defaultHighlight = bespoke.shortHighlight;

    const defaultApplications = bespoke.clinicalApplications || (
        isUltrasound ? ['General Abdominal', 'Obstetrics & Gynaecology (OB/GYN)', 'Vascular & Doppler', 'Small Organs & Thyroid', 'Musculoskeletal (MSK)'] :
        isCR ? ['General Digital Radiography', 'Chest & Skeletal X-Rays', 'Orthopedic Diagnostics', 'Trauma & Urgent Care'] :
        isAnesthesia ? ['Operating Room (OT) Surgery', 'General Anesthesia Delivery', 'Day Care Surgery Centers'] :
        isVentilator ? ['Intensive Care Unit (ICU)', 'Critical Care & Trauma', 'Post-Operative Recovery (PACU)', 'Emergency Care'] :
        isLaser ? ['Aesthetic Clinics', 'Dermatology & Skin Centers', 'Laser Rejuvenation & Hair Removal'] :
        isPump ? ['ICU / CCU Infusion Therapy', 'Chemotherapy & Oncology Delivery', 'Neonatal & Pediatric Care', 'General Inpatient Wards'] :
        isElectrosurgical ? ['General Surgery Cautery', 'Laparoscopic & Minimally Invasive Surgery', 'Gynecological & Orthopedic Procedures'] :
        ['Surgical Operating Theatres', 'Diagnostic Clinics', 'Specialized Medical Centers']
    );

    const defaultSpecs = [
        { label: 'Manufacturer / Brand', value: product.brand },
        { label: 'Model Name', value: product.name },
        { label: 'Category', value: product.category },
        { label: 'Equipment Origin', value: 'Direct Japan Hospital Decommissioning & Verified Auctions' },
        { label: 'Condition', value: 'Certified Pre-Owned / Fully Refurbished & Bio-Engineer Tested' },
        { label: 'Power Standard', value: 'Standard 220V - 240V AC, 50/60 Hz (Pakistan Hospital Grid Compatible)' },
        {
            label: isUltrasound ? 'Transducer / Probes' : 'System Configuration',
            value: isUltrasound
                ? 'Convex, Linear, Cardiac Phased Array, or Transvaginal / 3D probes available on request'
                : isCR
                ? 'Imaging plates, Cassette sets, Acquisition workstation, and DICOM viewer software'
                : isAnesthesia
                ? 'Selectatec vaporizer manifolds, integrated ventilator, absorber canister & hose set'
                : 'Standard hospital-grade configuration with complete patient interface accessories'
        },
        {
            label: isUltrasound ? 'Doppler & Imaging Modes' : 'Operating Modes',
            value: isUltrasound
                ? 'B-Mode, M-Mode, Color Flow Doppler, Power Doppler, Pulse Wave (PW), Continuous Wave (CW on cardiac)'
                : isCR
                ? 'High-resolution photostimulable phosphor read-out, Auto contrast adjustment, DICOM Store/Print'
                : isAnesthesia
                ? 'Volume Control (VCV), Pressure Control (PCV), Manual / Spontaneous ventilation'
                : isVentilator
                ? 'Volume & Pressure Controlled, SIMV, CPAP/PSV, Non-Invasive (NIV) support'
                : 'Microprocessor controlled clinical delivery with automated safety self-test'
        },
        { label: 'Technical Testing', value: 'Passed 30-Point Biomedical Quality Inspection & Electrical Safety Calibration' },
        { label: 'Inspection Location', value: 'SkyMedical Warehouse, Main Umar Gul Rd, Manakrao, Peshawar, Pakistan' },
        { label: 'Delivery Coverage', value: 'Fast insured shipment to Peshawar, Islamabad, Rawalpindi, Lahore, Karachi, Multan, Quetta, Faisalabad & all Pakistan' },
        { label: 'Warranty & Support', value: 'Startup operational warranty included + ongoing biomedical maintenance support' }
    ];

    const faqs = [
        {
            question: `What is the price of ${product.name} in Pakistan?`,
            answer: `Prices for the ${product.name} in Pakistan depend on unit condition, manufacture year, software options, and included accessories or probe packages (e.g. Convex, Linear, TVS, Cardiac). Please contact SkyMedical via WhatsApp (+92 346 9197496) or submit a quote request to receive today's verified warehouse price and delivery quote.`
        },
        {
            question: `Is this ${product.name} directly imported from Japan?`,
            answer: `Yes. SkyMedical imports medical systems directly from Japanese hospital upgrades and accredited equipment auctions. Every machine retains its genuine Japanese build quality and has never been roughly refurbished with uncertified third-party parts.`
        },
        {
            question: `Can I physically inspect and test the ${product.name} before purchasing?`,
            answer: `Absolutely. We welcome doctors, hospital biomedical engineers, and clinic administrators to our Peshawar warehouse located at Main Umar Gul Rd, Manakrao, Peshawar. You can inspect the machine, test imaging and software functions, and verify all accessories prior to finalized purchase.`
        },
        {
            question: `Do you deliver and install ${product.name} outside Peshawar across Pakistan?`,
            answer: `Yes. We provide insured, secure nationwide freight delivery to Islamabad, Rawalpindi, Lahore, Karachi, Quetta, Multan, Faisalabad, and all surrounding regions across Pakistan with operational setup assistance.`
        },
        {
            question: `What warranty and biomedical technical support is provided?`,
            answer: `SkyMedical provides an operational startup warranty on all delivered machines. Furthermore, our dedicated biomedical engineering team provides technical troubleshooting, spare parts sourcing, and routine maintenance assistance.`
        }
    ];

    return {
        ...product,
        highlight: defaultHighlight,
        features: bespoke.specialFeatures || [
            'Thoroughly inspected, cleaned, and calibrated by certified biomedical technicians',
            'Full compatibility with standard Pakistan hospital electrical voltage (220V/50Hz)',
            'Pre-installed clinical software packages and patient reporting modules',
            'Genuine Japanese manufacturing durability offering years of reliable daily service'
        ],
        clinicalApplications: defaultApplications,
        specs: defaultSpecs,
        faqs,
        pricingNotice: 'Prices vary based on cosmetic condition, working hours, software options, and probe/accessory packages. Contact SkyMedical today for the current verified Pakistan price and availability.'
    };
};

export const categoriesMeta = {
    'ultrasound': {
        name: 'Ultrasound',
        slug: 'ultrasound',
        h1: 'Used & Refurbished Ultrasound Machines in Pakistan',
        title: 'Used & Refurbished Ultrasound Machines in Pakistan | SkyMedical',
        metaDescription: 'Buy certified used & refurbished ultrasound machines imported from Japan. Top brands include Toshiba (Canon), GE Healthcare, Philips, Siemens, and Aloka with warranty and delivery across Pakistan.',
        summary: 'SkyMedical is Pakistan’s leading importer of high-precision Japanese ultrasound machines. We stock certified pre-owned color Doppler systems, portable ultrasound units, and 3D/4D obstetrics machines from world-class manufacturers like Toshiba (Canon Medical), GE Healthcare, Philips, Siemens, and Hitachi-Aloka. Every machine undergoes comprehensive biomedical engineering calibration in our Peshawar warehouse before delivery to clinics and hospitals nationwide.',
        keyBrands: ['Toshiba / Canon Medical', 'GE Healthcare', 'Philips', 'Siemens', 'Hitachi-Aloka', 'Fujifilm'],
        popularModels: ['Toshiba Aplio 500', 'Toshiba Aplio 300', 'Toshiba Xario 200', 'GE LOGIQ P8', 'GE LOGIQ E9', 'GE Vivid E9', 'Philips EPIQ 5', 'Aloka F37']
    },
    'computed-radiography': {
        name: 'Computed Radiography',
        slug: 'computed-radiography',
        h1: 'Refurbished Computed Radiography (CR) Systems in Pakistan',
        title: 'Used & Refurbished CR Machines in Pakistan | Fujifilm & Konica | SkyMedical',
        metaDescription: 'Explore certified refurbished Computed Radiography (CR) digitizers imported from Japan. Fujifilm FCR Prima, FCR Capsula, and Konica Minolta Regius with installation and support across Pakistan.',
        summary: 'Upgrade your diagnostic facility from analog film to crystal-clear digital radiography with SkyMedical’s imported Japanese CR systems. We provide tabletop and multi-plate Fujifilm FCR and Konica Minolta digitizers, complete with high-resolution image processing workstations, imaging plates, and DICOM PACS connectivity.',
        keyBrands: ['Fujifilm', 'Konica Minolta'],
        popularModels: ['Fujifilm FCR Prima', 'Fujifilm FCR Capsula XL', 'Fujifilm FCR XG-1', 'Konica Regius 110', 'Konica Regius 190']
    },
    'anesthesia': {
        name: 'Anesthesia',
        slug: 'anesthesia',
        h1: 'Refurbished Anesthesia Workstations in Pakistan',
        title: 'Used & Refurbished Anesthesia Machines in Pakistan | Dräger & GE | SkyMedical',
        metaDescription: 'High-quality Japanese import anesthesia machines in Pakistan. Dräger Fabius, GE Aisys, GE Avance, and Datex-Ohmeda workstations tested by biomedical engineers with nationwide shipping.',
        summary: 'SkyMedical supplies dependable, hospital-grade anesthesia workstations imported from Japan. Featuring precision vaporizers, electronically driven ventilators, and integrated patient respiratory monitors, our Dräger and GE systems provide critical reliability in surgical operating theatres across Pakistan.',
        keyBrands: ['Dräger', 'GE Healthcare', 'Datex-Ohmeda'],
        popularModels: ['Dräger Fabius GS', 'Dräger Fabius Tiro', 'GE Aisys', 'GE Avance', 'Datex-Ohmeda Aestiva 3000']
    },
    'ventilators': {
        name: 'Ventilators',
        slug: 'ventilators',
        h1: 'Certified ICU & Critical Care Ventilators in Pakistan',
        title: 'Used & Refurbished ICU Ventilators in Pakistan | Hamilton & Dräger | SkyMedical',
        metaDescription: 'Hospital-grade critical care and ICU ventilators in Pakistan. Hamilton C2, Dräger Evita, Covidien PB840, and Newport ventilators imported from Japan with warranty and full calibration.',
        summary: 'Provide life-saving mechanical ventilation in your intensive care unit with SkyMedical’s refurbished ventilators. Sourced from Japanese medical facilities, our ventilators undergo rigorous pneumatic, battery, and sensor testing to ensure flawless performance for adult, pediatric, and neonatal patients.',
        keyBrands: ['Hamilton Medical', 'Dräger', 'Covidien / Medtronic', 'Newport', 'IMI'],
        popularModels: ['Hamilton C2', 'Dräger Evita 4', 'Dräger Savina', 'Covidien PB840', 'Covidien PB980']
    },
    'aesthetic-lasers': {
        name: 'Aesthetic',
        slug: 'aesthetic-lasers',
        h1: 'Used & Refurbished Aesthetic Laser Machines in Pakistan',
        title: 'Refurbished Aesthetic & Dermatological Lasers in Pakistan | Candela & Lumenis | SkyMedical',
        metaDescription: 'Gold-standard aesthetic lasers in Pakistan. Candela GentleMax, Vbeam Perfecta, and Lumenis M22 lasers imported from Japan for dermatology, hair removal, and skin rejuvenation clinics.',
        summary: 'Equip your dermatology clinic or aesthetic medical center with industry-leading lasers from Candela and Lumenis. Sourced directly from Japan, our systems provide effective dual-wavelength hair reduction, vascular lesion treatment, and skin rejuvenation with verified pulse calibration.',
        keyBrands: ['Candela', 'Lumenis', 'JMEC', 'Curia'],
        popularModels: ['Candela GentleMax Pro', 'Candela Vbeam Perfecta', 'Lumenis M22', 'Lumenis LightSheer Duet']
    },
    'infusion-pumps': {
        name: 'Pumps',
        slug: 'infusion-pumps',
        h1: 'Infusion & Syringe Pumps in Pakistan',
        title: 'Refurbished Terumo & JMS Syringe and Infusion Pumps in Pakistan | SkyMedical',
        metaDescription: 'High-accuracy Terumo and JMS syringe and volumetric infusion pumps imported from Japan. Cleaned, flow-calibrated, and battery-tested for hospitals and clinics in Pakistan.',
        summary: 'Deliver precise intravenous medication and enteral nutrition with SkyMedical’s certified Japanese infusion and syringe pumps. Known for exceptional durability and micro-step dosing accuracy, our Terumo and JMS units meet strict ICU and pediatric standards.',
        keyBrands: ['Terumo', 'JMS', 'Kangaroo'],
        popularModels: ['Terumo TE-331 Syringe Pump', 'Terumo TE-372 Infusion Pump', 'JMS SP-500', 'Kangaroo ePump']
    },
    'electrosurgical-units': {
        name: 'Electrosurgical',
        slug: 'electrosurgical-units',
        h1: 'Refurbished Electrosurgical Units (ESU & Cautery) in Pakistan',
        title: 'Valleylab Electrosurgical Cautery Machines in Pakistan | SkyMedical',
        metaDescription: 'Refurbished Valleylab electrosurgical generators and cautery units in Pakistan. Monopolar, bipolar, and vessel sealing systems tested for surgical operating theatres.',
        summary: 'Perform precision surgical cutting and coagulation with Valleylab electrosurgical generators imported from Japan. Every generator is tested with dummy loads and calibrated for RF output accuracy, ensuring patient safety in surgical suites across Pakistan.',
        keyBrands: ['Valleylab / Medtronic'],
        popularModels: ['Valleylab Force Triad', 'Valleylab Force 40', 'Valleylab Force 20', 'Valleylab 300']
    },
    'ophthalmology-or-equipment': {
        name: 'Ophthalmology & OR',
        slug: 'ophthalmology-or-equipment',
        h1: 'Ophthalmology & Operating Room (OR) Equipment in Pakistan',
        title: 'Used Ophthalmic Microscopes, Lasers & OT Equipment in Pakistan | SkyMedical',
        metaDescription: 'Operating microscopes, slit lamps, ophthalmic YAG lasers, and surgical OT tables imported from Japan. Tested and delivered nationwide by SkyMedical Peshawar.',
        summary: 'Equip your surgical suites and eye care practices with imported Japanese operating microscopes, slit lamp biomicroscopes, ophthalmic B-scans, and surgical tables.',
        keyBrands: ['Topcon', 'Nidek', 'Zeiss', 'Generic High-Grade Japan'],
        popularModels: ['Ophthalmic Operating Microscope', 'Nd:YAG Laser System', 'Slit Lamp Biomicroscope', 'OT Operating Table']
    }
};
