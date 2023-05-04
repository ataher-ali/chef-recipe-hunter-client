import React from "react";
import Main from "./Layouts/Main";
import Section_Chefs from "./Layouts/Chefs/Section_Chefs";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Staffs from "./Layouts/Staffs/Staffs";
import Section_Food from "./Layouts/Foods/Section_Food";

const Home = () => {

    
  return (
    <>
      <Main></Main>
    <br />
    <About></About>
    <br/>
    <Staffs></Staffs>
    <br />
    <Section_Chefs></Section_Chefs>
    <br/>
    <Section_Food></Section_Food>
    <Contact></Contact>
       
    </>
  );
};

export default Home;
