import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import app from '../../../Firebase/firebase.init';
import toast, { Toaster } from 'react-hot-toast';


const AddFavorite = () => toast.success('Password Reset Mail Send..');
const AddError = (errorMessage) => toast.error(errorMessage.slice(9));

const auth = getAuth(app);

const Password = () => {
    const handleLogin =(event)=>{

        // 1. prevent page refresh
        event.preventDefault(); 

  
        // 2. collect form data
          const email = event.target.email.value;
            console.log(email);

            sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
                AddFavorite()
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                AddError(errorMessage)
              });
    }

    return (
        <div className='lg:mx-36'>
                <div className='lg:mx-40 my-20 mx-10 '>
                <form onSubmit={handleLogin} className="mx-10 mt-5 px-40">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                
                <label className="label">
                  
                  

                  <Link to='/register' className="label-text-alt link link-hover">Register an Account </Link>
                </label>
              </div>
              <div className="form-control mt-0">
                <button className="btn btn-outline">Reset Password </button>
                <Toaster/>
              </div>
              
            </form>
                </div>
        </div>
    );
};

export default Password;