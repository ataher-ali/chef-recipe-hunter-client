
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Food_Cart_2 from './Food_Cart_2';

const Foods = () => {
    const foods = useLoaderData()
    console.log(foods);
    return (
        <div>
            <div className='lg:mx-40 my-10 '>
                
            <h1 className='text-center text-5xl font-bold my-5' >F<span>🍩🍔</span>D's</h1>
            <h2 className='text-center mb-5'> We Total {foods.length} Items Food </h2>
              
            <div className='grid grid-cols-3 gap-4'>
            {
                foods.map(food=> <Food_Cart_2 element={food} ></Food_Cart_2> )
            }
            </div>

            </div>
        </div>
    );
};

export default Foods;