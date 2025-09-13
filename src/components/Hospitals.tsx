import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Phone, Clock, Star, Filter, Navigation } from 'lucide-react';
import Layout from './Layout';

const Hospitals: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All');

  const hospitalTypes = ['All', 'General', 'Specialty', 'Emergency', 'Cardiac', 'Pediatric', 'Maternity'];
  const cities = ['All', 'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia'];

  const hospitals = [
    {
      name: 'Sri care Hospital',
      type: 'General',
      city: 'Narasaraopet',
      address: '60 feet road,prakash nagar,narasaraopet,522601',
      phone: '+91 9988776655',
      rating: 10.0,
      reviews: 99999,
      specialties: ['Emergency Care', 'Surgery', 'Cardiology', 'Pediatrics'],
      hours: '24/7 Emergency Services',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=400',
      distance: '0.5 miles',
      emergencyServices: true,
      parking: true,
      insurance: ['Medicare', 'Medicaid', 'Private Insurance']
    },
    {
      name: 'Mahatma Gandhi Hospital',
      type: 'Cardiac',
      city: 'Guntur',
      address: '69 Feet Road,Guntur, 522202',
      phone: '+91 8520096490',
      rating: 5.0,
      reviews: 10000,
      specialties: ['Cardiology', 'Cardiac Surgery', 'Interventional Cardiology'],
      hours: 'Mon-Fri: 8AM-6PM, Emergency: 24/7',
      image: 'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=400',
      distance: '2.1 miles',
      emergencyServices: true,
      parking: true,
      insurance: ['Medicare', 'Private Insurance', 'HMO']
    },
    {
      name: 'Children\'s Medical Center',
      type: 'Pediatric',
      city: 'Chicago',
      address: '789 Kids Boulevard, Chicago, IL 60601',
      phone: '+1 (555) 345-6789',
      rating: 4.7,
      reviews: 987,
      specialties: ['Pediatrics', 'Pediatric Surgery', 'NICU', 'Child Psychology'],
      hours: 'Mon-Sun: 7AM-8PM, Emergency: 24/7',
      image: 'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=400',
      distance: '1.3 miles',
      emergencyServices: true,
      parking: true,
      insurance: ['Medicare', 'Medicaid', 'Private Insurance', 'Children\'s Health']
    },
    {
      name: 'Women\'s Health Clinic',
      type: 'Maternity',
      city: 'Chennai',
      address: '69 Feet\'s Road, Chennai, TN 77001',
      phone: '+91 9988776655',
      rating: 4.6,
      reviews: 1247,
      specialties: ['Obstetrics', 'Gynecology', 'Maternity Care', 'Women\'s Health'],
      hours: 'Mon-Fri: 8AM-7PM, Maternity: 24/7',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400',
      distance: '3.2 miles',
      emergencyServices: false,
      parking: true,
      insurance: ['Medicare', 'Medicaid', 'Private Insurance', 'Women\'s Health Plans']
    },
    {
      name: 'Hyderabad General Hospital',
      type: 'Emergency',
      city: 'Hyderabad',
      address: 'TankBund, Hyderabad, HYD 85001',
      phone: '+91 9123456780',
      rating: 4.5,
      reviews: 2156,
      specialties: ['Emergency Medicine', 'Trauma Care', 'Urgent Care', 'Critical Care'],
      hours: '24/7 Emergency Services',
      image: 'https://images.pexels.com/photos/6823572/pexels-photo-6823572.jpeg?auto=compress&cs=tinysrgb&w=400',
      distance: '0.8 miles',
      emergencyServices: true,
      parking: true,
      insurance: ['Medicare', 'Medicaid', 'Private Insurance', 'Emergency Plans']
    },
    {
      name: 'Banglore Specialty Clinic',
      type: 'Specialty',
      city: 'Banglore',
      address: 'Church Street, Banglore, KA 19101',
      phone: '+91 9876543210',
      rating: 4.8,
      reviews: 756,
      specialties: ['Oncology', 'Neurology', 'Orthopedics', 'Radiology'],
      hours: 'Mon-Fri: 7AM-6PM, Sat: 8AM-2PM',
      image: 'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=400',
      distance: '4.5 miles',
      emergencyServices: false,
      parking: true,
      insurance: ['Medicare', 'Private Insurance', 'Specialty Plans']
    }
  ];

  const filteredHospitals = hospitals.filter(hospital => {
    const matchesSearch = hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hospital.specialties.some(specialty => specialty.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = selectedType === 'All' || hospital.type === selectedType;
    const matchesCity = selectedCity === 'All' || hospital.city === selectedCity;
    return matchesSearch && matchesType && matchesCity;
  });

  return (
    <Layout>
      <div className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Find Healthcare Facilities
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Locate hospitals, medical centers, and healthcare facilities near you. 
              Find the right care when you need it most.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6 mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search hospitals or specialties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Type Filter */}
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {hospitalTypes.map(type => (
                  <option key={type} value={type}>{type} Hospitals</option>
                ))}
              </select>

              {/* City Filter */}
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {cities.map(city => (
                  <option key={city} value={city}>{city === 'All' ? 'All Cities' : city}</option>
                ))}
              </select>
            </div>
          </motion.div>

          {/* Hospital Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredHospitals.map((hospital, index) => (
              <motion.div
                key={hospital.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Hospital Image */}
                <div className="relative h-48">
                  <img
                    src={hospital.image}
                    alt={hospital.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    {hospital.emergencyServices && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Emergency
                      </span>
                    )}
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {hospital.type}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded-full">
                    <div className="flex items-center text-sm">
                      <Navigation className="w-4 h-4 text-blue-500 mr-1" />
                      <span className="font-medium">{hospital.distance}</span>
                    </div>
                  </div>
                </div>

                {/* Hospital Details */}
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{hospital.name}</h3>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{hospital.city}</span>
                      </div>
                    </div>
                    <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-lg">
                      <Star className="w-4 h-4 text-yellow-500 mr-1 fill-current" />
                      <span className="font-medium text-gray-900">{hospital.rating}</span>
                      <span className="text-gray-500 text-sm ml-1">({hospital.reviews})</span>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start text-gray-600 text-sm mb-3">
                    <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{hospital.address}</span>
                  </div>

                  {/* Contact */}
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <Phone className="w-4 h-4 mr-2" />
                    <a href={`tel:${hospital.phone}`} className="text-blue-600 hover:text-blue-800">
                      {hospital.phone}
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="flex items-center text-gray-600 text-sm mb-4">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{hospital.hours}</span>
                  </div>

                  {/* Specialties */}
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {hospital.specialties.map((specialty, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Insurance */}
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Insurance Accepted</h4>
                    <div className="flex flex-wrap gap-2">
                      {hospital.insurance.map((ins, idx) => (
                        <span key={idx} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                          {ins}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    {hospital.parking && (
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span>Parking Available</span>
                      </div>
                    )}
                    {hospital.emergencyServices && (
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        <span>24/7 Emergency</span>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200">
                      Get Directions
                    </button>
                    <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200">
                      Call Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredHospitals.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No hospitals found</h3>
              <p className="text-gray-500">Try adjusting your search terms or filters.</p>
            </motion.div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Hospitals;