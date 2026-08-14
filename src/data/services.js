// src/data/services.js

import busHiringImg from '../assets/bus_hiring.JPG';
import drivingSchoolImg from '../assets/driving_school.JPG';
import deliveryImg from '../assets/delivery.JPG';
import travelTourImg from '../assets/travel_and_tour.JPG';
import maintenanceImg from '../assets/maintenance.JPG';
import towingImg from '../assets/towing.JPG';

export const services = [
  {
    id: 1,
    slug: 'bus-hiring',
    name: 'Bus Hiring Services',
    icon: '🚌',
    shortDescription: 'Premium and reliable buses for corporate events, private trips, and commercial transport.',
    image: busHiringImg,
    heroImage: busHiringImg,
    fullDescription: `Our Bus Hiring Services offer top-tier transportation solutions for all your needs.

Whether you're planning a corporate event, a private trip, or need commercial transport, we have the perfect vehicle for you. All our buses are regularly maintained and driven by professional, licensed drivers who prioritize your safety and comfort.

We offer flexible hiring options - hourly, daily, or long-term contracts.

Our services include:
• Corporate event transportation
• School and university trips
• Wedding and private party shuttles
• Airport transfers
• Long-distance intercity travel
• Custom tour packages`,
    features: [
      'Air-conditioned vehicles',
      'Professional drivers',
      '24/7 customer support',
      'GPS tracking',
      'Insurance coverage',
      'Flexible payment options'
    ],
    fleet: [
      {
        name: 'Mini Bus',
        capacity: '14-20 seater',
        description: 'Perfect for small groups and corporate shuttles',
        priceRange: 'GHS 500 - 800/day',
      },
      {
        name: 'Standard Coach',
        capacity: '30-40 seater',
        description: 'Ideal for school trips and medium-sized events',
        priceRange: 'GHS 800 - 1200/day',
      },
      {
        name: 'Luxury Coach',
        capacity: '45-55 seater',
        description: 'Premium coaches with extra comfort for long journeys',
        priceRange: 'GHS 1200 - 1800/day',
      },
      {
        name: 'Executive VIP',
        capacity: '20-30 seater',
        description: 'VIP buses with premium amenities for corporate clients',
        priceRange: 'GHS 1500 - 2500/day',
      }
    ],
    gallery: [busHiringImg, busHiringImg, busHiringImg],
  },
  {
    id: 2,
    slug: 'driving-school',
    name: 'Driving School',
    icon: '🚗',
    shortDescription: 'Train with seasoned professionals. We also assist with license acquisition and renewals.',
    image: drivingSchoolImg,
    heroImage: drivingSchoolImg,
    fullDescription: `Our Driving School provides comprehensive training for all types of vehicles.

Whether you're a beginner or need to refresh your skills, our certified instructors will guide you through every step. We offer flexible schedules and practical training on real roads.

Our services include:
• Beginner driver training
• License acquisition assistance
• License renewal services
• Defensive driving courses
• Refresher courses
• Theory and practical lessons`,
    features: [
      'Certified instructors',
      'Flexible schedules',
      'Practical road training',
      'License assistance',
      'Theory classes included',
      'Pick-up and drop-off'
    ],
    fleet: [
      {
        name: 'Manual Training',
        capacity: 'Standard cars',
        description: 'Learn to drive manual transmission vehicles',
        priceRange: 'GHS 50/session',
      },
      {
        name: 'Automatic Training',
        capacity: 'Automatic cars',
        description: 'Learn to drive automatic transmission vehicles',
        priceRange: 'GHS 60/session',
      },
      {
        name: 'Complete Package',
        capacity: 'Full course',
        description: 'Comprehensive training + license assistance',
        priceRange: 'GHS 800 - 1200',
      }
    ],
    gallery: [drivingSchoolImg, drivingSchoolImg],
  },
  {
    id: 3,
    slug: 'delivery',
    name: 'Delivery Services',
    icon: '📦',
    shortDescription: 'Fast, secure, and efficient logistics and delivery solutions across the nation.',
    image: deliveryImg,
    heroImage: deliveryImg,
    fullDescription: `Our Delivery Services ensure your packages reach their destination safely and on time.

We offer reliable logistics solutions for businesses and individuals. Our tracking system keeps you informed at every step of the delivery process.

Our services include:
• Same-day delivery
• Next-day delivery
• Bulk logistics
• Express courier
• Temperature-controlled delivery
• International shipping`,
    features: [
      'Real-time tracking',
      'Secure packaging',
      'Insurance coverage',
      'Same-day options',
      'Bulk discounts',
      '24/7 support'
    ],
    fleet: [
      {
        name: 'Standard Delivery',
        capacity: 'Up to 50kg',
        description: 'Regular delivery for small packages',
        priceRange: 'GHS 20 - 50',
      },
      {
        name: 'Express Delivery',
        capacity: 'Up to 30kg',
        description: 'Priority delivery within hours',
        priceRange: 'GHS 50 - 100',
      },
      {
        name: 'Bulk Logistics',
        capacity: '500kg+',
        description: 'Large volume commercial deliveries',
        priceRange: 'Custom quote',
      }
    ],
    gallery: [deliveryImg, deliveryImg],
  },
  {
    id: 4,
    slug: 'travel-tour',
    name: 'Travel & Tour',
    icon: '✈️',
    shortDescription: 'Comprehensive travel management, ticketing, and tour consultancy across the globe.',
    image: travelTourImg,
    heroImage: travelTourImg,
    fullDescription: `Our Travel & Tour services make your travel dreams a reality.

We handle everything from flight bookings to accommodation and tour packages. Our travel consultants will create personalized itineraries that match your preferences and budget.

Our services include:
• Flight bookings
• Hotel reservations
• Tour packages
• Visa assistance
• Travel insurance
• Custom itineraries`,
    features: [
      'Best price guarantee',
      '24/7 assistance',
      'Custom packages',
      'Visa support',
      'Group discounts',
      'Travel insurance'
    ],
    fleet: [
      {
        name: 'Local Tours',
        capacity: '1-10 people',
        description: 'Explore local attractions and landmarks',
        priceRange: 'GHS 200 - 500',
      },
      {
        name: 'International Tours',
        capacity: 'Custom groups',
        description: 'Full-service international travel packages',
        priceRange: 'Custom quote',
      },
      {
        name: 'Corporate Travel',
        capacity: 'Business groups',
        description: 'Complete business travel management',
        priceRange: 'Custom quote',
      }
    ],
    gallery: [travelTourImg, travelTourImg],
  },
  {
    id: 5,
    slug: 'maintenance',
    name: 'Mechanics & Maintenance',
    icon: '🔧',
    shortDescription: 'Expert vehicle diagnostics, routine maintenance, and full-scale mechanical repairs.',
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
    features: [
      'Certified mechanics',
      'Modern equipment',
      'Genuine parts',
      'Quick turnaround',
      'Warranty on repairs',
      'Free inspection'
    ],
    fleet: [
      {
        name: 'Basic Service',
        capacity: 'All vehicles',
        description: 'Oil change, filter replacement, and inspection',
        priceRange: 'GHS 150 - 300',
      },
      {
        name: 'Full Service',
        capacity: 'All vehicles',
        description: 'Complete vehicle check-up and maintenance',
        priceRange: 'GHS 300 - 600',
      },
      {
        name: 'Major Repairs',
        capacity: 'All vehicles',
        description: 'Engine, transmission, and major component repairs',
        priceRange: 'Custom quote',
      }
    ],
    gallery: [maintenanceImg, maintenanceImg],
  },
  {
    id: 6,
    slug: 'towing',
    name: 'Towing Services',
    icon: '🛻',
    shortDescription: '24/7 rapid response vehicle towing and roadside assistance when you need it most.',
    image: towingImg,
    heroImage: towingImg,
    fullDescription: `Our Towing Services provide reliable emergency assistance whenever you need it.

Available 24/7, our rapid response team will arrive quickly to assist with vehicle breakdowns, accidents, or any roadside emergency. We handle all types of vehicles from motorcycles to heavy trucks.

Our services include:
• Emergency towing
• Roadside assistance
• Flat tire service
• Battery jump-starts
• Fuel delivery
• Accident recovery`,
    features: [
      '24/7 availability',
      'Rapid response',
      'All vehicle types',
      'Professional drivers',
      'Insurance claims',
      'GPS dispatched'
    ],
    fleet: [
      {
        name: 'Light Towing',
        capacity: 'Cars & SUVs',
        description: 'Standard towing for private vehicles',
        priceRange: 'GHS 200 - 400',
      },
      {
        name: 'Heavy Towing',
        capacity: 'Trucks & Buses',
        description: 'Heavy-duty towing for commercial vehicles',
        priceRange: 'GHS 500 - 1000',
      },
      {
        name: 'Roadside Assistance',
        capacity: 'All vehicles',
        description: 'Emergency roadside help and minor repairs',
        priceRange: 'GHS 100 - 300',
      }
    ],
    gallery: [towingImg, towingImg],
  }
];

// Helper function to get service by slug
export const getServiceBySlug = (slug) => {
  return services.find(service => service.slug === slug);
};

// Helper function to get related services (exclude current)
export const getRelatedServices = (currentSlug, limit = 3) => {
  return services
    .filter(service => service.slug !== currentSlug)
    .slice(0, limit);
};