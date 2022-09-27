import React from 'react';
import "./ContactUs.css";
import contact from "./Images/download.jpg"

export default function ContactUs() {
  return (
      <>
        <div className='contact d-flex justify-content-between'>
          <div className='contact-data'>
            <h1>CONTACT</h1>
            <div className='row'>
              <div className='col'>
                <button className='btn btn-warning contact-button social-button'><i class="fa-solid fa-phone"></i></button>
                <button className='btn btn-warning contact-button social-button'><i class="fa-solid fa-envelope"></i></button>
                <button className='btn btn-warning contact-button social-button'><i class="fa-solid fa-location-dot"></i></button>
              </div>
              <div className='col align-items-baseline'>
                  <p>+17723237790</p>
                  <p>contact@furniz.com</p>
                  <p>#33, 3rd street, RS way, Varanasi, Uttar Pradesh, India, 232101</p>
              </div>
              <div className='col '>
              </div>
            </div>
          </div>

            <div>
              <img className='website-image' src={contact}/>
            </div>
        </div>
      </>
  )
}
