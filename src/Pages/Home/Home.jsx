import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import Follow from "../../components/Follow/Follow";
import { useState } from "react";
import CoffeeCard from "../../components/CoffeeCard/CoffeeCard";
import { LuCoffee } from "react-icons/lu";
import productImg from "../../assets/images/more/1.png";

const Home = () => {
  const allLoadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(allLoadedCoffees);
  return (
    <div>
      <Banner />
      <ChooseUs />
      <div
        style={{ backgroundImage: `url(${productImg})` }}
        className='bg-cover bg-no-repeat bg-center'>
        <div className='max-w-screen-xl my-20 mx-auto'>
          <p className='text-color5 text-center font-raleway text-xl font-normal mb-2'>
            --- Sip & Savor ---
          </p>
          <h3 className='text-color4 text-center text-4xl md:text-5xl font-rancho drop-shadow-lg blur-[0.5px] mb-4'>
            Our Popular Products
          </h3>
          <Link
            to='/add-coffee'
            className='text-color4 font-rancho text-2xl flex items-center gap-2 mx-auto px-5 py-2 w-40 bg-[#E3B577] mb-12 border-2 border-color4 rounded-md'>
            <span className='text-color1'>Add Coffee</span> <LuCoffee />
          </Link>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {coffees.map((coffee) => (
              <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
            ))}
          </div>
        </div>
      </div>
      <Follow />
    </div>
  );
};

export default Home;
