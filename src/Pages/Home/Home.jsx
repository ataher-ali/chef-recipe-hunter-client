import React from "react";
import Main from "./Layouts/Main";
import Foods from "./Layouts/Foods/Foods";

const Home = () => {
  return (
    <>
      <Main></Main>
      <div className='mx-28 px-2 '>
        <Foods></Foods>
      </div>
    </>
  );
};

export default Home;
