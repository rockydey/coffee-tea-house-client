import { Link } from "react-router-dom";
import footerBg1 from "../../assets/images/more/13.jpg";
import footerBg2 from "../../assets/images/more/24.jpg";
import logo from "../../assets/images/more/logo1.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${footerBg1})` }}
        className='bg-cover bg-center bg-no-repeat pt-24 pb-12'>
        <div className='max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-24 px-5 md:px-16 lg:px-0'>
          <div className='space-y-7'>
            <img className='w-[75px]' src={logo} alt='' />
            <h2 className='font-rancho text-color4 text-5xl drop-shadow-lg blur-[0.5px]'>
              Espresso Emporium
            </h2>
            <p className='font-raleway text-xl text-color5 font-normal'>
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            <div className='text-color4 text-3xl flex items-center gap-4'>
              <Link>
                <FaFacebook />
              </Link>
              <Link>
                <FaTwitter />
              </Link>
              <Link>
                <IoLogoInstagram />
              </Link>
              <Link>
                <FaLinkedin />
              </Link>
            </div>
            <h3 className='font-rancho text-color4 text-4xl drop-shadow-lg blur-[0.5px]'>
              Get in Touch
            </h3>
            <div className='text-color4 text-xl space-y-4'>
              <p className='flex items-center gap-3'>
                <MdLocalPhone />{" "}
                <span className='text-color5'>+88 01533 333 333</span>
              </p>
              <p className='flex items-center gap-3'>
                <IoIosMail />{" "}
                <span className='text-color5'>info@gmail.com</span>
              </p>
              <p className='flex items-center gap-3'>
                <FaLocationDot />{" "}
                <span className='text-color5'>
                  72, Wall street, King Road, Dhaka
                </span>
              </p>
            </div>
          </div>
          <div>
            <h2 className='font-rancho text-color4 text-5xl drop-shadow-lg blur-[0.5px]'>
              Connect with Us
            </h2>
            <form className='mt-8 space-y-4 font-raleway text-base font-normal text-[#1B1A1A99]'>
              <input
                type='text'
                placeholder='Name'
                className='w-full pl-3 py-4 rounded-md focus:outline-none'
              />
              <input
                type='email'
                placeholder='Email'
                className='w-full pl-3 py-4 rounded-md focus:outline-none'
              />
              <textarea
                name=''
                id=''
                rows='5'
                placeholder='Message'
                className='w-full pt-4 pl-3 rounded-md focus:outline-none'></textarea>
              <input
                type='submit'
                value='Send Message'
                className='block font-rancho text-color4 text-2xl px-5 py-2 rounded-full border-2 border-color4 cursor-pointer'
              />
            </form>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${footerBg2})` }}
        className='bg-cover bg-center bg-no-repeat py-3'>
        <h4 className='font-rancho text-xl text-color1 text-center'>
          Copyright Espresso Emporium ! All Rights Reserved
        </h4>
      </div>
    </div>
  );
};

export default Footer;
