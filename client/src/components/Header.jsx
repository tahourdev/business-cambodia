import React, { useEffect, useState } from "react";
import Logo from "../assets/BC.png";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import useFetch from "../hook/useFetch";
import { HiMenuAlt3 } from "react-icons/hi";
import { LiaTimesSolid } from "react-icons/lia";

const Header = () => {
  const { data, isLoading, isError } = useFetch("/categories");
  const [toggle, setToggle] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 1024) {
      setToggle(false);
    }
  }, [windowWidth]);

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <header className="fixed flex justify-between w-full items-center top-0 px-6 py-4 z-40 navbar text-white">
      <div className=" top-0 w-full">
        <div className="flex justify-between items-center w-full">
          <div className="flex mr-2">
            <Link to="/">
              <img
                className="w-20 h-12 object-cover bg-center bg-no-repeat bg-cover lg:w-28"
                src={Logo}
                alt="logo"
              />
            </Link>
          </div>
          {/*  */}
          {windowWidth >= 1024 && (
            <ul className="flex text-base items-center font-light">
              {data?.map((category) => {
                return (
                  <Link to={`/categories/${category.attributes.slug}`} key={category.id}>
                    <li className="relative text-white mx-4">{category.attributes.name}</li>
                  </Link>
                );
              })}
              <Link>
                <li className="text-white mx-4"> BC+ Learning</li>
              </Link>
            </ul>
          )}
          {/* Mobile category */}
          {toggle && (
            <ul className="flex flex-col h-screen inset-0 bg-black/40 w-screen fixed gap-6 backdrop-blur-md z-40 items-center justify-center font-light navbar">
              {data?.map((category) => {
                return (
                  <Link to={`/categories/${category.attributes.slug}`} key={category.id}>
                    <li className="relative hover:underline font-normal hover:font-semibold text-xl text-white mx-4">
                      {category.attributes.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          )}

          <div className="flex space-x-3 items-center text-white z-40">
            {!toggle && windowWidth < 1024 && (
              <div onClick={toggleHandler} className="cursor-pointer h-5 w-5 md:h-6 md:w-6 text-white">
                <HiMenuAlt3 className="w-full h-full" />
              </div>
            )}
            {toggle && windowWidth < 1024 && (
              <div onClick={toggleHandler} className="h-5 w-5 md:h-6 md:w-6 text-white">
                <LiaTimesSolid className="cursor-pointer w-full h-full" />
              </div>
            )}
            <Link className="cursor-pointer md:h-6 md:w-6" to="/search">
              <BiSearch className="w-full h-full" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
