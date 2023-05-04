import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
const Login = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  

  const { signInWithGoogle,signInWithGithub,signIn} = useContext(AuthContext);


    const handleLogin =(event)=>{

      // 1. prevent page refresh
      event.preventDefault(); 
      setError('');
      setSuccess('');

      // 2. collect form data
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log('email :', email);
        // console.log('password :',password);

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            // navigate(from, { replace: true })
            
            setSuccess('Login successfully');
        })
        .catch(error => {
            console.log(error);
            setError(error.message.slice(9));
        })
        
       
         event.target.reset();
    }



  return (
    <>
      <div className="my-5 ">
          <h2 className="text-2xl text-center text-bold">Login</h2>
        <div className="flex justify-center mt-4">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-xl border">
            
            <form onSubmit={handleLogin} className="mx-10 mt-5 ">
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>

                  <Link to='/register' className="label-text-alt link link-hover">Register</Link>
                </label>
              </div>
              <div className="form-control mt-0">
                <button className="btn btn-primary">Login</button>
              </div>
              
            </form>

              <div className="flex justify-center mt-2 p-5">
                <button onClick={signInWithGoogle} className="bg-gray-100 hover:bg-gray-300  p-1 rounded-full mx-2">
                  <FcGoogle size={40}></FcGoogle>
                </button>
                <button onClick={signInWithGithub} className=" bg-gray-100 p-1 rounded-full hover:bg-gray-300 mx-2">
                  <AiFillGithub size={40}></AiFillGithub>
                </button>
              </div>

              <div className="mb-4">
              <p className='text-center  text-red-500'>{error}</p>
              <p className='text-center  text-green-400'>{success}</p>
              </div>
         
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
