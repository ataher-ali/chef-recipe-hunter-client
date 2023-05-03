import React from "react";

const Food_Cart_2 = (params) => {
    const { title, image,details } = params.element;
  return (
    <div className=" py-5">
      <div className="card card-compact w-96 bg-base-100 shadow-xl h-96">
        <figure className="h-52">
          <img className="fit"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food_Cart_2;
