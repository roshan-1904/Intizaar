// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const cors = require('cors');

// dotenv.config();

// const app = express();


// app.use(express.json()); 
// app.use(cors()); 


// mongoose.connect(process.env.MONGO_URI)
// .then(() => console.log('MongoDB Connected...'))
// .catch(err => console.error(err));


// app.get('/', (req, res) => {
//   res.send('Backend API is running...');
// });


// app.use('/api/admin', require('./routes/adminRoutes'));
// app.use('/api/contact', require('./routes/contactRoutes'));

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

dotenv.config();
const app = express();

/* ===== MIDDLEWARE ===== */
app.use(express.json());
app.use(cors());

/* ===== DATABASE ===== */
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.error(err));

/* ===== API ROUTES ===== */
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));

/* ===== FRONTEND BUILD ===== */
app.use(express.static(path.join(__dirname, "public")));

/* ===== SPA FALLBACK (EXPRESS 5 FIX) ===== */
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

/* ===== START ===== */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
