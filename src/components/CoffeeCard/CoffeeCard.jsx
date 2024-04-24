import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, photo } = coffee;
  const handleDeleteCoffee = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-tea-house-server-3gsqbg960-projects-rocky.vercel.app/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = coffees.filter((cof) => cof._id !== id);
              setCoffees(remaining);

              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted!",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className=' bg-[#F5F4F1] p-5 md:p-7 flex flex-col md:flex-row justify-between md:gap-16 items-center rounded-xl'>
      <div>
        <img className='md:w-40' src={photo} alt='' />
      </div>
      <div className='flex items-center gap-5 md:gap-0 justify-between flex-1'>
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
            to={`/view-coffee/${_id}`}
            className='text-xl bg-[#D2B48C] flex items-center p-3 text-color1 rounded-md'>
            <FaEye />
          </Link>
          <Link
            to='/update-coffee'
            className='text-xl bg-[#3C393B] flex items-center p-3 text-color1 rounded-md'>
            <MdEdit />
          </Link>
          <Link
            onClick={() => handleDeleteCoffee(_id)}
            className='text-xl bg-[#EA4744] flex items-center p-3 text-color1 rounded-md'>
            <MdDelete />
          </Link>
        </div>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.object,
  coffees: PropTypes.array,
  setCoffees: PropTypes.func,
};

export default CoffeeCard;
