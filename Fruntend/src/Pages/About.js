import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import con from './img/contact-us-1.jpg';
import dr from './img/delivery_banner.webp';
import i1 from './img/i1.jpg';
import i2 from './img/i2.webp';
import i5 from './img/i5.webp';
import unit from './img/Untitled.png';

function About() {
    return (
        <>
            <div className='bgimg2'>
                <img src={i5} alt="" className='bg-2-2' />
                <img src={unit} alt="" className='bg-2-1' />
            </div>
            <div className='ssc'>
                <div className='ssc-1'>
                    <h1>DIAMOND MINI GUIDE</h1>
                    <Link to='/Aboutsss' className='link-text'>
                        <h4>Size, Shape, Color</h4>
                    </Link>
                </div>
                <div className='ssc-2'>
                    <img src={i1} alt="" />
                </div>
            </div>
            <div className="dsg">
                <div className="dsg-1">
                    <img src={i2} alt="" />
                </div>
                <div className="dsg-2">
                    <h1>OUR DIAMOND</h1>
                    <Link to='/Aboutdg' className='link-text'>
                        <h4>See the diamond on</h4>
                    </Link>
                </div>
            </div>
            <div className='dr'>
                <div className='dr-1'>
                    <h1>DELIVERY & RETURN</h1>
                    <Link to='/Aboutdr' className='link-text'>
                        <h4>Free Shipping all over the world</h4>
                    </Link>
                </div>
                <div className='dr-2'>
                    <img src={dr} alt="" />
                </div>
            </div>
            <div className="con">
                <div className="con-1">
                    <img src={con} alt="" />
                </div>
                <div className="con-2">
                    <h1>CONTACT</h1>
                    <Link to='/Contect' className='link-text'>
                        <h4>We are right here</h4>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About;
