import React from 'react';
import Footer from './Footer';
import dr_icon from './img/Iconer_Rough_diamonds.avif';
import dr from './img/delivery_banner.webp';

function Aboutdr() {
    return (
        <>
            <div className='dr-3'>
                <h1>DELIVERY & RETURN</h1>
                <p><b>Free Shipping</b> (2 - 3 days) all over the world. All jewelry come with a <b>Certificate</b> and <b>Travel insurance.</b></p>
                <img src={dr_icon} alt="" className='icon-dr' /><br />
                <img src={dr} alt="" className='dr-dr' />
                <p>We use the highest quality courier service for our worldwide shipping with delivery within 2-3 days free <br /> of charge. All orders are traceable and insured from the moment it leaves our hands, to the <br /> moment it arrives in yours.
                    <br /><br />
                    Befitting the uniqueness of the rough diamond, all jewelry comes with an individual certificate for <br /> your piece and in an elegant handcrafted black lacquered wooden box enclosed <br /> in a hand-stitched canvas and leather pouch.</p>
                <h4>Return</h4>
                <p>You can return your one-of-a-kind piece within 14 days.</p>
            </div>
            <br />
            <Footer />
        </>
    )
}

export default Aboutdr;