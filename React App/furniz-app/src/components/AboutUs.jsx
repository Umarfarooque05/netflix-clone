import React from 'react';
import "./AboutUs.css";
import furniture from "./Images/furniture.jpg";

export default function AboutUs() {
  return (
    <>
        <div className='about-furniz d-flex justify-content-between'>
        
            <div className='about-us'>
                <h1 className='about-furniz'>ABOUT US</h1>
                <hr/>
                <p className=''>when an unknown printertook a galley of type an scrambled it to make a type specimen book. It has survived not only five centuries <br/>when an unknown printertook a galley of type an scrambled it to make </p>
            </div>            
            <div className='about-button '>
                <button className='btn btn-warning social-button'><a href='https://twitter.com/Umarfarooque05'><i class="fa-brands fa-twitter"></i></a></button>
                <button className='btn btn-warning social-button'><a href='https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C550525804944%7Ce%7Cfacebook%27%7C&placement=&creative=550525804944&keyword=facebook%27&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-362360550869%26loc_physical_ms%3D1007785%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D'><i class="fa-brands fa-facebook"></i></a></button>
                <button className='btn btn-warning social-button'><a href='https://www.instagram.com/'><i class="fa-brands fa-instagram-square"></i></a></button>
            </div>
            <div>
            <img className='website-image'  src={furniture}/>
            </div>
        </div>
    </>
  )
}
