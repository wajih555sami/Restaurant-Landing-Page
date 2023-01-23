import React from 'react';

import logo_f from '../assets/img/logo-f.svg';
import mail from '../assets/img/bytesize_mail.svg';
import contact_email from '../assets/img/email.svg';
import contact_call from '../assets/img/call.svg';
import contact_map from '../assets/img/map.svg';
import instagram from '../assets/img/instagram.svg';
import tiwtter from '../assets/img/tiwtter.svg';
import youtub from '../assets/img/youtub.svg';

const Footer = () => {
  return (
    <footer className='footer-sec'>
        <div className='main-footer secondColor-bg py-50'>
            <div className='container'>
                <div className="row justify-content-between">
					<div className="col-md-4 col-lg-4 mb-4 mb-md-0">
						<div className="data">
							<div className="hold-img">
								<img src={logo_f} className="img-fluid" />
							</div>
							<div className="info">
								<p style={{lineHeight: 1.5, margin: '25px 0',maxWidth: '200px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin </p>
							</div>
                            <ul className="social-footer">
                                <li>
                                    <a href="#" className="social-link" target="_blank"><img src={instagram} className='img-fluid' alt=''/></a>
                                </li>
                                <li>
                                    <a href="#" className="social-link" target="_blank"><img src={tiwtter} className='img-fluid' alt=''/></a>
                                </li>
                                <li>
                                    <a href="#" className="social-link" target="_blank"><img src={youtub} className='img-fluid' alt=''/></a>
                                </li>
                            </ul>
						</div>
					</div>
                    <div className="col-md-3 col-lg-3">
						<div className="data">
							<div className="one-col one-col-f mb-3">
								<h4 className="title_t">Other Links</h4>
								<ul className='links-footer'>
                                    <li><a href='#' className='link'>Privacy Policy</a></li>
                                    <li><a href='#' className='link'>Terms & conditions</a></li>
                                    <li><a href='#' className='link'>Blogs</a></li>
                                    <li><a href='#' className='link'>our team</a></li>
                                    <li><a href='#' className='link'>Our kitchen</a></li>
                                </ul>
							</div>
							
						</div>
					</div>
					<div className="col-md-4 col-lg-4">
						<div className="data">
							<div className="one-col">
								<h4 className="title_t">Contact Us</h4>
								<div className="addres">
									<p className="tex">
										<img src={contact_email} className='img-fluid' alt=''/>
										Gogreendineservice@gmail.com
									</p>
									<p className="tex">
										<img src={contact_map} className='img-fluid' alt=''/>
										AZ complex bylane3 Mandari Rd Mumbai 1100867 
									</p>
									<p className="tex">
										<img src={contact_call} className='img-fluid' alt=''/>
										+1800 287 256
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
            </div>
        </div>
        <div className='subscribe'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-4'>
                        <div className='d-flex align-items-center'>
                            <img src={mail} alt='' className='img-fluid' style={{marginRight: '10px'}} />
                            <p>Subscribe to our Newsletter</p>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <form>
                            <div className='d-flex flex-column flex-md-row'>
                                <input type='email' className='form-control' placeholder='Your Email' />
                                <button type='submit' className='btn'>Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className='copyrights secondColor-bg'>
            <div className='container text-center'>
                <p>Copyright &copy; {new Date().getFullYear() } Golden Dine website</p>
                <span>All rights reserved</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer