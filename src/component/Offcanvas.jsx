import React, { useState } from 'react'
import { HiMiniArrowLongLeft, HiOutlineArrowLongLeft, HiOutlineArrowSmallLeft } from 'react-icons/hi2';
import { IoBagHandleOutline } from 'react-icons/io5';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
const Offcanvas = () => {
  const [IsOpen, setIsOpen] = useState(false);

  const toggleOffCanvas = () => setIsOpen(!IsOpen);

  var ravinder = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll: 1
  };
  
  return (
   <>
    <div className="relative">
    <IoBagHandleOutline onClick={toggleOffCanvas} />
      

     
      <div
        className={`fixed top-0 right-0 w-[550px] h-full bg-[white] text-white transition-transform transform ${
          IsOpen ? 'translate-x-0' : '-translate-x-[-600px]'
        }`}
      >
        <button
          onClick={toggleOffCanvas}
          className="absolute top-0 left-0  flex w-full h-[40px] pt-[7px] pl-[20px]"
        >
          <HiOutlineArrowSmallLeft className='text-[black] text-[18px] relative top-[3px] ' />
         <span className='text-[black] text-[15px]'>Continue Shopping
         </span>
        </button>
        <div className="w-full h-[30px] mt-[45px] bg-[black] border-[1px] text-center text-[15px]">
        Free shipping on orders $99+ and free returns
        </div>
        <div className='w-full h-[40px]  mt-[50px] bg-[#F9F9F9] text-[black] text-[15px] font-[500] pt-[8px] pl-[20px]'>Most popular right now</div>
        <div className='pt-[30px]'>
        <Slider {...ravinder}>
         
      <div className='extra'>
        <figure><img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2130302-2AY.01_600x.jpg?v=1721141422" alt="" className='w-[95px] h-[127px]'/></figure>
        <div>
        <div className='flex'>
          <p className='text-[black] text-[13px] font-[500]'>The SeaCell™ Crewneck Cardigan <br /> in Dark Chocolate</p>
          <span className='text-[black] text-[12px] font-[500] pl-[30px]'>$149.00</span>
           </div>
           <div>
          <select className='w-[120px] h-[30px] border-[1px] border-[lightgrey] text-[black] text-[13px]' name="select size" id="5"  >fdfdfdfd
            <option disabled >Select a Size</option>
            <option className='text-[13px]' value="">XXS</option>
            <option className='text-[13px]' value="">XS</option>
            <option className='text-[13px]' value="">S</option>
            <option className='text-[13px]' value="">M</option>
            <option className='text-[13px]' value="">L</option>
            <option className='text-[13px]' value="">XL</option>
          </select>
        </div>
        <button className='w-[120px] h-[34px] text-[black] border-[2px] border-[black] text-[14px] font-[500]'> Add to cart </button>
        </div>
       <button className='previes'></button>
      </div>
      <div className='extra'>
        <figure><img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2310173-5JR.01_600x.jpg?v=1721145183" alt="" className='w-[95px] h-[127px]'/></figure>
        <div>
        <div className='flex'>
          <p className='text-[black] text-[13px] font-[500]'>The SeaCell™ Crewneck Cardigan <br /> in Dark Chocolate</p>
          <span className='text-[black] text-[12px] font-[500] pl-[30px]'>$149.00</span>
           </div>
           <div>
          <select className='w-[120px] h-[30px] border-[1px] border-[lightgrey] text-[black] text-[13px]' name="select size" id="5"  >fdfdfdfd
            <option disabled >Select a Size</option>
            <option className='text-[13px]' value="">XXS</option>
            <option className='text-[13px]' value="">XS</option>
            <option className='text-[13px]' value="">S</option>
            <option className='text-[13px]' value="">M</option>
            <option className='text-[13px]' value="">L</option>
            <option className='text-[13px]' value="">XL</option>
          </select>
        </div>
        <button className='w-[120px] h-[34px] text-[black] border-[2px] border-[black] text-[14px] font-[500]'> Add to cart </button>
        </div>
       <button className='previes'></button>
      </div>
      <div className='extra'>
        <figure><img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2130297-4BO.01_600x.jpg?v=1723489145" alt="" className='w-[95px] h-[127px]'/></figure>
        <div>
        <div className='flex'>
          <p className='text-[black] text-[13px] font-[500]'>The SeaCell™ Crewneck Cardigan <br /> in Dark Chocolate</p>
          <span className='text-[black] text-[12px] font-[500] pl-[30px]'>$149.00</span>
           </div>
           <div>
          <select className='w-[120px] h-[30px] border-[1px] border-[lightgrey] text-[black] text-[13px]' name="select size" id="5"  >fdfdfdfd
            <option disabled >Select a Size</option>
            <option className='text-[13px]' value="">XXS</option>
            <option className='text-[13px]' value="">XS</option>
            <option className='text-[13px]' value="">S</option>
            <option className='text-[13px]' value="">M</option>
            <option className='text-[13px]' value="">L</option>
            <option className='text-[13px]' value="">XL</option>
          </select>
        </div>
        <button className='w-[120px] h-[34px] text-[black] border-[2px] border-[black] text-[14px] font-[500]'> Add to cart </button>
        </div>
       <button className='previes'></button>
      </div>
      <div className='extra'>
        <figure><img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2120391-408.01_cef78299-5aa9-4199-899e-d91f84c84235_600x.jpg?v=1718373269" alt="" className='w-[95px] h-[127px]'/></figure>
        <div>
        <div className='flex'>
          <p className='text-[black] text-[13px] font-[500]'>The SeaCell™ Crewneck Cardigan <br /> in Dark Chocolate</p>
          <span className='text-[black] text-[12px] font-[500] pl-[30px]'>$149.00</span>
           </div>
           <div>
          <select className='w-[120px] h-[30px] border-[1px] border-[lightgrey] text-[black] text-[13px]' name="select size" id="5"  >fdfdfdfd
            <option disabled >Select a Size</option>
            <option className='text-[13px]' value="">XXS</option>
            <option className='text-[13px]' value="">XS</option>
            <option className='text-[13px]' value="">S</option>
            <option className='text-[13px]' value="">M</option>
            <option className='text-[13px]' value="">L</option>
            <option className='text-[13px]' value="">XL</option>
          </select>
        </div>
        <button className='w-[120px] h-[34px] text-[black] border-[2px] border-[black] text-[14px] font-[500]'> Add to cart </button>
        </div>
       <button className='previes'></button>
      </div>
      <div className='extra'>
        <figure><img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2120391-2KU.01_1058d357-00cc-4214-b7f6-459b7033cdc9_600x.jpg?v=1718225373" alt="" className='w-[95px] h-[127px]'/></figure>
        <div>
        <div className='flex'>
          <p className='text-[black] text-[13px] font-[500]'>The SeaCell™ Crewneck Cardigan <br /> in Dark Chocolate</p>
          <span className='text-[black] text-[12px] font-[500] pl-[30px]'>$149.00</span>
           </div>
           <div>
          <select className='w-[120px] h-[30px] border-[1px] border-[lightgrey] text-[black] text-[13px]' name="select size" id="5"  >fdfdfdfd
            <option disabled >Select a Size</option>
            <option className='text-[13px]' value="">XXS</option>
            <option className='text-[13px]' value="">XS</option>
            <option className='text-[13px]' value="">S</option>
            <option className='text-[13px]' value="">M</option>
            <option className='text-[13px]' value="">L</option>
            <option className='text-[13px]' value="">XL</option>
          </select>
        </div>
        <button className='w-[120px] h-[34px] text-[black] border-[2px] border-[black] text-[14px] font-[500]'> Add to cart </button>
        </div>
       <button className='previes'></button>
      </div>
      
    </Slider>
        </div>
       <div className='w-full h-[124px] relative top-[270px] bg-[#F9F9F9]'>
           <div className=' flex justify-between'>
            <p className='text-[18px] text-[black] pl-[20px] pt-[10px]'>Subtotal <span className='text-[grey]'>(0 items)</span></p>
            <p className='text-[18px] text-[black] pr-[30px] pt-[10px]'>$0.00</p>
           </div>
           <div className='text-center text-[smokewhite]  w-[497px] h-[50px] bg-[#60605F] m-auto mt-[20px] hover:bg-[black]  '>
           Secure Checkout

           </div>
       </div>
      </div>
    </div> 
   </>
  )
}

export default Offcanvas