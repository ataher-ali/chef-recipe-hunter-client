import React from "react";
import { Link } from "react-router-dom";

const Food_Cart_2 = (params) => {
    const { title, image,details,id } = params.element;
  return (
    <div className=" py-5" id={title} >
      <div className="card card-compact w-96 bg-base-100 shadow-xl h-96">
        <figure className="">
          <img className="w-30"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <div className="card-actions justify-end">
          <Link to={`/food_info/${id}`} >
            <button className="btn btn-outline"> Info </button>

            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food_Cart_2;
