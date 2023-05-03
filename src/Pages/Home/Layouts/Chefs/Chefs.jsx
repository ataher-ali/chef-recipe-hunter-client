import React from 'react';
import { Link } from 'react-router-dom';

const Chefs = (props) => {
    const {name,picture,_id,likes,food_region}=props.element
    console.log(_id);
    return (
        <>
            
            <div className="card card-compact w-96 bg-base-100 shadow-xl border m-4 ">
        <figure className="h-52 w-full bg-emerald-200">
          <img className="h-fit w-full"
            src={picture}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">

          <div className="card-actions justify-around items-center">
          <span>
          <h2 className="card-title">{name}</h2>
          <p className='text-xl'>🍳 {food_region}</p>
          <p className='text-xl'>💙 {likes}</p>
          </span>
            <Link to={`/Chef_Details/${_id}`} >
            <button className="btn btn-outline">Details </button>

            </Link>
          </div>
        </div>
      </div>
        </>
    );
};

export default Chefs;