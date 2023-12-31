import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-[#b7a69d] p-8 max-w-7xl mx-auto h-auto pt-20 pb-10  flex">
      <div className="w-[80%] mx-auto grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4">
        {/* Company Name */}
        <div>
          <h2 className="text-lg font-bold text-[#c8956d] ">Perk & Pour</h2>
          <h2 className="text-lg ">Coffee Shop</h2>
        </div>

        {/* Our Services */}
        <div>
          <h2 className="text-lg mb-4 text-[#c8956d]">Our Services</h2>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </div>

        {/* Our Company */}
        <div>
          <h2 className="text-lg mb-4 text-[#c8956d]">Our Company</h2>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h2 className="text-lg mb-4 text-[#c8956d]">Address</h2>
          <p>456 Street Name</p>
          <p>City, Country</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
