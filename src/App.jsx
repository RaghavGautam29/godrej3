import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from './assets/logo.png';
import profile from './assets/profile.jpg';
import { FaBuilding } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaBed } from "react-icons/fa6";
import { GiStairs } from "react-icons/gi";
import { IoIosPricetag } from "react-icons/io";
import { SlSizeFullscreen } from "react-icons/sl";
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.webp';
import img3 from './assets/img3.webp';
import img4 from './assets/img4.png';
import img5 from './assets/img5.png';
import img6 from './assets/img6.png';
import highlights from './assets/highlights.jpg';
import { FaCheck } from "react-icons/fa";
import locationmap from './assets/locationmap.jpg'
import masterplan1 from './assets/masterplan1.jpg';
import wa from './assets/wa.svg';
import { FaPhoneAlt } from "react-icons/fa";

const App = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const links = [
    { id: 1, link: 'Overview' },
    { id: 2, link: 'Pricing' },
    { id: 3, link: 'Locations' },
    { id: 4, link: 'Gallery' },
    { id: 5, link: 'Highlights' },
  ];

  return (
    <>
      <div className="relative min-h-screen">
        <nav className="flex justify-between text-xl items-center w-full h-20 px-4 text-white bg-launch bg-opacity-100 z-20 fixed top-0 left-0 right-0">
          <div>
            <h1 className="text-5xl font-signature ml-2">
              <img src={logo} alt="logo" className="h-16" />
            </h1>
          </div>
          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-125 duration-200"
              >
                {link}
              </li>
            ))}
          </ul>
          <div
            onClick={toggleNav}
            className="cursor-pointer pr-4 text-gray-500 md:hidden"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
          {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-white z-10">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="px-4 cursor-pointer capitalize py-6 text-4xl"
                  onClick={toggleNav}
                >
                  {link}
                </li>
              ))}
            </ul>
          )}
        </nav>
        <div className="pt-20 relative">
          <img src={profile} alt="profile" className="w-full h-[400px] md:w-full md:h-[calc(100vh-5rem)] object-cover" />
          <div className="absolute inset-0 z-10 flex flex-col items-center pt-[450px] md:p-4 justify-center md:grid md:grid-cols-2 gap-8">
            <div className="bg-darky p-6 pt-[70px] rounded bg-opacity-50 md:w-auto">
              <h1 className="text-4xl bg-launch rounded font-normal font-serif text-white p-2">New Launch</h1>
              <h1 className="text-xl font-semibold text-white mt-2">Godrej Woodscapes</h1>
              <h1 className="text-xl text-white font-semibold">At Budigere Cross - Bengal Lamps, Bangalore</h1>
              <h1 className='text-xl text-launch text-extrabold bg-white font-semibold mt-2 p-1'>Price ₹ 1.20 Cr* Onwards</h1>
              <h1 className='text-lg text-semibold text-white mt-2'>Total towers- 15 </h1>
              <h1 className='text-lg text-semibold text-white'>2, 3, 3.5 & 4 BHK Homes</h1>
            </div>
            <form className="bg-darky bg-opacity-30 mt-[100px] p-8 md:p-8 md:ml-[100px] md:mt-[60px] rounded md:w-[400px]">
              <h1 className='text-3xl bg-launch text-white font-normal font-serif rounded p-6 mb-[20px]'>Enquire Now</h1>
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  className="w-full text-neutral-800 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder='Email address'
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-launch hover:bg-tertiary hover:text-launch text-white font-medium py-2 px-6 rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='flex justify-center pt-[160px] md:pt-[50px]'>
        <h1 className='text-2xl md:text-3xl text-medium font-mono underline decoration-launch text-center'>
          Godrej Bengal Lamps Overview
        </h1>
      </div>
      <div className='grid grid-cols-2 md:pb-[40px] space-y-6 md:grid-cols-3 gap-6 w-full p-4 md:pt-[70px] max-w-4xl mx-auto font-serif'>
        <div className='flex col-span-1 items-center'>
          <FaBuilding className='text-xl md:text-4xl text-launch mr-4' />
          <span className='text-xl md:text-4xl font-medium'>TOWER</span>
        </div>
        <div className='flex col-span-1 items-center'>
          <FaLocationDot className='text-2xl md:text-4xl text-launch mr-4 -mt-[20px]' />
          <span className='text-xl md:text-4xl font-medium -mt-[20px]'>LOCATION</span>
        </div>
        <div className='flex items-center'>
          <FaBed className='text-2xl md:text-4xl text-launch md:mr-4 mr-4  md:-mt-[20px]' />
          <span className='text-xl md:text-4xl font-medium md:-mt-[15px]'>ROOMS</span>
        </div>
        <div className='flex items-center'>
          <GiStairs className='text-2xl md:text-4xl text-launch mr-4' />
          <span className='text-xl md:text-4xl font-medium'>FLOORS</span>
        </div>
        <div className='flex items-center'>
          <SlSizeFullscreen className='text-2xl md:text-4xl text-launch mr-4' />
          <span className='text-xl md:text-4xl font-medium'>SIZES</span>
        </div>
        <div className='flex items-center'>
          <IoIosPricetag className='text-2xl md:text-4xl text-launch mr-4' />
          <span className='text-xl md:text-4xl font-medium'>PRICES</span>
        </div>
      </div>
      <div className='flex justify-center md:pt-[10px] p-6'>
        <button className='text-2xl md:text-2xl text-medium font-mono hover:bg-navy drop-shadow-2xl bg-launch text-white rounded-2xl p-4 text-center'>
          DOWNLOAD BROCHURE
        </button>
      </div>
      <div className='pt-[30px] md:pt-[50px]'>
        <h1 className='text-3xl md:text-5xl font-serif text-center'>
          Godrej Woodscapes 
        </h1>
        <h1 className='text-center pt-[30px] font-serif text-lg md:text-xl'>At Budigere Cross, Bangalore</h1></div>
        <div className='text-justify p-6 md:p-12'>
        <p className='pt-[20px]'>Welcome to the world of Godrej Woodscapes Budigere Cross, where luxury meets tranquility and convenience merges with style. Nestled in the heart of Bangalore, this upcoming residential property by Godrej Properties is set to redefine modern living. With its impeccable design, state-of-the-art amenities, and strategic location near Budigere Cross Whitefield, Godrej Woodscapes promises to be a haven for those seeking a perfect blend of comfort and elegance.</p>
        <p className='pt-[20px]'>Situated near Budigere Cross in Whitefield, the project offers excellent connectivity to major hubs of Bangalore, ensuring convenience for daily commuting. Close to schools, hospitals, shopping centers, and entertainment options, making it an ideal location for families and professionals alike. Godrej Woodscapes offers a variety of configurations, including 2, 3, 3.5, and 4 bedroom apartments, each thoughtfully designed to maximize space and comfort. The apartments are designed to ensure ample natural light and ventilation, creating a pleasant and healthy living environment. </p>     
        <p className='pt-[20px]'>Residents can enjoy a range of modern amenities such as a swimming pool, gymnasium, clubhouse, landscaped gardens, children’s play area, and more. The property includes 24/7 security, ample parking space, and other conveniences to ensure a safe and comfortable lifestyle. Incorporation of green building practices and sustainable features to promote an environmentally friendly lifestyle. </p>
        <p className='pt-[20px]'>Godrej Properties, a leading real estate developer in India, has a strong track record in delivering high-quality residential and commercial properties. Known for their commitment to excellence, innovation, and sustainability, Godrej Properties has established a reputation for creating landmark projects across the country. </p>   
        <p className='pt-[20px]'>2 BHK Apartments Ideal for small families or young professionals, offering a perfect balance of luxury and 3BHK Apartments Spacious and well-designed, suitable for growing families who seek a blend of comfort and style. 3.5 BHK Apartments Providing additional space for a study or home office, catering to the needs of modern living. 4 BHK Apartments Expansive residences designed for larger families, combining luxury with functionality. </p>  
    </div>
    <div className='flex justify-center pb-[50px]'>
        <button className='text-2xl md:text-2xl md:w-[250px] text-medium font-mono hover:bg-navy drop-shadow-2xl bg-launch text-white rounded p-4 text-center'>
          ENQUIRE NOW
        </button>
        </div>
        <div className='pt-[30px] md:pt-[50px] bg-light'>
        <h1 className='text-2xl md:text-2xl underline decoration-launch decoration-4 font-serif text-center'>
        Godrej Budigere Cross
        </h1>
        <h1 className='text-center pt-[30px] font-serif text-4xl md:text-6xl text-darky'>Gallery</h1>
        <div className='grid grid-cols-2  md:grid-cols-3 gap-6 p-4 md:p-8'> 
            <div className='max-x-full h-auto'><img className='rounded-2xl' src={img1} alt="img1"/></div>
            <div className='max-x-full h-auto'><img className='rounded-2xl' src={img2} alt="img2"/></div>
            <div className='max-x-full h-auto'><img className='rounded-2xl' src={img3} alt="img3"/></div>
            <div className='max-x-full h-auto'><img className='rounded-2xl' src={img4} alt="img4"/></div>
            <div className='max-x-full h-auto'><img className='rounded-2xl' src={img5} alt="img5"/></div>
            <div className='max-x-full h-auto'><img className='rounded-2xl' src={img6} alt="img6"/></div>
        </div>
        <div className='flex justify-center md:pt-[10px] p-6'>
        <button className='text-2xl md:text-2xl text-medium font-mono hover:bg-navy drop-shadow-2xl bg-launch text-white rounded-2xl p-4 text-center'>
          DOWNLOAD BROCHURE
        </button>
      </div>
        </div>
        <div className='pt-[40px] items-center'>
        <h1 className='text-2xl md:text-2xl underline decoration-launch decoration-4 font-serif text-center'>
        Godrej Budigere Cross
        </h1>
        <h1 className='text-center pt-[30px] font-serif text-4xl md:text-6xl text-darky'>Price List</h1></div>
      <div className='flex justify-center items-center p-8'>    
        <table className="table-auto border border-spacing-3 border-darky jsutify-center items-center w-[800px] h-[300px] mb-[40px]">
  <thead>
    <tr className='justify-center items-center'>
      <th className='border border-spacing-3 border-darky'>Type</th>
      <th className='border border-spacing-3 border-darky'>Saleable Area</th>
      <th className='border border-spacing-3 border-darky'>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr className='justify-center items-center bg-light' >
      <td className='border border-spacing-3 border-darky text-center'>2BHK</td>
      <td className='border border-spacing-3 border-darky text-center'>1191 to 1285 Sq.ft</td>
      <td className='border border-spacing-3 border-darky text-center'> <button className='text-xl md:text-2xl md:w-[150px] text-medium font-mono hover:bg-navy drop-shadow-2xl bg-launch text-white rounded text-center'>
          ON REQUEST
        </button></td>
    </tr>
    <tr className='justify-center items-center'>
      <td className='border border-spacing-3 border-darky text-center'>3BHK</td>
      <td className='border border-spacing-3 border-darky text-center'>1429Sq.ft, 1700Sq.ft, 1900Sq.ft, 2025 Sq.ft</td>
      <td className='border border-spacing-3 border-darky text-center'><button className='text-xl md:text-2xl md:w-[150px] text-medium font-mono hover:bg-navy drop-shadow-2xl bg-launch text-white rounded text-center'>
          ON REQUEST
        </button></td>
    </tr>
    <tr className='justify-center items-center bg-light'>
      <td className='border border-spacing-3 border-darky text-center'>4.5BHK</td>
      <td className='border border-spacing-3 border-darky text-center'>3630 Sq.ft</td>
      <td className='border border-spacing-3 border-darky text-center'><button className='text-xl md:text-2xl md:w-[150px] text-medium font-mono hover:bg-navy drop-shadow-2xl bg-launch text-white rounded text-center'>
          ON REQUEST
        </button></td>
    </tr>
  </tbody>
</table>
    </div>
    <div className='relative'>
        <img className='h-[700px] w-full md:h-[500px] md:w-full z-10' src={highlights} alt="img"/>
        <div className='absolute inset-0 z-10 bg-darky bg-opacity-70'>
            <div className='text-center'>
                <h1 className='text-xl md:text-2xl underline decolaration-launch font-mono text-white pt-[40px]'>Godrej Budigere Cross</h1>
                <h1 className='text-4xl md:text-5xl font-serif text-light pt-[20px] md:pt-[40px]'>HIGHLIGHTS</h1>
                <div className='grid grid-cols-2 text-white'>
                    <div className='col-span-1 text-xl md:text-2xl md:text-left md:pl-[40px]'>
                    <ul className='md:p-6'>
                     <li className='flex p-3'><FaCheck />68,000 Sq.ft (G+3) Clubhouse</li>
                        <li className='flex gap-2 p-3'><FaCheck />Project at an Expanse of 28.15 Acres</li>
                        <li className='flex gap-2 p-3'><FaCheck />3 Levels of Basement Parking</li>
                        <li className='flex gap-2 p-3'><FaCheck />Pedestrian Friendly Greens</li>

                    </ul>
                    </div>
                    <div className='col-span-1 text-xl md:text-2xl md:text-left'>
                        <ul className='md:p-6'>
                            <li className='flex gap-2 p-3'><FaCheck />Central Park With Beautiful Views</li>
                            <li className='flex gap-2 p-3'><FaCheck />85% of Open Space</li>
                            <li className='flex gap-2 p-3'><FaCheck />3 Lakh Sqft of Retail Convenience</li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='text-center'>
    <h1 className='text-xl md:text-2xl underline decolaration-launch font-mono text-launch pt-[40px]'>Godrej Budigere Cross</h1>
    <h1 className='text-center pt-[30px] font-serif text-3xl  md:text-6xl text-darky'>Location Map</h1>
    <div className='grid md:grid-cols-2  gap-4'>
        <div className='col-span-1 p-8'>
             <img src={locationmap} alt="map"/>
        </div>
        <div className='col-span-1 text-2xl md:p-4 md:pt-[30px] text-darky'>
            <ul className='text-left p-4'>
                <li className='flex p-2 gap-2'><FaLocationDot/>ld - Madras Road 0 km</li>
                <li className='flex p-2 gap-2'><FaLocationDot/>Orion Uptown Mall 1.6 km/</li>
                <li className='flex p-2 gap-2'><FaLocationDot/>Whitefield-Hoskote Road 2 km/</li>
                <li className='flex p-2 gap-2'><FaLocationDot/>Bearys Global Research 2.3 km/</li>
                <li className='flex p-2 gap-2'><FaLocationDot/>KR Puram 6.5 km/</li>
                <li className='flex p-2 gap-2'><FaLocationDot/>Brigade Signature Towers 8 km/</li>
                <li className='flex p-2 gap-2'><FaLocationDot/>Whitefield Metro Station 9.2 km/</li> 
                <li className='flex p-2 gap-2'><FaLocationDot/>ITPL 10 km/</li> 
            </ul>
        </div>
    </div>
    </div>
    <div className='text-center bg-light bg-opacity-30'>
    <h1 className='text-2xl underline decolaration-launch font-mono text-launch pt-[40px]'>Godrej Budigere Cross</h1>
    <h1 className='text-center pt-[30px] font-serif text-4xl md:text-6xl text-darky'>Master Plan</h1>
    <img  className='pt-[40px]' src={masterplan1} alt="map2" />
    </div>
    <div className='bg-darky text-white text-justify p-6'>
        <p>Godrej Woodscapes Budigere Cross (Bengal Lamps) RERA No:. PRM/KA/RERA/1251/446/PR/170524/006882

Disclaimer:The Content Mentioned In This Website Is For Information Purposes Only, Prices Mentioned Are Subject To Change Without Notice & Properties Mentioned Are Subject To Availability. Images Are For Representation Purposes Only. This Is Not The Official Website. This Website Belongs To Official Channel Partner Of Mana Group. We May Also Send Updates To The Mobile / Email Id Registered With Us. All Rights Reserved.</p>
    </div>
    <a href="#" className="fixed bottom-4 left-4 z-30">
        <img className="w-12 h-12 md:w-16 md:h-16 bg-green bg-opacity-80 rounded-full" src={wa} alt="WhatsApp" />
      </a>
      <a href="#" className="fixed bottom-4 right-4 z-30">
      <FaPhoneAlt  className='w-12 h-12 md:w-16 md:h-16 text-navy bg-opacity-80 rounded-full'/>
      </a>
    </>
  );
};

export default App;