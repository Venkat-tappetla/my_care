const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const app = express();

app.use(cors());
app.use(express.json());

// Use direct values for XAMPP MySQL
const db = mysql.createConnection({
  host: "localhost",      // XAMPP default
  user: "root",           // XAMPP default
  password: "",           // XAMPP default (empty)
  database: "care_info",  // Make sure this DB exists in phpMyAdmin
});

db.connect((err) => {
  if (err) {
    console.error("❌ DB Connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL");
  }
});

// Default route
app.get("/", (req, res) => {
  res.send("Backend running");
});

// Get all users (for testing)
app.get("/api/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Signup Route with error logging
app.post("/signup", async (req, res) => {
  const { name, email, password, phone } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = "INSERT INTO users (name, email, password, phone) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, email, hashedPassword, phone], (err, result) => {
      if (err) {
        console.error("Signup error:", err); // Error logging
        if (err.code === "ER_DUP_ENTRY") {
          return res.status(400).json({ message: "Email already registered" });
        }
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ message: "User registered successfully" });
    });
  } catch (err) {
    console.error("Signup error (catch):", err); // Error logging
    res.status(500).json({ message: "Error registering user" });
  }
});

// Login Route (includes phone in response)
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" });
  }

  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], async (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    if (results.length === 0) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Include phone in the response
    res.json({ 
      message: "Login successful", 
      user: { 
        id: user.id, 
        name: user.name, 
        email: user.email, 
        phone: user.phone 
      } 
    });
  });
});

// Get all doctors
app.get("/api/doctors", (req, res) => {
  db.query("SELECT * FROM doctors", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Add a new doctor
app.post("/api/doctors", (req, res) => {
  const { name, specialty, phone, email, location, education } = req.body;
  const sql = "INSERT INTO doctors (name, specialty, phone, email, location, education) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(sql, [name, specialty, phone, email, location, education], (err, result) => {
    if (err) {
      console.error("Doctor insert error:", err);
      return res.status(500).json({ error: "Failed to add doctor" });
    }
    res.status(201).json({ message: "Doctor added successfully" });
  });
});

// Update doctor details
app.put("/api/doctors/:id", (req, res) => {
  const { name, specialty, phone, email, location, education } = req.body;
  const { id } = req.params;
  const sql = "UPDATE doctors SET name=?, specialty=?, phone=?, email=?, location=?, education=? WHERE id=?";
  db.query(sql, [name, specialty, phone, email, location, education, id], (err, result) => {
    if (err) return res.status(500).json({ error: "Failed to update doctor" });
    res.json({ message: "Doctor updated successfully" });
  });
});

// Delete doctor
app.delete("/api/doctors/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM doctors WHERE id=?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: "Failed to delete doctor" });
    res.json({ message: "Doctor deleted successfully" });
  });
});

// Book an appointment
app.post("/api/appointments", (req, res) => {
  const { name, email, phone, doctor, hospital, date, time } = req.body;
  const sql = "INSERT INTO appointments (name, email, phone, doctor, hospital, date, time) VALUES (?, ?, ?, ?, ?, ?, ?)";
  db.query(sql, [name, email, phone, doctor, hospital, date, time], (err, result) => {
    if (err) {
      console.error("Appointment error:", err);
      return res.status(500).json({ error: "Failed to book appointment" });
    }
    res.status(201).json({ message: "Appointment booked successfully" });
  });
});

// Get all appointments
app.get("/api/appointments", (req, res) => {
  db.query("SELECT * FROM appointments", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Update appointment
app.put("/api/appointments/:id", (req, res) => {
  const { name, email, phone, doctor, hospital, date, time } = req.body;
  const { id } = req.params;
  const sql = "UPDATE appointments SET name=?, email=?, phone=?, doctor=?, hospital=?, date=?, time=? WHERE id=?";
  db.query(sql, [name, email, phone, doctor, hospital, date, time, id], (err, result) => {
    if (err) return res.status(500).json({ error: "Failed to update appointment" });
    res.json({ message: "Appointment updated successfully" });
  });
});

// Delete appointment
app.delete("/api/appointments/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM appointments WHERE id=?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: "Failed to delete appointment" });
    res.json({ message: "Appointment deleted successfully" });
  });
});

// Update user profile
app.put("/api/users/:id", (req, res) => {
  const { name, email, phone } = req.body;
  const { id } = req.params;
  const sql = "UPDATE users SET name=?, email=?, phone=? WHERE id=?";
  db.query(sql, [name, email, phone, id], (err, result) => {
    if (err) return res.status(500).json({ error: "Failed to update user" });
    res.json({ message: "User updated successfully" });
  });
});

// Delete user profile
app.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM users WHERE id=?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: "Failed to delete user" });
    res.json({ message: "User deleted successfully" });
  });
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));