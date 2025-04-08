import React, { useState, useEffect } from 'react';

const Order = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    phone: '',
    deliveryMethod: '',
    paymentMethod: '',
  });

  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status on component mount
  useEffect(() => {
    const token = localStorage.getItem('token'); // or sessionStorage
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      setMessage("⚠️ Please log in before placing an order.");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isLoggedIn) {
      setMessage("⚠️ You must be logged in to place an order.");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Optional if backend requires token
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Order Successful, now enjoy your food ❤️");
        setForm({
          name: '',
          email: '',
          password: '',
          address: '',
          phone: '',
          deliveryMethod: '',
          paymentMethod: '',
        });
      } else {
        setMessage("Failed to place order: " + data.message);
      }

    } catch (err) {
      console.error("Error:", err);
      setMessage("Server error");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className="form-control" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input className="form-control" name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input className="form-control" name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
        <input className="form-control" name="address" placeholder="Address" value={form.address} onChange={handleChange} />
        <input className="form-control" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />

        <h5>Delivery Method</h5>
        <div>
          <input type="radio" name="deliveryMethod" value="Delivery" onChange={handleChange} /> Delivery
          <input type="radio" name="deliveryMethod" value="Pick Up" onChange={handleChange} /> Pick Up
        </div>

        <h5>Payment Method</h5>
        <div>
          <input type="radio" name="paymentMethod" value="Cash on Delivery" onChange={handleChange} /> Cash
          <input type="radio" name="paymentMethod" value="Credit/Debit Card" onChange={handleChange} /> Card
          <input type="radio" name="paymentMethod" value="UPI" onChange={handleChange} /> UPI
        </div>

        <button type="submit" className="btn btn-primary">Place Order</button>
      </form>

      {message && <h4 style={{ marginTop: "20px" }}>{message}</h4>}
    </div>
  );
};

export default Order;
