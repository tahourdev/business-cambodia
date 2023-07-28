import React from "react";
import useFetch from "../hook/useFetch";
import { Link } from "react-router-dom";
import Articles from "./Articles";
import ArticlesByCat from "./ArticlesByCat";

const Categories = ({ catName, path }) => {
  const { data } = useFetch("/categories?populate=*");
  // console.log(data);

  return (
    <>
      <div className="grid grid-cols-1 px-4 lg:px-10 py-12 gap-x-4 items-center lg:grid-cols-[1fr,4fr] font-hanuman">
        <div className="flex items-center justify-between lg:block">
          <div className="font-bold text-xl md:text-2xl">
            <div className="w-56 font-bold text-gray-800">{catName}</div>
            <div className="flex justify-start mt-6">
              <hr className="w-8 border-b border-black/70" />
            </div>
          </div>
          <Link to={path}>
            <div className="border-2 border-gray-600 px-4 lg:px-10 py-2 mt-6 text-xs lg:text-base max-w-fit">
              មើល​បន្ថែម​
            </div>
          </Link>
        </div>
        <div className="hidden lg:block">
          <ArticlesByCat />
        </div>
      </div>
    </>
  );
};

export default Categories;
