import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const { user,logOut } = useContext(AuthContext);

    let navigate = useNavigate();



    return (
        <div>
            <div className='lg:mx-40 flex justify-center'>
                <div>
                <div className='flex justify-center'>
                    <img className=' border shadow p-1 rounded-full' src='..' alt="" />
                </div>
                <h2 className='text-xl font-bold text-center mt-2'> {user.displayName} </h2> 
                <h2 className='text-xl font-bold text-center mt-2'>  {user.email} </h2> 


                <div className='flex justify-center'>
                {
                    user? <button className='btn btn-outline m-2' onClick={logOut}> Logout </button>:
                    <h1></h1>

                }

                    <button className='btn btn-outline m-2' onClick={() => navigate(-1)}>Back</button>  
                </div>
                </div>
               
            </div>
        </div>
    );
};

export default Profile;