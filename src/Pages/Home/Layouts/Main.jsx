import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to='/foods'>
            <button className="btn btn-outline bg-cyan-100 ">Meet Our F<span>🍩🍔</span>D's</button> 
            </Link>
          </div>
        </div>
      </div>
        </>
    );
};

export default Main;