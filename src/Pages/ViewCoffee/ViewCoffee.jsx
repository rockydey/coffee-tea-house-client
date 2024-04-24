import { Link, useLoaderData } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { Helmet } from "react-helmet-async";

const ViewCoffee = () => {
  const loadedCoffee = useLoaderData();
  const { name, chef, supplier, taste, category, details, photo } =
    loadedCoffee;

  return (
    <div className='max-w-screen-xl mx-auto mb-20 mt-10'>
      <Helmet>
        <title>View Coffee - {name}</title>
      </Helmet>
      <div className='w-full px-5 md:px-0 md:w-10/12 lg:w-3/5 mx-auto'>
        <Link
          to='/'
          className='font-rancho mt-16 flex items-center gap-4 text-3xl text-color4 mb-10'>
          <IoMdArrowBack />{" "}
          <span className='text-[#374151] drop-shadow-lg blur-[0.4px]'>
            Back to home
          </span>
        </Link>
        <div className='bg-[#F4F3F0] py-8 md:py-16 lg:px-20 space-y-8 rounded-md'>
          <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
            <div>
              <img src={photo} alt='' />
            </div>
            <div>
              <h3 className='font-rancho text-4xl text-color4 drop-shadow-lg blur-[0.5px] mb-8'>
                Niceties
              </h3>
              <div className='font-raleway text-xl text-[#1B1A1AB3] font-normal space-y-3'>
                <p>
                  <span className='text-color5 font-semibold'>Name:</span>{" "}
                  {name}
                </p>
                <p>
                  <span className='text-color5 font-semibold'>Chef:</span>{" "}
                  {chef}
                </p>
                <p>
                  <span className='text-color5 font-semibold'>Supplier:</span>{" "}
                  {supplier}
                </p>
                <p>
                  <span className='text-color5 font-semibold'>Taste:</span>{" "}
                  {taste}
                </p>
                <p>
                  <span className='text-color5 font-semibold'>Category:</span>{" "}
                  {category}
                </p>
                <p>
                  <span className='text-color5 font-semibold'>Details:</span>{" "}
                  {details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCoffee;
