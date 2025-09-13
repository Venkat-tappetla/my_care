import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, AlertTriangle, Heart, Brain, Settings as Lungs, Shield, Info } from 'lucide-react';
import Layout from './Layout';

const Diseases: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const diseaseCategories = [
    'All', 'Cardiovascular', 'Respiratory', 'Neurological', 'Digestive', 
    'Infectious', 'Endocrine', 'Mental Health'
  ];

  const diseases = [
    {
      name: 'Hypertension (High Blood Pressure)',
      category: 'Cardiovascular',
      severity: 'Medium',
      symptoms: ['Headaches', 'Shortness of breath', 'Nosebleeds', 'Chest pain'],
      causes: ['Poor diet', 'Lack of exercise', 'Stress', 'Genetics'],
      prevention: ['Regular exercise', 'Healthy diet', 'Limit salt intake', 'Manage stress'],
      treatment: 'Lifestyle changes and medication as prescribed by doctor',
      icon: <Heart className="w-6 h-6" />,
      color: 'bg-red-500'
    },
    {
      name: 'Type 2 Diabetes',
      category: 'Endocrine',
      severity: 'High',
      symptoms: ['Increased thirst', 'Frequent urination', 'Fatigue', 'Blurred vision'],
      causes: ['Insulin resistance', 'Genetics', 'Obesity', 'Sedentary lifestyle'],
      prevention: ['Maintain healthy weight', 'Regular exercise', 'Balanced diet', 'Regular check-ups'],
      treatment: 'Blood sugar monitoring, medication, diet control, and exercise',
      icon: <Shield className="w-6 h-6" />,
      color: 'bg-orange-500'
    },
    {
      name: 'Asthma',
      category: 'Respiratory',
      severity: 'Medium',
      symptoms: ['Wheezing', 'Shortness of breath', 'Chest tightness', 'Coughing'],
      causes: ['Allergens', 'Air pollution', 'Respiratory infections', 'Genetics'],
      prevention: ['Avoid triggers', 'Keep environment clean', 'Get vaccinated', 'Use air purifiers'],
      treatment: 'Inhalers, medications, and avoiding triggers',
      icon: <Lungs className="w-6 h-6" />,
      color: 'bg-blue-500'
    },
    {
      name: 'Depression',
      category: 'Mental Health',
      severity: 'High',
      symptoms: ['Persistent sadness', 'Loss of interest', 'Fatigue', 'Sleep disturbances'],
      causes: ['Brain chemistry', 'Genetics', 'Life events', 'Medical conditions'],
      prevention: ['Regular exercise', 'Social connections', 'Stress management', 'Adequate sleep'],
      treatment: 'Therapy, medication, lifestyle changes, and support groups',
      icon: <Brain className="w-6 h-6" />,
      color: 'bg-purple-500'
    },
    {
      name: 'Common Cold',
      category: 'Infectious',
      severity: 'Low',
      symptoms: ['Runny nose', 'Sore throat', 'Cough', 'Sneezing'],
      causes: ['Viral infection', 'Weakened immunity', 'Close contact with infected person'],
      prevention: ['Wash hands frequently', 'Avoid touching face', 'Stay away from sick people', 'Boost immunity'],
      treatment: 'Rest, fluids, over-the-counter medications for symptom relief',
      icon: <Shield className="w-6 h-6" />,
      color: 'bg-green-500'
    },
    {
      name: 'Migraine',
      category: 'Neurological',
      severity: 'Medium',
      symptoms: ['Severe headache', 'Nausea', 'Light sensitivity', 'Visual disturbances'],
      causes: ['Genetics', 'Hormonal changes', 'Stress', 'Certain foods'],
      prevention: ['Identify triggers', 'Regular sleep', 'Stress management', 'Stay hydrated'],
      treatment: 'Pain medications, preventive medications, lifestyle modifications',
      icon: <Brain className="w-6 h-6" />,
      color: 'bg-indigo-500'
    }
  ];

  const filteredDiseases = diseases.filter(disease => {
    const matchesSearch = disease.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         disease.symptoms.some(symptom => symptom.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || disease.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Low': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'High': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

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
              Disease Information Center
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive information about common diseases, their symptoms, causes, prevention, and treatment options.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6 mb-12"
          >
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search diseases or symptoms..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {diseaseCategories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8"
          >
            <div className="flex items-center">
              <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
              <p className="text-yellow-800 text-sm">
                <strong>Medical Disclaimer:</strong> This information is for educational purposes only. 
                Always consult with qualified healthcare professionals for proper diagnosis and treatment.
              </p>
            </div>
          </motion.div>

          {/* Disease Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredDiseases.map((disease, index) => (
              <motion.div
                key={disease.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Disease Header */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`${disease.color} w-12 h-12 rounded-full flex items-center justify-center text-white mr-4`}>
                        {disease.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{disease.name}</h3>
                        <p className="text-sm text-gray-600">{disease.category}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSeverityColor(disease.severity)}`}>
                      {disease.severity} Risk
                    </span>
                  </div>
                </div>

                {/* Disease Details */}
                <div className="p-6 space-y-6">
                  {/* Symptoms */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Info className="w-4 h-4 mr-2 text-blue-500" />
                      Symptoms
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {disease.symptoms.map((symptom, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                          {symptom}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Causes */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <AlertTriangle className="w-4 h-4 mr-2 text-orange-500" />
                      Common Causes
                    </h4>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      {disease.causes.map((cause, idx) => (
                        <li key={idx}>{cause}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Prevention */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Shield className="w-4 h-4 mr-2 text-green-500" />
                      Prevention
                    </h4>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      {disease.prevention.map((prevention, idx) => (
                        <li key={idx}>{prevention}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Treatment */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Heart className="w-4 h-4 mr-2 text-red-500" />
                      Treatment
                    </h4>
                    <p className="text-gray-600 text-sm">{disease.treatment}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredDiseases.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No diseases found</h3>
              <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
            </motion.div>
          )}

          {/* Emergency Notice */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 bg-red-600 text-white rounded-xl p-8 text-center"
          >
            <AlertTriangle className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Medical Emergency?</h3>
            <p className="text-lg mb-4">
              If you're experiencing severe symptoms or a medical emergency, seek immediate medical attention.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg font-bold">
              <span>Emergency: 911</span>
              <span className="hidden md:inline">|</span>
              <span>Ambulance: 108</span>
              <span className="hidden md:inline">|</span>
              <span>Health Helpline: 104</span>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Diseases;