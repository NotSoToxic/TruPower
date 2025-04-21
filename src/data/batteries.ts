export interface Battery {
  id: string;
  name: string;
  category: '2-Wheeler' | '3-Wheeler';
  description: string;
  capacity: string;
  voltage: string;
  cycleLife: string;
  chargingTime: string;
  safetyFeatures: string[];
  image: string;
  safetyRating: string;
  operatingTemperature: string;
}

export const batteries: Battery[] = [
  // {
  //   id: '2w-72v-100ah',
  //   name: '72V 100Ah 2-Wheeler Battery',
  //   category: '2-Wheeler',
  //   description: 'High-performance lithium-ion battery pack designed specifically for electric scooters and motorcycles. Features advanced BMS technology and superior energy density.',
  //   capacity: '7.2 kWh',
  //   voltage: '72V',
  //   cycleLife: '2000+ cycles',
  //   chargingTime: '4-5 hours',
  //   safetyFeatures: [
  //     'Advanced thermal management system',
  //     'Short circuit protection',
  //     'IP67 water resistance',
  //     'Smart BMS integration',
  //     'Overcharge protection',
  //     'Vibration resistance'
  //   ],
  //   image: '/images/batteries/bat-2.jpg'
  // },
  // {
  //   id: '2w-48v-50ah',
  //   name: '48V 50Ah 2-Wheeler Battery',
  //   category: '2-Wheeler',
  //   description: 'Compact and efficient battery pack ideal for light electric scooters. Offers excellent range and quick charging capabilities.',
  //   capacity: '2.4 kWh',
  //   voltage: '48V',
  //   cycleLife: '2000+ cycles',
  //   chargingTime: '3-4 hours',
  //   safetyFeatures: [
  //     'Thermal protection system',
  //     'Short circuit protection',
  //     'IP65 water resistance',
  //     'Basic BMS integration',
  //     'Overcharge protection',
  //     'Shock absorption'
  //   ],
  //   image: '/images/batteries/bat-2q.jpg'
  // },
  {
    id: '3w-51.2v-105ah',
    name: '51.2V 105Ah 3-Wheeler Battery',
    category: '3-Wheeler',
    description: 'Heavy-duty battery pack designed for electric rickshaws. Delivers reliable power and extended range for commercial applications.',
    capacity: '5.376 kWh',
    voltage: '51.2V',
    cycleLife: '1500+ cycles',
    chargingTime: '4-6 hours',
    safetyFeatures: [
      'Industrial-grade thermal management',
      'Advanced short circuit protection',
      'IP68 water resistance',
      'Smart BMS with monitoring',
      'High-temperature resistance',
      'Water-Proof',
      'Laser-welded terminal',
      'High-quality electrolyte',
      'Thermal-resistant electrolyte'
    ],
    image: '/images/batteries/Front.png',
    safetyRating: 'IP68',
    operatingTemperature: '-10°C to 60°C'
  },
  // {
  //   id: '3w-96v-200ah',
  //   name: '96V 200Ah 3-Wheeler Battery',
  //   category: '3-Wheeler',
  //   description: 'Premium battery pack for high-performance electric rickshaws and commercial vehicles. Offers maximum power output and extended service life.',
  //   capacity: '19.2 kWh',
  //   voltage: '96V',
  //   cycleLife: '1500+ cycles',
  //   chargingTime: '8-9 hours',
  //   safetyFeatures: [
  //     'Enterprise-grade thermal management',
  //     'Multi-stage protection system',
  //     'IP68+ water resistance',
  //     'Advanced BMS with diagnostics',
  //     'Comprehensive safety protocols',
  //     'Military-grade vibration resistance'
  //   ],
  //   image: '/images/batteries/bat-3q.jpg'
  // }
];

export const categories = ['2-Wheeler', '3-Wheeler'];