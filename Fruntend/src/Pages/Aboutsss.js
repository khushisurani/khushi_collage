import React from 'react';
import Footer from './Footer';
import color from './img/colorrough.webp';
import diamond_size from './img/Diamond_size.jpg';
import i16 from './img/i16.webp';
import i63 from './img/i63.png';
import shaperough from './img/shaperough.jpg';

function Aboutsss() {
    return (
        <>
            <div className='sss-1'>
                <h1>DIAMOND COLOURS</h1>
                <img src={i63} alt="" className='sss-img-1' />
                <h4>NATURAL DIAMOND COLOURS AND THEIR RARITY</h4>
                <p>For most people, the word 'diamond' evokes the image of a clear, white gemstone. But although the white diamond is favoured by tradition, white is far from the only colour a diamond can have. In fact, natural diamonds come in a wide range of fancy colours - though all natural fancy colour diamonds are rare.</p>
                <br />
                <h4>FANCY COLOUR DIAMONDS AND THEIR RARITY</h4>
                <p>The natural colouring of diamonds can vary immensely. Some show only a hint of colour or a patch of cloudiness, while others are far more distinctly coloured. Depending on hue, tone, and saturation, fancy colour diamonds are awarded various grades, including fancy light and fancy through to fancy intense and fancy vivid.</p>
                <p>Below, you can learn more about the rarest diamond colours and how they are created.</p>
                <img src={color} alt="" className='sss-img-2' />
                <h4>THE RAREST DIAMOND COLOURS</h4>
                <div className="accordion sss-aco" id="accordionExample">
                    <div className="accordion-item sss-bg">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button sss-aco-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <h3>Orange</h3>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show sss-text" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                While orange diamonds are rich in nitrogen, the true reason for their vibrant colour remains a bit of a mystery. However, diamond experts generally believe that their colour comes from their being created about 150-200 km below the surface of the earth - deeper in the ground than other rough diamonds.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item sss-bg">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed sss-aco-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <h3>Pink</h3>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse sss-text" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Other mines have rough pink diamonds (though not always of the same high quality). For example, such mines exist in Russia and in Williamson, Tanzania, where a gorgeous pink diamond known as the Williamson Pink was found and gifted to HM Queen Elizabeth of the United Kingdom in 1947.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item sss-bg">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed sss-aco-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <h3>Blue</h3>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse sss-text" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Blue diamonds are very rare. Similarly to grey diamonds, the beautiful colour of the blue diamond is created by the presence of boron in the carbon lattice which makes up the gemstone. The higher the boron levels, the more vibrant the shade of blue.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item sss-bg">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed sss-aco-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <h3>Green</h3>
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse sss-text" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Natural green diamonds are something special. Deep beneath the surface of the earth, the naturally occurring radiation of uranium and other radioactive minerals creates green diamonds. After billions of years, a natural green diamond becomes chemically inert. However, all green diamonds are still tested for radioactivity before we get our hands on them.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item sss-bg">
                        <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed sss-aco-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                <h3>Yellow</h3>
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse sss-text" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Though yellow is one of the more common fancy colours, yellow diamonds are nonetheless extremely beautiful. They come in a variety of shades ranging from pale lemon to vibrant canary yellow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item sss-bg">
                        <h2 className="accordion-header" id="headingSix">
                            <button className="accordion-button collapsed sss-aco-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                <h3>Brown</h3>
                            </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse sss-text" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Brown diamonds are among the colour diamonds known to have been used in jewellery in ancient times. They come in colour varieties from rich cognac and deep chocolate to a light brown champagne colour.</div>
                        </div>
                    </div>
                    <div className="accordion-item sss-bg">
                        <h2 className="accordion-header" id="headingSeven">
                            <button className="accordion-button collapsed sss-aco-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                <h3>Grey</h3>
                            </button>
                        </h2>
                        <div id="collapseSeven" className="accordion-collapse collapse sss-text" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Most fancy grey diamonds, however, get their colour due to high concentrations of hydrogen. Like in white, colourless diamonds, high clarity is sought after, and fancy grey diamonds are graded on the same scale as white diamonds.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sss-2">
                <h1>DIAMOND SIZE</h1>
                <p>Around half of the weight of a rough diamond is removed during the cutting and polishing process. <br /> <br />
                    To us that's a tragedy. It removes more than the weight. It removes the personality. <br /><br />
                    The mini guide above will give you an indication if the size of different diamonds and how they will look set in a ring.
                </p>
                <img src={diamond_size} alt="" className='sss-size' />
            </div>
            <div className="sss-3">
                <h1>DIAMOND SHAPES FOR DIFFERENT DESIGNS</h1>
                <img src={i16} alt="" className='sss-img-3' />
                <p>It might seem excessive but rough diamonds are actually classified into over 12,000 different categories based on shape, colour, clarity, and carat. It takes a discerning eye to see the difference but it doesn't mean one shape is better than the other. Embrace life's little imperfections.
                    <br /><br />
                    Here is just a selection of a few commonly occurring diamond crystal structures. From left to right: octahedron, dodecahedron, tetrahedron, hexoctahedron with curved faces, a macle and two interpenetrate cubes.</p>
                <img src={shaperough} alt="" className='sss-shape' />
            </div>
            <Footer />
        </>
    )
}

export default Aboutsss
