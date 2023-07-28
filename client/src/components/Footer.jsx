import React from "react";
import { Link } from "react-router-dom";
import footer from "../assets/footer.png";

const Footer = () => {
  return (
    <footer>
      <div className="w-full">
        <img className="w-full object-cover h-12" src={footer} alt="" />
      </div>
      <div className="h-auto relative text-white lg:px-28 px-6 py-10 bg-[#ed1c24]"></div>
      <div className="bg-white text-sm flex md:flex-row flex-col md:justify-between justify-center items-center lg:px-28 px-6 md:py-4 py-3 md:text-sm md:text-xs font-hanuman">
        <p>© 2023 TahourDEV. All Rights Reserved. </p>
        <p>
          Cloned by:{" "}
          <span>
            <Link className="hover:underline text-blue-700">TahourDev</Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
