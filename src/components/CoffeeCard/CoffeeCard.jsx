import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, chef, photo } = coffee;
  return (
    <div className=' bg-[#F5F4F1] p-7 flex justify-between gap-16 items-center rounded-xl'>
      <div>
        <img src={photo} alt='' />
      </div>
      <div className='flex items-center justify-between flex-1'>
        <div className='font-raleway text-xl text-[#1B1A1AB3] font-normal space-y-3'>
          <p>
            <span className='text-color5 font-semibold'>Name:</span> {name}
          </p>
          <p>
            <span className='text-color5 font-semibold'>Chef:</span> {chef}
          </p>
          <p>
            <span className='text-color5 font-semibold'>Price:</span> $10
          </p>
        </div>
        <div className='space-y-4'>
          <Link
            to='/view-coffee'
            className='text-xl bg-[#D2B48C] flex items-center p-3 text-color1 rounded-md'>
            <FaEye />
          </Link>
          <Link
            to='/update-coffee'
            className='text-xl bg-[#3C393B] flex items-center p-3 text-color1 rounded-md'>
            <MdEdit />
          </Link>
          <Link className='text-xl bg-[#EA4744] flex items-center p-3 text-color1 rounded-md'>
            <MdDelete />
          </Link>
        </div>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.object,
};

export default CoffeeCard;
