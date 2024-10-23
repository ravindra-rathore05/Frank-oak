import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci';
import { FaAngleLeft, FaRegHeart, FaRegUserCircle} from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa'
import { IoBagHandleOutline, IoChevronDown, IoMenuSharp } from 'react-icons/io5';
import { LiaFlagUsaSolid } from 'react-icons/lia';

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { TiSocialFacebook } from 'react-icons/ti';
import { SiGoogle } from 'react-icons/si';
import { MdArrowRightAlt } from 'react-icons/md';
import Offcanvas from '../Offcanvas';





const Header = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
 
  


  return (

    <>
    
   <div className='head w-full sm:h-[33px] lg:h-[30px] h-[40px] bg-[black] text-[white] text-[10px] font-[700] flex justify-evenly items-center sm:text-[14px] text-center  '> 
    <FaAngleLeft className='text-[grey] text-[19px] hover:text-[white] cursor-pointer'/>
    Just in: New organic cotton pieces for effortless looks. Shop Women Shop Men 386527
    <FaAngleRight className='text-[grey] text-[19px] hover:text-[white] cursor-pointer' />
    
</div>
<div className='header w-full h-[45px]  flex  bg-[white] sticky top-0 z-50 '  >
<div className='c1  w-[50%] h-[40px] flex list-none lg:justify-around items-center'>
<li className='lg:hidden list-none'></li>
<li className='font-[700] text-[18px] flex items-center sm:flex sm:items-center  '> <span className='lg:hidden '><IoMenuSharp /></span><span className=''>Frank And Oak</span></li>

  <li className=' hover:border-b-[1px] border-[black] hidden lg:block  '><a className='' href="#">This Just In </a>
  <div className='rajasthan-menu grid grid-cols-2 gap-4 px-[30px]'>
    <div className='grid grid-cols-3 gap-2 first-p pt-[30px]'>
      <ul className='a1'><span className='text-[16px] font-[500] border-b-[1px] border-black'> Women's New Arrivals</span>
        <li className='pt-[15px]'> Shop All</li>
       <li>Tops</li>
        <li>Bottoms</li>
        <li>Accessories</li>
        <li>TJackets & Coats</li>
        <li>Blazers</li>
        <li>Dresses</li>
        </ul>
      <ul className='a2'><span className='text-[16px] font-[500] border-b-[1px] border-black'> Men's New Arrivals</span>
        <li className='pt-[20px]'>Shop All</li>
        <li>Tops</li>
        <li>Bottoms</li>
         <li>Overshirtss</li>
        <li>Jackets & Coats</li>
        <li>Accessories</li>
        </ul>
      
     </div>
    <div className='grid grid-cols-2 gap-4 pt-[30px] '>
       <div> 
        <img src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_90187318-a3f1-492f-9377-b18381a175a6_600x.jpg?v=1724869721" alt="" />
      </div>
      <div>
        <img src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop-1_3ac58a1d-4386-40be-a9bf-9db422c8941d_600x.jpg?v=1724869727" alt="" />
      </div> 
    </div>
  </div>
  </li>

<li className=' hover:border-b-[1px] border-[black] hidden lg:block w-[50px] h-- '> 

  <a href="women">Women</a>
  <div className='rajasthan-menu grid grid-cols-2 gap-4 px-[30px]'>
    <div className='grid grid-cols-3 gap-2 first-p pt-[30px]'>
      <ul className='a1'><span className='text-[16px] font-[500] border-b-[1px] border-black'> Featured</span>
        <li className='pt-[15px]'>New In</li>
       <li>Best Sellers</li>
        <li>Coming Soon</li>
        <li>The Skyline</li>
        <li>The Originals</li>
        <li>Workwear</li>
        <li>Gift Cards</li>
        <li className='text-[red]'>Sale</li>
       </ul>
      <ul className='a2'><span className='text-[16px] font-[500] border-b-[1px] border-black'> Clothing</span>
        <li className='pt-[20px]'>Shop All</li>
        <li>T-shirts & Tops</li>
        <li>Blouses & Shirts</li>
        <li>Sweaters & Cardigans</li>
        <li>Blazers & Overshirts</li>
        <li>Jackets & Coats</li>
        <li>Denim</li>
        <li>Pants</li>
        <li>Dresses</li>
        <li>Skirts & Shorts</li>
       </ul>
      <ul className='a3'><span className='text-[16px] font-[500] border-b-[1px] border-black'> Accessories</span>
        <li className='pt-[15px]'>Shop All</li>
        <li>Caps & Hats</li>
        <li>Shoes & Boots</li>
        <li>Bags</li>
      </ul>
     </div>
    <div className='grid grid-cols-2 gap-4 pt-[30px] '>
       <div> 
        <img src="https://www.frankandoak.com/cdn/shop/files/Menu_tile_1cd466bb-b15c-4e83-9461-c8c32bb3211e_600x.jpg?v=1725974027" alt="" />
      </div>
      <div>
        <img src="https://www.frankandoak.com/cdn/shop/files/Menu_tile-1_64579674-60e7-42d4-a59a-a13e6b96e7cd_600x.jpg?v=1725974022" alt="" />
      </div> 
    </div>
  </div>

</li>
<li className=' hover:border-b-[1px] border-[black] hidden lg:block w-[50px] h-- '> 
  <a href="men">Men</a>
  <div className='rajasthan-menu grid grid-cols-2 gap-4 px-[30px]'>
    <div className='grid grid-cols-3 gap-2 first-p pt-[30px]'>
      <ul className='a1'><span className='text-[16px] font-[500] border-b-[1px] border-black'> Featured</span>
        <li className='pt-[15px]'>New In</li>
       <li>Best Sellers</li>
        <li>Coming Soon</li>
        <li>The Skyline</li>
        <li>The Originals</li>
        <li>Workwear</li>
        <li>Gift Cards</li>
        <li className='text-[red]'>Sale</li>
       </ul>
      <ul className='a2'><span className='text-[16px] font-[500] border-b-[1px] border-black'> Clothing</span>
        <li className='pt-[20px]'>Shop All</li>
        <li>T-shirts & Tops</li>
        <li>Blouses & Shirts</li>
        <li>Sweaters & Cardigans</li>
        <li>Blazers & Overshirts</li>
        <li>Jackets & Coats</li>
        <li>Denim</li>
        <li>Pants</li>
        <li>Dresses</li>
        <li>Skirts & Shorts</li>
       </ul>
      <ul className='a3'><span className='text-[16px] font-[500] border-b-[1px] border-black'> Accessories</span>
        <li className='pt-[15px]'>Shop All</li>
        <li>Caps & Hats</li>
        <li>Shoes & Boots</li>
        <li>Bags</li>
      </ul>
     </div>
    <div className='grid grid-cols-2 gap-4 pt-[30px] '>
       <div> 
        <img src="https://www.frankandoak.com/cdn/shop/files/Menu_tile-3_a8945a6a-262a-4161-a9a2-b5608646defd_600x.jpg?v=1725974015" alt="" />
      </div>
      <div>
        <img src="https://www.frankandoak.com/cdn/shop/files/Menu_tile-2_03931173-c63e-46a0-9ac9-d2d8793a230b_600x.jpg?v=1725974013" alt="" />
      </div> 
    </div>
  </div>

</li>
<li className='hover:border-b-[1px] border-[black] hidden lg:block'>Our Story</li>
</div>
<div className='  w-[50%] h-[40px] list-none flex items-center justify-end pr-[20px] text-[25px] popup'>
  <li className='pr-[15px]'><CiSearch /></li>
  <li  className='pr-[15px] '><FaRegUserCircle onClick={onOpenModal} className={{Modal: 'customodal'}}/></li>
  <li  className='pr-[15px]'><FaRegHeart  onClick={onOpenModal}/></li>
  <Modal open={open} onClose={onCloseModal} >
    <div className=' '>
       <section className='w-full sm:w-[403px] lg:w-[623px] bg-[#F9F9F9] pt-[48px] pb-[32px] px-4 md:px-6 lg:px-8'>
        <div className='text-center'>
          <p className='text-[26px]'>Welcome back!</p>
          <p className='text-[16px] mt-[10px]'>Log in to enjoy your perks</p>
        </div>
        <div className='grid grid-cols-3 gap-2 mt-[32px]'>
          <div className='text-[10px] text-center'>
            <p>Frank's Club</p>
            <p>Early access</p>
            <p>Earn points, get rewards</p>
          </div>
          <div className='text-[10px] text-center'>
            <p>Wishlist</p>
            <p>Early access</p>
            <p>Save your favourites</p>
          </div>
          <div className='text-[10px] text-center'>
            <p>Early access</p>
            <p>Early access</p>
            <p>Exclusive sale perks</p>
          </div>
        </div>
       </section>
       <div className='px-[40px] sm:px-[10px] lg:w-[620px] sm:w-[403px] mt-[20px] sm:mt-[40px]'>
       <input type="text" className='border-[1px]  border-[grey] sm:w-[360px]  lg:w-[565px] sm:h-[40px]  lg:h-[40px] pl-[10px] sm:my-[10px]' placeholder='Email Address' />
       <input type="text" className='border-[1px]  border-[grey] sm:w-[360px]  lg:w-[565px] sm:h-[40px]  lg:h-[40px] pl-[10px]' placeholder='Password'  />
       <button  className='relative sm:left-[300px] lg:left-[-50px] bottom-[2px] underline text-[14px] font-[500]'>show</button>
       <a className='relative lg:left-[35px] text-[14px] font-[500] underline' href="Forgot Password?">Forgot Password?</a>
       <button className='lg:w-[560px] lg:h-[50px] bg-[black] text-[white] font-[500] text-[17px] mt-[30px] sm:w-[350px] sm:h-[45px]'>Log In</button>
       </div>
       <div className='flex lg:ml-[40px] sm:ml-[20px]'>
       <div className='lg:w-[223px] sm:w-[123px] h-[0.8px] mt-[30px] bg-[lightgrey]'></div>
       <div className='text-[12px] font-[500] pt-[19px] px-[10px]'>Social login</div>
       <div className='lg:w-[223px] sm:w-[123px] h-[0.8px] mt-[30px] bg-[lightgrey]'></div>
       </div>
       <div className='flex w-[623px] ml-[20px] mt-[30px]  '>
        <div className='w-[261px] h-[42px] border-[2px] border-[black] flex hover:bg-[lightgrey] '><TiSocialFacebook className='text-[30px] pt-[4px] sm:pt-[10px] '/> <span className='py-[8px] px-[20px] text-[13px] font-[500]'>Sign in with Facebook
        </span></div>
        <div className='w-[261px] h-[42px] border-[2px] border-[black] ml-[20px] flex hover:bg-[lightgrey]'><SiGoogle className='text-[30px] pt-[12px]'/> <span  className='py-[8px] px-[20px] text-[13px] font-[500]'>
        Sign in with Google</span></div>
       </div>
       <div className='flex ml-[20px]'>
       <div className='w-[223px] h-[0.8px] mt-[30px] bg-[lightgrey]'></div>
       <div className='text-[12px] font-[500] pt-[19px] px-2 '>Create an account</div>
       <div className='w-[223px] h-[0.8px] mt-[30px] bg-[lightgrey]'></div>
       </div >
       <div className=' text-center mt-[20px] text-[14px] font-[500] mb-[40px] me-[20px]'>Don't have an account? 
          <span className=''> Sign up <MdArrowRightAlt className='relative left-[65%] bottom-[20px] text-[25px]' /></span>
        </div>
        </div>
      </Modal>
 <li className='pr-[15px]'> <Offcanvas/> </li>
</div>
</div>
    
</>
  )
}

export default Header
