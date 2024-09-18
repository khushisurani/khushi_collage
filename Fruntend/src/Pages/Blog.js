import React from 'react';
import Footer from './Footer';
import video1 from './img/video1.mp4';
import video2 from './img/video2.mp4';
import video4 from './img/video4.mp4';
import video3 from './img/video5.mp4';

function Blog() {
    return (
        <>
            <h1 className='blog-h1'>OUR BLOGS</h1>
            <h6 className='blog-h6'>Check out some of the latest news and updates in the world</h6>
            <div className="blog-video">
                <video controls>
                    <source src={video1} type="video/mp4" />
                </video>
                <video controls>
                    <source src={video2} type="video/mp4" />
                </video>
                <video controls>
                    <source src={video3} type="video/mp4" />
                </video>
                <video controls>
                    <source src={video4} type="video/mp4" />
                </video>
            </div>
            <br />
            <Footer />
        </>
    )
}

export default Blog
