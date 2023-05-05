import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='lg:mx-40 my-5 px-2'>
           
            <div className="">
  <div className="lg:flex lg:flex-row gap-3 items-center mx-0">
    <img  src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className=" rounded-lg shadow-2xl " />
    <div className='ml-2'>
      <h1 className="text-5xl font-bold my-5">A Culinary Journey at  Our International Restaurant 🍹</h1>
      <p className="py-6">
      Welcome to our international restaurant, where we take you on a culinary journey around the world! From the vibrant and spicy flavors of Mexico to the rich and savory tastes of Italy, our menu is a celebration of global cuisine.
<br /> <br />
As soon as you step inside, you'll be greeted by a warm and inviting atmosphere that will make you feel right at home. Our attentive staff will guide you through our diverse menu, ensuring that your dining experience is nothing short of exceptional.

Start your meal with a flavorful appetizer such as crispy spring rolls from Vietnam or creamy hummus from the Middle East. Then, move on to our main courses, where you'll find a wide range of options from various corners of the world.
<br /> <br />
At our international restaurant, we strive to bring the world to your table, offering a diverse range of dishes that will satisfy any craving. Whether you're in the mood for spicy, savory, or sweet, we have something for everyone. So come join us for a culinary journey around the globe, right here in our restaurant.
      </p>
     
        <div className='flex'>
        <Link className='btn  shadow-lg' to='/Chefs'> Meet  Our Chef's </Link>
        <Link className='btn btn-outline mx-5 shadow-lg' to='/foods'> Try F<span>🍩🍔</span>D's </Link>
        </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;