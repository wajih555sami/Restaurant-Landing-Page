import React from "react";

import Welcom from "./components/Welcom";
import Footer from "./components/Footer";
import Kitchen from "./components/Kitchen";
import Special from "./components/Special";
import Blogs from "./components/Blogs";
import Reviews from "./components/Reviews";

import aboutImg from "./assets/img/about-design.png";
import cooking from "./assets/img/cooking.png";
import static_1 from "./assets/img/dish 1.png";
import static_2 from "./assets/img/chef-1.png";
import static_3 from "./assets/img/team 1.png";

function App() {
  return (
    <>
      {/* Start Header */}
      <Welcom />
      {/* End Header */}

      {/* Start About Section */}
      <section className="about-sec py-100" id="about_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="content">
                <div className="hold-head">
                  <h3 className="title">About Us</h3>
                  <p className="desc">
                    Discover the taste of worldclass vegan dishes from the
                    kitchen of Go Green Dine
                  </p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at
                  mattis cras. Quisque commodo mattis ornare a nec odio.
                  Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit.
                  Nibh auctor purus nunc tellus pellentesque nibh mattis.
                  Malesuada integer consectetur. Imperdiet aliquam quam mauris
                  semper suscipit. Molestie maecenas interdum pharetra id velit
                  sed nec.tetur sit sagittis pretium eget vitae semper
                  pellentesque pellentesque.
                </p>
                <a href="#" className="btn mt-5">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <figure className="img-side">
                <img src={aboutImg} alt="" className="img-fluid" />
              </figure>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}

      {/* Start Special Section */}
      <Special />
      {/* End Special Section */}

      {/* Start Kitchen Section */}
      <Kitchen />
      {/* End Kitchen Section */}

      {/* Start Join Section */}
      <section className="join-sec py-50 secondColor-bg" id="join_sec">
        <div className="container">
          <div className="content">
            <h3 className="title">
              Come join us for a lunch this weekend and enjoy
            </h3>
            <span className="flat">FLAT 10% OFF</span>
            <div className="text-center">
              <a href="#" className="btn">
                Book Table
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* End Join Section */}

      {/* Start Cooking Section */}
      <section className="cooking-sec py-100" id="cooking_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hold-head">
                <h3 className="title">Cooking ingredients</h3>
                <p className="desc">What goes in</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at
                mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar
                orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor
                purus nunc tellus pellentesque nibh mattis. Malesuada integer
                consectetur. Imperdiet aliquam quam mauris semper suscipit.
                Molestie maecenas interdum pharetra id velit sed nec.tetur sit
                sagittis pretium eget vitae semper pellentesque pellentesque.
              </p>
              <a href="#" className="btn mt-5">
                Read More
              </a>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <figure className="img-side">
                <img src={cooking} alt="" className="img-fluid" />
              </figure>
            </div>
          </div>
        </div>
      </section>
      {/* End Cooking Section */}

      {/* Start Statics Section */}
      <section className="statics-sec py-50 secondColor-bg" id="statics_sec">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            {/* One */}
            <div className="col-sm-4">
              <div className="box">
                <img src={static_1} className="img-fluid" alt="" />
                <div className="info">
                  <span className="num">250+</span>
                  <span className="name">Delicacy</span>
                </div>
              </div>
            </div>
            {/* One */}
            <div className="col-sm-4">
              <div className="box">
                <img src={static_2} className="img-fluid" alt="" />
                <div className="info">
                  <span className="num">10+</span>
                  <span className="name">renowed chefs</span>
                </div>
              </div>
            </div>
            {/* One */}
            <div className="col-sm-4">
              <div className="box">
                <img src={static_3} className="img-fluid" alt="" />
                <div className="info">
                  <span className="num">30+</span>
                  <span className="name">Members</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Statics Section */}

      {/* Start Review Section */}
      <Reviews />
      {/* End Review Section */}

      {/* Start Blog Section */}
      <Blogs />
      {/* End Blog Section */}

      {/* Start Footer */}
      <Footer />
      {/* End Footer */}
    </>
  );
}

export default App;
