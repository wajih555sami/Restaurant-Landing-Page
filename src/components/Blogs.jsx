import React from "react";

import blog_1 from "../assets/img/hcmp33562_1459402 (2).png";
import blog_2 from "../assets/img/DirtCandy-0242 (1).png";
import blog_3 from "../assets/img/unsplash_ThLVnKdeH1k (2).png";

const Blogs = () => {
  return (
    <section className="blog-sec py-50" id="blogs_sec">
      <div className="container">
        <div className="hold-head text-center">
          <h3 className="title">Blogs</h3>
          <p className="desc">words from our food lovers</p>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="box">
              <figure className="hold-img">
                <img src={blog_1} className="img-fluid" alt="" />
              </figure>
              <div className="content">
                <h2 className="title">Cooking Dining Experience</h2>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sollicitudin{" "}
                </p>
                <a href="#" className="more">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="box hover">
              <figure className="hold-img">
                <img src={blog_2} className="img-fluid" alt="" />
              </figure>
              <div className="content">
                <h2 className="title">Cooking Dining Experience</h2>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sollicitudin{" "}
                </p>
                <a href="#" className="more">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="box">
              <figure className="hold-img">
                <img src={blog_3} className="img-fluid" alt="" />
              </figure>
              <div className="content">
                <h2 className="title">Cooking Dining Experience</h2>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sollicitudin{" "}
                </p>
                <a href="#" className="more">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
