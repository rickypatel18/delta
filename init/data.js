// for sample data intialization

const sampleListing = [
  {
    title: "My new villa",
    description: "By the beach",
    image:
      "https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150755.jpg",
    price: 1200,
    location: "Goa",
    country: "India",
  },
  {
    title: "Villa with building",
    description:
      "By the beach, this villa offers breathtaking ocean views and a private pool. Ideal for family vacations or romantic getaways.",
    image:
      "https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150755.jpg",
    price: 1200,
    location: "Goa",
    country: "India",
  },
  {
    title: "Modern Apartment",
    description:
      "Located in the heart of the city, this apartment features stylish interiors and easy access to shopping and nightlife.",
    image:
      "https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150755.jpg",
    price: 900,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "Rustic Cottage",
    description:
      "Nestled in lush greenery, this cozy cottage offers a peaceful escape with stunning views of the mountains.",
    image:
      "https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150755.jpg",
    price: 750,
    location: "Manali",
    country: "India",
  },
  {
    title: "Beach House",
    description:
      "Steps from the ocean, this beach house boasts luxurious amenities and plenty of space to relax and unwind.",
    image:
      "https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150755.jpg",
    price: 1500,
    location: "Malibu",
    country: "USA",
  },
  {
    title: "Luxury Condo",
    description:
      "Enjoy the skyline views in this high-rise condo, complete with modern furnishings and top-notch facilities.",
    image:
      "https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150755.jpg",
    price: 2000,
    location: "New York",
    country: "USA",
  },
  {
    title: "Countryside Bungalow",
    description:
      "Set in the picturesque countryside, this bungalow offers a quiet retreat with all the comforts of home.",
    image:
      "https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150755.jpg",
    price: 800,
    location: "Cotswolds",
    country: "UK",
  },
  {
    title: "Penthouse Suite",
    description:
      "A luxurious penthouse suite with a private rooftop terrace and panoramic views of the bustling city below.",
    image:
      "https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150755.jpg",
    price: 2500,
    location: "London",
    country: "UK",
  },
  {
    title: "Hilltop Villa",
    description:
      "Perched on a hill, this villa offers unmatched panoramic views and a serene, tranquil environment.",
    image:
      "https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150755.jpg",
    price: 1800,
    location: "Shimla",
    country: "India",
  },
  {
    title: "Farmhouse Escape",
    description:
      "A charming farmhouse surrounded by vineyards, perfect for a peaceful weekend or a relaxing getaway.",
    image:
      "https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150755.jpg",
    price: 1000,
    location: "Nashik",
    country: "India",
  },
  {
    title: "Beachside Resort",
    description:
      "This resort combines luxury and comfort with its prime beachfront location and world-class amenities.",
    image:
      "https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150755.jpg",
    price: 1400,
    location: "Kerala",
    country: "India",
  },
  {
    title: "Studio Apartment",
    description:
      "Compact and stylish, this studio apartment is perfect for solo travelers or couples visiting the vibrant city.",
    image:
      "https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150755.jpg",
    price: 700,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Urban Loft",
    description:
      "Experience urban living at its finest in this modern loft with high ceilings and chic industrial decor.",
    image:
      "https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150755.jpg",
    price: 1600,
    location: "Berlin",
    country: "Germany",
  },
  {
    title: "Seaside Cottage",
    description:
      "This charming seaside cottage is the perfect spot to enjoy fresh ocean air and the sound of waves.",
    image:
      "https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150755.jpg",
    price: 1200,
    location: "Cornwall",
    country: "UK",
  },
  {
    title: "Eco Lodge",
    description:
      "Stay at this eco-friendly lodge that offers sustainable luxury surrounded by the beauty of nature.",
    image:
      "https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150755.jpg",
    price: 1300,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Historic Manor",
    description:
      "Step back in time at this historic manor, featuring vintage decor and a rich cultural heritage.",
    image:
      "https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150755.jpg",
    price: 1900,
    location: "Edinburgh",
    country: "Scotland",
  },
  {
    title: "Desert Villa",
    description:
      "Relax in this luxurious desert villa with modern amenities and a stunning view of the dunes.",
    image:
      "https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150755.jpg",
    price: 1700,
    location: "Dubai",
    country: "UAE",
  },
  {
    title: "Tropical Retreat",
    description:
      "Escape to this tropical retreat with lush surroundings, pristine beaches, and luxurious accommodations.",
    image:
      "https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150755.jpg",
    price: 2000,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "City Center Flat",
    description:
      "Stay in the heart of the city in this flat, ideal for exploring local attractions and enjoying urban life.",
    image:
      "https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150755.jpg ",
    price: 1100,
    location: "Paris",
    country: "France",
  },
  {
    title: "Luxury Chalet",
    description:
      "A stunning chalet with ski-in, ski-out access, perfect for a luxurious mountain holiday.",
    image:
      "https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150755.jpg",
    price: 3000,
    location: "Zermatt",
    country: "Switzerland",
  },
  {
    title: "Private Island",
    description:
      "Enjoy exclusive access to this private island, complete with pristine beaches and world-class amenities.",
    image:
      "https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150755.jpg",
    price: 10000,
    location: "Maldives",
    country: "Maldives",
  },
];

module.exports = { data: sampleListing }; //key value pair not changing name
