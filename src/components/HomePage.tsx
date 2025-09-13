import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Heart, Stethoscope, Guitar as Hospital, BookOpen, Phone, Users, Award } from 'lucide-react';
import Layout from './Layout';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const healthCategories = [
  {
      title: 'Diseases Info',
      description: 'Comprehensive disease information',
      icon: <Stethoscope className="w-8 h-8" />,
      color: 'bg-red-500',
      path: '/diseases'
    },
    {
      title: 'Find Hospitals',
      description: 'Locate nearby healthcare facilities',
      icon: <Hospital className="w-8 h-8" />,
      color: 'bg-blue-500',
      path: '/hospitals'
    },
    {
      title: 'Consult Doctors',
      description: 'Connect with healthcare professionals',
      icon: <Users className="w-8 h-8" />,
      color: 'bg-purple-500',
      path: '/doctors'
    }
  ];

  const featuredDoctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      experience: '15 years',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Neurologist',
      experience: '12 years',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrician',
      experience: '10 years',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const healthStats = [
    { label: 'Registered Users', value: '50,000+', icon: <Users className="w-8 h-8" /> },
    { label: 'Healthcare Providers', value: '1,200+', icon: <Stethoscope className="w-8 h-8" /> },
    { label: 'Hospitals Listed', value: '500+', icon: <Hospital className="w-8 h-8" /> },
    { label: 'Health Articles', value: '2,000+', icon: <BookOpen className="w-8 h-8" /> }
  ];

  return (
    <Layout>
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                Your Health, Our Priority
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl mb-8 text-blue-100"
              >
                Access quality healthcare services, find trusted doctors, and get expert health advice
              </motion.p>
              
              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-2xl mx-auto"
              >
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for doctors, hospitals, health tips..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 text-gray-900 bg-white rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 text-lg"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors duration-200">
                    Search
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Health Categories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Healthcare Services
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive health solutions at your fingertips
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {healthCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <Link to={category.path} className="block text-center">
                    <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Doctors */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Doctors
              </h2>
              <p className="text-xl text-gray-600">
                Connect with our top-rated healthcare professionals
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredDoctors.map((doctor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                    <p className="text-blue-600 font-medium mb-2">{doctor.specialty}</p>
                    <p className="text-gray-600 mb-3">{doctor.experience} experience</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Award className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-yellow-600 font-medium">{doctor.rating}</span>
                      </div>
                      <Link
                        to="/doctors"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                      >
                        View Profile
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Health Stats */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {healthStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-blue-600 mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Banner */}
        <section className="py-12 bg-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Emergency? Call Now!</h2>
              <div className="flex flex-wrap justify-center gap-4 text-lg font-bold">
                <span>Ambulance: 108</span>
                <span className="hidden md:inline">|</span>
                <span>Health Helpline: 104</span>
                <span className="hidden md:inline">|</span>
                <span>Police: 100</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;