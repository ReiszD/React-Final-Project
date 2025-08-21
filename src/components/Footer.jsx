import React from 'react';
import './Footer.css';
import facebook_icon from '../assets/facebook_icon.png'
import twitter_icon from '../assets/twitter_icon.png'
import instagram_icon from '../assets/instagram_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <ul>
            <li>Home</li>
            <li>Request Movie/Show</li>
            <li>Subscribe</li>
        </ul>
        <div className="footer__icons">
            <img src={facebook_icon} alt="" />
            <img src={twitter_icon} alt="" />
            <img src={instagram_icon} alt="" />
        </div>
        <p className="copyright">Copyright &copy; 2025 Reisz Davis</p>
    </div>
  )
}

export default Footer;
