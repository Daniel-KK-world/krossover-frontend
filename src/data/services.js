// src/data/services.js

import busHiringImg from '../assets/bus_hiring.JPG';
import drivingSchoolImg from '../assets/driving_school.JPG';
import deliveryImg from '../assets/delivery.JPG';
import travelTourImg from '../assets/travel_and_tour.JPG';
import maintenanceImg from '../assets/maintenance.JPG';
import towingImg from '../assets/towing.JPG';

// Placeholder for new categories (swap with real images later)
import carRentalImg from '../assets/bus_hiring.JPG';
import truckRentalImg from '../assets/bus_hiring.JPG';

export const services = [
  // ============================================================
  // 1. BUS HIRING SERVICES - ALL BUSES GO HERE
  // ============================================================
  {
    id: 1,
    slug: 'bus-hiring',
    name: 'Bus Hiring Services',
    icon: '🚌',
    shortDescription: 'Premium and reliable buses for corporate events, private trips, and commercial transport.',
    image: busHiringImg,
    heroImage: busHiringImg,
    fullDescription: `Our Bus Hiring Services offer top-tier transportation solutions for all your needs.
Whether you're planning a corporate event, a private trip, or need commercial transport, we have the perfect vehicle for you.`,
    features: [
      'Professional drivers',
      'Air-conditioned vehicles',
      '24/7 customer support',
      'Flexible hire periods'
    ],
    fleet: [
      {
        name: 'Toyota Coaster Bus',
        capacity: '25 – 30 Passengers',
        price: 'From GHS 1,300',
        description: 'Ideal for corporate, church, weddings, tours, school trips.',
        image: busHiringImg,
      },
      {
        name: 'Ayalolo Bus',
        capacity: '45 Seats + 30 Standing',
        price: 'From GHS 2,300',
        description: 'Ideal for corporate, church, weddings, tours, school trips.',
        image: busHiringImg,
      },
      {
        name: 'Metro-Mass Bus',
        capacity: '45 - 60 Passengers',
        price: 'From GHS 2,500',
        description: 'Ideal for corporate, church, weddings, tours, school trips.',
        image: busHiringImg,
      },
      {
        name: 'VIP Bus',
        capacity: '45 - 60 Passengers',
        price: 'From GHS 2,800',
        description: 'Ideal for corporate, church, weddings, tours, school trips.',
        image: busHiringImg,
      },
      {
        name: 'Toyota Hiace Mini-Bus',
        capacity: '13 - 14 Passengers',
        price: 'From GHS 1,200',
        description: 'Ideal for corporate, church, weddings, tours, school trips.',
        image: busHiringImg,
      },
      {
        name: 'Sprinter Mini-Bus',
        capacity: '20 - 25 Passengers',
        price: 'From GHS 600',
        description: 'Ideal for church, weddings, excursions, school trips.',
        image: busHiringImg,
      },
    ],
    gallery: [busHiringImg, busHiringImg, busHiringImg],
  },

  // ============================================================
  // 2. CAR RENTAL SERVICES - VOXY + SALOON GO HERE
  // ============================================================
  {
    id: 7,
    slug: 'car-rental',
    name: 'Car Rental Services',
    icon: '🚗',
    shortDescription: 'Premium car rental for executive travel, airport transfers, and group movements.',
    image: carRentalImg,
    heroImage: carRentalImg,
    fullDescription: `Our Car Rental Services offer premium vehicles for executive travel, airport transfers, and group transport.`,
    features: [
      'Professional drivers',
      'Well-maintained vehicles',
      'Flexible hire periods',
      'Executive travel'
    ],
    fleet: [
      {
        name: 'Toyota Voxy',
        capacity: '6 - 8 Passengers',
        price: 'From GHS 800',
        description: 'Ideal for executive trips, airport transfers, tours.',
        image: carRentalImg,
      },
      {
        name: 'Saloon Cars',
        capacity: '4 - 6 Passengers',
        price: 'From GHS 1,000',
        description: 'Ideal for executive trips, airport transfers.',
        image: carRentalImg,
      },
    ],
    gallery: [carRentalImg, carRentalImg],
  },

  // ============================================================
  // 3. TRUCK RENTAL SERVICES - KIA TRUCK + PICKUP GO HERE
  // ============================================================
  {
    id: 8,
    slug: 'truck-rental',
    name: 'Truck Rental Services',
    icon: '🛻',
    shortDescription: 'Reliable trucks for load transportation, bulk materials, and logistics.',
    image: truckRentalImg,
    heroImage: truckRentalImg,
    fullDescription: `Our Truck Rental Services provide reliable vehicles for load transportation and logistics.`,
    features: [
      'Professional drivers',
      'Reliable trucks',
      'Flexible hire periods',
      'Bulk load transportation'
    ],
    fleet: [
      {
        name: 'Kia Truck',
        capacity: '1 - 2 Passengers',
        price: 'From GHS 500',
        description: 'Ideal for load or items pickups.',
        image: truckRentalImg,
      },
      {
        name: 'Pickup Truck',
        capacity: '3 - 4 Passengers',
        price: 'From GHS 800',
        description: 'For transporting bulky materials and loads.',
        image: truckRentalImg,
      },
    ],
    gallery: [truckRentalImg, truckRentalImg],
  },

  // ============================================================
  // 4. DRIVING SCHOOL
  // ============================================================
  {
    id: 2,
    slug: 'driving-school',
    name: 'Driving School',
    icon: '🚗',
    shortDescription: 'Train with seasoned professionals. License acquisition and renewals.',
    image: drivingSchoolImg,
    heroImage: drivingSchoolImg,
    fullDescription: `Our Driving School provides comprehensive training for all types of vehicles.`,
    features: [
      'Certified instructors',
      'Flexible schedules',
      'License assistance',
      'Theory and practical lessons'
    ],
    fleet: [
      {
        name: 'Manual Training',
        capacity: 'Standard cars',
        price: 'GHS 50/session',
        description: 'Learn to drive manual transmission vehicles.',
        image: drivingSchoolImg,
      },
      {
        name: 'Automatic Training',
        capacity: 'Automatic cars',
        price: 'GHS 60/session',
        description: 'Learn to drive automatic transmission vehicles.',
        image: drivingSchoolImg,
      },
      {
        name: 'Complete Package',
        capacity: 'Full course',
        price: 'GHS 800 - 1200',
        description: 'Full training + license assistance.',
        image: drivingSchoolImg,
      },
    ],
    gallery: [drivingSchoolImg, drivingSchoolImg],
  },

  // ============================================================
  // 5. DELIVERY SERVICES
  // ============================================================
  {
    id: 3,
    slug: 'delivery',
    name: 'Delivery Services',
    icon: '📦',
    shortDescription: 'Fast, secure, and efficient logistics and delivery solutions.',
    image: deliveryImg,
    heroImage: deliveryImg,
    fullDescription: `Our Delivery Services ensure your packages reach their destination safely and on time.`,
    features: [
      'Real-time tracking',
      'Secure packaging',
      'Same-day options',
      '24/7 support'
    ],
    fleet: [
      {
        name: 'Standard Delivery',
        capacity: 'Up to 50kg',
        price: 'GHS 20 - 50',
        description: 'Regular delivery for small packages.',
        image: deliveryImg,
      },
      {
        name: 'Express Delivery',
        capacity: 'Up to 30kg',
        price: 'GHS 50 - 100',
        description: 'Priority delivery within hours.',
        image: deliveryImg,
      },
      {
        name: 'Bulk Logistics',
        capacity: '500kg+',
        price: 'Custom quote',
        description: 'Large volume commercial deliveries.',
        image: deliveryImg,
      },
    ],
    gallery: [deliveryImg, deliveryImg],
  },

  // ============================================================
  // 6. TRAVEL & TOUR
  // ============================================================
  {
    id: 4,
    slug: 'travel-tour',
    name: 'Travel & Tour',
    icon: '✈️',
    shortDescription: 'Comprehensive travel management, ticketing, and tour consultancy.',
    image: travelTourImg,
    heroImage: travelTourImg,
    fullDescription: `Our Travel & Tour services handle flight bookings, hotel reservations, and tour packages.`,
    features: [
      'Best price guarantee',
      'Custom packages',
      'Visa support',
      '24/7 assistance'
    ],
    fleet: [
      {
        name: 'Local Tours',
        capacity: '1-10 people',
        price: 'GHS 200 - 500',
        description: 'Explore local attractions and landmarks.',
        image: travelTourImg,
      },
      {
        name: 'International Tours',
        capacity: 'Custom groups',
        price: 'Custom quote',
        description: 'Full-service international travel packages.',
        image: travelTourImg,
      },
    ],
    gallery: [travelTourImg, travelTourImg],
  },

  // ============================================================
  // 7. MECHANICS & MAINTENANCE
  // ============================================================
  {
    id: 5,
    slug: 'maintenance',
    name: 'Mechanics & Maintenance',
    icon: '🔧',
    shortDescription: 'Expert vehicle diagnostics, routine maintenance, and repairs.',
    image: maintenanceImg,
    heroImage: maintenanceImg,
    fullDescription: `Our Mechanics & Maintenance services keep your vehicles in top condition.`,
    features: [
      'Certified mechanics',
      'Modern equipment',
      'Genuine parts',
      'Warranty on repairs'
    ],
    fleet: [
      {
        name: 'Basic Service',
        capacity: 'All vehicles',
        price: 'GHS 150 - 300',
        description: 'Oil change, filter replacement, inspection.',
        image: maintenanceImg,
      },
      {
        name: 'Full Service',
        capacity: 'All vehicles',
        price: 'GHS 300 - 600',
        description: 'Complete vehicle check-up and maintenance.',
        image: maintenanceImg,
      },
      {
        name: 'Major Repairs',
        capacity: 'All vehicles',
        price: 'Custom quote',
        description: 'Engine, transmission, and major repairs.',
        image: maintenanceImg,
      },
    ],
    gallery: [maintenanceImg, maintenanceImg],
  },

  // ============================================================
  // 8. TOWING SERVICES
  // ============================================================
  {
    id: 6,
    slug: 'towing',
    name: 'Towing Services',
    icon: '🛻',
    shortDescription: '24/7 rapid response vehicle towing and roadside assistance.',
    image: towingImg,
    heroImage: towingImg,
    fullDescription: `Our Towing Services provide reliable emergency assistance 24/7.`,
    features: [
      '24/7 availability',
      'Rapid response',
      'All vehicle types',
      'Professional drivers'
    ],
    fleet: [
      {
        name: 'Light Towing',
        capacity: 'Cars & SUVs',
        price: 'GHS 200 - 400',
        description: 'Standard towing for private vehicles.',
        image: towingImg,
      },
      {
        name: 'Heavy Towing',
        capacity: 'Trucks & Buses',
        price: 'GHS 500 - 1000',
        description: 'Heavy-duty towing for commercial vehicles.',
        image: towingImg,
      },
      {
        name: 'Roadside Assistance',
        capacity: 'All vehicles',
        price: 'GHS 100 - 300',
        description: 'Tire change, battery jump-start, fuel delivery.',
        image: towingImg,
      },
    ],
    gallery: [towingImg, towingImg],
  },
];

export const getServiceBySlug = (slug) => {
  return services.find(service => service.slug === slug);
};

export const getRelatedServices = (currentSlug, limit = 3) => {
  return services.filter(service => service.slug !== currentSlug).slice(0, limit);
};