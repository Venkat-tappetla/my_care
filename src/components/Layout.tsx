import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Menu, X, Search, Settings, User, LogOut, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const navigate = useNavigate();

  const navigationItems = [
    { name: 'Home', path: '/home' },
    { name: 'Diseases', path: '/diseases' },
    { name: 'Hospitals', path: '/hospitals' },
    {name : 'Add Doctor', path: '/add-doctor'},
    { name: 'Doctors', path: '/doctors' },
    { name: 'Appointment', path: '/appointment' },
    { name: 'PatientsList', path: '/patients' },
    { name: 'About', path: '/about' },
  ];

  const emergencyNumbers = [
    { service: 'Ambulance', number: '108' },
    { service: 'Police', number: '100' },
    { service: 'Fire', number: '101' },
    { service: 'Health Helpline', number: '104' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/home" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">My Care</h1>
                <p className="text-xs text-gray-500">Health & Wellness</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Settings */}
              <button
                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <Settings className="w-5 h-5" />
              </button>

              {/* User Menu */}
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  <User className="w-5 h-5" />
                  <span className="hidden sm:block text-sm font-medium">Account</span>
                </button>

                {/* User Dropdown */}
                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                    >
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Profile
                      </Link>
                      <Link
                        to="/login"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Login
                      </Link>
                      <Link
                        to="/signup"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Sign Up
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Settings Panel */}
      <AnimatePresence>
        {isSettingsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={() => setIsSettingsOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="absolute right-0 top-0 h-full w-80 bg-white shadow-lg p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800">Settings & Help</h2>
                <button
                  onClick={() => setIsSettingsOpen(false)}
                  className="p-2 text-gray-600 hover:text-red-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Emergency Numbers */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-red-500" />
                  Emergency Helplines
                </h3>
                <div className="space-y-3">
                  {emergencyNumbers.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">{item.service}</span>
                      <a 
                        href={`tel:${item.number}`}
                        className="text-lg font-bold text-red-600 hover:text-red-800"
                      >
                        {item.number}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Settings Options */}
              <div className="space-y-4">
                <Link
                  to="/settings"
                  className="block w-full text-left p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  onClick={() => setIsSettingsOpen(false)}
                >
                  Account Settings
                </Link>
                <button className="block w-full text-left p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                  Notifications
                </button>
                <button className="block w-full text-left p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                  Privacy Policy
                </button>
                <button className="block w-full text-left p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                  Help & Support
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-bold">My Care</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Providing comprehensive healthcare solutions for a healthier tomorrow.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/diseases" className="hover:text-white">Diseases</Link></li>
                <li><Link to="/hospitals" className="hover:text-white">Hospitals</Link></li>
                <li><Link to="/adddoctor" className="hover:text-while">AddDoctor</Link></li>
                <li><Link to="/doctors" className="hover:text-white">Doctors</Link></li>
                
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Emergency</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Ambulance: <span className="text-red-400 font-bold">108</span></li>
                <li>Health Helpline: <span className="text-green-400 font-bold">104</span></li>
                <li>Police: <span className="text-blue-400 font-bold">100</span></li>
                <li>Fire: <span className="text-orange-400 font-bold">101</span></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 My Care. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;