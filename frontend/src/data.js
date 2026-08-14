export const assets = {
  curd: "/images/gomukhi-curd.webp",
  milk: "/images/gomukhi-milk.webp",
  paneer: "/images/amogh-lite-paneer.webp",
  khova: "/images/amogh-khova.webp",
  toned: "/images/sl-toned.webp",
  fleet: "/images/fleet-van.webp",
  exterior: "/images/factory-exterior.webp",
  processing: "/images/factory-processing.webp",
  production: "/images/factory-production.webp",
  productsHero: "/images/products-hero.webp",
  amoghCurd: "/images/amogh-curd.webp",
  amoghCurdBucket: "/images/amogh-curd-bucket.webp",
  amoghPaneer: "/images/amogh-paneer.webp",
  gomukhiDtMilk: "/images/gomukhi-dt-milk.webp",
  gomukhiStandardized: "/images/gomukhi-standardized.webp",
  gomukhiToned: "/images/gomukhi-toned.webp",
  slFullCream: "/images/sl-fullcream.webp",
  slStandardised: "/images/sl-standardised.webp",
  slButterMilk: "/images/sl-buttermilk.webp",
  slCurd: "/images/sl-curd.webp",
  gate: "/images/factory-gate.webp",
  lawns: "/images/factory-lawns.webp",
  shrine: "/images/factory-shrine.webp",
  dusk: "/images/factory-dusk.webp",
  packing: "/images/factory-packing.webp",
  farm: "/images/factory-farm.webp",
  plantInterior: "/images/factory-interior.webp",
  tanker: "/images/fleet-tanker.webp",
  aerial: "/images/factory-aerial.webp",
  fleetGarland: "/images/fleet-garland.webp",
  image1: "/images/1.jpeg",
  image5: "/images/5.jpeg",
  videoPlant: "/videos/film1.mp4",
  videoPacking: "/videos/film2.mp4",
  videoControl: "/videos/film3.mp4",
  videoInspection: "/videos/film4.mp4",
  farmer: "/images/farmers-hero.webp",
  farmerProcurement: "/images/farmers-procurement.webp",
  valuesBaba: "/images/values-baba.webp",
  valuesFounders: "/images/values-founders.webp",
};

export const factoryGallery = [
  { title: "The gates of Sairaksha", caption: "Our name on the wall — Santhipuram 7th Mile, Kuppam", image: assets.gate },
  { title: "The Kuppam plant", caption: "Our main processing unit in Kuppam, Andhra Pradesh", image: assets.exterior },
  { title: "A fleet we call our own", caption: "Milk vans blessed and ready for the day's routes", image: assets.fleetGarland },
  { title: "Green by design", caption: "Lawns and open sky around the main processing block", image: assets.lawns },
  { title: "The heart of processing", caption: "Pasteurisation lines and CIP systems in stainless steel", image: assets.plantInterior },
  { title: "A connected cold chain", caption: "23 insulated vehicles carrying freshness forward", image: assets.fleet },
  { title: "Where every day begins", caption: "The campus shrine at the heart of our plant", image: assets.shrine },
  { title: "Built for precision", caption: "Stainless steel processing and storage systems", image: assets.processing },
  { title: "Milk on the move", caption: "Tankers linking chilling centres to the main plant", image: assets.tanker },
  { title: "Straight from the farm", caption: "Green fields and kitchen gardens at our partner farms", image: assets.farm },
  { title: "People behind every pack", caption: "Careful packing and quality checks on the floor", image: assets.production },
  { title: "Evenings at the plant", caption: "Stone pathways leading to the processing halls", image: assets.dusk },
  { title: "Hygiene on the floor", caption: "Masked, gloved and aproned — every pack weighed and checked", image: assets.packing },
  { title: "Kuppam from above", caption: "Silos, chillers and processing halls under one blue roof", image: assets.aerial },
  { title: "Plant operations", caption: "Continuous quality supervision and operational excellence", image: assets.image1 },
  { title: "Dairy processing facility", caption: "Advanced machinery and processing halls at Sairaksha Dairy", image: assets.image5 },
];

export const plantVideos = [
  { title: "Inside the Plant", caption: "A walkthrough of our processing facility.", video: assets.videoPlant, webm: "/videos/film1.webm", poster: "/posters/film1.jpg" },
  { title: "Packing & Dispatch", caption: "Products organised for same-day delivery.", video: assets.videoPacking, webm: "/videos/film2.webm", poster: "/posters/film2.jpg" },
  { title: "Process Control", caption: "Every parameter monitored in real time.", video: assets.videoControl, webm: "/videos/film3.webm", poster: "/posters/film3.jpg" },
  { title: "Quality Check", caption: "Every batch inspected before it leaves the floor.", video: assets.videoInspection, webm: "/videos/film4.webm", poster: "/posters/film4.jpg" },
];

export const products = [
  { name: "Full Cream Milk", brand: "Gomukhi", category: "Milk", image: assets.milk, note: "Rich, creamy and full of natural goodness.", tags: ["Rich & Creamy", "Pasteurised", "100% Vegetarian"] },
  { name: "Standardized Milk", brand: "Gomukhi", category: "Milk", image: assets.gomukhiStandardized, note: "Consistent richness in every pouch.", tags: ["Consistent Quality", "Homogenised", "Everyday Use"] },
  { name: "Toned Milk", brand: "Gomukhi", category: "Milk", image: assets.gomukhiToned, note: "Multiple pouch sizes for every family.", tags: ["Balanced Fat", "Multiple Packs", "Daily Fresh"] },
  { name: "Double Toned Milk", brand: "Gomukhi", category: "Milk", image: assets.gomukhiDtMilk, note: "Light on fat, full on nutrition.", tags: ["Low Fat", "Pasteurised", "100% Vegetarian"] },
  { name: "Fresh Curd", brand: "Gomukhi", category: "Fresh Curd", image: assets.curd, note: "Made with pure cow milk — thick and naturally set.", tags: ["Cow Milk", "Naturally Set", "Fresh & Healthy"] },
  { name: "Curd", brand: "Amogh", category: "Fresh Curd", image: assets.amoghCurd, note: "Convenient family pouches — farm fresh for a healthy family.", tags: ["Multiple Packs", "Protein Rich", "Farm Fresh"] },
  { name: "Bucket Curd", brand: "Amogh", category: "Fresh Curd", image: assets.amoghCurdBucket, note: "Bulk buckets for households, hotels and caterers.", tags: ["Bulk Pack", "HoReCa Friendly", "Pasteurised"] },
  { name: "Paneer", brand: "Amogh", category: "Dairy foods", image: assets.amoghPaneer, note: "Soft, power-packed protein — perfect for curries, tikka and salads.", tags: ["High Protein", "Soft Texture", "500g – 1Kg Packs"] },
  { name: "Lite Paneer", brand: "Amogh", category: "Dairy foods", image: assets.paneer, note: "Power packed protein, lighter on fat.", tags: ["High Protein", "Lite", "Everyday Use"] },
  { name: "Unsweetened Khova", brand: "Amogh", category: "Dairy foods", image: assets.khova, note: "For healthy sweets and festive cooking.", tags: ["Pure Milk", "No Added Sugar", "Festive Ready"] },
  { name: "Full Cream Milk", brand: "Sri Lakshmi", category: "Milk", image: assets.slFullCream, note: "Rich and creamy — care for your health in every glass.", tags: ["Rich & Creamy", "Pasteurised", "100% Vegetarian"] },
  { name: "Standardised Milk", brand: "Sri Lakshmi", category: "Milk", image: assets.slStandardised, note: "Consistent quality, pasteurised and homogenised.", tags: ["Consistent Quality", "Homogenised", "Everyday Use"] },
  { name: "Double Toned Milk", brand: "Sri Lakshmi", category: "Milk", image: assets.toned, note: "Pasteurised & homogenised — care for your health.", tags: ["Low Fat", "Pasteurised", "Daily Fresh"] },
  { name: "Butter Milk", brand: "Sri Lakshmi", category: "Fresh Curd", image: assets.slButterMilk, note: "Light, refreshing and cooling — the everyday thirst quencher.", tags: ["Refreshing", "Light", "Daily Fresh"] },
  { name: "Curd", brand: "Sri Lakshmi", category: "Fresh Curd", image: assets.slCurd, note: "Thick, naturally set curd in family pouches.", tags: ["Naturally Set", "Fresh & Healthy", "Multiple Packs"] },
];

export const brands = [
  { name: "Gomukhi", sub: "Quality · Purity", color: "terracotta", text: "Everyday milk and cultured favourites, made with care." },
  { name: "Amogh", sub: "Farm fresh", color: "sun", text: "Paneer, curd and khova made for nourishing family moments." },
  { name: "Sri Lakshmi", sub: "Care for your health", color: "lemon", text: "A trusted choice for simple, wholesome milk." },
];

export const purityChecks = [
  { icon: "ShieldCheck", title: "Antibiotic-Free Testing", text: "Every batch is screened to ensure zero antibiotic residues before processing begins.", stat: "100%", statLabel: "Tested" },
  { icon: "Thermometer", title: "Pasteurisation Safety Check", text: "Milk is pasteurised at precise temperatures to eliminate harmful bacteria while preserving nutrition.", stat: "72°C", statLabel: "Precision" },
  { icon: "FlaskConical", title: "Quality Lab Inspection", text: "Our in-house lab tests for fat content, SNF, adulteration and microbial safety.", stat: "50+", statLabel: "Tests" },
  { icon: "PackageCheck", title: "Hygienic Automated Packaging", text: "Sealed on fully automated lines with zero human contact to guarantee purity.", stat: "0%", statLabel: "Contact" },
];

export const timeline = [
  { year: "2012", title: "Foundation", text: "Started our journey with 5,000 litres of milk per day.", tag: "5,000 litres / day", icon: "Flag" },
  { year: "2015", title: "A Connected Network", text: "Expanded our collection network with chilling centres and village-level procurement.", tag: "3 Chilling Centres", icon: "Snowflake" },
  { year: "2019", title: "Multi-State Reach", text: "Extended our distribution across Andhra Pradesh, Karnataka, Tamil Nadu and Telangana.", tag: "4 States", icon: "MapPin" },
  { year: "2022", title: "Scale with Care", text: "Daily sales grew to 70,000 litres of milk & curd and 2,000 kg of paneer.", tag: "70,000 litres / day", icon: "TrendingUp" },
  { year: "2024", title: "₹100 Crore Turnover", text: "Achieved a turnover of ₹100 crore, backed by expanded operations and capacity.", tag: "₹100 Crore", icon: "Award" },
  { year: "2027", title: "The SMP Vision", text: "Planning a Skimmed Milk Powder (SMP) plant of 25 MT per day at Kuppam.", tag: "25 MT / day", icon: "Factory" },
];

export const fssaiNumber = "10118010000287";

export const locations = [
  { name: "Kuppam Packing Unit", capacity: "2,00,000 litres / day", role: "Main plant · Chittoor Dist" },
  { name: "Rayakotai CC", capacity: "50,000 litres / day", role: "Chilling centre" },
  { name: "Thirupathur CC", capacity: "50,000 litres / day", role: "Chilling centre" },
  { name: "Indure CC", capacity: "10,000 litres / day", role: "Chilling centre" },
];

export const empowerment = [
  { icon: "IndianRupee", title: "Fair Pricing", text: "Transparent, competitive pricing based on fat and SNF quality parameters. No middlemen, no exploitation." },
  { icon: "GraduationCap", title: "Training Programs", text: "Regular workshops on cattle management, feed optimisation and clean milking practices." },
  { icon: "Stethoscope", title: "Veterinary Support", text: "Veterinary camps and on-call support for cattle health and breeding assistance." },
  { icon: "TrendingUp", title: "Growth Partnerships", text: "Support for farmers to expand their herds and improve yield season after season." },
  { icon: "Users", title: "Community Building", text: "Farmer groups and women's dairy groups fostering collective growth across villages." },
  { icon: "ShieldCheck", title: "Insurance Support", text: "Cattle insurance schemes protecting farmers from unforeseen losses." },
];
