import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Food_Cart from '../Foods/Food_Cart';

const Chef_details = () => {
    const data = useLoaderData()
    let navigate = useNavigate();

    const recipes = data.recipes
    return (
        <div>
            <div className='flex justify-center'>
            <img className='w-4/12 rounded shadow border p-1 m-4' src={data.picture} alt="" />
            </div>

                <h1 className='text-center text-5xl text-bold m-3'>{data.name}</h1>
                <div className='lg:mx-40 my-10'>
                <h1 className='text-center text-xl text-bold m-3'>  {data.bio} </h1>
                    
                <h1 className='text-center text-xl text-bold m-3'> <span className='text-red-400'> 💼 Experience  : </span>  {data.experience_year} / Year</h1>
                <h1 className='text-center text-xl text-bold m-3'> <span className='text-red-400'>🍳 Recipe From : </span>  {data.food_region}</h1>
                <h1 className='text-center text-xl text-bold m-3'> <span className='text-red-400'>💙 Total Like : </span>  {data.likes}</h1>

  
  <div className='flex justify-center '>

                <div className='bg-base-300 p-5 rounded-xl lg:py-10 border  lg:w-fit'>
                <h2 className='text-4xl font-bold text-center mb-10' >F<span>🍩🍔</span>D Recipes </h2>
                
                <div className='lg:mx-5 grid grid-cols-2 gap-5 mt-2'>
                    {
                        recipes.map(f=> <Food_Cart key={f.id} element={f}></Food_Cart> )
                    }
                </div>
                </div>
  </div>


                   

                </div>

            <div className='flex justify-center my-4'>

                  <button className='btn btn-outline m-2' onClick={() => navigate(-1)}>Back</button>  
            </div>
        </div>
    );
};

export default Chef_details;