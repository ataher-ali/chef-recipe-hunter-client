import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';


const OrderNow = () => toast.success('Order Confirmed');

const Food_Info = () => {
    let navigate = useNavigate();
    const food = useLoaderData()
    console.log(food);
    const {details,title,image}=food
    return (
        <div>
            <div className='lg:mx-40'>
                <figure className='lg:flex lg:justify-center '>
                <img className='m-2 w-80 mx-auto block border rounded-xl border-lg shadow-xl ' src={image} alt="" />
                </figure>

               <div className='mx-10 lg:mx-96  my-4 lg:mb-16'>
               <h2 className='text-center text-3xl  font-bold'>{title}</h2>
                <p className='text-center my-4'>{details}</p>

                <button onClick={OrderNow} className='btn btn-outline outline-1 btn-success my-10 shadow mx-auto block'> Order Now </button>
                <Toaster />
                <button className='btn btn-outline m-2 mx-auto block' onClick={() => navigate(-1)}>Back</button>  
            
               </div>
            </div>
        </div>
    );
};

export default Food_Info;