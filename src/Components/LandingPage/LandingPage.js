import React from 'react';
import './LandingPage.css';
import Background from '../Background/Background';
import productImage from '../../image/product.webp';


const LandingPage = () => {
  return (
    <div className="lp-container">
      <Background />
      <header className="lp-header">
        <h1 className='fade-in-title' style={{marginBottom: '15px'}}>Welcome To <br></br> Superlative Business LLP</h1>
        <div className="line-container">
         <div className="blue-line"></div>
         <div className="white-line"></div>
        </div>



        <h4>Inventory Management</h4>
        <p className='fade-in-subtitle'>Your one-stop solution for managing inventory efficiently and effortlessly!</p>
      </header>

      <div style={{ backgroundImage: `url(${productImage})` }}>
      <section className="lp-content"  >
        <div className="lp-card responsive-box" 
          //  style={{ backgroundImage: `url(${productImage})` }}
        >
          <h2>Track Your Products</h2>
          <p>Easily manage and track your products with real-time updates.</p>
        </div>
        <div className="lp-card responsive-box">
          <h2>Add New Products</h2>
          <p>Quickly add new products to your inventory with just a few clicks.</p>
        </div>
        <div className="lp-card responsive-box">
          <h2>Manage Stock Levels</h2>
          <p>Keep track of stock levels and avoid overstocking or stockouts.</p>
        </div>
      </section>

      <section className="lp-actions">
        <button className="lp-button primary-btn">Get Started</button>
        <button className="lp-button secondary-btn">Learn More</button>
      </section>

      <section className="lp-features">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="feature-card">
          <h3>Real-Time Insights</h3>
          <p>Gain valuable insights into your inventory with real-time reporting and analytics.</p>
        </div>
        <div className="feature-card">
          <h3>Automated Alerts</h3>
          <p>Get automatic alerts for low stock, overstock, and other important inventory updates.</p>
        </div>
        <div className="feature-card">
          <h3>Easy Integration</h3>
          <p>Seamlessly integrate with your existing systems for smooth operations.</p>
        </div>
      </section>
      </div>

      <section className="lp-testimonials">
        <h2 className="section-title">What Our Users Say</h2>
        <div className="testimonial-card">
          <p>"Superlative Inventory Management has transformed our operations. It’s user-friendly and incredibly efficient!"</p>
          <h4>John Doe</h4>
          <span>CEO, XYZ Corporation</span>
        </div>
        <div className="testimonial-card">
          <p>"The automated alerts and real-time tracking features have helped us stay on top of our inventory like never before."</p>
          <h4>Jane Smith</h4>
          <span>Operations Manager, ABC Enterprises</span>
        </div>
      </section>

      <footer className="lp-footer">
        <p>&copy; 2025 Superlative Business LLP. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;



