import React, { useEffect, useState } from "react";
import Chefs from "../Chefs/Chefs";

const Section_Chefs = () => {

        const [data, setData] = useState([]);

        useEffect(() => {
          fetch('http://localhost:1010/chefs')
            .then(response => response.json())
            .then(data => setData(data.slice(0,6)))
            .catch(error => console.error(error));
        }, []);

    return (
        <>
            <div className='mx-28 px-2 '>

            <h1 className='text-center text-5xl text-bold my-5'> 🍩ur Chefs </h1>
            <h2 className='text-center mb-5'> Total {data.length} country's chefs we have  </h2>
                
                <div className='grid grid-cols-3 gap-4'>
                {
                    data.map(f=> 
                        
                        <Chefs element={f}></Chefs>
            
                        )
                }
                </div>
            </div>
        </>
    );
};


export default Section_Chefs;
