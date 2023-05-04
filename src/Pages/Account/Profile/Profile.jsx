import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
    const { user,logOut ,} = useContext(AuthContext);

    // const {providerId,screenName}=user.reloadUserInfo
    let navigate = useNavigate();
console.log(user);

    return (
        <div>


        <div className='lg:mx-40 my-5'>
{
    user? 
    <div>

            <div className="card card-side bg-base-100 shadow-xl border my-10">
              <figure className='lg:w-4/12 bg-green-400'><img src={user.photoURL} alt="Movie"/></figure>
              <div className="card-body lg:w-6/12">
                <h2 className='text-xl font-bold  mt-2'> {user.displayName} </h2> 
                <h2 className='text-xl '>  {user.email} </h2> 
                <p>
                    <span> uid : {user.uid}</span> <br />
                </p>
                <div className="card-actions justify-end">


                        <div>
                            {
                                user? <button className='btn btn-outline m-2' onClick={logOut}> Logout </button>:
                                <h1></h1>
                                
                            }
                            <button className='btn btn-outline m-2' onClick={() => navigate(-1)}>Back</button>  

                        </div>
            </div>
  </div>


</div>
    </div> 
    : 
    <div className='flex justify-center   my-40'>
       <div className='flex flex-col items-center'>
          <Link className='btn btn-outline m-1 w-20' to='/login'>Login</Link> 
          <Link className='btn btn-outline m-1 w-20' to='/register'>Register</Link>
       </div>
    </div>
}


               
            </div>
        </div>
    );
};

export default Profile;