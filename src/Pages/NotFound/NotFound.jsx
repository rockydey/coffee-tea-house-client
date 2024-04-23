import { Link } from "react-router-dom";
import notFoundImg from "../../assets/images/404/404.gif";
import { IoMdArrowBack } from "react-icons/io";

const NotFound = () => {
  return (
    <div className=''>
      <Link
        to='/'
        className='font-rancho mt-16 flex items-center gap-4 text-3xl justify-center text-color4'>
        <IoMdArrowBack />{" "}
        <span className='text-[#374151] drop-shadow-lg blur-[0.4px]'>
          Back to home
        </span>
      </Link>
      <div className='my-20'>
        <img className='mx-auto' src={notFoundImg} alt='' />
      </div>
    </div>
  );
};

export default NotFound;