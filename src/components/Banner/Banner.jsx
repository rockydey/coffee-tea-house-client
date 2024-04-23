import bannerImg from "../../assets/images/more/3.png";

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bannerImg})` }}
      className='py-28 md:py-52 bg-center bg-no-repeat bg-cover px-5 md:px-16 lg:px-0'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='lg:w-3/5 space-y-6 lg:ml-auto'>
          <h1 className='font-rancho text-6xl text-color1'>
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className='font-raleway text-base text-color1 font-normal'>
            It is coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className='font-rancho text-color2 text-2xl px-5 py-2 bg-color3'>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
