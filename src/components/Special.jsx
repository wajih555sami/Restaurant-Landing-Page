import React from "react";

import orange_juice from "../assets/img/orange-juice.png";
import restaurant from "../assets/img/restaurant.png";
import chef from "../assets/img/chef 2.png";

const Special = () => {
  return (
    <section className="special-sec py-50 secondColor-bg" id="special_sec">
      <div className="container">
        <div className="hold-head text-center">
          <h3 className="title">Special</h3>
          <p className="desc">What makes us special</p>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="box">
              <figure className="hold-img">
                <img src={orange_juice} className="img-fluid" alt="" />
              </figure>
              <h2 className="name">Fresh food</h2>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at
                mattis cras.{" "}
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="box">
              <figure className="hold-img">
                <img src={chef} className="img-fluid" alt="" />
              </figure>
              <h2 className="name">skilled Chef</h2>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at
                mattis cras.{" "}
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="box">
              <figure className="hold-img">
                <img src={restaurant} className="img-fluid" alt="" />
              </figure>
              <h2 className="name">Exotic dishes</h2>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at
                mattis cras.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Special;
