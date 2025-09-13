import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { Mail, Phone } from "lucide-react";

const PatientsList: React.FC = () => {
  const [patients, setPatients] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<any>({});

  useEffect(() => {
    fetch("http://localhost:5000/api/appointments")
      .then(res => res.json())
      .then(data => setPatients(data));
  }, []);

  const handleEdit = (appointment: any) => {
    setEditingId(appointment.id);
    setEditForm({ ...appointment });
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingId) return;
    const res = await fetch(`http://localhost:5000/api/appointments/${editingId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editForm),
    });
    if (res.ok) {
      fetch("http://localhost:5000/api/appointments")
        .then(res => res.json())
        .then(data => setPatients(data));
      setEditingId(null);
      setEditForm({});
    } else {
      alert("Failed to update appointment.");
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this appointment?")) {
      const res = await fetch(`http://localhost:5000/api/appointments/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setPatients(patients.filter((p) => p.id !== id));
      } else {
        alert("Failed to delete appointment.");
      }
    }
  };

  return (
    <Layout>
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-6">Patients List</h2>
        {patients.length === 0 ? (
          <div className="text-gray-500">No appointments found.</div>
        ) : (
          <ul className="space-y-4">
            {patients.map((p) => (
              <li key={p.id} className="border rounded-lg p-4 shadow">
                {editingId === p.id ? (
                  <form onSubmit={handleEditSubmit} className="space-y-4">
                    <input name="name" value={editForm.name} onChange={handleEditChange} className="border p-2 rounded w-full" placeholder="Name" />
                    <input name="email" value={editForm.email} onChange={handleEditChange} className="border p-2 rounded w-full" placeholder="Email" />
                    <input name="phone" value={editForm.phone} onChange={handleEditChange} className="border p-2 rounded w-full" placeholder="Phone" />
                    <input name="hospital" value={editForm.hospital} onChange={handleEditChange} className="border p-2 rounded w-full" placeholder="Hospital" />
                    <input name="doctor" value={editForm.doctor} onChange={handleEditChange} className="border p-2 rounded w-full" placeholder="Doctor" />
                    <input name="date" value={editForm.date} onChange={handleEditChange} className="border p-2 rounded w-full" placeholder="Date" />
                    <input name="time" value={editForm.time} onChange={handleEditChange} className="border p-2 rounded w-full" placeholder="Time" />
                    <div className="flex gap-2">
                      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Save</button>
                      <button type="button" className="bg-gray-400 text-white px-4 py-2 rounded" onClick={() => setEditingId(null)}>Cancel</button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-6">
                    <div className="flex items-center bg-gray-50 rounded-lg p-4">
                      <Mail className="w-6 h-6 text-blue-600 mr-3" />
                      <span className="text-gray-800 font-medium">{p.email}</span>
                    </div>
                    <div className="flex items-center bg-gray-50 rounded-lg p-4">
                      <Phone className="w-6 h-6 text-green-600 mr-3" />
                      <span className="text-gray-800 font-medium">{p.phone || "N/A"}</span>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <button className="bg-yellow-500 text-white px-4 py-2 rounded" onClick={() => handleEdit(p)}>Edit</button>
                      <button className="bg-red-600 text-white px-4 py-2 rounded" onClick={() => handleDelete(p.id)}>Delete</button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
};

export default PatientsList;