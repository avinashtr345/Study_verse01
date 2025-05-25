const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = async () => {
    try {
        console.log("🔄 Connecting to MongoDB...");
        console.log("🔗 MongoDB URL:", process.env.MONGODB_URL);

        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("✅ MongoDB Connected Successfully!");
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error.message);
        process.exit(1); // Exit process on failure
    }
};

