import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Food_Info = () => {
    let navigate = useNavigate();
    const food = useLoaderData()
    console.log(food);
    const {details,title,image}=food
    return (
        <div>
            <div className='lg:mx-40'>
                <figure className='lg:flex lg:justify-center '>
                <img className='m-2  rounded-xl border-lg shadow-xl ' src={image} alt="" />
                </figure>

               <div className='mx-5 lg:mx-96 my-4 lg:mb-16'>
               <h2 className='text-center text-3xl  font-bold'>{title}</h2>
                <p>{details}</p>

                <button className='btn btn-outline outline-1 btn-success my-10 shadow mx-auto block'> Order Now </button>
                <button className='btn btn-outline m-2 mx-auto block' onClick={() => navigate(-1)}>Back</button>  
            
               </div>
            </div>
        </div>
    );
};

export default Food_Info;