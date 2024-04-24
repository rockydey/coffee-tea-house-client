import { Link, useLoaderData } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const UpdateCoffee = () => {
  const loadedCoffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } =
    loadedCoffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updateCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updateCoffee);

    fetch(`https://coffee-tea-house-server.vercel.app/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Coffee Updated Successfully!",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className='max-w-screen-xl mx-auto mb-20 mt-10'>
      <Helmet>
        <title>Update Coffee - {name}</title>
      </Helmet>
      <Link
        to='/'
        className='font-rancho mt-16 flex items-center gap-4 text-3xl text-color4 mb-10'>
        <IoMdArrowBack />{" "}
        <span className='text-[#374151] drop-shadow-lg blur-[0.4px]'>
          Back to home
        </span>
      </Link>
      <div className='bg-[#F4F3F0] py-16 px-20 space-y-8 rounded-md'>
        <h2 className='drop-shadow-lg blur-[0.4px] text-[#374151] font-rancho text-5xl text-center'>
          Update Existing Coffee Details
        </h2>
        <p className='font-raleway text-lg font-normal text-[#1B1A1AB3] px-20 text-center'>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleUpdateCoffee} className='space-y-6'>
          <div className='grid grid-cols-2 gap-6'>
            <div>
              <label
                htmlFor='name'
                className='block mb-4 text-[#1B1A1ACC] font-raleway text-xl font-semibold'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                defaultValue={name}
                placeholder='Enter coffee name'
                className='w-full py-3 pl-3 rounded-md focus:outline-none font-raleway text-base font-normal text-[#1B1A1ACC]'
              />
            </div>
            <div>
              <label
                htmlFor='chef'
                className='block mb-4 text-[#1B1A1ACC] font-raleway text-xl font-semibold'>
                Chef
              </label>
              <input
                type='text'
                name='chef'
                id='chef'
                defaultValue={chef}
                placeholder='Enter coffee chef'
                className='w-full py-3 pl-3 rounded-md focus:outline-none font-raleway text-base font-normal text-[#1B1A1ACC]'
              />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-6'>
            <div>
              <label
                htmlFor='supplier'
                className='block mb-4 text-[#1B1A1ACC] font-raleway text-xl font-semibold'>
                Supplier
              </label>
              <input
                type='text'
                name='supplier'
                id='supplier'
                defaultValue={supplier}
                placeholder='Enter coffee supplier'
                className='w-full py-3 pl-3 rounded-md focus:outline-none font-raleway text-base font-normal text-[#1B1A1ACC]'
              />
            </div>
            <div>
              <label
                htmlFor='taste'
                className='block mb-4 text-[#1B1A1ACC] font-raleway text-xl font-semibold'>
                Taste
              </label>
              <input
                type='text'
                name='taste'
                id='taste'
                defaultValue={taste}
                placeholder='Enter coffee taste'
                className='w-full py-3 pl-3 rounded-md focus:outline-none font-raleway text-base font-normal text-[#1B1A1ACC]'
              />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-6'>
            <div>
              <label
                htmlFor='category'
                className='block mb-4 text-[#1B1A1ACC] font-raleway text-xl font-semibold'>
                Category
              </label>
              <input
                type='text'
                name='category'
                id='category'
                defaultValue={category}
                placeholder='Enter coffee category'
                className='w-full py-3 pl-3 rounded-md focus:outline-none font-raleway text-base font-normal text-[#1B1A1ACC]'
              />
            </div>
            <div>
              <label
                htmlFor='details'
                className='block mb-4 text-[#1B1A1ACC] font-raleway text-xl font-semibold'>
                Details
              </label>
              <input
                type='text'
                name='details'
                id='details'
                defaultValue={details}
                placeholder='Enter coffee details'
                className='w-full py-3 pl-3 rounded-md focus:outline-none font-raleway text-base font-normal text-[#1B1A1ACC]'
              />
            </div>
          </div>
          <div className=''>
            <div>
              <label
                htmlFor='photo'
                className='block mb-4 text-[#1B1A1ACC] font-raleway text-xl font-semibold'>
                Photo URL
              </label>
              <input
                type='text'
                name='photo'
                id='photo'
                defaultValue={photo}
                placeholder='Enter photo URL'
                className='w-full py-3 pl-3 rounded-md focus:outline-none font-raleway text-base font-normal text-[#1B1A1ACC]'
              />
            </div>
          </div>
          <input
            type='submit'
            value='Update Coffee'
            className='w-full text-center font-rancho text-color4 text-2xl py-3 bg-[#D2B48C] border-2 border-color4 cursor-pointer rounded-md'
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
