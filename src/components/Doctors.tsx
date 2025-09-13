import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Star, Clock, Award, Calendar, Video } from "lucide-react";
import Layout from "./Layout";

const Doctors: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [doctors, setDoctors] = useState<
    { 
      id: number;
      name: string;
      specialty: string;
      subSpecialty?: string;
      location?: string;
      hospital?: string;
      experience?: number;
      rating?: number;
      reviews?: number;
      education?: string;
      image?: string;
      languages?: string[];
      consultationFee?: number;
      availableToday?: boolean;
      nextAvailable?: string;
      about?: string;
      services?: string[];
      insuranceAccepted?: string[];
      awards?: string[];
      videoConsultation?: boolean;
      inPersonConsultation?: boolean;
      phone?: string;
      email?: string;
    }[]
  >([]);
  const [editingDoctor, setEditingDoctor] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<any>({});

  useEffect(() => {
    fetch("http://localhost:5000/api/doctors")
      .then(res => res.json())
      .then(data => {
        console.log("Fetched doctors:", data);
        setDoctors(data);
      });
  }, []);

  const specialties = [
    "All",
    "Cardiology",
    "Dermatology",
    "Endocrinology",
    "Gastroenterology",
    "Neurology",
    "Oncology",
    "Orthopedics",
    "Pediatrics",
    "Psychiatry",
  ];

  const locations = [
    "All",
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
  ];

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.hospital?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty =
      selectedSpecialty === "All" || doctor.specialty === selectedSpecialty;
    const matchesLocation =
      selectedLocation === "All" || doctor.location === selectedLocation;
    return matchesSearch && matchesSpecialty && matchesLocation;
  });

  const handleEdit = (doctor: any) => {
    setEditingDoctor(doctor.id);
    setEditForm({
      name: doctor.name || "",
      specialty: doctor.specialty || "",
      phone: doctor.phone || "",
      email: doctor.email || "",
      location: doctor.location || "",
      education: doctor.education || ""
    });
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this doctor?")) {
      const res = await fetch(`http://localhost:5000/api/doctors/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setDoctors(doctors.filter((doc) => doc.id !== id));
      } else {
        alert("Failed to delete doctor.");
      }
    }
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingDoctor) return;
    const res = await fetch(`http://localhost:5000/api/doctors/${editingDoctor}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editForm),
    });
    if (res.ok) {
      // Refresh doctor list after update
      fetch("http://localhost:5000/api/doctors")
        .then(res => res.json())
        .then(data => setDoctors(data));
      setEditingDoctor(null);
      setEditForm({});
    } else {
      alert("Failed to update doctor.");
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
              Find Expert Doctors
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with qualified healthcare professionals. Book appointments,
              get consultations, and receive expert medical care from top-rated
              doctors.
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
                  placeholder="Search doctors, specialties, or hospitals..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Specialty Filter */}
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {specialties.map((specialty) => (
                  <option key={specialty} value={specialty}>
                    {specialty === "All" ? "All Specialties" : specialty}
                  </option>
                ))}
              </select>

              {/* Location Filter */}
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location === "All" ? "All Locations" : location}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>

          {/* Doctor Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredDoctors.map((doctor, index) => (
              <motion.div
                key={doctor.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Doctor Header */}
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {doctor.name}
                          </h3>
                          <p className="text-blue-600 font-medium">
                            {doctor.specialty}
                          </p>
                          <p className="text-gray-600 text-sm">
                            {doctor.subSpecialty}
                          </p>
                        </div>
                        {doctor.availableToday && (
                          <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                            Available Today
                          </span>
                        )}
                      </div>

                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-1 fill-current" />
                          <span className="font-medium">{doctor.rating}</span>
                          <span className="ml-1">({doctor.reviews} reviews)</span>
                        </div>
                        <div className="flex items-center">
                          <Award className="w-4 h-4 text-blue-500 mr-1" />
                          <span>{doctor.experience} years exp.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Doctor Details */}
                <div className="p-6 space-y-4">
                  {/* Location & Hospital */}
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>
                      {doctor.hospital}, {doctor.location}
                    </span>
                  </div>

                  {/* Education */}
                  <div className="text-sm">
                    <span className="font-medium text-gray-900">Education: </span>
                    <span className="text-gray-600">{doctor.education}</span>
                  </div>

                  {/* Languages */}
                  <div className="text-sm">
                    <span className="font-medium text-gray-900">Languages: </span>
                    <span className="text-gray-600">
                      {doctor.languages?.join(", ")}
                    </span>
                  </div>

                  {/* About */}
                  <div className="text-sm text-gray-600">
                    <p>{doctor.about}</p>
                  </div>

                  {/* Services */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 text-sm">
                      Services
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {doctor.services?.slice(0, 3).map((service, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                      {doctor.services?.length! > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{doctor.services!.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Awards */}
                  {doctor.awards?.length! > 0 && (
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2 text-sm">
                        Awards & Recognition
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {doctor.awards?.map((award, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full"
                          >
                            {award}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Insurance */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 text-sm">
                      Insurance Accepted
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {doctor.insuranceAccepted
                        ?.slice(0, 3)
                        .map((insurance, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                          >
                            {insurance}
                          </span>
                        ))}
                      {doctor.insuranceAccepted?.length! > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{doctor.insuranceAccepted!.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Consultation Fee & Availability */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Consultation Fee
                        </p>
                        <p className="text-lg font-bold text-blue-600">
                          ${doctor.consultationFee}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">
                          Next Available
                        </p>
                        <p className="text-sm text-gray-600 flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {doctor.nextAvailable}
                        </p>
                      </div>
                    </div>

                    {/* Consultation Options */}
                    <div className="flex gap-2">
                      {doctor.videoConsultation && (
                        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center">
                          <Video className="w-4 h-4 mr-1" />
                          Video Call
                        </button>
                      )}
                      {doctor.inPersonConsultation && (
                        <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Book Visit
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Edit & Delete Buttons */}
                  <div className="flex gap-2 mt-4">
                    <button
                      className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200"
                      onClick={() => handleEdit(doctor)}
                    >
                      Edit
                    </button>
                    <button
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200"
                      onClick={() => handleDelete(doctor.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>

                {editingDoctor === doctor.id && (
                  <form onSubmit={handleEditSubmit} className="space-y-2 mt-4 bg-gray-50 p-4 rounded-lg">
                    <input name="name" value={editForm.name} onChange={handleEditChange} className="border p-2 rounded w-full" placeholder="Name" />
                    <input name="specialty" value={editForm.specialty} onChange={handleEditChange} className="border p-2 rounded w-full" placeholder="Specialty" />
                    <input name="phone" value={editForm.phone} onChange={handleEditChange} className="border p-2 rounded w-full" placeholder="Phone" />
                    <input name="email" value={editForm.email} onChange={handleEditChange} className="border p-2 rounded w-full" placeholder="Email" />
                    <input name="location" value={editForm.location} onChange={handleEditChange} className="border p-2 rounded w-full" placeholder="Location" />
                    <input name="education" value={editForm.education} onChange={handleEditChange} className="border p-2 rounded w-full" placeholder="Education" />
                    <div className="flex gap-2">
                      <button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200">
                        Save
                      </button>
                      <button
                        onClick={() => setEditingDoctor(null)}
                        className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Doctors;