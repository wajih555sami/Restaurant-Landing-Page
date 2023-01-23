import React from 'react';

import menu_1 from '../assets/img/hcmp33562_1459402.png';
import menu_2 from '../assets/img/unsplash_ThLVnKdeH1k.png';
import menu_3 from '../assets/img/hcmp76303_1094626.png';
import menu_4 from '../assets/img/DirtCandy-0242.png';
import menu_5 from '../assets/img/unsplash_sHG1dCUXgPY.png';
import menu_6 from '../assets/img/unsplash_50KffXbjIOg.png';

const Kitchen = () => {
  return (
    <section className='kitchen-sec py-50' id='kitchen_sec'>
        <div className='container'>
          <div className='hold-head text-center'>
            <h3 className='title'>Straight From Kitchen</h3>
            <p className='desc'>Our Menu</p>
          </div>
          <div className='row align-items-center justify-content-between'>
            {/* One */}
            <div className='col-lg-6'>
              <div className='box'>
                <figure className='hold-img'>
                  <img src={menu_1} className='img-fluid' alt='' />
                </figure>
                <div className='info'>
                  <div>
                    <h4 className='title'>Lorem ipsum dolor sit amet</h4>
                    <p className='desc'>Lorem ipsum dolor sit amet</p>
                  </div>
                  <div className='price'><span>Rs 222</span></div>
                </div>
              </div>
            </div>
            {/* One */}
            <div className='col-lg-6'>
              <div className='box'>
                <figure className='hold-img'>
                  <img src={menu_4} className='img-fluid' alt='' />
                </figure>
                <div className='info'>
                  <div>
                    <h4 className='title'>Phasellus convallis maximus</h4>
                    <p className='desc'>Lorem ipsum dolor sit amet</p>
                  </div>
                  <div className='price'><span>Rs 148</span></div>
                </div>
              </div>
            </div>
            {/* One */}
            <div className='col-lg-6'>
              <div className='box'>
                <figure className='hold-img'>
                  <img src={menu_2} className='img-fluid' alt='' />
                </figure>
                <div className='info'>
                  <div>
                    <h4 className='title'>Vivamus sodales augue vita</h4>
                    <p className='desc'>Lorem ipsum dolor sit amet</p>
                  </div>
                  <div className='price'><span>Rs 590</span></div>
                </div>
              </div>
            </div>
            {/* One */}
            <div className='col-lg-6'>
              <div className='box'>
                <figure className='hold-img'>
                  <img src={menu_3} className='img-fluid' alt='' />
                </figure>
                <div className='info'>
                  <div>
                    <h4 className='title'>Vestibulum est turpis</h4>
                    <p className='desc'>Lorem ipsum dolor sit amet</p>
                  </div>
                  <div className='price'><span>Rs 135</span></div>
                </div>
              </div>
            </div>
            {/* One */}
            <div className='col-lg-6'>
              <div className='box'>
                <figure className='hold-img'>
                  <img src={menu_3} className='img-fluid' alt='' />
                </figure>
                <div className='info'>
                  <div>
                    <h4 className='title'>Pellentesque semper semper</h4>
                    <p className='desc'>Lorem ipsum dolor sit amet</p>
                  </div>
                  <div className='price'><span>Rs 130</span></div>
                </div>
              </div>
            </div>
            {/* One */}
            <div className='col-lg-6'>
              <div className='box'>
                <figure className='hold-img'>
                  <img src={menu_2} className='img-fluid' alt='' />
                </figure>
                <div className='info'>
                  <div>
                    <h4 className='title'>Nullam elementum magna</h4>
                    <p className='desc'>Lorem ipsum dolor sit amet</p>
                  </div>
                  <div className='price'><span>Rs 200</span></div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
    </section>
  )
}

export default Kitchen