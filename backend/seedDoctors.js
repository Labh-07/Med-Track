import mongoose from "mongoose";
import Doctor from "./models/DoctorModel.js";
import dotenv from "dotenv";

dotenv.config();

const sampleDoctors = [
  {
    name: "Dr. Labh Patel",
    email: "labh.patel@example.com",
    password: "temp123", // Hash this in production!
    image: "https://example.com/doctor2.jpg",
    speciality: "Gynecologist",
    degree: "MD, DGO",
    experience: "8 years",
    about: "Expert in women's health and pregnancy care.",
    available: true,
    fees: 600,
    slots_booked: {},
    address: {
      street: "456 Care Road",
      city: "Wellness City",
      state: "Healthstate",
      pincode: "654321"
    },
    date: Date.now()
  },
  // Add more doctors here...
];

const seedDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await Doctor.deleteMany(); // Clear existing data (optional)
  await Doctor.insertMany(sampleDoctors);
  console.log("Database seeded!");
  mongoose.connection.close();
};

seedDB().catch(console.error);