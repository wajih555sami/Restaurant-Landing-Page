import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import star from "../assets/img/star.svg";
import user1 from "../assets/img/Ellipse1.png";
import user2 from "../assets/img/Ellipse2.png";

const Reviews = () => {
  const [size, setSize] = useState(0);
  const [isCenterMode, setIsCenterMode] = useState(true);

  useEffect(() => {
    let updateWidth = () => {
      setSize(window.innerWidth);
    };
    let width = addEventListener("resize", updateWidth);
    updateWidth();
    if (size < 768) {
      setIsCenterMode(false);
    } else {
      setIsCenterMode(true);
    }
    return () => removeEventListener("resize", updateWidth);
  }, [size]);

  return (
    <section className="review-sec py-100" id="review_sec">
      <div className="container">
        <div className="hold-head text-center">
          <h3 className="title">Reviews</h3>
          <p className="desc">words from our food lovers</p>
        </div>
        <Carousel
          autoPlay
          infiniteLoop
          centerMode={isCenterMode}
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          centerSlidePercentage={70}
          swipeable={true}
          emulateTouch={true}
          showThumbs={false}
        >
          <div className="one-card">
            <div className="user-info">
              <figure className="hold-img">
                <img src={user1} alt="" className="img-fluid" />
              </figure>
              <div className="hold-body">
                <h4 className="name">Alex andrina</h4>
                <ul>
                  <li>
                    <img src={star} alt="" className="img-fluid" />
                  </li>
                  <li>
                    <img src={star} alt="" className="img-fluid" />
                  </li>
                  <li>
                    <img src={star} alt="" className="img-fluid" />
                  </li>
                  <li>
                    <img src={star} alt="" className="img-fluid" />
                  </li>
                  <li>
                    <img src={star} alt="" className="img-fluid" />
                  </li>
                </ul>
              </div>
            </div>
            <p className="user-content">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at
              mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar
              orci, egestas eget nulla duis at iaculis nunc, elit. “
            </p>
          </div>

          <div className="one-card">
            <div className="user-info">
              <figure className="hold-img">
                <img src={user2} alt="" className="img-fluid" />
              </figure>
              <div className="hold-body">
                <h4 className="name">Alex andrina</h4>
                <ul>
                  <li>
                    <img src={star} alt="" className="img-fluid" />
                  </li>
                  <li>
                    <img src={star} alt="" className="img-fluid" />
                  </li>
                  <li>
                    <img src={star} alt="" className="img-fluid" />
                  </li>
                  <li>
                    <img src={star} alt="" className="img-fluid" />
                  </li>
                  <li>
                    <img src={star} alt="" className="img-fluid" />
                  </li>
                </ul>
              </div>
            </div>
            <p className="user-content">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at
              mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar
              orci, egestas eget nulla duis at iaculis nunc, elit. “
            </p>
          </div>

          <div className="one-card">
            <div className="user-info">
              <figure className="hold-img">
                <img src={user1} alt="" className="img-fluid" />
              </figure>
              <div className="hold-body">
                <h4 className="name">Alex andrina</h4>
                <ul>
                  <li>
                    <img src={star} alt="" className="img-fluid" />
                  </li>
                  <li>
                    <img src={star} alt="" className="img-fluid" />
                  </li>
                  <li>
                    <img src={star} alt="" className="img-fluid" />
                  </li>
                  <li>
                    <img src={star} alt="" className="img-fluid" />
                  </li>
                  <li>
                    <img src={star} alt="" className="img-fluid" />
                  </li>
                </ul>
              </div>
            </div>
            <p className="user-content">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at
              mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar
              orci, egestas eget nulla duis at iaculis nunc, elit. “
            </p>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Reviews;
