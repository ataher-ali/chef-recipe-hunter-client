import React, { useEffect, useState } from 'react';
import Blog_Card from './Blog_Card';

const Blog = () => {
    const [data, setData] = useState([]);

        useEffect(() => {
          fetch('https://a10-server-puce.vercel.app/blogs')
            .then(response => response.json())
            .then(data => setData(data)) //.slice(0,6)
            .catch(error => console.error(error));
        }, []);

    return (
        <div>
           
            <div  className='lg:mx-40'>
                    {
                        data.map(blog=><Blog_Card element={blog} ></Blog_Card>)
                    }
            </div>
        </div>
    );
};

export default Blog;