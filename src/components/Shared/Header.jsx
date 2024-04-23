import logo from "../../assets/images/more/logo1.png";
import logoBg from "../../assets/images/more/15.jpg";

const Header = () => {
  return (
    <div
      style={{ backgroundImage: `url(${logoBg})` }}
      className=' bg-center bg-no-repeat bg-cover'>
      <div className='flex items-center justify-center gap-4 py-4'>
        <img className='w-[70px]' src={logo} alt='' />
        <h2 className='font-rancho text-6xl text-color1'>Espresso Emporium</h2>
      </div>
    </div>
  );
};

export default Header;
