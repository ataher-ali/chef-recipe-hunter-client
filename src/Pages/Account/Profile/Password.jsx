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
        <div >
                <div className='flex my-20 justify-center'>
                <form onSubmit={handleLogin} className="mx-10 mt-5 px-40 flex gap-2 items-center flex-col">
              <div className="form-control">
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered w-max"
                  name="email"
                  required
                />
              </div>

              <div className="form-control mt-0">
                <button className="btn btn-outline w-52">Reset Password </button>
                <Toaster/>
              </div>
              
                  <Link to='/register' className="label-text-alt link link-hover">Register an Account </Link>
            </form>
                </div>
        </div>
    );
};

export default Password;