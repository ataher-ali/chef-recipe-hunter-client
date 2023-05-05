import React from 'react';

const Contact = () => {
    return (
        <div>
                    <h2 className='text-center text-3xl font-bold mt-10'>Contact</h2>
            <div className='lg:mx-40 my-5 flex justify-center '>
                <div className='lg:flex lg:justify-center'>
                        <form action="">
                        <div className="form-control w-full max-w-xs">
                                <label className="label">
                                <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xl" />
                                </label>
                                <label className="label">
                                <input type="text" placeholder="E-mail" className="input input-bordered w-full max-w-xs" />
                                </label>
                                <label className="label">
                                <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs" />
                                
                                </label>
                                <label className="label">
                                <textarea className="textarea textarea-bordered w-80" placeholder="Message"></textarea>
                                </label>
                                <button className='btn btn-outline my-4 float-right'>Send</button>
                        </div>
                        </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;