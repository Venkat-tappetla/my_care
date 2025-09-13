import React, { useState } from "react";
import Layout from "./Layout";

const AddDoctor: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    specialty: "",
    phone: "",
    email: "",
    location: "",
    education: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSuccess("");
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      const res = await fetch("http://localhost:5000/api/doctors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess("Doctor added successfully!");
        setForm({
          name: "",
          specialty: "",
          phone: "",
          email: "",
          location: "",
          education: "",
        });
      } else {
        setError("Failed to add doctor.");
      }
    } catch {
      setError("Network error. Please try again.");
    }
    setLoading(false);
  };

  return (
    <Layout>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-600 to-green-600">
        <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Add New Doctor</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 outline-none"
                required
                placeholder="Doctor's Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Specialty</label>
              <input
                type="text"
                name="specialty"
                value={form.specialty}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 outline-none"
                required
                placeholder="Specialty"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Phone</label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 outline-none"
                placeholder="Phone Number"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 outline-none"
                placeholder="Email Address"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 outline-none"
                placeholder="Location"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Education</label>
              <input
                type="text"
                name="education"
                value={form.education}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 outline-none"
                placeholder="Education"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Doctor"}
            </button>
            {success && <div className="text-green-600 font-semibold text-center mt-2">{success}</div>}
            {error && <div className="text-red-600 font-semibold text-center mt-2">{error}</div>}
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default AddDoctor;
