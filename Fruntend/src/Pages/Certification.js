import React from 'react';
import certificate from './img/certificate.jpg';
import Footer from './Footer';


function Certification() {
    return (
        <>
            <div className='certificate'>
                <img src={certificate} alt="" />
            </div>
            <Footer />
        </>
    )
}

export default Certification;