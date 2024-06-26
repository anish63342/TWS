import React from 'react';
import '../styles.css'; // Importing CSS for the component
import productImage from '../assets/hmgoepprod.jpeg'; // Replace with the actual path to the product image
import Footer from '../components/footer';

const WhyUs = () => {
  return (
    <div className="why-us-container" id='why-us'>
      <div className="why-us-left">
        <h1>Why TWS?</h1>
        <div className="feature-row">
          <div className="feature">
          <div className="feature-text">
              <div className="icon" style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
              <span class="material-symbols-outlined" style={{paddingTop: '3px'}}>
              globe
              </span>
              <h3>Free shipping</h3>
              </div> 
              <p>We deliver all over the world.</p>
            </div>
          </div>
          <div className="feature">            
            <div className="feature-text">
              <div className="icon" style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
              <span class="material-symbols-outlined" style={{paddingTop: '3px'}}>
              local_shipping
              </span>
              <h3>Free shipping</h3>
              </div> 
              <p>For all purchases over $1,500.</p>
            </div>
          </div>
        </div>
        <div className="feature-row">
          <div className="feature">
          <div className="feature-text">
              <div className="icon" style={{display: 'flex', flexDirection: 'row', gap: '8px'}}>
              <span class="material-symbols-outlined" style={{paddingTop: '2px'}}>
              undo
              </span>
              <h3>Free return</h3>
              </div>  
              <p>You can exchange the item within 7 days.</p>
            </div>
          </div>
          <div className="feature">
          <div className="feature-text">
              <div className="icon" style={{display: 'flex', flexDirection: 'row', gap: '8px'}}>
              <span class="material-symbols-outlined" style={{paddingTop: '2px'}}>
              star_rate
              </span>
              <h3>Worldwide brands</h3>
              </div>
              
              <p>We work with the most famous shoe brands.</p>
            </div>
          </div>
        </div>      
      </div>
      <div className="why-us-right">
        <img src={productImage} alt="Product" />
        {/* <div className="product-info">
          <h3>Jimmy Choo Hawaii</h3>
          <p>$890</p>
          <button className="buy-now">Buy now</button>
        </div> */}
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default WhyUs;
