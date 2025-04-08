const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/userModel");
const Order = require('./models/orderModel'); 

require("dotenv").config(); 

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Atlas connected");
    app.listen(PORT, () => {
      console.log(` Backend running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB Atlas connection error:", err);
  });


// ✅ USER REGISTRATION
app.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("❌ Registration error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ✅ USER LOGIN
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const role = user.role || "user";

    res.status(200).json({
      message: "Login successful",
      role,
      user: {
        username: user.username,
        email: user.email,
      },
    });

  } catch (err) {
    console.error("❌ Login error:", err);
    res.status(500).json({ message: "Server error", error: err.message });

  }
});


app.post('/order', async (req, res) => {
  try {
    const { name, email, password, address, phone, deliveryMethod, paymentMethod } = req.body;

    const newOrder = new Order({
      name,
      email,
      password,
      address,
      phone,
      deliveryMethod,
      paymentMethod
    });

    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully!" });

  } catch (err) {
    console.error("Order error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});




