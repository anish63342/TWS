import React from 'react';
import '../styles.css';
import personalImage1 from '../assets/hmgoepprod.jpeg'; // Replace with actual image paths
import personalImage2 from '../assets/hmgoepprod2.jpeg';
import logo from '../assets/TWS black logo.png';
import calender from '../assets/calendar.png'

const PersonalStyling = () => {
  return (
    <div>
      <div id='personal' className="personal-container">
        <div className="personal-left">
          <img src={personalImage1} alt="personal Us 1" className="personal-image-1" />
        </div>
        <div className="personal-right">
          <p className="personal-text">
            We are a global platform for the footwear industry. Our goal is to unite designers, boutiques and buyers on one site. TWS offers unique shopping opportunities and the largest selection of leading brands on one platform.
          </p>
          <p className="personal-text">
            Among our advantages: a fully localized website and applications for iOS and Android, Russian-language customer support, free shipping for purchases from 18,000 rubles (300 euros / 350 dollars) to Russia, Ukraine and Kazakhstan, as well as free returns.
          </p>
          {/* <div className="personal-right-img">
            <img src={logo} alt="personal Us 2" className='personal-image-2' style={{paddingBottom: 0, paddingTop: 0}} />
          </div> */}
        </div>
      </div>
      <div className="pricing-table">
      <div className="plan free">
        <div className="plan-header">
          {/* <div className="plan-icon material-icons">shopping_cart</div> */}
          <img src={calender} alt= 'calender' height='100px' width='100px'/>
          <div className="plan-price">Monthly Plan</div>
          <div className="plan-review-invites">25 Review Invites</div>
        </div>
        <button className="plan-button">START</button>
        <div className="plan-features">
          <div>Customer Insights</div>
          <div>Survey Replies 10</div>
          <div>Shopify Replay Sessions 50</div>
          <div>Key Features</div>
          <ul>
            <li>Company Reviews</li>
            <li>Product Reviews</li>
            <li>Reviews Widget</li>
            <li>Surveys</li>
          </ul>
        </div>
      </div>

      <div className="plan start-up">
        <div className="plan-header">
          <div className="plan-icon material-icons">store</div>
          <div className="plan-price">$99<span>/mth</span></div>
          <div className="plan-review-invites">1,500 Review Invites</div>
        </div>
        <button className="plan-button">START TRIAL</button>
        <div className="plan-features">
          <div>SMS</div>
          <div>SMS Invites 100</div>
          <div>Customer Insights</div>
          <div>Survey Replies 100</div>
          <div>Shopify Replay Sessions 100</div>
          <div>Key Features</div>
          <ul>
            <li>Review Booster</li>
            <li>Google Seller Ratings</li>
            <li>Google Local</li>
            <li>Review Reply</li>
            <li>Reputation Manager</li>
          </ul>
        </div>
      </div>

      {/* <div className="plan grow">
        <div className="plan-header">
          <div className="plan-icon material-icons">trending_up</div>
          <div className="plan-price">$299<span>/mth</span></div>
          <div className="plan-review-invites">5,000 Review Invites</div>
        </div>
        <button className="plan-button">START TRIAL</button>
        <div className="plan-features">
          <div>SMS</div>
          <div>SMS Invites 100</div>
          <div>Customer Insights</div>
          <div>Survey Replies 100</div>
          <div>Shopify Replay Sessions 100</div>
          <div>Key Features</div>
          <ul>
            <li>Attributes</li>
            <li>Product Grouping</li>
            <li>UGC Manager</li>
            <li>AI Review Reply</li>
          </ul>
        </div>
      </div>

      <div className="plan plus">
        <div className="plan-header">
          <div className="plan-icon material-icons">business</div>
          <div className="plan-price">$499<span>/mth</span></div>
          <div className="plan-review-invites">10,000 Review Invites</div>
        </div>
        <button className="plan-button">START TRIAL</button>
        <div className="plan-features">
          <div>SMS</div>
          <div>SMS Invites 100</div>
          <div>Customer Insights</div>
          <div>Survey Replies 100</div>
          <div>Shopify Replay Sessions 100</div>
          <div>Key Features</div>
          <ul>
            <li>Unlimited Email Templates</li>
            <li>Multi Storefront</li>
            <li>UGC Shopping Galleries</li>
            <li>API Access</li>
          </ul>
        </div>
      </div> */}
    </div>
    </div>
    
  );
};

export default PersonalStyling;
