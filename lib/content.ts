export const clinic = {
  name: "Indian Dental & Cosmetology Clinic",
  tagline: "A true international dental hospital, creating a new revolution in cosmetology",
  since: 2012,
  regdNo: "A-11755",
  address: "Prabhas College Main Road, Kedareswararaopet, Vijayawada - 520 003",
  // Directions to the clinic's Google Maps listing
  mapsUrl:
    "https://www.google.com/maps/dir//Indian+Dental+cosmetology+clinic,+beside+college+kederesrao+pet,+Main+Rd,+Andhra+Prabha+Colony,+Vijayawada,+Andhra+Pradesh+520003/@16.5258376,80.6659834,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a35e5585fe40f71:0x57b83caa657cbedb!2m2!1d80.6263817!2d16.5254303",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=16.5254303,80.6263817+(Indian+Dental+%26+Cosmetology+Clinic)&z=17&output=embed",
  phones: ["9293922363", "8121010207"],
  whatsapp: "8121010207",
  email: "indiandentalcarevja@gmail.com",
  social: {
    instagram: "https://www.instagram.com/clinicindiandental/",
    facebook: "https://www.facebook.com/profile.php?id=61594200581743",
    youtube: "https://www.youtube.com/@indiandentalvja",
  },
  website: "www.indiandent.com",
  timings: "9:30 AM – 8:30 PM, all days",
  size: "2000 sq. ft. clinic with state-of-the-art equipment",
};

export const doctors = [
  {
    name: "Dr. Durga Prasad",
    role: "Cosmetic Dental Surgeon, Implantologist & Trichologist",
    image: "/Dr.DurgaPrasad.webp",
    focal: "60% 8%",
    bio: "Cosmetic Dental Surgeon, Implantologist, Trichologist, Aesthetic Medicine Practitioner and Consultant Cosmetologist. With a multidisciplinary approach combining dentistry, implantology, skin, hair, laser, cosmetology and aesthetic medicine, Dr. Durga Prasad is committed to providing personalised and comprehensive dental and aesthetic care.",
    credentials: [
      "BDS (2011) — Dr. Sudha & Nageswara Rao Siddhartha Institute of Dental Sciences, India",
      "Master's in Global Health Care — United Kingdom",
      "Medical Cosmetology — Germany",
      "Clinical Cosmetology, Medical Trichology, Facial Aesthetics & Aesthetic Medicine — United Kingdom",
      "Cosmetic & Medical Micropigmentation — United Kingdom",
      "Post Graduate Diploma in Medical Trichology — European International University, France",
    ],
  },
  {
    name: "Dr. R. Bala Sudha",
    role: "Skin Specialist",
    image: "/drbalasudhadermatologist.webp",
    focal: "center top",
    bio: "Specialist in the diagnosis and treatment of skin, hair and nail conditions. She combines medical dermatology with safe, evidence-based aesthetic procedures to help patients achieve healthy, clear and confident skin.",
    credentials: [
      "MD, DVL (Dermatology, Venereology & Leprosy)",
      "Acne, acne scars & open pores",
      "Pigmentation, melasma & uneven skin tone",
      "Eczema, psoriasis, allergies & skin infections",
      "Hair fall, dandruff & scalp disorders",
      "Chemical peels, PRP / GFC & laser treatments",
    ],
  },
  {
    name: "Dr. Devikant",
    role: "Orthodontist",
    image: "/Dr.DevikanthOrthodontics.webp",
    focal: "25% 15%",
    bio: "Specialist in the diagnosis and treatment of dental and jaw alignment problems, including malocclusion, crooked teeth and orthodontic correction.",
  },
  {
    name: "Dr. Sharath",
    role: "Oral Medicine & Radiologist",
    image: "/Dr.Sarathmdsoralmedicineandradiology.webp",
    focal: "center 5%",
    bio: "Specialist in the diagnosis of oral diseases and conditions, with expertise in oral medicine, clinical diagnosis and dental radiology.",
  },
  {
    name: "Dr. Manohar",
    role: "Prosthodontist",
    image: "/Dr.manoharbankaProsthodontics.webp",
    focal: "center 8%",
    bio: "Specialist in the restoration and replacement of missing or damaged teeth, including crowns, bridges, dentures and other prosthodontic rehabilitation procedures.",
  },
  {
    name: "Dr. Venkateswarlu",
    role: "Oral & Maxillofacial Surgeon",
    image: "/Dr.venkatOralandmaxillifacialsurgion.webp",
    focal: "center 8%",
    bio: "Specialist in the surgical management of conditions affecting the mouth, jaws, face and related structures, including complex dental and maxillofacial surgical procedures.",
  },
  {
    name: "Dr. Surendranath Edara",
    role: "Oral & Maxillofacial Surgeon",
    image: "/Dr.surendranathEdaraMaxillifacialsurgion.webp",
    focal: "center 8%",
    bio: "Specialist in the surgical management of conditions affecting the mouth, jaws, face and related structures, including complex dental and maxillofacial surgical procedures.",
  },
  {
    name: "Dr. Raj Kishore",
    role: "Pedodontist / Pediatric Dentist",
    image: "/Dr.RajKishoremdsPedodontic.webp",
    focal: "center 5%",
    bio: "Specialist in dental care for children, including preventive dentistry, diagnosis and treatment of dental problems in children, and child-friendly dental procedures.",
  },
  {
    name: "Dr. Sathish",
    role: "Periodontics",
    image: "/Dr.SatishPeriodontics.webp",
    focal: "center 5%",
    credentials: [
      "MDS in Periodontics — gums and supporting structures of teeth",
      "Over 20 years of experience in dentistry",
      "MDS from A.B. Shetty Memorial Institute of Dental Sciences (2010)",
      "Practices at Pari Poorna Dental Clinic, Satyanarayanapuram, Vijayawada",
    ],
  },
];

export const dentalTreatments = [
  {
    slug: "invisalign",
    name: "Invisalign Clear Aligners",
    detail: "Straighten your teeth without wires or brackets.",
    description:
      "Invisalign uses a series of clear, custom-made aligners that gently move your teeth into place. They are almost invisible, can be removed to eat and brush, and every stage is planned digitally so you can see your new smile before you begin.",
    benefits: ["Nearly invisible", "Removable", "Digitally planned"],
  },
  {
    slug: "laser-dentistry",
    name: "Dental Laser Dentistry",
    detail: "Less anesthesia, fewer visits, greater patient comfort.",
    description:
      "Dental lasers treat gum problems, cavities and sensitivity with precise light energy instead of blades or drills. Most procedures need little or no anaesthesia, cause minimal bleeding and heal faster.",
    benefits: ["Minimal pain", "Less bleeding", "Faster healing"],
  },
  {
    slug: "implantology",
    name: "Implantology",
    detail: "World-class implant placement with a dedicated department.",
    description:
      "A dental implant is a titanium post placed in the jawbone to replace a missing tooth root. Once it bonds with the bone, it holds a crown that looks, feels and chews like your own tooth.",
    benefits: ["Permanent solution", "Natural look & bite", "Protects the jawbone"],
  },
  {
    slug: "zirconia-crowns",
    name: "Zirconia Crown & Bridge Work",
    detail: "No metal, no ceramic — specialists in zirconia restorations.",
    description:
      "Zirconia is a strong, tooth-coloured material for crowns and bridges. Being completely metal-free, it blends naturally with your smile, never shows a dark line at the gum and is gentle on surrounding tissue.",
    benefits: ["Metal-free", "Natural colour", "Long-lasting strength"],
  },
  {
    slug: "zoom-whitening",
    name: "Zoom 2 Teeth Bleaching",
    detail: "World-class bleaching system for a brighter, even smile.",
    description:
      "Zoom is an in-clinic whitening system that lifts deep stains from tea, coffee and age in a single session — done under professional supervision for safe, even results.",
    benefits: ["Results in one visit", "Safe & supervised", "Even, natural shade"],
  },
  {
    slug: "root-canal",
    name: "Single-Visit Root Canal",
    detail: "Apex locator and endomotor for precise, single-sitting treatment.",
    description:
      "When the nerve inside a tooth becomes infected, a root canal removes the infection and seals the tooth to save it. With an apex locator and rotary endomotor, treatment can often be completed in one sitting.",
    benefits: ["Saves your natural tooth", "Fewer visits", "Relieves pain"],
  },
  {
    slug: "tooth-fillings",
    name: "Tooth-Coloured Fillings",
    detail: "Invisible repairs that blend with your natural teeth.",
    description:
      "Cavities and chipped teeth are restored with tooth-coloured composite material that is shade-matched to your teeth — strong, natural-looking and free of the dark look of old silver fillings.",
    benefits: ["Matches your teeth", "Metal-free", "Done in one visit"],
  },
  {
    slug: "braces",
    name: "Braces for Crooked & Protruding Teeth",
    detail: "Straighter teeth and a better bite with orthodontic braces.",
    description:
      "Crooked, crowded, gapped or forward-protruding teeth are gradually moved into the right position using braces, planned and monitored by our orthodontist for a healthier bite and a confident smile.",
    benefits: ["Straighter smile", "Better bite", "Orthodontist-planned"],
  },
  {
    slug: "gum-surgery",
    name: "Gum Disease Treatment & Surgery",
    detail: "Stop bleeding gums and protect the roots of your teeth.",
    description:
      "Advanced gum disease can loosen teeth over time. After a deep clean, our periodontist treats infected and receding gums with procedures such as flap surgery, helping gums heal and hold teeth firmly.",
    benefits: ["Stops gum bleeding", "Saves loose teeth", "Periodontist-led"],
  },
  {
    slug: "digital-xray",
    name: "Digital RVG X-Ray",
    detail: "Radiovisiography for fast, low-radiation diagnosis.",
    description:
      "Radiovisiography (RVG) is a digital X-ray that shows images on screen instantly. It uses far less radiation than film X-rays, and together with our intra-oral scanner lets us diagnose accurately and show you findings right away.",
    benefits: ["Low radiation", "Intra-oral scanning", "Accurate diagnosis"],
  },
  {
    slug: "dentures",
    name: "Fixed Teeth & Denture Sets",
    detail: "Clasp, attachment and flexible-system dentures fitted precisely.",
    description:
      "For missing teeth we offer fixed options as well as removable dentures — clasp, attachment-retained and flexible designs — each custom-made for comfort, stability and a natural appearance.",
    benefits: ["Custom fit", "Comfortable to wear", "Natural appearance"],
  },
  {
    slug: "tooth-extraction",
    name: "Painless Tooth Extraction",
    detail: "Gentle removal when a tooth cannot be saved.",
    description:
      "When a tooth is badly broken, decayed or loose, it is removed gently under local anaesthesia using modern techniques — with clear aftercare advice and options to replace it later.",
    benefits: ["Painless procedure", "Quick healing", "Replacement options"],
  },
  {
    slug: "wisdom-tooth",
    name: "Painless Wisdom Tooth Removal",
    detail: "Removed without pain using modern surgical technique.",
    description:
      "Impacted or painful wisdom teeth are removed using modern, gentle surgical techniques under local anaesthesia — keeping discomfort low and recovery quick.",
    benefits: ["Gentle technique", "Quick recovery", "Prevents future problems"],
  },
  {
    slug: "scaling-polishing",
    name: "Ultrasonic Scaling & Polishing",
    detail: "Deep cleaning that clears stains and bleeding gums.",
    description:
      "Ultrasonic scaling removes hardened plaque (tartar) and stains above and below the gum line, followed by a smooth polish. It helps stop bleeding gums and bad breath and keeps your gums healthy.",
    benefits: ["Healthier gums", "Fresher breath", "Brighter teeth"],
  },
  {
    slug: "oral-cancer",
    name: "Oral Cancer & Pan Masala Care",
    detail: "Early detection and treatment of harmful mouth changes.",
    description:
      "Habits like pan masala, gutka and tobacco can cause white or red patches, burning and stiffness or reduced mouth opening. Our oral medicine specialist examines, diagnoses and treats these conditions — and screens early for oral cancer.",
    benefits: ["Early screening", "Treats mouth stiffness", "Specialist diagnosis"],
  },
  {
    slug: "tmj-disorders",
    name: "Jaw Joint (TMJ) Disorders",
    detail: "Relief from jaw pain, clicking and locking.",
    description:
      "Pain near the ear, clicking sounds, headaches or difficulty opening the mouth can come from the jaw joint. We find the cause and treat it with splints, medication, bite correction or procedures as needed.",
    benefits: ["Pain relief", "Smoother jaw movement", "Cause-based treatment"],
  },
  {
    slug: "jaw-fracture",
    name: "Fractured Jaw Surgery",
    detail: "Expert surgical repair of broken jaw bones.",
    description:
      "Jaw and facial bone fractures from accidents or injuries are treated by our oral & maxillofacial surgeons, who realign and fix the bones so you can bite, chew and speak normally again.",
    benefits: ["Maxillofacial surgeons", "Restores bite", "Proper bone healing"],
  },
  {
    slug: "sterilization",
    name: "B-Class Sterilization",
    detail: "Strict autoclave disinfection protocol on every instrument.",
    description:
      "Every instrument is cleaned and sterilised in a B-Class autoclave — a hospital-grade standard — so each patient is treated with fully sterile equipment, every single time.",
    benefits: ["Hospital-grade", "Every instrument", "Your safety first"],
  },
];

export const skinTreatments = [
  {
    slug: "acne-scars",
    name: "Acne & Acne Scar Management",
    detail: "Clear active breakouts and smooth the marks they leave behind.",
    description:
      "We treat the cause of acne with medical care, then improve pits, marks and uneven texture using peels, lasers and resurfacing — planned in stages for steady, lasting results.",
    benefits: ["Fewer breakouts", "Smoother texture", "Faded marks"],
  },
  {
    slug: "chemical-peels",
    name: "Advanced Chemical Peels",
    detail: "Medical-grade peels for brighter, fresher-looking skin.",
    description:
      "A carefully chosen peel solution gently removes dull, damaged outer layers so newer skin can come through — helping with tan, pigmentation, fine lines and acne marks.",
    benefits: ["Brighter tone", "Even complexion", "Minimal downtime"],
  },
  {
    slug: "anti-aging",
    name: "Anti-Aging Treatments",
    detail: "Soften fine lines and restore a firmer, youthful look.",
    description:
      "A personalised plan combining skin-boosting treatments, collagen stimulation and targeted procedures to reduce wrinkles, sagging and dullness — while keeping your look natural.",
    benefits: ["Fewer fine lines", "Firmer skin", "Natural results"],
  },
  {
    slug: "laser-treatments",
    name: "Advanced Laser Treatments",
    detail: "Precise laser technology for a wide range of skin concerns.",
    description:
      "Medical lasers target pigmentation, scars, open pores and uneven tone with controlled light energy, treating the problem area while protecting the surrounding skin.",
    benefits: ["Precise & targeted", "Quick sessions", "Visible improvement"],
  },
  {
    slug: "sun-tan",
    name: "Sun Tan Removal & Hyperpigmentation",
    detail: "Restore your natural, even skin tone.",
    description:
      "Tan and dark patches are lightened with a mix of peels, lasers and medicated creams, along with guidance on sun protection to keep them from coming back.",
    benefits: ["Even skin tone", "Reduced dark patches", "Long-term care plan"],
  },
  {
    slug: "melasma",
    name: "Melasma Treatment",
    detail: "Specialist care for stubborn brown facial patches.",
    description:
      "Melasma needs a careful, gradual approach. We combine prescription creams, gentle peels and suitable laser settings to lighten patches safely and reduce the chance of relapse.",
    benefits: ["Safe, gradual lightening", "Relapse prevention", "Dermatologist-led"],
  },
  {
    slug: "dark-circles",
    name: "Dark Circles & Skin Lightening",
    detail: "Brighten tired-looking eyes and dull skin.",
    description:
      "After finding the cause of your dark circles — pigmentation, thin skin or hollowness — we choose the right mix of peels, skin boosters or fillers to refresh the under-eye area.",
    benefits: ["Fresher eyes", "Brighter skin", "Cause-based treatment"],
  },
  {
    slug: "botox-fillers",
    name: "Botox, Fillers & Thread Lifts",
    detail: "Subtle, non-surgical facial rejuvenation.",
    description:
      "Botox relaxes expression lines, fillers restore lost volume, and thread lifts gently lift sagging skin — all non-surgical and performed with a light touch for natural results.",
    benefits: ["Non-surgical", "Quick procedure", "Natural-looking"],
  },
  {
    slug: "dermaplaning",
    name: "Dermaplaning & Microdermabrasion",
    detail: "Instant smoothness and a fresh, radiant glow.",
    description:
      "Gentle exfoliation removes dead skin cells and fine facial hair, leaving skin smoother and helping skincare products absorb better — ideal before special occasions.",
    benefits: ["Instant glow", "Smoother skin", "No downtime"],
  },
  {
    slug: "permanent-makeup",
    name: "Permanent Makeup & Medifacials",
    detail: "Defined features and deeply nourished skin.",
    description:
      "Micro-pigmentation enhances brows, lips and lash lines for a polished, low-maintenance look, while medifacials deep-cleanse, hydrate and treat the skin with medical-grade products.",
    benefits: ["Low-maintenance beauty", "Deep hydration", "Polished look"],
  },
  {
    slug: "cryolipolysis",
    name: "Cryolipolysis",
    detail: "Non-surgical fat reduction through controlled cooling.",
    description:
      "Controlled cooling targets stubborn fat pockets on areas like the abdomen and flanks. The treated fat cells are naturally cleared by the body over the following weeks.",
    benefits: ["Non-surgical", "No incisions", "Targets stubborn fat"],
  },
  {
    slug: "lipocavitation",
    name: "Laser Lipocavitation with RF",
    detail: "Body contouring with ultrasound and radiofrequency.",
    description:
      "Ultrasound cavitation helps break down fat cells while radiofrequency tightens the skin over the area — a combined, non-invasive approach to body shaping.",
    benefits: ["Body contouring", "Skin tightening", "Non-invasive"],
  },
  {
    slug: "double-chin",
    name: "Double Chin Reduction",
    detail: "Define your jawline without surgery.",
    description:
      "Using non-surgical fat reduction and skin-tightening techniques, we reduce fullness under the chin and help create a sharper, more defined jaw and neck profile.",
    benefits: ["Sharper jawline", "Non-surgical", "Natural contour"],
  },
  {
    slug: "warts-moles",
    name: "Warts, Skin Tags & Mole Removal",
    detail: "Quick, precise removal with minimal marks.",
    description:
      "Unwanted warts, skin tags and moles are examined first, then removed using precise techniques such as radiofrequency or laser — usually in a single short visit.",
    benefits: ["Quick procedure", "Minimal scarring", "Examined first"],
  },
  {
    slug: "iv-gluta",
    name: "IV Gluta Glow Drips",
    detail: "Antioxidant infusions given under medical supervision.",
    description:
      "An intravenous antioxidant infusion given in the clinic under medical supervision, after a consultation to check it is suitable for you — often chosen as part of a skin-glow plan.",
    benefits: ["Medically supervised", "Consultation first", "Relaxing session"],
  },
  {
    slug: "pre-bridal",
    name: "Pre-Bridal Makeover",
    detail: "A complete skin plan for your big day.",
    description:
      "A personalised programme that starts weeks before the wedding — combining facials, peels, glow treatments and hair care so your skin looks its best in person and in photos.",
    benefits: ["Personalised plan", "Glowing skin", "Camera-ready"],
  },
  {
    slug: "ear-piercing",
    name: "Ear Piercing & Ear Lobe Repair",
    detail: "Safe, hygienic piercing and neat lobe correction.",
    description:
      "Ears are pierced with sterile, hygienic technique, and stretched or torn ear lobes are repaired with a minor procedure so you can wear earrings comfortably again.",
    benefits: ["Sterile technique", "Neat repair", "Quick recovery"],
  },
];

export const hairTreatments = [
  {
    slug: "laser-hair-reduction",
    name: "Permanent Laser Hair Reduction",
    detail: "Smooth, hair-free skin without repeated waxing or shaving.",
    description:
      "Medical-grade laser light targets hair follicles to slow and reduce regrowth over a course of sessions. Suitable for the face, underarms, arms, legs and body, with settings adjusted to your skin type.",
    benefits: ["Long-lasting results", "Face & body", "Quick sessions"],
  },
  {
    slug: "hair-loss",
    name: "Advanced Dandruff & Hair Loss Treatment",
    detail: "Find the cause, then treat it — for stronger, healthier hair.",
    description:
      "We first examine your scalp to understand why hair is falling or flaking, then build a plan with medicated care, PRP and GFC therapy to control dandruff, reduce hair fall and support new growth.",
    benefits: ["Scalp examination", "PRP & GFC therapy", "Personalised plan"],
  },
  {
    slug: "hair-transplant",
    name: "Hair Transplantation",
    detail: "A permanent, natural-looking solution for baldness.",
    description:
      "Healthy hair follicles are moved from a dense donor area to thinning or bald patches. The transplanted hair grows naturally, so results look like your own hair — because they are.",
    benefits: ["Permanent result", "Natural hairline", "Your own hair"],
  },
  {
    slug: "electrolysis",
    name: "Electrolysis Hair Removal",
    detail: "Precise, follicle-by-follicle removal of unwanted hair.",
    description:
      "A fine probe treats each hair follicle individually, making electrolysis ideal for small areas, fine or light-coloured hair and shaping — where lasers are less effective.",
    benefits: ["Works on all hair colours", "Highly precise", "Ideal for small areas"],
  },
];

export const equipment = [
  { name: "Computerised Advanced Dental Chair", note: "Full-motorised comfort seating" },
  { name: "Ultrasonic Instrument Scaler", note: "Precision plaque & stain removal" },
  { name: "Apex Locator & Endomotor", note: "Perfect single-visit root canal" },
  { name: "Digital Radiovisiography X-Ray", note: "Instant, low-dose imaging" },
  { name: "B-Class Sterilization Autoclave", note: "Hospital-grade disinfection" },
  { name: "NSK Physio Dispenser", note: "Precision implant placement" },
  { name: "Dual Nanometer Surgical Laser", note: "Minimally invasive soft-tissue work" },
  { name: "Intra-Oral Scanner", note: "Digital diagnosis & planning" },
];

export const transformations = [
  {
    title: "GFC Therapy",
    description: "Growth factor concentrate therapy for visibly denser, fuller hair.",
    image: "/gallery/transformation-gfc-therapy.webp",
  },
  {
    title: "PRP Therapy",
    description: "Platelet-rich plasma therapy restoring natural hair density and tone.",
    image: "/gallery/transformation-prp-therapy.webp",
  },
  {
    title: "GFC + PRP Therapy",
    description: "Combined growth factor and platelet-rich plasma therapy for advanced hair regrowth.",
    image: "/gallery/transformation-gfc-prp-therapy.webp",
  },
  {
    title: "Chemical Peeling",
    description: "Clinical chemical peel results for brighter, more even-toned skin.",
    image: "/gallery/transformation-chemical-peeling-1.webp",
  },
  {
    title: "Chemical Peeling — Side Profile",
    description: "Side-profile results from the same chemical peel treatment course.",
    image: "/gallery/transformation-chemical-peeling-2.webp",
  },
  {
    title: "Chemical Peeling — Follow-up",
    description: "Follow-up results showing continued improvement after chemical peeling.",
    image: "/gallery/transformation-chemical-peeling-3.webp",
  },
  {
    title: "Acne Treatment (Chemical Peel)",
    description: "Active acne cleared with a course of clinical chemical peels.",
    image: "/gallery/transformation-acne-peel-1.webp",
  },
  {
    title: "Acne Treatment — Side Profile",
    description: "Side-profile results from the same acne treatment course.",
    image: "/gallery/transformation-acne-peel-2.webp",
  },
  {
    title: "Hollywood Peel",
    description: "Hollywood (carbon laser) peel for brighter, more refined skin texture.",
    image: "/gallery/transformation-hollywood-peel-1.webp",
  },
  {
    title: "Hollywood Peel — Side Profile",
    description: "Side-profile results from the same Hollywood peel treatment.",
    image: "/gallery/transformation-hollywood-peel-2.webp",
  },
  {
    title: "Laser Hair Reduction",
    description: "Permanent laser hair reduction for smooth, long-lasting results.",
    image: "/gallery/transformation-laser-hair-reduction.webp",
  },
  {
    title: "Laser Hair Reduction — Chin",
    description: "Clear reduction of dense chin hair after a course of laser sessions.",
    image: "/gallery/transformation-laser-hair-chin.webp",
  },
  {
    title: "Laser Hair Reduction — Face",
    description: "Upper-lip and chin hair visibly reduced for smoother facial skin.",
    image: "/gallery/transformation-laser-hair-face.webp",
  },
  {
    title: "GFC Hair Therapy",
    description: "Denser crown coverage after GFC therapy for thinning hair.",
    image: "/gallery/transformation-gfc-therapy-2.webp",
  },
  {
    title: "Carbon Peel Treatment",
    description: "Brighter, more even skin tone with reduced pigmentation.",
    image: "/gallery/transformation-carbon-peel.webp",
  },
  {
    title: "HydraFacial",
    description: "Calmer, clearer and better-hydrated skin with a fresh glow.",
    image: "/gallery/transformation-hydrafacial.webp",
  },
  {
    title: "Microblading",
    description: "Fuller, well-defined eyebrows with natural-looking strokes.",
    image: "/gallery/transformation-microblading.webp",
  },
  {
    title: "Full Mouth Rehabilitation",
    description: "Worn, damaged teeth restored with a complete set of natural-looking crowns.",
    image: "/gallery/transformation-full-mouth-rehab.webp",
  },
  {
    title: "Smile Makeover with Crowns",
    description: "Stained, decayed front teeth replaced with bright, even crowns.",
    image: "/gallery/transformation-smile-makeover.webp",
  },
];

export const facilityGallery = [
  {
    title: "Advanced skin & hair treatments",
    description: "GFC, acne, melasma, laser hair reduction and more, performed in-house.",
    image: "/gallery/before-after-1.jpg",
  },
  {
    title: "Our equipment & treatment menu",
    description: "Computerised dental chairs, digital RVG X-ray and B-Class sterilization.",
    image: "/gallery/before-after-2.jpg",
  },
  {
    title: "Inside the clinic",
    description: "A 2,000 sq. ft. facility built for international-standard dental and skin care.",
    image: "/gallery/before-after-3.jpg",
  },
  {
    title: "Procedures & patient care",
    description: "Our doctors and staff at work during dental and cosmetology procedures.",
    image: "/gallery/before-after-4.jpg",
  },
];

export const schemes = [
  "Aarogyasri / White Ration Card — highly affordable corporate dental treatments",
  "EHS Health Card / APSRTC, state government employees, retired employees and their families — cashless corporate dental treatments",
];

export const testimonials = [
  // Dental
  {
    name: "Ramesh K.",
    treatment: "Single-Visit Root Canal",
    quote:
      "Painless root canal done in a single sitting — I was back to work the same day.",
    rating: 5,
  },
  {
    name: "Kiran T.",
    treatment: "Dental Implants",
    quote:
      "World-class implant work at a fraction of the cost I was quoted abroad.",
    rating: 5,
  },
  {
    name: "Suresh N.",
    treatment: "Zirconia Crown & Bridge",
    quote:
      "The zirconia crown looks and feels completely natural — no one can tell it's not my tooth.",
    rating: 5,
  },
  {
    name: "Meena R.",
    treatment: "Dental Laser Dentistry",
    quote:
      "The laser treatment needed almost no anesthesia and healed far faster than a regular procedure would have.",
    rating: 5,
  },
  {
    name: "Naveen P.",
    treatment: "Zoom Teeth Bleaching",
    quote:
      "One session and my smile looks years brighter — friends keep asking what I did differently.",
    rating: 5,
  },
  {
    name: "Lakshmi D.",
    treatment: "Digital RVG X-Ray",
    quote:
      "The instant digital X-ray let the doctor show me exactly what was wrong before we even started treatment.",
    rating: 5,
  },
  {
    name: "Venkat Rao",
    treatment: "Fixed Teeth & Dentures",
    quote:
      "My new denture set fits comfortably and looks completely natural — eating in public isn't awkward anymore.",
    rating: 4,
  },
  {
    name: "Sowmya K.",
    treatment: "Painless Wisdom Tooth Removal",
    quote:
      "I was dreading this for years, but it was over before I knew it, with barely any pain afterward.",
    rating: 5,
  },
  {
    name: "Ravi Teja",
    treatment: "Ultrasonic Scaling & Polishing",
    quote:
      "My teeth feel and look noticeably cleaner after a single scaling session — the bleeding gums are finally gone.",
    rating: 5,
  },
  {
    name: "Harika B.",
    treatment: "B-Class Sterilization & Hygiene",
    quote:
      "You can see how seriously they take hygiene — every instrument is sealed and opened fresh in front of you.",
    rating: 5,
  },
  // Skin, hair & cosmetology
  {
    name: "Anjali M.",
    treatment: "Chemical Peeling",
    quote:
      "My acne scars faded within weeks, not months. Genuinely life-changing for my confidence.",
    rating: 5,
  },
  {
    name: "Divya S.",
    treatment: "Laser Hair Reduction",
    quote:
      "Quick, virtually painless sessions with real, long-lasting results.",
    rating: 4,
  },
  {
    name: "Priya V.",
    treatment: "PRP Hair Therapy",
    quote:
      "Noticeably thicker hair after just three PRP sessions. The team explained every step.",
    rating: 5,
  },
  {
    name: "Sindhu P.",
    treatment: "Acne & Acne Scar Management",
    quote:
      "Years of stubborn acne scars are finally fading, with visible improvement every month.",
    rating: 5,
  },
  {
    name: "Radhika Iyer",
    treatment: "Anti-Aging Treatment",
    quote:
      "My skin looks firmer and more even-toned within a month of starting the program.",
    rating: 5,
  },
  {
    name: "Farhan Sheikh",
    treatment: "Advanced Laser Treatment",
    quote:
      "The laser session targeted exactly the pigmentation I wanted gone, with very little downtime.",
    rating: 4,
  },
  {
    name: "Keerthi Reddy",
    treatment: "Sun Tan & Hyperpigmentation Removal",
    quote:
      "My tan and dark patches cleared up faster than any home remedy ever did.",
    rating: 5,
  },
  {
    name: "Padma Latha",
    treatment: "Melasma Treatment",
    quote:
      "Stubborn melasma that bothered me for years has visibly lightened after just a few sessions.",
    rating: 5,
  },
  {
    name: "Ayesha Begum",
    treatment: "Dark Circles & Skin Lightening",
    quote:
      "My dark circles are barely noticeable now — I don't need concealer every morning anymore.",
    rating: 5,
  },
  {
    name: "Nikhitha Rao",
    treatment: "Botox, Fillers & Thread Lift",
    quote:
      "Subtle, natural results — people just say I look well-rested, not that I've had anything done.",
    rating: 5,
  },
  {
    name: "Swathi Chowdary",
    treatment: "Dermaplaning & Microdermabrasion",
    quote:
      "My skin has never felt this smooth, and makeup glides on so much better now.",
    rating: 5,
  },
  {
    name: "Mahesh Babu",
    treatment: "Dandruff & Hair Loss Treatment",
    quote:
      "My dandruff is under control for the first time in years, and the hair fall has slowed down noticeably.",
    rating: 4,
  },
  {
    name: "Srinivas Rao",
    treatment: "Hair Transplantation",
    quote:
      "The results look completely natural — I can style my hair the way I used to again.",
    rating: 5,
  },
  {
    name: "Pravallika",
    treatment: "Permanent Makeup & Medifacial",
    quote:
      "The medifacial left my skin glowing for weeks, and the permanent makeup saves me so much time every morning.",
    rating: 5,
  },
  {
    name: "Jyothi Prasad",
    treatment: "Electrolysis Hair Removal",
    quote:
      "Finally a permanent solution that actually works, session after session.",
    rating: 5,
  },
  {
    name: "Deepthi Varma",
    treatment: "Cryolipolysis",
    quote:
      "The fat-freezing sessions gave visible inch loss without any surgery or downtime.",
    rating: 5,
  },
  {
    name: "Bhargavi N.",
    treatment: "Laser Lipocavitation with RF",
    quote:
      "I noticed my problem areas visibly tightening after just a few RF sessions.",
    rating: 4,
  },
  {
    name: "Chandrakala",
    treatment: "Double Chin Reduction",
    quote:
      "My jawline looks so much more defined now — a change I can see in every photo.",
    rating: 5,
  },
  {
    name: "Rajesh Babu",
    treatment: "Mole & Skin Tag Removal",
    quote:
      "Quick, painless removal with barely any mark left behind.",
    rating: 5,
  },
  {
    name: "Manasa Reddy",
    treatment: "IV Gluta Glow Drips",
    quote:
      "My skin tone looks brighter and more even after completing a course of glow drips.",
    rating: 4,
  },
  {
    name: "Sameera Fathima",
    treatment: "Pre-Bridal Makeover",
    quote:
      "The pre-bridal package had my skin looking flawless for the wedding — best decision I made.",
    rating: 5,
  },
  {
    name: "Lavanya G.",
    treatment: "Ear Lobe Repair",
    quote:
      "My torn earlobe was repaired so neatly that you can't even tell it was ever damaged.",
    rating: 5,
  },
];

// Precautions after tooth extraction — from the clinic's printed guidance
// (పన్ను తీసిన తరువాత తీసుకోవలసిన జాగ్రత్తలు), in English and Telugu.
export const aftercare = [
  {
    en: "Bite firmly on the cotton pad placed after the extraction for one hour.",
    te: "పన్ను తీసిన తరువాత పెట్టిన దూదిని గంట వరకు గట్టిగా కొరికి వుంచవలెను.",
  },
  {
    en: "After one hour, remove the cotton and take the prescribed medicines with cold liquids, exactly as the doctor advised.",
    te: "గంట తరువాత దూదిని తీసి చల్లని ద్రవ పదార్థములతో ఇచ్చిన మందులు డాక్టరు గారు చెప్పిన ప్రకారము వాడవలెను.",
  },
  {
    en: "Do not eat hot or hard foods for 24 hours.",
    te: "వేడిగాని, గట్టిగాని, పదార్థములు 24 గంటల వరకు తినకూడదు.",
  },
  {
    en: "Do not apply hot fomentation or balms (such as Amrutanjan) after the extraction.",
    te: "పన్ను తీసిన తరువాత వేడినీళ్ళు కాపటము గాని, అమృతాంజనము వంటివి గాని రాయడం చేయరాదు.",
  },
  {
    en: "From the next day, gargle with boiled-and-cooled water mixed with salt, three times a day for one week.",
    te: "పన్ను తీసిన తరువాత రోజు నుండి కాచి చల్లార్చిన నీటిలో ఉప్పు కలిపి రోజుకి మూడు సార్లు వారం వరకు పుక్కిలించవలెను.",
  },
  {
    en: "Do not smoke or drink alcohol.",
    te: "పొగత్రాగరాదు. మద్యం సేవించరాదు.",
  },
  {
    en: "If the bleeding does not stop, contact the doctor immediately.",
    te: "రక్తము ఆగనిచో డాక్టరును వెంటనే సంప్రదించవలెను.",
  },
  {
    en: "Do not touch the extraction wound with your tongue or finger.",
    te: "పన్ను తీసిన గాయంలో నాలుకతోగాని, వేలుతోగాని కదిలించరాదు.",
  },
  {
    en: "If you notice any reaction after taking the medicines, contact the doctor immediately before continuing them.",
    te: "మందులు వాడిన పిదప ఎటువంటి రియాక్షన్ వచ్చినచో డాక్టర్ గారికి వెంటనే సంప్రదించి మరలా మందులు వాడవలెను.",
  },
];
