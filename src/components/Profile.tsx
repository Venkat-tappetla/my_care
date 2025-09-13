import React from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone } from "lucide-react";
import Layout from "./Layout";

const Profile: React.FC = () => {
  // Get user info from localStorage
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  // If not logged in, show message
  if (!user || !user.email) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-600 to-green-600">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md text-center"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Profile</h2>
            <p className="text-gray-600">Please log in to view your profile.</p>
          </motion.div>
        </div>
      </Layout>
    );
  }

  // Display user details
  return (
    <Layout>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-600 to-green-600">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md"
        >
          <div className="flex flex-col items-center mb-8">
            <div className="bg-blue-100 rounded-full p-4 mb-4">
              <User className="w-12 h-12 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{user.name}</h2>
            <span className="text-blue-600 font-medium mb-4">Welcome to your profile!</span>
          </div>
          <div className="space-y-6">
            <div className="flex items-center bg-gray-50 rounded-lg p-4">
              <Mail className="w-6 h-6 text-blue-600 mr-3" />
              <span className="text-gray-800 font-medium">{user.email}</span>
            </div>
            <div className="flex items-center bg-gray-50 rounded-lg p-4">
              <Phone className="w-6 h-6 text-green-600 mr-3" />
              <span className="text-gray-800 font-medium">{user.phone || "N/A"}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Profile;