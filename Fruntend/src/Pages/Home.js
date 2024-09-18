import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useAuth } from "../store/auth";
import Footer from "./Footer";
import border from "./img/border.png";
import bgimg from "./img/cullinan-rough-diamond.gif";
import icon4 from "./img/customer-care.png";
import icon2 from "./img/delivery-truck.png";
import icon3 from "./img/diamond.png";
import i3 from "./img/i3.jpg";
import { default as i61, default as ir1 } from "./img/i61.png";
import ir2 from "./img/i62.png";
import ir3 from "./img/i63.png";
import ir4 from "./img/i64.png";
import ir5 from "./img/i65.png";
import ir6 from "./img/i66.png";
import icon1 from "./img/medal.png";
import "./page.scss";

function Home() {
  const { services } = useAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(services);
  }, [services]);

  const slickRef = useRef(null);
  useEffect(() => {
    if (slickRef && slickRef.current) {
      slickRef.current.slickGoTo(1);
    }
  }, []);
  const settings = {
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
  };
  const settingimg = {
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: "linear",
    slidesToShow: 1,
    rtl: true,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
  };
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="home-p1">
        <img src={bgimg} alt="" />
        <h1>
          <span>Diamond</span> is the most valuable, <br />
          <span>Not</span> only of precious stones, <br />
          <span>But</span> of all things in this world.
        </h1>
      </div>
      <img src={border} alt="" className="border-img" />
      <div className="home-p2">
        <div className="p2-p1">
          <h3>ROUGH DIAMONDS</h3>
          <h6>
            The term rough diamonds refer to diamonds that are straight from the
            earth and completely untouched by a polishing wheel or tumbler. All
            of our rough diamonds are earth mined. <br />
            Don't see what you're looking for? Please{" "}
            <Link to="/Contect">contact us</Link> and we will be happy to check
            our inventory for anything you may need!
          </h6>
          <button>
            <Link to="/About" className="link-btn">
              Read more
            </Link>
          </button>
        </div>
        <div className="p2-p2">
          <img src={i61} alt="" />
        </div>
      </div>
      <img src={border} alt="" className="border-img" />
      <div className="home-p3">
        <div className="p3-p2">
          <h3>Rought Diamond Natural Beauty</h3>
          <h6>
            Due to their naturally beautiful appearance, unpolished, raw
            diamonds remain the 1st choice for a jewelry enthusiast and a
            fashion lover. Despite the sudden growth in demand for fancy-colored
            diamonds, rough-mined diamonds are still selected for beautiful
            jewelry pieces.
            <br />
            When found in the mines, these diamonds are uncut and display a
            mesmerizing, unpolished beauty on their surfaces. Raw diamonds
            retain the rugged and natural appearance that reflects their origins
            deep within the Earth. It defines the original beauty and elegance
            that do not exist in high-quality graded synthetic stones like
            moissanite or cubic zirconia.
          </h6>
        </div>
        <div className="p3-p1">
          <img src={i3} alt="" />
        </div>
      </div>
      <img src={border} alt="" className="border-img" />
      <div className="home-p7">
        <h1>PRODUCTS</h1>
        <Slider ref={slickRef} {...settingimg} className="slick-1">
          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="link-text"
            >
              <div className="card parent-1" style={{ width: "15rem" }}>
                <img
                  src={product.image}
                  className="card-img-1"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
      <img src={border} alt="" className="border-img" />
      <div className="home-p4">
        <div className="row">
          <div className="col">
            <img src={icon1} alt="" />
            <h4>Certification</h4>
            <p>IGI Certified Lab Grown Diamond</p>
          </div>
          <div className="col">
            <img src={icon2} alt="" />
            <h4>Shipping</h4>
            <p>Ship With In 7 Business Working Days</p>
          </div>
          <div className="col">
            <img src={icon3} alt="" />
            <h4>Return</h4>
            <p>30 Days No Questions Ask Return Policy</p>
          </div>
          <div className="col">
            <img src={icon4} alt="" />
            <h4>Customer Support</h4>
            <p>We're Available 24/7 For You</p>
          </div>
        </div>
      </div>
      <img src={border} alt="" className="border-img" />
      <div className="home-p5">
        <h1>FAQs</h1>
        <div className="p5-box-1">
          <h6>How Return & Refund Policy Is Works?</h6>
          <p>
            Enjoy a flexible 30-day no question ask return policy for your
            purchase. Return within this period, with the Lab Grown Diamond
            Certified if applicable, for a complete refund or exchange, ensuring
            your utmost satisfaction with our products.
          </p>
        </div>
        <div className="p5-box-1">
          <h6>Can I purchase Other Shape Than Round?</h6>
          <p>
            We specialize in crafting over 300+ shapes, including old cuts,
            fancy cuts, and antique shapes, tailored to your specific
            requirements. Our extensive range ensures that every client finds
            the perfect match for their unique taste, providing personalized
            options that cater to diverse preferences and needs.
          </p>
        </div>
        <div className="p5-box-1">
          <h6>Is Customization Available In Setting Style?</h6>
          <p>
            We offer customized settings tailored to your preferred style,
            including bezel set, 6-prong set, tulip setting, among others. Our
            flexibility ensures that your unique taste is perfectly captured,
            providing a personalized touch to each piece. Choose your ideal
            setting, and we'll craft it to match your exact specifications.
          </p>
        </div>
      </div>
      <img src={border} alt="" className="border-img" />
      <Slider ref={slickRef} {...settings} className="slick">
        <div className="slick-slide">
          <div className="parent">
            <div className="child">
              <img src={ir1} alt="Placeholder" />
            </div>
          </div>
        </div>
        <div className="slick-slide">
          <div className="parent">
            <div className="child">
              <img src={ir2} alt="Placeholder" />
            </div>
          </div>
        </div>
        <div className="slick-slide">
          <div className="parent">
            <div className="child">
              <img src={ir3} alt="Placeholder" />
            </div>
          </div>
        </div>
        <div className="slick-slide">
          <div className="parent">
            <div className="child">
              <img src={ir4} alt="Placeholder" />
            </div>
          </div>
        </div>
        <div className="slick-slide">
          <div className="parent">
            <div className="child">
              <img src={ir5} alt="Placeholder" />
            </div>
          </div>
        </div>
        <div className="slick-slide">
          <div className="parent">
            <div className="child">
              <img src={ir6} alt="Placeholder" />
            </div>
          </div>
        </div>
      </Slider>
      <img src={border} alt="" className="border-img" />
      <div className="product-carousel">
        <h1>MOST RATED PRODUCTS</h1>
        <Slider ref={slickRef} {...settingimg} className="slick-1">
          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="link-text"
            >
              <div className="card parent-1" style={{ width: "15rem" }}>
                <img
                  src={product.image}
                  className="card-img-1"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
      <br />
      <img src={border} alt="" className="border-img" />
      <div className="home-p6">
        <h1>WHAT OUR CLIENTS SAY</h1>
        <div className="p6-p1">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <div className="carousel-caption">
                  <h4>Raju Bajaj</h4>
                  <p>
                    Good company and excellent service.Highly recommended, fair
                    price quotations and excellent service. Thank you.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-caption">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <h4>Ekta Shah</h4>
                  <p>
                    Highly recommended, fair price quotations and excellent
                    service. Willing to run an extra mile for customers
                    satisfaction. Thank you.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-caption">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <h4>Sujeet Narayan</h4>
                  <p>
                    this company is super friendly and gives an excellent
                    service.Thank you so much.i am visit agin. Thank you.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
}

export default Home;
