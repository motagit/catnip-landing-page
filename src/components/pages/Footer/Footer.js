import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from 'react-icons/fa';

function Footer() {
  return (
  <>
    <img src={process.env.PUBLIC_URL + "/images/wave.svg"} alt="" style={{width: '100%',marginTop: '-300px', marginBottom: '-10px'}}/>
      <div className='footer-container'>
        <section className='social-media'>
          <div className='social-media-wrap'>
            <div className='footer-logo'>
              <img src={process.env.PUBLIC_URL + '/logo-remake-black.svg'} alt="Catnip" />
            </div>

            <small>Catnip © 2022</small>

            <div className='social-icons'>
              <Link
                className='social-icon-link'
                to='//www.facebook.com'
                target='_blank'
                aria-label='Facebook'
              >
                <FaFacebook />
              </Link>
              <Link
                className='social-icon-link'
                to='//www.instagram.com'
                target='_blank'
                aria-label='Instagram'
              >
                <FaInstagram />
              </Link>
              <Link
                className='social-icon-link'
                to={
                  '//www.youtube.com'
                }
                target='_blank'
                aria-label='Youtube'
              >
                <FaYoutube />
              </Link>
              <Link
                className='social-icon-link'
                to='//www.twitter.com'
                target='_blank'
                aria-label='Twitter'
              >
                <FaTwitter />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Footer;