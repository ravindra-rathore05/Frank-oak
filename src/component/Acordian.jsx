import React, { useState } from 'react'

const Acordian = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const acordianItems = [
         {
          header: 'OUR STORY',
          content: [
            'Who we are',
            'Sustainable practice',
            'ravindra RATHORE',
            'WS CUBE TECH',
            'JODHPUR',
            'RAJASTHAN'
          ]
        },
        {
          header: 'DISCOVER',
          content: [
            'GIFTS CARD',
            'FRANKS CLUB',
            'GIVE $15 GET $15',
            'AFFILIATE',
            'BLOG',
            'WORK WITH US'
          ]
        },
        {
          header: 'CUSTOMER CARE',
          content: [
            'SHIPPING INFORMATION',
            'RETURN & EXCANGE',
            'COUPON CODE',
            'F.A.Q',
            'TERMS&CONDITION',
            
          ]
        }
    ];
    const handleToggle =  (index) =>{
        setActiveIndex(index === activeIndex ? null : index);
    };
  return (
    <>
     <div className="accordion w-[350px] my-[20px] mx-auto lg:hidden">
      {acordianItems.map((item, index) => (
        <div key={index} className="accordion-item sm:mb-[15px] sm:border-[1px]border-[#ccc] sm:rounded-[5px] ">
          <div
            className="accordion-header  sm:p-[10px] border-b-[1px] "
            onClick={() => handleToggle(index)}
          >
            {item.header}
          </div>
          {activeIndex === index && (
            <div className="accordion-content sm:p-[10px]">{item.content.map((content, contentIndex) => (
              <p key={contentIndex}>{content}</p>
            )
            )}</div>
          )}
        </div>
      ))}
    </div>
  

    
    </>
  );
};

export default Acordian