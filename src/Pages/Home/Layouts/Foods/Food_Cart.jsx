import React from "react";
import toast, { Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";

const AddFavorite = () => toast.success('Item Add to Favorite.');

const Food_Cart = (params) => {
  const { title, image,details } = params.element;
  // console.log();
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl h-80 grid grid-cols-2 ">
        <figure className="h-full">
          <img className="h-full "
            src={image}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <div className="card-actions justify-end">
          <div className="flex ">
          <button onClick={AddFavorite} className="btn btn-outline mx-2">Add Favorite </button>
          <Toaster/>
          <Link to={`/foods#${title}`}>
          <button className="btn btn-outline mr-2"  >Info</button>
          </Link>
         
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food_Cart;
