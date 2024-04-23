import icon1 from "../../assets/images/icons/1.png";
import icon2 from "../../assets/images/icons/2.png";
import icon3 from "../../assets/images/icons/3.png";
import icon4 from "../../assets/images/icons/4.png";

const ChooseUs = () => {
  return (
    <div className='bg-[#ECEAE3] py-14 px-5 md:px-16 lg:px-0'>
      <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-center'>
        <div className='space-y-4'>
          <img className='w-[70px]' src={icon1} alt='' />
          <div className='space-y-2'>
            <h4 className='font-rancho text-color4 text-4xl'>Awesome Aroma</h4>
            <p className='text-color5 font-raleway text-base font-normal'>
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
        </div>
        <div className='space-y-4'>
          <img className='w-[70px]' src={icon2} alt='' />
          <div className='space-y-2'>
            <h4 className='font-rancho text-color4 text-4xl'>High Quality</h4>
            <p className='text-color5 font-raleway text-base font-normal'>
              We served the coffee to you maintaining the best quality
            </p>
          </div>
        </div>
        <div className='space-y-4'>
          <img className='w-[70px]' src={icon3} alt='' />
          <div className='space-y-2'>
            <h4 className='font-rancho text-color4 text-4xl'>Pure Grades</h4>
            <p className='text-color5 font-raleway text-base font-normal'>
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>
        </div>
        <div className='space-y-4'>
          <img className='w-[70px]' src={icon4} alt='' />
          <div className='space-y-2'>
            <h4 className='font-rancho text-color4 text-4xl'>
              Proper Roasting
            </h4>
            <p className='text-color5 font-raleway text-base font-normal'>
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
