import React, { useState, useEffect } from "react";
import Articles from "../components/Articles";
import { useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";

const Category = () => {
  const [title, setTitle] = useState(null);
  const { slug } = useParams();
  const { data } = useFetch(`/articles?populate=*&filters[categories][slug][$eq]=${slug}`);
  // useEffect(() => {
  //   if (data) {
  //     console.log(data);
  //   }
  // });

  return (
    <div className="">
      <div className="h-64 lg:h-80 object-cover bg-center bg-no-repeat relative bg-cover">
        <div className="w-full h-full relative">
          <img
            className="w-full h-full object-cover bg-center bg-no-repeat bg-cover"
            src="https://business-cambodia.com/cms/assets/8812fd3e-50da-4b00-bd05-66a20b3f8241"
            alt=""
            srcset=""
          />
        </div>
        <div className="text-white inset-0 bg-black/50 absolute top-0 h-full flex text-base items-center md:text-lg lg:text-2xl md:px-20 px-6">
          បំផុសសកម្មភាពអាជីវកម្មថ្មីៗទាំងនៅក្នុងស្រុក និងក្រៅស្រុក
        </div>
      </div>
      <div className="">
        <Articles data={data} />
      </div>
    </div>
  );
};

export default Category;
