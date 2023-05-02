import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  // const { user } = useContext(AuthContext);

  // console.log(user);

  const formData = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const PhotoURL = event.target.PhotoURL.value;
    console.log("name :", name);
    console.log("email :", email);
    console.log("password :", password);
    console.log("Photo URL :", PhotoURL);

    // createUserWithPass(email,password,name,PhotoURL)

    event.target.reset();
  };


  //Sign In With Google
  const signInWithGoogle = ()=>{
      console.log('google');
  }

  //Sign In With Github
  const signInWithGithub = ()=>{
    console.log('github');

  }


  return (
    <>
      <div className="my-5 ">
      <h2 className="text-2xl text-center text-bold">Register</h2>
        <div className="hero-content w-full">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-xl border">
            <form onSubmit={formData} className="mx-10 mt-5  ">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
