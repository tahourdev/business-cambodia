import React from "react";
import { Link } from "react-router-dom";

const CatPost = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 justify-center gap-4 my-8 mb-8 lg:px-20 px-6">
      {data?.map((article) => (
        <div className="flex justify-center">
          <Link to={`/articles/${article.attributes.slug}`}>
            <div className="filter shadow-lg rounded-xl flex flex-col justify-between h-auto max-w-sm group cursor-pointer text-start">
              <div>
                <div className="relative h-44 overflow-hidden bg-no-repeat bg-contain">
                  <img
                    src={`http://localhost:1337${article.attributes.image.data.attributes.url}`}
                    alt=""
                    className="object-cover h-full rounded w-full group-hover:scale-110 transition duration-300 ease-in-out"
                  />
                </div>
                <div className="p-4">
                  <Link className="router-link-active router-link-exact-active hover:text-primary hover:bg-gray-100 text-sm inline-flex items-center font-normal leading-sm uppercase px-2 py-0.5 text-gray-800 bg-gray-200 p-1 rounded">
                    {" "}
                    #{article.attributes.categories.data[0].attributes.name}
                  </Link>

                  <div className="text-base mt-2 text-gray-800 font-semibold line-clamp-2 hover:underline cursor-pointer">
                    {article.attributes.title}
                  </div>
                </div>
              </div>
              <div className="flex w-full items-end justify-between pt-2 p-4">
                <div className="flex items-center">
                  <div>
                    <div className="w-12 h-12 mr-4 rounded-full">
                      <img
                        src="https://business-cambodia.com/cms/assets/57117a5d-3657-40f8-abe1-d6df99c8beba"
                        alt=""
                        className="object-cover h-full w-full rounded-full"
                      />
                    </div>
                  </div>
                  <div className="w-full text-sm">
                    <div className="font-semibold text-gray-700">Srey Nuth</div>
                    <div className="font-light text-xs">JULY 25 2023</div>
                    <div className="text-xs">574 views</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CatPost;
