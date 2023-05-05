import React, { useEffect, useState } from "react";
import Chefs from "../Chefs/Chefs";

const Section_Chefs = () => {

        const [data, setData] = useState([]);

        useEffect(() => {
          fetch('https://a10-server-puce.vercel.app/chefs')
            .then(response => response.json())
            .then(data => setData(data.slice(0,6)))
            .catch(error => console.error(error));
        }, []);

    return (
        <>
            <div className='lg:mx-28  '>

            <h1 className='text-center text-5xl text-bold my-5'> 🍩ur Chefs </h1>
            <h2 className='text-center mb-5'> Total {data.length} country's chefs we have  </h2>
                <div className="flex justify-center">
                <div className='lg:grid lg:grid-cols-3 lg:gap-4 mx-1'>
                {
                    data.map(f=> 
                        
                        <Chefs key={f._id} element={f}></Chefs>
            
                        )
                }
                </div>
                </div>
            </div>
        </>
    );
};


export default Section_Chefs;
