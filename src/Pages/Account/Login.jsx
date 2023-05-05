import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
const Login = () => {
  let navigate = useNavigate();

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
 

  const {user, signInWithGoogle,signInWithGithub,signIn,logOut} = useContext(AuthContext);


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
            navigate(from, { replace: true })
            
            setSuccess('Login successfully');
        })
        .catch(error => {
            console.log(error);
            setError(error.message.slice(9));
        })
        
       
         event.target.reset();
    }

    const google =()=>{
      logOut()
      signInWithGoogle()
      
    }
    const github =()=>{
      logOut()
      signInWithGithub()
    }



  return (
    <>

      {
        user? <Navigate to='/'></Navigate> : <div>

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
                  
                  
                  <Link to='/profile/password_reset' className="label-text-alt link link-hover">Forgat Password</Link>

                  <Link to='/register' className="label-text-alt link link-hover">Register</Link>
                </label>
              </div>
              <div className="form-control mt-0">
                <button className="btn btn-outline">Login</button>
              </div>
              
            </form>

              <div className="flex justify-center mt-2 p-5">
                <button onClick={google} className="bg-gray-100 hover:bg-gray-300  p-1 rounded-full mx-2">
                  <FcGoogle size={40}></FcGoogle>
                </button>
                <button onClick={github} className=" bg-gray-100 p-1 rounded-full hover:bg-gray-300 mx-2">
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
      <button className='btn btn-outline m-2 mb-5 mx-auto block' onClick={() => navigate(-1)}>Back</button>  
            
      </div>
      }
    </>
  );
};

export default Login;
