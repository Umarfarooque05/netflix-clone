import React from 'react';
import "./Footer.css"

export default function Footer() {
  return (<>
<div className='footer-data'>
    <div className='d-flex justify-content-between '>
      <div className='container'>
        <div className='row'>
          <div className='col'> 
            <h1>Furniz</h1>
          </div>
          <div className='col'> 
          <h5>Quick links</h5>
          </div>
          <div className='col'> 
          <h5>Useful</h5>
          </div>
          <div className='col'> 
          <h5>Follow</h5>
          </div>
        </div>
      </div>
    </div>
    <hr/>
    
    <div className='row footer-last'>
    <div className='col'>
    <p>when an unknown printertook a galley of type an scrambled it to make a type specimen book. It has survived not only five centuries <br/>when an unknown printertook a galley of type an scrambled it to make </p>
    </div>
    
    <div className='col'>
      <p><a href=''>Home</a></p>
      <p><a href=''>Services</a></p>
      <p><a href=''>About us</a></p>
      <p><a href=''>Contact</a></p>
    </div>
    
    <div className='col'>
    <p>Privacy policy</p>
      <p><a href='https://www.transparenttextures.com/'>Legal</a></p>
      <p>FAQ's</p>
      <p>Blogs</p>
    </div>
    
    <div className='col follow-button'>
      <button className='btn btn-warning social-button'><a href='https://www.instagram.com/'><i class="fa-brands fa-instagram-square"></i></a></button>
      <button className='btn btn-warning social-button'><a href='https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C550525804944%7Ce%7Cfacebook%27%7C&placement=&creative=550525804944&keyword=facebook%27&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-362360550869%26loc_physical_ms%3D1007785%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D'><i class="fa-brands fa-facebook"></i></a></button>
      <button className='btn btn-warning social-button'><a href='https://twitter.com/Umarfarooque05'><i class="fa-brands fa-twitter"></i></a></button>      
    </div>
    </div>
</div>

    {/* <div className='footer-data d-flex justify-content-between'>
    <div className='container'>
      <div className='row'>
      <div className='col'>
      <h2>Furniz</h2>
        <hr/>
        <p>when an unknown printertook a galley of type an scrambled it to make a type specimen book. It has survived not only five centuries <br/>when an unknown printertook a galley of type an scrambled it to make </p>
      </div>
      <div className='col'>
        <h5>Quick links</h5>
        <p>Home</p>
      </div>
      <div className='col'>
      <h5>Useful</h5>
      </div>
      <div className='col'>
      <h5>Follow Us</h5>
      </div>
      
      </div>
      </div>
    </div> */}
  </>
  )
}
