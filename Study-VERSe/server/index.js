const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");

// Load environment variables
dotenv.config();

// Import routes
const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profile");
const paymentRoutes = require("./routes/Payments");
const courseRoutes = require("./routes/Course");
const contactUsRoute = require("./routes/Contact");

// Import database connection
const connectDB = require("./config/database");
const { cloudinaryConnect } = require("./config/cloudinary");

// Connect to MongoDB
connectDB.connect(); 

const PORT = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000node server.js

", credentials: true }));
app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp" }));

// Cloudinary Connection
cloudinaryConnect();

// Routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/reach", contactUsRoute);

// Default Route
app.get("/", (req, res) => {
    res.json({ success: true, message: "🚀 Your server is up and running..." });
});

// Start Server
app.listen(PORT, () => console.log(`⚡ Server running on port ${PORT}`));
