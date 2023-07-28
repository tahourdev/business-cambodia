import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useFetch from "../hook/useFetch";

const PopularPosts = () => {
  const { data } = useFetch("/articles?_sort=createdAt:DESC&_limit=3&populate=*");
  const location = useLocation();
  const [previousLocation, setPreviousLocation] = useState(null);

  useEffect(() => {
    if (location.pathname !== previousLocation) {
      setPreviousLocation(location.pathname);
    }
  }, [location, previousLocation]);

  const oneLatestPost = data?.slice(0, 1);
  const twoLatestPost = data?.slice(1, 3);

  return (
    <div className="px-10 py-2 font-hanuman">
      <div className="flex justify-between items-center">
        <div className="font-bold text-xl md:text-2xl">អត្ថបទពេញនិយមសរុប</div>
        <Link to={previousLocation}>
          <div className="font-light text-[#ed1c24]">ត្រលប់ក្រោយ</div>
        </Link>
      </div>
      <div className="py-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[5fr,3fr]">
          {oneLatestPost?.map((article) => (
            <div className="relative w-full overflow-hidden group" key={article.id}>
              <img
                src={`http://localhost:1337${article.attributes.image.data.attributes.url}`}
                alt="img"
                className="transition-all duration-500 group-hover:scale-110 h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full items-center bg-black/60">
                <div className="px-8 md:w-[37rem] md:pl-12 lg:pl-12">
                  <p className="text-sm lg:text-base text-white">
                    {article.attributes.categories.data[0].attributes.name}
                  </p>
                  <div className="lg:my-4 mt-1">
                    <hr className="w-8 border-b border-[#ed1c24]" />
                  </div>
                  <Link to={`/articles/${article.attributes.slug}`}>
                    <div className="lg:w-[36rem]">
                      <h1 className="text-white text-[12px] lg:text-4xl hover:underline hover:cursor-pointer font-medium mt-2 lg:mt-6 font-hanuman uppercase">
                        {article.attributes.title}
                      </h1>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          <div className="w-full space-y-4">
            {twoLatestPost?.map((article) => (
              <div className="relative w-full group overflow-hidden" key={article.id}>
                <img
                  className="w-full h-full object-cover duration-500 transition-all group-hover:scale-110"
                  src={`http://localhost:1337${article.attributes.image.data.attributes.url}`}
                  alt=""
                />
                <div className="absolute grid items-center inset-0 bg-black/60 w-full">
                  <div className="px-8 md:w-[37rem] md:pl-12 lg:pl-12">
                    <p className="text-sm lg:text-base text-white">
                      {article.attributes.categories.data[0].attributes.name}
                    </p>
                    <div className="lg:my-4 mt-1">
                      <hr className="w-8 border-b border-[#ed1c24]" />
                    </div>
                    <Link>
                      <div className="lg:w-80">
                        <h1 className="text-white text-[12px] lg:text-xl hover:underline hover:cursor-pointer font-medium mt-2 lg:mt-6 font-hanuman uppercase">
                          {article.attributes.title}
                        </h1>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularPosts;

// import React from "react";
// import { Link } from "react-router-dom";
// import useFetch from "../hook/useFetch";

// const PopularPosts = () => {
//   const { data } = useFetch("/articles?_sort=createdAt:DESC&_limit=3&populate=*");

//   const oneLatestPost = data?.slice(0, 1);
//   const twoLatestPost = data?.slice(1, 3);

//   return (
//     <div className="px-10 py-2 font-hanuman">
//       <div class="flex justify-between items-center">
//         <div class="font-bold text-xl md:text-2xl">អត្ថបទពេញនិយមសរុប</div>
//         <Link to="/popular">
//           <div class="font-light text-[#ed1c24]">មើល​បន្ថែម​</div>
//         </Link>
//       </div>
//       <div className="py-12">
//         <div className="grid grid-cols-1 gap-4 md:grid-cols-[5fr,3fr]">
//           {oneLatestPost?.map((article) => (
//             <div className="relative w-full overflow-hidden group" key={article.id}>
//               <img
//                 src={`http://localhost:1337${article.attributes.image.data.attributes.url}`}
//                 alt="img"
//                 className="transition-all duration-500 group-hover:scale-110 h-full w-full object-cover"
//               />
//               <div className="absolute inset-0 grid h-full w-full items-center bg-black/60">
//                 <div className="px-8 md:w-[37rem] md:pl-12 lg:pl-12">
//                   <p className="text-sm lg:text-base text-white">
//                     {article.attributes.categories.data[0].attributes.name}
//                   </p>
//                   <div className="lg:my-4 mt-1">
//                     <hr className="w-8 border-b border-[#ed1c24]" />
//                   </div>
//                   <Link to={`/articles/${article.attributes.slug}`}>
//                     <div className="lg:w-[36rem]">
//                       <h1 className="text-white text-[12px] lg:text-4xl hover:underline hover:cursor-pointer font-medium mt-2 lg:mt-6 font-hanuman uppercase">
//                         {article.attributes.title}
//                       </h1>
//                     </div>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}

//           <div className="w-full space-y-4">
//             {twoLatestPost?.map((article) => (
//               <div className="relative w-full group overflow-hidden" key={article.id}>
//                 <img
//                   className="w-full h-full object-cover duration-500 transition-all group-hover:scale-110"
//                   src={`http://localhost:1337${article.attributes.image.data.attributes.url}`}
//                   alt=""
//                 />
//                 <div className="absolute grid items-center inset-0 bg-black/60 w-full">
//                   <div className="px-8 md:w-[37rem] md:pl-12 lg:pl-12">
//                     <p className="text-sm lg:text-base text-white">
//                       {article.attributes.categories.data[0].attributes.name}
//                     </p>
//                     <div className="lg:my-4 mt-1">
//                       <hr className="w-8 border-b border-[#ed1c24]" />
//                     </div>
//                     <Link to={`/articles/${article.attributes.slug}`}>
//                       <div className="lg:w-80">
//                         <h1 className="text-white text-[12px] lg:text-xl hover:underline hover:cursor-pointer font-medium mt-2 lg:mt-6 font-hanuman uppercase">
//                           {article.attributes.title}
//                         </h1>
//                       </div>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopularPosts;
