import cup1 from "../../assets/images/cups/Rectangle 9.png";
import cup2 from "../../assets/images/cups/Rectangle 10.png";
import cup3 from "../../assets/images/cups/Rectangle 11.png";
import cup4 from "../../assets/images/cups/Rectangle 12.png";
import cup5 from "../../assets/images/cups/Rectangle 13.png";
import cup6 from "../../assets/images/cups/Rectangle 14.png";
import cup7 from "../../assets/images/cups/Rectangle 15.png";
import cup8 from "../../assets/images/cups/Rectangle 16.png";

const Follow = () => {
  return (
    <div className='max-w-screen-xl mx-auto my-20 text-center'>
      <p className='text-color5 font-raleway text-xl font-normal mb-2'>
        Follow Us Now
      </p>
      <h3 className='text-color4 text-4xl md:text-5xl font-rancho drop-shadow-lg blur-[0.5px] mb-12'>
        Follow on Instagram
      </h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-5 md:px-16 lg:px-0'>
        <img className='mx-auto md:mx-0' src={cup1} alt='' />
        <img className='mx-auto md:mx-0' src={cup2} alt='' />
        <img className='mx-auto md:mx-0' src={cup3} alt='' />
        <img className='mx-auto md:mx-0' src={cup4} alt='' />
        <img className='mx-auto md:mx-0' src={cup5} alt='' />
        <img className='mx-auto md:mx-0' src={cup6} alt='' />
        <img className='mx-auto md:mx-0' src={cup7} alt='' />
        <img className='mx-auto md:mx-0' src={cup8} alt='' />
      </div>
    </div>
  );
};

export default Follow;
