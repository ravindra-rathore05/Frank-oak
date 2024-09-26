import React from 'react'
import { CiInstagram, CiTwitter } from 'react-icons/ci'
import { FaProductHunt } from 'react-icons/fa'
import { IoMdArrowDropdown } from 'react-icons/io'
import { LiaFlagUsaSolid } from 'react-icons/lia'
import { SlSocialFacebook, SlSocialLinkedin } from 'react-icons/sl'
import { TfiEmail } from 'react-icons/tfi'
import Acordian from '../Acordian'
  


const Footer = () => {
return (
    <>
    <div className='footer lg:max-w-full lg:py-[40px] sm:py-[20px]  bg-[black] text-[white] items-center text-center mt-10  grid  lg:grid-cols-4 sm:grid-cols-2 sm:gap-4'>
    <div className=' lg:leading-[35px] sm:leading-[25px]'>
      <img className='m-auto lg:pb-[20px] sm:pb-[10px] w-[30px]' src="https://www.frankandoak.com/cdn/shop/files/Shipping-black_2_40x.png?v=1657555435" alt="" />
      <p>Free Shipping</p>
      <span className=' sm:text-[13px]'>On orders over $99.</span>
    </div>
    <div className='lg:leading-[35px] sm:leading-[25px]'>
      <img className='m-auto lg:pb-[20px] sm:pb-[10px] w-[32px] '  src="https://www.frankandoak.com/cdn/shop/files/Returns-black_6defe504-0961-4e6b-9c71-70f44686eaa1_40x.png?v=1668024666" alt="" />
      <p>Free Shipping</p>
      <span className=' sm:text-[13px]' >On orders over $99.</span>
    </div>
    <div className='lg:leading-[35px] sm:leading-[25px]'>
      <img  className='m-auto lg:pb-[20px] sm:pb-[10px] lg:w-[70px] lg:h-[52px] w-[31px]' src="https://www.frankandoak.com/cdn/shop/files/franksclubArtboard_1_40x.png?v=1725037937" alt="" />
      <p>Free Shipping</p>
      <span className=' sm:text-[13px]'>On orders over $99.</span>
    </div>
    <div className='lg:leading-[35px] sm:leading-[25px]'>
      <img  className='m-auto lg:pb-[20px] sm:pb-[10px] sm:w-[35px]' src="https://www.frankandoak.com/cdn/shop/files/Sezzle_40x.png?v=1704401097" alt="" />
      <p>Free Shipping</p>
      <span className=' sm:text-[13px]'>On orders over $99.</span>
    </div>
    </div>
    
    <div className='lg:w-full  bg-[black]'>
      <div className='flex '>
   <div className='grid  grid-cols-4 w-full h-[400px]  m-[50px] sm:order-2 lg:order-1  sm:hidden lg:inline-flex gap-24  '>
    <div className=' sm:block'> 
      <img src="https://image.pitchbook.com/TF1G8VX2INpsvUYFzsmNbKdIZSf1693233775973_200x200" alt="" className='w-[100px] h-[100px] '/>
      <ul className='flex text-[white] text-[25px] pt-[20px] '>
        <li className='pl-[10px]'><CiInstagram /></li>
        <li  className='pl-[10px]'><SlSocialFacebook /></li>
        <li  className='pl-[10px]'><CiTwitter /></li>
        <li  className='pl-[10px]'><FaProductHunt /></li>
        <li  className='pl-[12px]'><TfiEmail /></li>
        <li  className='pl-[12px]'><SlSocialLinkedin /></li>
    
      </ul>
      <img src="https://b2146771.smushcdn.com/2146771/wp-content/uploads/2021/03/2018-B-Corp-Logo-White-L-e1616691288535.png?lossy=2&strip=1&webp=1" alt="" className='w-[40px] h-[60px] mt-[40px] ml-[10px]' />
    </div>
    <div className=' text-white'>
      <ul className='text-[14px] leading-[35px]'>
        <li className='text-[20px] pb-[10px]'>Our Story</li>
        <li>Who we are</li>
        <li>Sustainable practices</li>
        <li>Design Ideology</li>
        <li>Fabrics</li>
        <li>Circular denim™</li>
        <li>Partners and factories</li>
       </ul>
    </div>
    <div className=' text-white'>
    <ul className='text-[14px] leading-[35px]'>
        <li className='text-[20px] pb-[10px]'>Discover</li>
        <li>Gift Cards</li>
        <li>Frank's Club</li>
        <li>Give $15, Get $15</li>
        <li>Affiliate</li>
        <li>Blog</li>
        <li>Work with us</li>
        <li>Our Stores</li>
       </ul>
    </div>
    <div className='text-white'>
    <ul className='text-[14px] leading-[35px]'>
        <li className='text-[20px] pb-[10px]'>Customer Care</li>
        <li>Shipping Information</li>
        <li>Returns & Exchanges</li>
        <li>Coupon Codes</li>
        <li>F.A.Q.</li>
        <li>Terms & Conditions</li>
        <li>Refund Policy</li>
        <li>Privacy policy</li>
        <li>Accessibility Statement</li>
        <li>Customer Data Requests</li>
       </ul>
    </div>
     </div> 
     
     <div className='sm:order-1 '>
      <div className=' lg:w-[400px]  text-white mt-[50px] sm:order-1 lg:order-2 '>
        <div className='sm:w-[350px] sm:h-[0.8px] sm:bg-[white] sm:mx-auto sm:ms-[36px] lg:hidden'></div>
    <h4 className=' lg:text-[19px] lg:font-[500] sm:ms-[35px] sm:mt-[15px]'>Stay in touch</h4>
    <p className='lg:text-[12px] sm:text-[12px] lg:mt-[20px] sm:mt-[15px] lg:mb-[20px] sm:mb-[12px] sm:ms-[35px]'>Join our newsletter and stay in the know about new collections,<br /> outfit inspiration, sales, and more.</p>
    <form className='sm:ms-[35px]' action=""> 
      <input type="text" className='border  border-[white] bg-[#1F2322] lg:w-[300px] sm:w-[340px] h-[40px] pl-[10px]' placeholder='Email' />
      <input type="text" className='border  border-[white] bg-[#1F2322] lg:w-[300px] sm:w-[340px] h-[40px] mt-[20px] pl-[10px]' placeholder='First Name' />
      <div className='text-white mt-[10px] text-[13px] font-[500] '>I shop for
      <input type="radio"  className='m-[7px] border-white bg-[black]'/>
        <label className='text-[13px]' htmlFor="I shop for">Women</label>
        <input type="radio" className='m-[7px]' />
          <label className='text-[13px]' htmlFor="I shop for">Men</label>
          <input type="radio"  className='m-[7px]'/>
          <label className='text-[13px]' htmlFor="I shop for">All</label>
      </div>
      <button className='lg:w-[300px] sm:w-[340px] border-2 broder-[white] h-[40px] font-[500] mt-[14px]  text-[13px] sm:text-[17px] hover:bg-[whitesmoke] hover:text-black'>Subscribe</button>
    </form>
    <Acordian/>
      </div>
     </div>
     </div>
   
     <li className='text-white list-none text-[12px] ml-[50px]'>© Frank And Oak 2024 , All Rights Reserved.</li>
    </div>
   
    </>
  )
}

export default Footer














