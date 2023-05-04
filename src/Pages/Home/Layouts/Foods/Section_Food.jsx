import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";

const Section_Food  = () => {
    
    return (
        <>
        <h1 className='text-center text-5xl font-bold mt-10' >F<span>🍩🍔</span>D's</h1>
        
      < div className="bg-gray-100 lg:h-72 my-10">
     
      <Marquee>
  
     
  <div className="flex gap-1 ">
  

    <div className="p-4 pt-4 mt-5 mx-20">
            <img  className="h-52  rounded" src='https://cdn.britannica.com/52/128652-050-14AD19CA/Maki-zushi.jpg' />
            <h2 className='text-center text-xl font-bold'>Sushi</h2>
    </div>
    <div className="p-4 pt-4 mt-5 mx-20">
            <img  className="h-52  rounded" src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Shoyu_ramen%2C_at_Kasukabe_Station_%282014.05.05%29_1.jpg/375px-Shoyu_ramen%2C_at_Kasukabe_Station_%282014.05.05%29_1.jpg' />
            <h2 className='text-center text-xl font-bold'>Ramen</h2>
    </div>
    <div className="p-4 pt-4 mt-5 mx-20">
            <img  className="h-52  rounded" src='https://images.kitchenstories.io/wagtailOriginalImages/R2788-photo-final-2.jpg' />
            <h2 className='text-center text-xl font-bold'>Udon</h2>
    </div>
    <div className="p-4 pt-4 mt-5 mx-20">
            <img  className="h-52  rounded" src='https://hips.hearstapps.com/hmg-prod/images/yakitori-grilled-chicken-skewers-1673369849.jpg?crop=0.6665384615384615xw:1xh;center,top&resize=1200:*' />
            <h2 className='text-center text-xl font-bold'>Yakitori</h2>
    </div>
    <div className="p-4 pt-4 mt-5 mx-20">
            <img  className="h-52  rounded" src='https://www.seriouseats.com/thmb/NHbBUB-7G5iuEPpZWJcqN12vVSg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2017__04__20170125-tonkatsu-japanese-pork-chicken-katsu-cutlet-recipe-21-6ed88941dd584530923a70e7baf1bb91.jpg' />
            <h2 className='text-center text-xl font-bold'>Tonkatsu</h2>
    </div>
    <div className="p-4 pt-4 mt-5 mx-20">
            <img  className="h-52  rounded" src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Shoyu_ramen%2C_at_Kasukabe_Station_%282014.05.05%29_1.jpg/375px-Shoyu_ramen%2C_at_Kasukabe_Station_%282014.05.05%29_1.jpg' />
            <h2 className='text-center text-xl font-bold'>Miso Soup</h2>
    </div>
    <div className="p-4 pt-4 mt-5 mx-20">
            <img  className="h-52  rounded" src='https://cdn.media.amplience.net/i/japancentre/recipe%20-2%20-Miso%20soup/recipe--2--Miso-soup?$poi$&w=700&h=410&sm=c&fmt=auto' />
            <h2 className='text-center text-xl font-bold'>Udon</h2>
    </div>
    <div className="p-4 pt-4 mt-5 mx-20">
            <img  className="h-52  rounded" src='https://images.immediate.co.uk/production/volatile/sites/30/2020/08/as-you-like-it-katsu-curry-f23d753.jpg?quality=90&webp=true&resize=375,341' />
            <h2 className='text-center text-xl font-bold'>Katsu Curry</h2>
    </div>
  

  
  </div>
  </Marquee>
      </div>
      </>
    );
  };

export default Section_Food;