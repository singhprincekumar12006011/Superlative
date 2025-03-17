import React, { useState } from "react";
import './Product.css';
import Background from '../../Background/Background'
import ReadExcel from "./ReadExcel";

const Product = () => {
  const [form, setForm] = useState({
    itemName: "",
    itemQty: "",
    itemDescription: "",
    vendor: "",
    category: "",
    dateTime: "",
    bill: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("itemName", form.itemName);
    formData.append("itemQty", form.itemQty);
    formData.append("itemDescription", form.itemDescription);
    formData.append("vendor", form.vendor);
    formData.append("category", form.category);
    formData.append("dateTime", form.dateTime);
    formData.append("bill", form.bill);

    try {
      const response = await fetch("http://localhost:8080/api/formdata/addform", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Data saved successfully:", result);
        alert("Product data saved successfully!");
        setForm({
          itemName: "",
          itemQty: "",
          itemDescription: "",
          vendor: "",
          category: "",
          dateTime: "",
          bill: null,
        });
      } else { 
        console.error("Error saving data:", response.statusText);
        alert("Error saving product data.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while saving the data.");
    }
  };

  return (
    <div className="pr-body">
      <Background />
      <header className="lp-header">
        <h1 className='fade-in-title' style={{ marginBottom: '15px' }}>
          Welcome To <br /> Superlative Business LLP
        </h1>
        <div className="line-container">
          <div className="blue-line"></div>
          <div className="white-line"></div>
        </div>
        <h4>Inventory Management</h4>
        <p className='fade-in-subtitle'>
          Your one-stop solution for managing inventory efficiently and effortlessly!
        </p>
      </header>

      <form className="pr-form" onSubmit={handleSubmit}>
        <h2>Add Product</h2>
        <div className="form-row">
          <div>
            <label>Item Name:</label>
            <input
              type="text"
              name="itemName"
              value={form.itemName}
              onChange={handleChange}
              required
              placeholder="Enter item name..."
            />
          </div>
          <div>
            <label>Item Quantity:</label>
            <input
              type="number"
              name="itemQty"
              value={form.itemQty}
              onChange={handleChange}
              required
              placeholder="Enter number of items..."
            />
          </div>
        </div>

        <div className="form-row">
          <div>
            <label>Item Description:</label>
            <input
              type="text"
              name="itemDescription"
              value={form.itemDescription}
              onChange={handleChange}
              required
              placeholder="Enter item description..."
            />
          </div>
          <div>
            <label>Vendor:</label>
            <input
              type="text"
              name="vendor"
              value={form.vendor}
              onChange={handleChange}
              required
              placeholder="Enter vendor name..."
            />
          </div>
        </div>

        <div className="form-row">
          <div>
            <label>Category:</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              required
            >
              <option value="">Select a category</option>
              <option value="Stationary">Stationary</option>
              <option value="Grocery">Grocery</option>
              <option value="Dairy">Dairy</option>
              <option value="Electronics">Electronics</option>
              <option value="Online">Online</option>
              <option value="Restaurant">Restaurant</option>
            </select>
          </div>
          <div>
            <label>Date/Time:</label>
            <input
              type="datetime-local"
              name="dateTime"
              value={form.dateTime}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div>
            <label>Bill:</label>
            <input
              type="file"
              name="bill"
              onChange={handleChange}
              required
              style={{
                width: '47%',
                padding: '8px',
              }}
            />
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>

      <ReadExcel />

      <footer className="lp-footer">
        <p>&copy; 2025 Superlative Business LLP. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Product;
