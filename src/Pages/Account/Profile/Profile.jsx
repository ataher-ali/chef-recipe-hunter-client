import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const { user,logOut ,photoURL } = useContext(AuthContext);

    const {email,displayName}=user
    let navigate = useNavigate();

console.log(user);

    return (
        <div>
            <div className='lg:mx-40 flex justify-center'>
                <div>
                <div className='flex justify-center'>
                    <img className=' border shadow p-1 rounded-full' src={photoURL} alt="" />
                </div>
                <p>{photoURL}</p>
                <h2 className='text-xl font-bold text-center mt-2'> {displayName} </h2> 
                <h2 className='text-xl font-bold text-center mt-2'>  {email} </h2> 


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