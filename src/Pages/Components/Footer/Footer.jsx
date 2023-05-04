import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
          


<footer className="p-5 px-20 bg-base-300 text-base-content ">
  <div className='footer  lg:mx-10 '>

  
  <div>
    <span className="footer-title">Pages</span> 
       <div className='flex gap-5'>
       <Link className="link link-hover" to='/'>Home</Link> 
        <Link className="link link-hover" to='/about'>About</Link> 
        <Link className="link link-hover" to='/foods'>Foods</Link> 
        <Link className="link link-hover" to='/chefs'>Chefs</Link> 
        <Link className="link link-hover" to='/blog'>Blog</Link> 
        <Link className="link link-hover" to='contact'>Contact</Link> 
       </div>
       <div>
    <p className="footer-title mt-10">Social</p> 
    <div className="grid grid-flow-col gap-4">
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </div>
  </div> 
  <div>
    <span className="footer-title"> Available </span> 
      <p className='text-xs'><span className=''>9.30 AM - 12.00 AM </span> (Saturday)</p>
      <p className='text-xs'><span className=''>9.30 AM - 12.00 AM </span> (Sunday)</p>
      <p className='text-xs'><span className=''>9.30 AM - 12.00 AM </span> (Monday)</p>
      <p className='text-xs'><span className=''>9.30 AM - 12.00 AM </span> (Tuesday)</p>
      <p className='text-xs'><span className=''>9.30 AM - 12.00 AM </span> (Wednesday)</p>
      <p className='text-xs'><span className=''>9.30 AM - 12.00 AM </span> (Thursday)</p>
      <p className='text-xs'><span className=''>3.00 PM - 12.00 AM </span> (Friday) </p>
  </div> 
  <div>
  <span className="footer-title"> Address </span>
        
              <div className=' bg-slate-100 rounded p-4'>
         <h3 className='my-2 ml-1 font-bold'> Ulipur Branch </h3>
                <p> 3 Floor,Left side </p>
                <p> Dotto Super Market, MS School Gate </p>
                <p>Ulipur, Kurigram</p>
              </div>
  </div>
  <div>
  <span className="footer-title"> Contact </span>
        
      <p>help@example.com</p>
      <p>support@example.com</p>
      <p>career@example.com</p>
      <p>1628</p>
      <p>+880-17xxxxxxx</p>
        
              
  </div>
  
  
  </div>
  <div className=' mt-5 lg:px-10 lg:mx-2 py-2 rounded-md   border-t bg-base-200 text-base-content border-base-300'>
    <p className='text-center  '> Copyright © 2023 - All right reserved by <Link to='/' className=' p-1 font-bold text-lg  rounded'> <span className='text-red-400 '>Rest </span> 🍌2 <span className='text-blue-500 ml-1'>Rent</span> </Link></p>
  
  
  </div>
</footer>



        </div>
    );
};

export default Footer;