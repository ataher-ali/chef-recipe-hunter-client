import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import app from "../../Firebase/firebase.init";



const Register = () => {
  const auth = getAuth(app);
  const {user,signInWithGoogle,signInWithGithub,logOut} = useContext(AuthContext);
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const handleSubmit = (event) => {
    // 1. prevent page refresh
    event.preventDefault();
     setSuccess('');
    setError('');

    // 2. collect form data
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const PURL = event.target.PhotoURL.value;
    console.log("name :", name);
    console.log("email :", email);
    console.log("password :", password);
    console.log("Photo URL :", PURL);
    
     // validate
     if (!/(?=.*[A-Z])/.test(password)) {
      setError('Please add at least one uppercase');
      return;
  }
  else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setError('Please add at least two numbers');
      return
  }
  else if (password.length < 6) {
      setError('Please add at least 6 characters in your password')
      return;
  }
        // 3. create user in fb
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('');
                event.target.reset();
                setSuccess('User has been created successfully');
                
                updateUserData(result.user, name);
            })
            .catch(error => {
                console.error(error.message.slice(9));
                setError(error.message);
            })

            const updateUserData = (user, name,PURL) => {
              updateProfile(auth.currentUser, {
                displayName: name, photoURL:PURL
              }).then(() => {
                // Profile updated!
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });
          }
          updateUserData(name,PURL)
            
  };

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
        user? <Navigate to='/'></Navigate> : 
        <div>
             <div className="my-5 ">
      <h2 className="text-2xl text-center text-bold">Register</h2>
        <div className="flex justify-center mt-2">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-xl border">
            <form onSubmit={handleSubmit} className="mx-10 mt-5  ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
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
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="url"
                    placeholder="Photo URL"
                    className="input input-bordered"
                    name="PhotoURL"
                  />
                </div>

                <label className="label">
                  <Link to="/login" className="label-text-alt link link-hover">
                    I have already an account?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-0">
                <button className="btn btn-outline">Register</button>
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
              <div className="my-3">
              <p className='text-center  text-red-500'>{error}</p>
              <p className='text-center  text-green-400'>{success}</p>
              </div>
          </div>
        </div>
             </div>
            
        </div>
}
    </>
  );
};

export default Register;
