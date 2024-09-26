import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FaRegHeart, FaStar } from "react-icons/fa";
import Footer from '../comon component/Footer';
import { LuMoveLeft } from 'react-icons/lu';
import Header from '../comon component/Header'

export default function HomePageFinal() {
    const [activeTab, setActiveTab] = useState('Women s');

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
    
  
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      
      
     };
     var ravindra = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    
  return (
    <div>
         <Header/>
         <div className='bg-[url("https://www.frankandoak.com/cdn/shop/files/desktop_duo_f142bc55-c4e2-4945-a203-7bad87652202_2160x.jpg?v=1723666577")] h-[600px] bg-cover bg-right  '>
      <h1 className='lg:text-[78px] lg:font-[500] lg:leading-[78px] lg:text-center lg:pt-[190px] lg:text-[black] text-[44px] font-[600] leading-[44px] text-center pt-[190px] text-white'>Fall 2024</h1>
     <p className='lg:text-[32px] lg:font-[400] lg:text-center lg:text-[black] text-[20px] leading-[24px]  text-center text-white font-semibold'>The new classics.</p>
    <div className="flex justify-center sm:gap-2 lg:gap-6 mt-5 lg:flex-row sm:flex-col text-center sm:w-[40%] sm:mx-auto ">
      <div className="lg:bg-black px-10 lg:text-white py-3 sm:bg-white sm:text-black ">Women</div>
      <div className="lg:bg-black px-[50px] lg:text-white py-3 sm:bg-white sm:text-black">Men</div>
    </div>
    </div>
    
    <div className='max-w-[full]  bg-[black] flex sm:w-full sm:bg-[black] sm:py-4 lg:py-0 sm:flex  '>
      <div className='flex text-center sm:flex  lg:m-auto  '>
        <div className='block lg:flex '>
     <div className='text-[white] flex px-[45px] py-[10px] items-center sm:text-[white] sm:flex sm:items-center sm:px-[30px] '>
      <img src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/Shipping-black_2_ce714247-b176-4ecf-832e-fa3a2a773e20.png?v=1657557635" alt="" className='w-[20px] h-[20px]' />
      <span className='ms-[3px] text-[10px] font-[500] sm:ms-[10px]  sm:text-[11px] lg:text-[14px] sm:font-[500]'>Free Shipping over $99</span>
     </div>
     <div className='text-[white] flex items-center px-[45px] sm:text-[white] sm:flex sm:items-center sm:px-[30px] '>
      <img src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/Returns-black_40542005-7a75-4b5b-89fe-190bad6422e6.png" alt="" className='w-[20px] h-[20px]' />
      <span className='pl-[10px] text-[10px] font-[500] sm:pl-[10px] sm:text-[11px] lg:text-[14px] sm:font-[500]'>Free Returns</span>
     </div>
     </div>
     <div className='block lg:flex '>     
      <div className='text-[white] flex items-center px-[45px] py-[10px]  sm:text-[white] sm:flex sm:items-center sm:px-[30px] '>
      <img src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/loyalty_logo_light.png" alt="" className='w-[20px] h-[20px]' />
      <span className='pl-[10px] text-[10px] font-[500] sm:pl-[10px] sm:text-[11px] lg:text-[14px] sm:font-[500]'>Earn Points</span>
     </div>
     <div className='text-[white] flex items-center px-[45px]  sm:text-[white] sm:flex sm:items-center sm:px-[30px] '>
      <img src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/Sezzle.png" alt="" className='w-[20px] h-[20px]' />
      <span className='pl-[10px] text-[10px] font-[500] sm:pl-[10px] sm:text-[11px] lg:text-[14px] sm:font-[500]'>Buy Now, Pay Later</span>
     </div>
     </div>
     
     </div>
    </div>

    <div className='md:w-full md:h-[718px] md:py-[64px] md:px-[32px]  '>
<h3 className='md:w-full  md:text-[black] md:text-[32px] md:font-[500] mb-[32px] text-[22px] pl-[20px] pt-[20px]  font-[500]'>Featured Categories</h3>
<div className=' md:grid md:gap-4 md:grid-cols-4  grid gap-2 grid-cols-2 pl-[20px] '>

<div>
<img src="https://www.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area_05f626a1-6626-4836-a625-6061d51d9cef_450x.jpg" alt="" className='w-[348px] ' />
<h4 className='md:font-[500] '>Womens Denim</h4>
</div>
 <div>
<img src="https://www.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area-1_15a566a4-6d85-4acb-943f-5a850616e87f_450x.jpg" alt=""className='w-[348px] ' />
<h4 className='md:font-[500]'>Womens Jackets</h4>
</div>


<div>
<img src="https://www.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area-2_b19b715b-2483-4b96-b54e-152ad48477bf_450x.jpg" alt="" className='w-[348px] ' />
<h4 className='md:font-[500]'>Mens Denim</h4>
</div>
<div>
<img src="https://www.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area-3_3f4a6fae-1afc-41aa-a6bd-5518d247b068_450x.jpg" alt="" className='w-[348px] ' />
<h4 className='md:font-[500]'>Mens Jackets</h4>
</div>
</div>
</div>
    <div className='w-full  flex sm:flex-col lg:flex-row lg:justify-between lg:px-10 sm:px-4'>
      <div><p className='lg:text-[34px] lg:font-[500] sm:text-[20px] sm:font-[500]    '>This Just In</p></div>
      <div className='tabs items-center'>
        <button onClick={() => handleTabClick('Women s')} className={activeTab === 'Women s' ? 'active' : ''}>Women's</button>
        <button id='mensname' onClick={() => handleTabClick('Men s')} className={activeTab === 'Men s' ? 'active' : ''} 
          >Men's</button>
      </div>
     </div>
    <div className='tab-content mb-[50px]'>
      {activeTab === 'Women s' && <div><Slider {...settings} className='max-w-[95%] mx-auto '>
      
    <div className='img-1'>
      <div className='container'>
        <div className='box1'></div>
        <div className='box2'>
          <div className='w-[95%] h-[40px] border-1 bg-[#FFFFFF] relative top-[410px] m-auto text-center pt-[8px] sub-hover'><span>Quick add</span>
          <div className='relax'>
           <ul className='flex justify-center gap-x-[15px] flex-wrap text-[16px] font-[400] '>
           <li className='px-[15px]' >XXS</li>
            <li className='px-[15px]'>XS</li>
            <li className='px-[15px]'>S</li>
            <li className='px-[15px]'>M</li>
            <li className='px-[15px]'>L</li>
            <li className='px-[15px]'>XL</li>
           </ul>
          </div>
         </div>
        </div>
        </div>
     <div className='flex justify-between'>
      <p className='text-[14px] text-[black] pt-[6px]'>The SeaCell™ Crewneck Cardigan in Dark Chocolate</p>
     <span className='pt-[10px] pr-[20px]'><FaRegHeart /></span></div>
     <span>$149.00</span>
     <div className='btn-1'>
      <div className='z-1'><span>1 colour</span></div>
      <div className='z-2  relative right-[0px] bottom-[-5px] '>
      <button className='w-[16px] h-[16px]  border-[1px] border-[black] rounded-[50%]  '>
        <button className='w-[11px] h-[11px] bg-[black] rounded-[50%] relative bottom-[6px] '></button>
      </button>
      </div>
      </div>
     </div>
     <div className='img-1'>
      <div className='container'>
        <div className='box-1'></div>
        <div className='box-2'>
          <div className='w-[95%] h-[40px] border-1 bg-[#FFFFFF] relative top-[410px] m-auto text-center pt-[8px] sub-hover'><span>Quick add</span>
          <div className='relax'>
           <ul className='flex justify-center gap-x-[15px] flex-wrap text-[16px] font-[400] '>
           <li className='px-[15px]' >XXS</li>
            <li className='px-[15px]'>XS</li>
            <li className='px-[15px]'>S</li>
            <li className='px-[15px]'>M</li>
            <li className='px-[15px]'>L</li>
            <li className='px-[15px]'>XL</li>
           </ul>
          </div>
         </div>
        </div>
        </div>
     <div className='flex justify-between'>
      <p className='text-[14px] text-[black] pt-[6px]'>The SeaCell™ Crewneck Cardigan in Dark Chocolate</p>
     <span className='pt-[10px] pr-[20px]'><FaRegHeart /></span></div>
     <span>$149.00</span>
     <div className='btn-1'>
      <div className='z-1'><span>1 colour</span></div>
      <div className='z-2  relative right-[0px] bottom-[-5px] '>
      <button className='w-[16px] h-[16px]  border-[1px] border-[black] rounded-[50%]  '>
        <button className='w-[11px] h-[11px] bg-[black] rounded-[50%] relative bottom-[6px] '></button>
      </button>
      </div>
      </div>
     </div>
     <div className='img-1'>
      <div className='container'>
        <div className='box-3'></div>
        <div className='box-4'>
          <div className='w-[95%] h-[40px] border-1 bg-[#FFFFFF] relative top-[410px] m-auto text-center pt-[8px] sub-hover'><span>Quick add</span>
          <div className='relax'>
           <ul className='flex justify-center gap-x-[15px] flex-wrap text-[16px] font-[400] '>
           <li className='px-[15px]' >XXS</li>
            <li className='px-[15px]'>XS</li>
            <li className='px-[15px]'>S</li>
            <li className='px-[15px]'>M</li>
            <li className='px-[15px]'>L</li>
            <li className='px-[15px]'>XL</li>
           </ul>
          </div>
         </div>
        </div>
        </div>
     <div className='flex justify-between'>
      <p className='text-[14px] text-[black] pt-[6px]'>The SeaCell™ Crewneck Cardigan in Dark Chocolate</p>
     <span className='pt-[10px] pr-[20px]'><FaRegHeart /></span></div>
     <span>$149.00</span>
     <div className='btn-1'>
      <div className='z-1'><span>1 colour</span></div>
      <div className='z-2  relative right-[0px] bottom-[-5px] '>
      <button className='w-[16px] h-[16px]  border-[1px] border-[black] rounded-[50%]  '>
        <button className='w-[11px] h-[11px] bg-[black] rounded-[50%] relative bottom-[6px] '></button>
      </button>
      </div>
      </div>
     </div>
     <div className='img-1'>
      <div className='container'>
        <div className='box-5'></div>
        <div className='box-6'>
          <div className='w-[95%] h-[40px] border-1 bg-[#FFFFFF] relative top-[410px] m-auto text-center pt-[8px] sub-hover'><span>Quick add</span>
          <div className='relax'>
           <ul className='flex justify-center gap-x-[15px] flex-wrap text-[16px] font-[400] '>
           <li className='px-[15px]' >XXS</li>
            <li className='px-[15px]'>XS</li>
            <li className='px-[15px]'>S</li>
            <li className='px-[15px]'>M</li>
            <li className='px-[15px]'>L</li>
            <li className='px-[15px]'>XL</li>
           </ul>
          </div>
         </div>
        </div>
        </div>
     <div className='flex justify-between'>
      <p className='text-[14px] text-[black] pt-[6px]'>The SeaCell™ Crewneck Cardigan in Dark Chocolate</p>
     <span className='pt-[10px] pr-[20px]'><FaRegHeart /></span></div>
     <span>$149.00</span>
     <div className='btn-1'>
      <div className='z-1'><span>1 colour</span></div>
      <div className='z-2  relative right-[0px] bottom-[-5px] '>
      <button className='w-[16px] h-[16px]  border-[1px] border-[black] rounded-[50%]  '>
        <button className='w-[11px] h-[11px] bg-[black] rounded-[50%] relative bottom-[6px] '></button>
      </button>
      </div>
      </div>
     </div>
     <div className='img-1'>
      <div className='container'>
        <div className='box-7'></div>
        <div className='box-8'>
          <div className='w-[95%] h-[40px] border-1 bg-[#FFFFFF] relative top-[410px] m-auto text-center pt-[8px] sub-hover'><span>Quick add</span>
          <div className='relax'>
           <ul className='flex justify-center gap-x-[15px] flex-wrap text-[16px] font-[400] '>
           <li className='px-[15px]' >XXS</li>
            <li className='px-[15px]'>XS</li>
            <li className='px-[15px]'>S</li>
            <li className='px-[15px]'>M</li>
            <li className='px-[15px]'>L</li>
            <li className='px-[15px]'>XL</li>
           </ul>
          </div>
         </div>
        </div>
        </div>
     <div className='flex justify-between'>
      <p className='text-[14px] text-[black] pt-[6px]'>The SeaCell™ Crewneck Cardigan in Dark Chocolate</p>
     <span className='pt-[10px] pr-[20px]'><FaRegHeart /></span></div>
     <span>$149.00</span>
     <div className='btn-1'>
      <div className='z-1'><span>1 colour</span></div>
      <div className='z-2  relative right-[0px] bottom-[-5px] '>
      <button className='w-[16px] h-[16px]  border-[1px] border-[black] rounded-[50%]  '>
        <button className='w-[11px] h-[11px] bg-[black] rounded-[50%] relative bottom-[6px] '></button>
      </button>
      </div>
      </div>
     </div>
     <div className='img-1'>
      <div className='container'>
        <div className='box-9'></div>
        <div className='box-10'>
          <div className='w-[95%] h-[40px] border-1 bg-[#FFFFFF] relative top-[410px] m-auto text-center pt-[8px] sub-hover'><span>Quick add</span>
          <div className='relax'>
           <ul className='flex justify-center gap-x-[15px] flex-wrap text-[16px] font-[400] '>
           <li className='px-[15px]' >XXS</li>
            <li className='px-[15px]'>XS</li>
            <li className='px-[15px]'>S</li>
            <li className='px-[15px]'>M</li>
            <li className='px-[15px]'>L</li>
            <li className='px-[15px]'>XL</li>
           </ul>
          </div>
         </div>
        </div>
        </div>
     <div className='flex justify-between'>
      <p className='text-[14px] text-[black] pt-[6px]'>The SeaCell™ Crewneck Cardigan in Dark Chocolate</p>
     <span className='pt-[10px] pr-[20px]'><FaRegHeart /></span></div>
     <span>$149.00</span>
     <div className='btn-1'>
      <div className='z-1'><span>1 colour</span></div>
      <div className='z-2  relative right-[0px] bottom-[-5px] '>
      <button className='w-[16px] h-[16px]  border-[1px] border-[black] rounded-[50%]  '>
        <button className='w-[11px] h-[11px] bg-[black] rounded-[50%] relative bottom-[6px] '></button>
      </button>
      </div>
      </div>
     </div>
     <div className='img-1'>
      <div className='container'>
        <div className='box-11'></div>
        <div className='box-12'>
          <div className='w-[95%] h-[40px] border-1 bg-[#FFFFFF] relative top-[410px] m-auto text-center pt-[8px] sub-hover'><span>Quick add</span>
          <div className='relax'>
           <ul className='flex justify-center gap-x-[15px] flex-wrap text-[16px] font-[400] '>
           <li className='px-[15px]' >XXS</li>
            <li className='px-[15px]'>XS</li>
            <li className='px-[15px]'>S</li>
            <li className='px-[15px]'>M</li>
            <li className='px-[15px]'>L</li>
            <li className='px-[15px]'>XL</li>
           </ul>
          </div>
         </div>
        </div>
        </div>
     <div className='flex justify-between'>
      <p className='text-[14px] text-[black] pt-[6px]'>The SeaCell™ Crewneck Cardigan in Dark Chocolate</p>
     <span className='pt-[10px] pr-[20px]'><FaRegHeart /></span></div>
     <span>$149.00</span>
     <div className='btn-1'>
      <div className='z-1'><span>1 colour</span></div>
      <div className='z-2  relative right-[0px] bottom-[-5px] '>
      <button className='w-[16px] h-[16px]  border-[1px] border-[black] rounded-[50%]  '>
        <button className='w-[11px] h-[11px] bg-[black] rounded-[50%] relative bottom-[6px] '></button>
      </button>
      </div>
      </div>
     </div>
     <div className='img-1'>
      <div className='container'>
        <div className='box-13'></div>
        <div className='box-14'>
          <div className='w-[95%] h-[40px] border-1 bg-[#FFFFFF] relative top-[410px] m-auto text-center pt-[8px] sub-hover'><span>Quick add</span>
          <div className='relax'>
           <ul className='flex justify-center gap-x-[15px] flex-wrap text-[16px] font-[400] '>
           <li className='px-[15px]' >XXS</li>
            <li className='px-[15px]'>XS</li>
            <li className='px-[15px]'>S</li>
            <li className='px-[15px]'>M</li>
            <li className='px-[15px]'>L</li>
            <li className='px-[15px]'>XL</li>
           </ul>
          </div>
         </div>
        </div>
        </div>
     <div className='flex justify-between'>
      <p className='text-[14px] text-[black] pt-[6px]'>The SeaCell™ Crewneck Cardigan in Dark Chocolate</p>
     <span className='pt-[10px] pr-[20px]'><FaRegHeart /></span></div>
     <span>$149.00</span>
     <div className='btn-1'>
      <div className='z-1'><span>1 colour</span></div>
      <div className='z-2  relative right-[0px] bottom-[-5px] '>
      <button className='w-[16px] h-[16px]  border-[1px] border-[black] rounded-[50%]  '>
        <button className='w-[11px] h-[11px] bg-[black] rounded-[50%] relative bottom-[6px] '></button>
      </button>
      </div>
      </div>
     </div>
     <div className='img-1'>
      <div className='container'>
        <div className='box-15'></div>
        <div className='box-16'>
          <div className='w-[95%] h-[40px] border-1 bg-[#FFFFFF] relative top-[410px] m-auto text-center pt-[8px] sub-hover'><span>Quick add</span>
          <div className='relax'>
           <ul className='flex justify-center gap-x-[15px] flex-wrap text-[16px] font-[400] '>
           <li className='px-[15px]' >XXS</li>
            <li className='px-[15px]'>XS</li>
            <li className='px-[15px]'>S</li>
            <li className='px-[15px]'>M</li>
            <li className='px-[15px]'>L</li>
            <li className='px-[15px]'>XL</li>
           </ul>
          </div>
         </div>
        </div>
        </div>
     <div className='flex justify-between'>
      <p className='text-[14px] text-[black] pt-[6px]'>The SeaCell™ Crewneck Cardigan in Dark Chocolate</p>
     <span className='pt-[10px] pr-[20px]'><FaRegHeart /></span></div>
     <span>$149.00</span>
     <div className='btn-1'>
      <div className='z-1'><span>1 colour</span></div>
      <div className='z-2  relative right-[0px] bottom-[-5px] '>
      <button className='w-[16px] h-[16px]  border-[1px] border-[black] rounded-[50%]  '>
        <button className='w-[11px] h-[11px] bg-[black] rounded-[50%] relative bottom-[6px] '></button>
      </button>
      </div>
      </div>
     </div>
     <div className='img-1'>
      <div className='container'>
        <div className='box-17'></div>
        <div className='box-18'>
          <div className='w-[95%] h-[40px] border-1 bg-[#FFFFFF] relative top-[410px] m-auto text-center pt-[8px] sub-hover'><span>Quick add</span>
          <div className='relax'>
           <ul className='flex justify-center gap-x-[15px] flex-wrap text-[16px] font-[400] '>
           <li className='px-[15px]' >XXS</li>
            <li className='px-[15px]'>XS</li>
            <li className='px-[15px]'>S</li>
            <li className='px-[15px]'>M</li>
            <li className='px-[15px]'>L</li>
            <li className='px-[15px]'>XL</li>
           </ul>
          </div>
         </div>
        </div>
        </div>
     <div className='flex justify-between'>
      <p className='text-[14px] text-[black] pt-[6px]'>The SeaCell™ Crewneck Cardigan in Dark Chocolate</p>
     <span className='pt-[10px] pr-[20px]'><FaRegHeart /></span></div>
     <span>$149.00</span>
     <div className='btn-1'>
      <div className='z-1'><span>1 colour</span></div>
      <div className='z-2  relative right-[0px] bottom-[-5px] '>
      <button className='w-[16px] h-[16px]  border-[1px] border-[black] rounded-[50%]  '>
        <button className='w-[11px] h-[11px] bg-[black] rounded-[50%] relative bottom-[6px] '></button>
      </button>
      </div>
      </div>
     </div>
     <button class="slick-next">

     </button>
     <button type="button" class="slick-prev">
      
     </button>
    
   </Slider></div>}
      {activeTab === 'Men s' && <div><Slider {...settings} className='max-w-[95%] mx-auto '>
    
      <div className='img-1'>
      <div className='container'>
        <div className='box-c'></div>
        <div className='box-d'>
          <div className='w-[95%] h-[40px] border-1 bg-[#FFFFFF] relative top-[410px] m-auto text-center pt-[8px] sub-hover'><span>Quick add</span>
          <div className='relax'>
           <ul className='flex justify-center gap-x-[15px] flex-wrap text-[16px] font-[400] '>
           <li className='px-[15px]' >XXS</li>
            <li className='px-[15px]'>XS</li>
            <li className='px-[15px]'>S</li>
            <li className='px-[15px]'>M</li>
            <li className='px-[15px]'>L</li>
            <li className='px-[15px]'>XL</li>
           </ul>
          </div>
         </div>
        </div>
        </div>
     <div className='flex justify-between'>
      <p className='text-[14px] text-[black] pt-[6px]'>The SeaCell™ Crewneck Cardigan in Dark Chocolate</p>
     <span className='pt-[10px] pr-[20px]'><FaRegHeart /></span></div>
     <span>$149.00</span>
     <div className='btn-1'>
      <div className='z-1'><span>1 colour</span></div>
      <div className='z-2  relative right-[0px] bottom-[-5px] '>
      <button className='w-[16px] h-[16px]  border-[1px] border-[black] rounded-[50%]  '>
        <button className='w-[11px] h-[11px] bg-[black] rounded-[50%] relative bottom-[6px] '></button>
      </button>
      </div>
      </div>
     </div>
     <div className='img-1'>
      <div className='container'>
        <div className='box-a'></div>
        <div className='box-b'>
          <div className='w-[95%] h-[40px] border-1 bg-[#FFFFFF] relative top-[410px] m-auto text-center pt-[8px] sub-hover'><span>Quick add</span>
          <div className='relax'>
           <ul className='flex justify-center gap-x-[15px] flex-wrap text-[16px] font-[400] '>
           <li className='px-[15px]' >XXS</li>
            <li className='px-[15px]'>XS</li>
            <li className='px-[15px]'>S</li>
            <li className='px-[15px]'>M</li>
            <li className='px-[15px]'>L</li>
            <li className='px-[15px]'>XL</li>
           </ul>
          </div>
         </div>
        </div>
        </div>
     <div className='flex justify-between'>
      <p className='text-[14px] text-[black] pt-[6px]'>The SeaCell™ Crewneck Cardigan in Dark Chocolate</p>
     <span className='pt-[10px] pr-[20px]'><FaRegHeart /></span></div>
     <span>$149.00</span>
     <div className='btn-1'>
      <div className='z-1'><span>1 colour</span></div>
      <div className='z-2  relative right-[0px] bottom-[-5px] '>
      <button className='w-[16px] h-[16px]  border-[1px] border-[black] rounded-[50%]  '>
        <button className='w-[11px] h-[11px] bg-[black] rounded-[50%] relative bottom-[6px] '></button>
      </button>
      </div>
      </div>
     </div>
     <div className='img-1'>
      <div className='container'>
        <div className='box-e'></div>
        <div className='box-f'>
          <div className='w-[95%] h-[40px] border-1 bg-[#FFFFFF] relative top-[410px] m-auto text-center pt-[8px] sub-hover'><span>Quick add</span>
          <div className='relax'>
           <ul className='flex justify-center gap-x-[15px] flex-wrap text-[16px] font-[400] '>
           <li className='px-[15px]' >XXS</li>
            <li className='px-[15px]'>XS</li>
            <li className='px-[15px]'>S</li>
            <li className='px-[15px]'>M</li>
            <li className='px-[15px]'>L</li>
            <li className='px-[15px]'>XL</li>
           </ul>
          </div>
         </div>
        </div>
        </div>
     <div className='flex justify-between'>
      <p className='text-[14px] text-[black] pt-[6px]'>The SeaCell™ Crewneck Cardigan in Dark Chocolate</p>
     <span className='pt-[10px] pr-[20px]'><FaRegHeart /></span></div>
     <span>$149.00</span>
     <div className='btn-1'>
      <div className='z-1'><span>1 colour</span></div>
      <div className='z-2  relative right-[0px] bottom-[-5px] '>
      <button className='w-[16px] h-[16px]  border-[1px] border-[black] rounded-[50%]  '>
        <button className='w-[11px] h-[11px] bg-[black] rounded-[50%] relative bottom-[6px] '></button>
      </button>
      </div>
      </div>
     </div>
     <div className='img-1'>
      <div className='container'>
        <div className='box-g'></div>
        <div className='box-h'>
          <div className='w-[95%] h-[40px] border-1 bg-[#FFFFFF] relative top-[410px] m-auto text-center pt-[8px] sub-hover'><span>Quick add</span>
          <div className='relax'>
           <ul className='flex justify-center gap-x-[15px] flex-wrap text-[16px] font-[400] '>
           <li className='px-[15px]' >XXS</li>
            <li className='px-[15px]'>XS</li>
            <li className='px-[15px]'>S</li>
            <li className='px-[15px]'>M</li>
            <li className='px-[15px]'>L</li>
            <li className='px-[15px]'>XL</li>
           </ul>
          </div>
         </div>
        </div>
        </div>
     <div className='flex justify-between'>
      <p className='text-[14px] text-[black] pt-[6px]'>The SeaCell™ Crewneck Cardigan in Dark Chocolate</p>
     <span className='pt-[10px] pr-[20px]'><FaRegHeart /></span></div>
     <span>$149.00</span>
     <div className='btn-1'>
      <div className='z-1'><span>1 colour</span></div>
      <div className='z-2  relative right-[0px] bottom-[-5px] '>
      <button className='w-[16px] h-[16px]  border-[1px] border-[black] rounded-[50%]  '>
        <button className='w-[11px] h-[11px] bg-[black] rounded-[50%] relative bottom-[6px] '></button>
      </button>
      </div>
      </div>
     </div>
     <div className='img-1'>
      <div className='container'>
        <div className='box-7'></div>
        <div className='box-8'>
          <div className='w-[95%] h-[40px] border-1 bg-[#FFFFFF] relative top-[410px] m-auto text-center pt-[8px] sub-hover'><span>Quick add</span>
          <div className='relax'>
           <ul className='flex justify-center gap-x-[15px] flex-wrap text-[16px] font-[400] '>
           <li className='px-[15px]' >XXS</li>
            <li className='px-[15px]'>XS</li>
            <li className='px-[15px]'>S</li>
            <li className='px-[15px]'>M</li>
            <li className='px-[15px]'>L</li>
            <li className='px-[15px]'>XL</li>
           </ul>
          </div>
         </div>
        </div>
        </div>
     <div className='flex justify-between'>
      <p className='text-[14px] text-[black] pt-[6px]'>The SeaCell™ Crewneck Cardigan in Dark Chocolate</p>
     <span className='pt-[10px] pr-[20px]'><FaRegHeart /></span></div>
     <span>$149.00</span>
     <div className='btn-1'>
      <div className='z-1'><span>1 colour</span></div>
      <div className='z-2  relative right-[0px] bottom-[-5px] '>
      <button className='w-[16px] h-[16px]  border-[1px] border-[black] rounded-[50%]  '>
        <button className='w-[11px] h-[11px] bg-[black] rounded-[50%] relative bottom-[6px] '></button>
      </button>
      </div>
      </div>
     </div>
     <div className='img-1'>
      <div className='container'>
        <div className='box-9'></div>
        <div className='box-10'>
          <div className='w-[95%] h-[40px] border-1 bg-[#FFFFFF] relative top-[410px] m-auto text-center pt-[8px] sub-hover'><span>Quick add</span>
          <div className='relax'>
           <ul className='flex justify-center gap-x-[15px] flex-wrap text-[16px] font-[400] '>
           <li className='px-[15px]' >XXS</li>
            <li className='px-[15px]'>XS</li>
            <li className='px-[15px]'>S</li>
            <li className='px-[15px]'>M</li>
            <li className='px-[15px]'>L</li>
            <li className='px-[15px]'>XL</li>
           </ul>
          </div>
         </div>
        </div>
        </div>
     <div className='flex justify-between'>
      <p className='text-[14px] text-[black] pt-[6px]'>The SeaCell™ Crewneck Cardigan in Dark Chocolate</p>
     <span className='pt-[10px] pr-[20px]'><FaRegHeart /></span></div>
     <span>$149.00</span>
     <div className='btn-1'>
      <div className='z-1'><span>1 colour</span></div>
      <div className='z-2  relative right-[0px] bottom-[-5px] '>
      <button className='w-[16px] h-[16px]  border-[1px] border-[black] rounded-[50%]  '>
        <button className='w-[11px] h-[11px] bg-[black] rounded-[50%] relative bottom-[6px] '></button>
      </button>
      </div>
      </div>
     </div>
     <div className='img-1'>
      <div className='container'>
        <div className='box-11'></div>
        <div className='box-12'>
          <div className='w-[95%] h-[40px] border-1 bg-[#FFFFFF] relative top-[410px] m-auto text-center pt-[8px] sub-hover'><span>Quick add</span>
          <div className='relax'>
           <ul className='flex justify-center gap-x-[15px] flex-wrap text-[16px] font-[400] '>
           <li className='px-[15px]' >XXS</li>
            <li className='px-[15px]'>XS</li>
            <li className='px-[15px]'>S</li>
            <li className='px-[15px]'>M</li>
            <li className='px-[15px]'>L</li>
            <li className='px-[15px]'>XL</li>
           </ul>
          </div>
         </div>
        </div>
        </div>
     <div className='flex justify-between'>
      <p className='text-[14px] text-[black] pt-[6px]'>The SeaCell™ Crewneck Cardigan in Dark Chocolate</p>
     <span className='pt-[10px] pr-[20px]'><FaRegHeart /></span></div>
     <span>$149.00</span>
     <div className='btn-1'>
      <div className='z-1'><span>1 colour</span></div>
      <div className='z-2  relative right-[0px] bottom-[-5px] '>
      <button className='w-[16px] h-[16px]  border-[1px] border-[black] rounded-[50%]  '>
        <button className='w-[11px] h-[11px] bg-[black] rounded-[50%] relative bottom-[6px] '></button>
      </button>
      </div>
      </div>
     </div>
     <div className='img-1'>
      <div className='container'>
        <div className='box-13'></div>
        <div className='box-14'>
          <div className='w-[95%] h-[40px] border-1 bg-[#FFFFFF] relative top-[410px] m-auto text-center pt-[8px] sub-hover'><span>Quick add</span>
          <div className='relax'>
           <ul className='flex justify-center gap-x-[15px] flex-wrap text-[16px] font-[400] '>
           <li className='px-[15px]' >XXS</li>
            <li className='px-[15px]'>XS</li>
            <li className='px-[15px]'>S</li>
            <li className='px-[15px]'>M</li>
            <li className='px-[15px]'>L</li>
            <li className='px-[15px]'>XL</li>
           </ul>
          </div>
         </div>
        </div>
        </div>
     <div className='flex justify-between'>
      <p className='text-[14px] text-[black] pt-[6px]'>The SeaCell™ Crewneck Cardigan in Dark Chocolate</p>
     <span className='pt-[10px] pr-[20px]'><FaRegHeart /></span></div>
     <span>$149.00</span>
     <div className='btn-1'>
      <div className='z-1'><span>1 colour</span></div>
      <div className='z-2  relative right-[0px] bottom-[-5px] '>
      <button className='w-[16px] h-[16px]  border-[1px] border-[black] rounded-[50%]  '>
        <button className='w-[11px] h-[11px] bg-[black] rounded-[50%] relative bottom-[6px] '></button>
      </button>
      </div>
      </div>
     </div>
     <div className='img-1'>
      <div className='container'>
        <div className='box-15'></div>
        <div className='box-16'>
          <div className='w-[95%] h-[40px] border-1 bg-[#FFFFFF] relative top-[410px] m-auto text-center pt-[8px] sub-hover'><span>Quick add</span>
          <div className='relax'>
           <ul className='flex justify-center gap-x-[15px] flex-wrap text-[16px] font-[400] '>
           <li className='px-[15px]' >XXS</li>
            <li className='px-[15px]'>XS</li>
            <li className='px-[15px]'>S</li>
            <li className='px-[15px]'>M</li>
            <li className='px-[15px]'>L</li>
            <li className='px-[15px]'>XL</li>
           </ul>
          </div>
         </div>
        </div>
        </div>
     <div className='flex justify-between'>
      <p className='text-[14px] text-[black] pt-[6px]'>The SeaCell™ Crewneck Cardigan in Dark Chocolate</p>
     <span className='pt-[10px] pr-[20px]'><FaRegHeart /></span></div>
     <span>$149.00</span>
     <div className='btn-1'>
      <div className='z-1'><span>1 colour</span></div>
      <div className='z-2  relative right-[0px] bottom-[-5px] '>
      <button className='w-[16px] h-[16px]  border-[1px] border-[black] rounded-[50%]  '>
        <button className='w-[11px] h-[11px] bg-[black] rounded-[50%] relative bottom-[6px] '></button>
      </button>
      </div>
      </div>
     </div>
     <div className='img-1'>
      <div className='container'>
        <div className='box-17'></div>
        <div className='box-18'>
          <div className='w-[95%] h-[40px] border-1 bg-[#FFFFFF] relative top-[410px] m-auto text-center pt-[8px] sub-hover'><span>Quick add</span>
          <div className='relax'>
           <ul className='flex justify-center gap-x-[15px] flex-wrap text-[16px] font-[400] '>
           <li className='px-[15px]' >XXS</li>
            <li className='px-[15px]'>XS</li>
            <li className='px-[15px]'>S</li>
            <li className='px-[15px]'>M</li>
            <li className='px-[15px]'>L</li>
            <li className='px-[15px]'>XL</li>
           </ul>
          </div>
         </div>
        </div>
        </div>
     <div className='flex justify-between'>
      <p className='text-[14px] text-[black] pt-[6px]'>The SeaCell™ Crewneck Cardigan in Dark Chocolate</p>
     <span className='pt-[10px] pr-[20px]'><FaRegHeart /></span></div>
     <span>$149.00</span>
     <div className='btn-1'>
      <div className='z-1'><span>1 colour</span></div>
      <div className='z-2  relative right-[0px] bottom-[-5px] '>
      <button className='w-[16px] h-[16px]  border-[1px] border-[black] rounded-[50%]  '>
        <button className='w-[11px] h-[11px] bg-[black] rounded-[50%] relative bottom-[6px] '></button>
      </button>
      </div>
      </div>
     </div>
     {/* <button type="button" class="slick-next"><FaArrowRightLong className='next' /></button> */}
     <button type="button" class="slick-prev"><LuMoveLeft /></button>
    
   </Slider></div>}
      </div>
      
      <div className='w-full h-[667px] bg-[#F9F9F9]'>
      <h2 className='text-[36px] text-center pt-[32px] mb-[64px]'>You didn’t hear it from us</h2>
      <Slider {...ravindra}>
        
      <div className=''>
      <div className='w-[297px] h-[440px] pt-[88px] pl-[40px] pb-[40px] pr-[40px] bg-[white] ml-[30px] '>
    <div className='list-none flex pl-[5px] gap-[4px]'>
      <li><FaStar /></li>
      <li><FaStar /></li>
      <li><FaStar /></li>
      <li><FaStar /></li>
      <li><FaStar /></li>
      <span className='text-[#666666] text-[12px]'>Based on 29 <br /> reviews</span>
    </div>
    <p className='font-[500] mt-[32px]'>This is a simple vest but it looks expensive and falls nicely on the body! Soft and simple.</p>
    <p className='text-[#666666] mt-[20px] text-[16px] font-[500]'>Emily H.</p>
    <button className='text-[18px] mt-[70px] font-[500] border-b-[1px] border-[black]'><a href="hello">Shop now</a></button>
   
   </div>
      </div>
      <div>
      <div className='w-[297px] h-[440px]'>
    <img className='h-[440px]' src="https://www.frankandoak.com/cdn/shop/files/2130231-2KI.01.jpg?crop=center&height=880&v=1723490760&width=672" alt="" />
   </div>
      </div>
      <div>
      <div className='w-[297px] h-[440px] pt-[88px] pl-[40px] pb-[40px] pr-[40px] bg-[white] ml-[30px] '>
    <div className='list-none flex pl-[5px] gap-[4px]'>
      <li><FaStar /></li>
      <li><FaStar /></li>
      <li><FaStar /></li>
      <li><FaStar /></li>
      <li><FaStar /></li>
      <span className='text-[#666666] text-[12px]'>Based on 29 <br /> reviews</span>
    </div>
    <p className='font-[500] mt-[32px]'>This is a simple vest but it looks expensive and falls nicely on the body! Soft and simple.</p>
    <p className='text-[#666666] mt-[20px] text-[16px] font-[500]'>Emily H.</p>
    <button className='text-[18px] mt-[70px] font-[500] border-b-[1px] border-[black]'><a href="">Shop now</a></button>
   
   </div>
      </div>
      <div>
      <div className='w-[297px] h-[440px]'>
    <img className='h-[440px]' src="https://www.frankandoak.com/cdn/shop/files/2130231-2KI.01.jpg?crop=center&height=880&v=1723490760&width=672" alt="" />
   </div>
      </div>
      <div>
      <div className='w-[297px] h-[440px] pt-[88px] pl-[40px] pb-[40px] pr-[40px] bg-[white] ml-[30px] '>
    <div className='list-none flex pl-[5px] gap-[4px]'>
      <li><FaStar /></li>
      <li><FaStar /></li>
      <li><FaStar /></li>
      <li><FaStar /></li>
      <li><FaStar /></li>
      <span className='text-[#666666] text-[12px]'>Based on 29 <br /> reviews</span>
    </div>
    <p className='font-[500] mt-[32px]'>This is a simple vest but it looks expensive and falls nicely on the body! Soft and simple.</p>
    <p className='text-[#666666] mt-[20px] text-[16px] font-[500]'>Emily H.</p>
    <button className='text-[18px] mt-[70px] font-[500] border-b-[1px] border-[black]'><a href="">Shop row</a></button>
   
   </div>
      </div>
      <div>
      <div className='w-[297px] h-[440px]'>
    <img className='h-[440px]' src="https://www.frankandoak.com/cdn/shop/files/2130231-2KI.01.jpg?crop=center&height=880&v=1723490760&width=672" alt="" />
   </div>
      </div>
      
    </Slider>
    </div>
    <div className='w-full grid lg:grid-cols-2 sm:grid-cols-1 px-[10px] pt-[64px]  mx-auto sm:w-[100%]'>
      <div className='  '> 
        <div className='lg:w-[85%] sm:w-[100%] mx-auto  mt-[30%] '>
          <h4 className=' lg:text-[52px] sm:text-[30px] sm:font-semibold mb-[40px]'>Inspire Better Living.</h4>
          <p className='text-[#666666] lg:text-[28px] sm:text-[24px] font-[500] mb-[40px]'>Born in Canada, we are grounded on innovation, our community, and respecting the planet we all call home.</p>
          <button className='text-[32px] sm:py-5 font-[500] underline'>Who We Are</button>
        </div>
      </div>
       <div className='  grid grid-cols-2 gap-4 '>
        <div className='  relative  '>
          <img src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_2_900x.jpg?v=1712334213" alt=""  className='h-[100%]'/>
          <h2 className=' z-20  text-[24px] text-white left-5 bottom-10 font-semibold  absolute'> Fabrics Innovation</h2>
        </div>
        <div className='  relative  '>
        <img src="https://www.frankandoak.com/cdn/shop/files/story-design_900x.jpg?v=1712160804" alt=""  className='h-[100%]'/>
        <h2 className='  z-20  text-[24px] text-white left-5 bottom-10 font-semibold  absolute'> Fabrics Innovation</h2>
        </div>
        <div className='   relative'>
        <img src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_3_900x.jpg?v=1712334263" alt=""  className='h-[100%]'/>
        <h2 className='z-20  text-[24px] text-white left-5 bottom-10 font-semibold  absolute'> Fabrics Innovation</h2>
        </div>
        <div className='  relative '>
        <img src="https://www.frankandoak.com/cdn/shop/files/story-partners_900x.jpg?v=1712160804" alt=""  className='h-[100%]'/>
        <h2 className='z-20  text-[24px] text-white left-5 bottom-10 font-semibold  absolute'> Fabrics Innovation</h2>
        </div>
       
        
      </div> 
    </div>
   <Footer/>
    </div>
  )
}
