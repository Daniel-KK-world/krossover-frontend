// src/data/services.js

// ─── SERVICE HERO/BANNER IMAGES ─────────────────────────────────
import busHiringImg from '../assets/bus_hiring.JPG';
import drivingSchoolImg from '../assets/driving_school.JPG';
import deliveryImg from '../assets/delivery.JPG';
import travelTourImg from '../assets/travel_and_tour.JPG';
import maintenanceImg from '../assets/maintenance.JPG';
import towingImg from '../assets/towing.JPG';

// ─── CAR IMAGES ─────────────────────────────────────────────────
import ayaloloImg from '../assets/cars/ayalolobus.JPG';
import kiaTruckImg from '../assets/cars/kiatruck.JPG';
import metroMassImg from '../assets/cars/metromassbus.JPG';
import nissanFrontierImg from '../assets/cars/nissanfrontier.JPG';
import saloonCarsImg from '../assets/cars/salooncars.JPG';
import sprinterBusImg from '../assets/cars/sprinterbus.JPG';
import toyotaCoasterImg from '../assets/cars/toyatacostal.JPG';
import toyotaLandCruiserImg from '../assets/cars/toyotalandcruiser.JPG';
import toyotaVoxyImg from '../assets/cars/toyotavoxy.JPG';
import vipBusImg from '../assets/cars/vipbus.JPG';

// ─── NEWLY ADDED CAR IMAGES ─────────────────────────────────────
import toyotaHiaceImg from '../assets/cars/toyotahiace.JPG';
import nissanNavaraImg from '../assets/cars/nissannirvana.JPG';
import toyotaCorollaImg from '../assets/cars/toyotacorolla.JPG';
import suvImg from '../assets/cars/toyotalandcruiser.JPG';

// ─── DRIVING SCHOOL IMAGES ──────────────────────────────────────
import learnerDriverImg from '../assets/learner_driver.JPG';
import defensiveDrivingImg from '../assets/defensive_driving.JPG';
import professionalDriverImg from '../assets/professional_driver.JPG';
import executiveChauffeurImg from '../assets/executive_chauffeur.JPG';
import corporateDriverImg from '../assets/corporate_driver.JPG';

export const services = [
  // ============================================================
  // 1. BUS HIRING — LIVE
  // ============================================================
  {
    id: 1,
    slug: 'bus-hiring',
    name: 'Bus Hiring Services',
    icon: '🚌',
    status: 'live',
    formType: 'vehicle',
    shortDescription: 'Buses, minibuses, trucks, and executive vehicles for every need.',
    image: busHiringImg,
    heroImage: busHiringImg,
    fullDescription: `Our Bus Hiring Services offer top-tier transportation solutions for all your needs.

Whether you need a bus for a group trip, an executive car for a business meeting, or a truck for hauling materials — we have the perfect vehicle for you. All vehicles are regularly maintained and driven by professional, licensed drivers.

We offer flexible hire options — hourly, daily, or long-term contracts.

Our fleet is organized into four categories:
• Buses & Group Transport — for large group movements
• Executive & Minibus Transport — for premium small group travel
• Utility & Field Transport — for work and load hauling
• Executive Vehicles — for VIP personal travel`,
    features: [
      'Professional drivers',
      'Well-maintained vehicles',
      '24/7 customer support',
      'GPS tracking',
      'Insurance coverage',
      'Flexible hire periods'
    ],
    fleetGroups: [
      {
        groupName: 'Buses & Group Transport',
        groupIcon: '🚌',
        groupDescription: 'Large group movers for corporate events, church programmes, weddings, tours, and school trips.',
        vehicles: [
          { name: 'Toyota Coaster',       capacity: '25 – 30 Passengers',     price: 'From GHS 1,300', description: 'Ideal for corporate, church, weddings, tours, school trips.', image: toyotaCoasterImg },
          { name: 'Metro-Mass Bus',       capacity: '45 – 60 Passengers',     price: 'From GHS 2,500', description: 'Ideal for large group movements and events.', image: metroMassImg },
          { name: 'VIP Bus',              capacity: '45 – 60 Passengers',     price: 'From GHS 2,800', description: 'Premium bus for corporate and VIP group travel.', image: vipBusImg },
          { name: 'Ayalolo Bus',          capacity: '45 Seats + 30 Standing', price: 'From GHS 2,300', description: 'High-capacity bus for large movements.', image: ayaloloImg },
          { name: 'Sprinter Mini-Bus',    capacity: '20 – 25 Passengers',     price: 'From GHS 600',   description: 'Ideal for church, weddings, excursions, school trips.', image: sprinterBusImg },
        ],
      },
      {
        groupName: 'Executive & Minibus Transport',
        groupIcon: '🚐',
        groupDescription: 'Premium small-group transport for executive trips, airport transfers, and tours.',
        vehicles: [
          { name: 'Toyota Voxy',          capacity: '6 – 8 Passengers',       price: 'From GHS 800',   description: 'Ideal for executive trips, airport transfers, tours.', image: toyotaVoxyImg },
          { name: 'Toyota Hiace',         capacity: '13 – 14 Passengers',     price: 'From GHS 1,200', description: 'Ideal for corporate, church, and group movements.', image: toyotaHiaceImg },
          { name: 'Toyota Land Cruiser',  capacity: '5 – 7 Passengers',       price: 'From GHS 1,200', description: 'Ideal for executive trips, off-road, airport transfers.', image: toyotaLandCruiserImg },
        ],
      },
      {
        groupName: 'Utility & Field Transport',
        groupIcon: '🛻',
        groupDescription: 'Work vehicles for load hauling, pickups, and field operations.',
        vehicles: [
          { name: 'Kia Truck',            capacity: '1 – 2 Passengers',       price: 'From GHS 500',   description: 'Ideal for load or items pickups.', image: kiaTruckImg },
          { name: 'Nissan Frontier Pickup', capacity: '3 – 4 Passengers',     price: 'From GHS 800',   description: 'For transporting bulky materials and loads.', image: nissanFrontierImg },
          { name: 'Nissan Navara',        capacity: '3 – 4 Passengers',       price: 'From GHS 900',   description: 'Versatile pickup for field and utility work.', image: nissanNavaraImg },
        ],
      },
      {
        groupName: 'Executive Vehicles',
        groupIcon: '🚗',
        groupDescription: 'VIP personal transport for executive travel, airport transfers, and city movements.',
        vehicles: [
          { name: 'Saloon Cars',          capacity: '4 – 6 Passengers',       price: 'From GHS 1,000', description: 'Ideal for executive trips and airport transfers.', image: saloonCarsImg },
          { name: 'Toyota Corolla',       capacity: '4 – 5 Passengers',       price: 'From GHS 900',   description: 'Reliable executive car for daily travel.', image: toyotaCorollaImg },
          { name: 'SUVs',                 capacity: '5 – 7 Passengers',       price: 'From GHS 1,500', description: 'Spacious SUVs for executive and family travel.', image: suvImg },
        ],
      },
    ],
    gallery: [busHiringImg, busHiringImg, busHiringImg],
  },

  // ============================================================
  // 2. MECHANICS & MAINTENANCE — LIVE
  // ============================================================
  {
    id: 2,
    slug: 'maintenance',
    name: 'Mechanics & Maintenance',
    icon: '🔧',
    status: 'live',
    formType: 'service',
    shortDescription: 'Expert vehicle diagnostics, routine maintenance, and repairs.',
    image: maintenanceImg,
    heroImage: maintenanceImg,
    fullDescription: `Our Mechanics & Maintenance services keep your vehicles in top condition.

From routine oil changes to major engine repairs, our certified mechanics use state-of-the-art diagnostic equipment to identify and fix issues quickly.

Our services include:
• Routine maintenance
• Engine diagnostics
• Brake repairs
• Transmission services
• Electrical repairs
• Vehicle inspections`,
    features: ['Certified mechanics', 'Modern equipment', 'Genuine parts', 'Quick turnaround', 'Warranty on repairs', 'Free inspection'],
    fleet: [
      { name: 'Basic Service', capacity: 'All vehicles', price: 'GHS 150 – 300', description: 'Oil change, filter replacement, and full inspection.', image: maintenanceImg },
      { name: 'Full Service',  capacity: 'All vehicles', price: 'GHS 300 – 600', description: 'Complete vehicle check-up and maintenance.', image: maintenanceImg },
      { name: 'Major Repairs', capacity: 'All vehicles', price: 'Custom quote', description: 'Engine, transmission, and major component repairs.', image: maintenanceImg },
    ],
    gallery: [maintenanceImg, maintenanceImg],
  },

  // ============================================================
  // 3. DRIVER DEVELOPMENT ACADEMY — LIVE
  // ============================================================
  {
    id: 3,
    slug: 'driving-school',
    name: 'Krossover Driver Development Academy',
    icon: '🎓',
    status: 'coming-soon',
    formType: 'null',
    shortDescription: 'Learn to drive | Learn to drive safely | Become a professional driver.',
    image: drivingSchoolImg,
    heroImage: drivingSchoolImg,
    fullDescription: `The Krossover Driver Development Academy is not just a driving school — it's a complete driver development pathway.

We don't just teach people how to drive. We develop responsible, safe, and professional drivers — from first-time learners to executive chauffeurs and corporate fleet drivers.

Our programmes are aligned with DVLA requirements and cover the full journey:
Training → Certification → Employment/Placement → Professional Driver Services.

Why Krossover:
• DVLA-aligned curriculum
• Certified instructors
• Structured training records
• Professional driver certification levels
• Career pathway from learner to executive chauffeur`,
    features: ['DVLA-aligned training', 'Certified instructors', 'Theory and practical lessons', 'Defensive driving expertise', 'Professional certification', 'Driver placement support'],
    fleet: [
      { name: 'Learner Driver Programme',            capacity: '5 weeks',                price: 'From GHS 1,800', description: 'Beginner course for first-time drivers and professionals preparing for DVLA licensing.', image: learnerDriverImg },
      { name: 'Defensive Driving Academy',           capacity: '1 – 2 days + assessment', price: 'From GHS 1,500', description: 'Advanced safety training for corporate, personal, and fleet drivers.', image: defensiveDrivingImg },
      { name: 'Professional Driver Development',     capacity: '5 – 7 weeks',             price: 'From GHS 3,500', description: 'Train to become a professional chauffeur or corporate driver.', image: professionalDriverImg },
      { name: 'Executive / VIP Chauffeur Programme', capacity: 'Premium one-on-one',     price: 'From GHS 3,500', description: 'Premium programme for CEOs, diplomats, executives, and expatriates.', image: executiveChauffeurImg },
      { name: 'Corporate Driver Training',           capacity: '10 – 20 drivers',        price: 'From GHS 5,500', description: 'On-site B2B training for company drivers.', image: corporateDriverImg },
    ],
    gallery: [drivingSchoolImg, drivingSchoolImg],
  },

  // ============================================================
  // 4. DELIVERY SERVICES — COMING SOON
  // ============================================================
  {
    id: 4,
    slug: 'delivery',
    name: 'Delivery Services',
    icon: '📦',
    status: 'coming-soon',
    formType: null,
    shortDescription: 'Fast, secure, and efficient logistics and delivery solutions.',
    image: deliveryImg,
    heroImage: deliveryImg,
    fullDescription: `Our Delivery Services are coming soon.`,
    features: ['Real-time tracking', 'Secure packaging', 'Same-day options', '24/7 support'],
    fleet: [],
    gallery: [deliveryImg, deliveryImg],
  },

  // ============================================================
  // 5. TRAVEL & TOUR — COMING SOON
  // ============================================================
  {
    id: 5,
    slug: 'travel-tour',
    name: 'Travel & Tour',
    icon: '✈️',
    status: 'coming-soon',
    formType: null,
    shortDescription: 'Comprehensive travel management, ticketing, and tour consultancy.',
    image: travelTourImg,
    heroImage: travelTourImg,
    fullDescription: `Our Travel & Tour services are coming soon.`,
    features: ['Best price guarantee', 'Custom packages', 'Visa support', '24/7 assistance'],
    fleet: [],
    gallery: [travelTourImg, travelTourImg],
  },

  // ============================================================
  // 6. TOWING SERVICES — COMING SOON
  // ============================================================
  {
    id: 6,
    slug: 'towing',
    name: 'Towing Services',
    icon: '🛻',
    status: 'coming-soon',
    formType: null,
    shortDescription: '24/7 rapid response vehicle towing and roadside assistance.',
    image: towingImg,
    heroImage: towingImg,
    fullDescription: `Our Towing Services are coming soon.`,
    features: ['24/7 availability', 'Rapid response', 'All vehicle types', 'Professional drivers'],
    fleet: [],
    gallery: [towingImg, towingImg],
  },
];

export const getServiceBySlug = (slug) => services.find(s => s.slug === slug);
export const getRelatedServices = (currentSlug, limit = 3) => services.filter(s => s.slug !== currentSlug).slice(0, limit);