import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, User, Mail, Phone, Clock } from "lucide-react";
import Layout from "./Layout";

const BookAppointment: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    doctor: "",
    hospital: "",
    date: "",
    time: "",
  });
  const hospitalList = [
    "Sri care Hospital",
    "Mahatma Gandhi Hospital",
    "Children's Medical Center",
    "Women's Health Clinic",
    "Hyderabad General Hospital",
    "Banglore Specialty Clinic"
  ];
  const [availability, setAvailability] = useState<{date: string, time: string}[]>([]);
  const [doctorList, setDoctorList] = useState<{name: string, specialty: string}[]>([]);

  // Fetch doctor list from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/doctors")
      .then(res => res.json())
      .then(data => setDoctorList(data));
  }, []);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
  setForm({ ...form, [name]: value });

    if (name === "doctor" && value) {
      try {
        const res = await fetch(`http://localhost:5000/api/doctor-availability?doctor=${encodeURIComponent(value)}`);
        const data = await res.json();
        setAvailability(data);
      } catch {
        setAvailability([]);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("Appointment booked successfully!");
    setForm({
      name: "",
      email: "",
      phone: "",
      doctor: "",
      hospital: "",
      date: "",
      time: "",
    });
    setAvailability([]);
  };

  return (
    <Layout>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-600 to-green-600">
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">BOOK APPOINTMENT</h2>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <User className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full outline-none"
                required
              />
            </div>
          </div>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Mail className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full outline-none"
                required
              />
            </div>
          </div>
          {/* Phone */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Phone</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Phone className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full outline-none"
                required
              />
            </div>
          </div>
          {/* Hospital dropdown */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Hospital</label>
            <select
              name="hospital"
              value={form.hospital}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 outline-none"
              required
            >
              <option value="">Select Hospital</option>
              {hospitalList.map((hospital, idx) => (
                <option key={idx} value={hospital}>{hospital}</option>
              ))}
            </select>
          </div>
          {/* Doctor dropdown */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Doctor</label>
            <select
              name="doctor"
              value={form.doctor}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 outline-none"
              required
            >
              <option value="">Select Doctor</option>
              {doctorList.map((doc, idx) => (
                <option key={idx} value={doc.name}>
                  {doc.name} {doc.specialty ? `(${doc.specialty})` : ""}
                </option>
              ))}
            </select>
          </div>
          {/* Booked slots */}
          {form.doctor && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Booked Slots for {form.doctor}:</label>
              {availability.length === 0 ? (
                <div className="text-green-600">All slots available!</div>
              ) : (
                <ul className="text-red-600 text-sm">
                  {availability.map((slot, idx) => (
                    <li key={idx}>
                      {slot.date} at {slot.time}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
          {/* Date */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Date</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Calendar className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full outline-none"
                required
              />
            </div>
          </div>
          {/* Time */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Time</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Clock className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="w-full outline-none"
                required
              />
            </div>
          </div>
          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Book Appointment
          </button>
        </motion.form>
      </div>
    </Layout>
  );
};

export default BookAppointment;