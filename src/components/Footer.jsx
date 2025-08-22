import React from 'react';
import './Footer.css';
import facebook_icon from '../assets/facebook_icon.png'
import twitter_icon from '../assets/twitter_icon.png'
import instagram_icon from '../assets/instagram_icon.png'
import { ToastContainer, toast } from 'react-toastify';

const Footer = () => {
  const notify = () => toast("Still gotta build");

  return (
    <div className='footer'>
        <ul>
            <li>Home</li>
            <li onClick={notify}>Request Movie/Show</li>
            <li onClick={notify}>Subscribe</li>
            <ToastContainer theme='dark'/>
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
