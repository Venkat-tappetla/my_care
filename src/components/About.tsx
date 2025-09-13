import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Award, Shield, Target, Zap } from 'lucide-react';
import Layout from './Layout';

const About: React.FC = () => {
  const stats = [
    { label: 'Patients Served', value: '50,000+', icon: <Users className="w-8 h-8" /> },
    { label: 'Healthcare Providers', value: '1,200+', icon: <Heart className="w-8 h-8" /> },
    { label: 'Years of Excellence', value: '10+', icon: <Award className="w-8 h-8" /> },
    { label: 'Cities Covered', value: '25+', icon: <Target className="w-8 h-8" /> }
  ];

  const values = [
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Compassionate Care',
      description: 'We put patients first, ensuring every interaction is filled with empathy, understanding, and genuine care for your well-being.'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Trust & Security',
      description: 'Your health information is protected with the highest security standards. We maintain complete confidentiality and privacy.'
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Innovation',
      description: 'We leverage cutting-edge technology to provide seamless healthcare experiences and improve patient outcomes.'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Accessibility',
      description: 'Healthcare should be accessible to everyone. We break down barriers to ensure quality care reaches all communities.'
    }
  ];

  const team = [
    {
      name: 'Dr. Mujeeb',
      role: 'Chief Medical Officer',
      image: 'https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Leading healthcare innovation with 20+ years of clinical experience and a passion for improving patient care through technology.'
    },
    {
      name: 'Dr. Venkat',
      role: 'Chief Executive Officer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Visionary leader dedicated to transforming healthcare accessibility and creating meaningful patient-provider connections.'
    },
    {
      name: 'Dr. Sathvik',
      role: 'Head of Technology',
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Technology enthusiast combining medical expertise with innovative solutions to enhance healthcare delivery and patient experience.'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About My Care
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Transforming healthcare through compassionate care, innovative technology, 
                and unwavering commitment to your well-being.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                At My Care, we believe healthcare should be accessible, personalized, and empowering. 
                Our mission is to connect patients with exceptional healthcare providers, provide 
                comprehensive health resources, and create a seamless healthcare experience that 
                puts your health and well-being at the center of everything we do.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
              <p className="text-xl text-gray-600">Making a difference in healthcare, one patient at a time</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center bg-white rounded-xl p-6 shadow-lg"
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

        {/* Values */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do and every decision we make
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-blue-600 mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Our Leadership</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experienced professionals committed to revolutionizing healthcare delivery
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    My Care was founded in 2014 with a simple yet powerful vision: to make quality 
                    healthcare accessible to everyone, everywhere. What started as a small team of 
                    healthcare professionals and technology enthusiasts has grown into a comprehensive 
                    healthcare platform serving thousands of patients across the nation.
                  </p>
                  <p>
                    We recognized that the healthcare system was fragmented, making it difficult for 
                    patients to find the right care at the right time. Our platform bridges this gap 
                    by connecting patients with qualified healthcare providers, offering comprehensive 
                    health resources, and providing tools to manage your health journey effectively.
                  </p>
                  <p>
                    Today, My Care continues to evolve, incorporating the latest technologies and 
                    medical advancements to ensure our users receive the best possible care. Our 
                    commitment to excellence, innovation, and patient-centered care remains at the 
                    heart of everything we do.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img
                  src="https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Our healthcare team"
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Healthcare Community</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Experience the difference that personalized, accessible healthcare can make in your life. 
                Start your journey with My Care today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                  Get Started
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-all duration-200">
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;