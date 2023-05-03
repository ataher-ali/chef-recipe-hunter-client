import React from "react";

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
            <button className="btn btn-outline">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food_Cart;
