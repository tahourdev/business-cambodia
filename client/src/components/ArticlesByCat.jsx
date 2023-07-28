import React from "react";
import { Link } from "react-router-dom";

const ArticlesByCat = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-center gap-4 mt-8 lg:px-20 px-6">
      <div className="cursor-pointer rounded-md shadow-md overflow-hidden group">
        <div className="h-44 overflow-hidden">
          <img
            className="h-full bg-no-repeat w-full transition-all duration-500 group-hover:scale-110"
            src="https://business-cambodia.com/cms/assets/7236c49c-dc94-4a8d-9dab-8f84c97f516f"
            alt=""
          />
        </div>
        <div className="p-4">
          <Link
            to=""
            className="px-2 py-1 text-sm hover:text-red-600 rounded-sm bg-gray-300 hover:bg-gray-100 max-w-fit text-center">
            #ហិរញ្ញវត្ថុ
          </Link>
          <div className="font-bold text-base mt-2 text-gray-800 line-clamp-2 hover:underline cursor-pointer">
            សេដ្ឋកិច្ចធ្លាក់ចុះ មេធំអេស៊ីលីដា ប្រាប់ពីរបស់ដែលអ្នកមិនគួរទិញដាច់ខាតបើមិនចង់ធ្លាក់ក្នុងបំណុល{" "}
          </div>
        </div>
        <div className="flex w-full items-end justify-between pt-2 p-4">
          <div className="flex items-center">
            <div className="">
              <div className="w-12 aspect-auto mr-4 rounded-full">
                <img
                  className="w-full rounded-full"
                  src="https://business-cambodia.com/cms/assets/dd16de73-246a-4012-a14e-c52adfb30b3a"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full text-sm">
              <div className="font-semibold text-gray-700">Toeuy Hong</div>
              <div className="font-light text-xs">JULY 19 2023</div>
              {/* <div className="text-xs">41.3 K views</div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="cursor-pointer rounded-md shadow-md overflow-hidden group">
        <div className="h-44 overflow-hidden">
          <img
            className="h-full bg-no-repeat w-full transition-all duration-500 group-hover:scale-110"
            src="https://business-cambodia.com/cms/assets/7236c49c-dc94-4a8d-9dab-8f84c97f516f"
            alt=""
          />
        </div>
        <div className="p-4">
          <Link
            to=""
            className="px-2 py-1 text-sm hover:text-red-600 rounded-sm bg-gray-300 hover:bg-gray-100 max-w-fit text-center">
            #ហិរញ្ញវត្ថុ
          </Link>
          <div className="font-bold text-base mt-2 text-gray-800 line-clamp-2 hover:underline cursor-pointer">
            សេដ្ឋកិច្ចធ្លាក់ចុះ មេធំអេស៊ីលីដា ប្រាប់ពីរបស់ដែលអ្នកមិនគួរទិញដាច់ខាតបើមិនចង់ធ្លាក់ក្នុងបំណុល{" "}
          </div>
        </div>
        <div className="flex w-full items-end justify-between pt-2 p-4">
          <div className="flex items-center">
            <div className="">
              <div className="w-12 aspect-auto mr-4 rounded-full">
                <img
                  className="w-full rounded-full"
                  src="https://business-cambodia.com/cms/assets/dd16de73-246a-4012-a14e-c52adfb30b3a"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full text-sm">
              <div className="font-semibold text-gray-700">Toeuy Hong</div>
              <div className="font-light text-xs">JULY 19 2023</div>
              {/* <div className="text-xs">41.3 K views</div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="cursor-pointer rounded-md shadow-md overflow-hidden group">
        <div className="h-44 overflow-hidden">
          <img
            className="h-full bg-no-repeat w-full transition-all duration-500 group-hover:scale-110"
            src="https://business-cambodia.com/cms/assets/7236c49c-dc94-4a8d-9dab-8f84c97f516f"
            alt=""
          />
        </div>
        <div className="p-4">
          <Link
            to=""
            className="px-2 py-1 text-sm hover:text-red-600 rounded-sm bg-gray-300 hover:bg-gray-100 max-w-fit text-center">
            #ហិរញ្ញវត្ថុ
          </Link>
          <div className="font-bold text-base mt-2 text-gray-800 line-clamp-2 hover:underline cursor-pointer">
            សេដ្ឋកិច្ចធ្លាក់ចុះ មេធំអេស៊ីលីដា ប្រាប់ពីរបស់ដែលអ្នកមិនគួរទិញដាច់ខាតបើមិនចង់ធ្លាក់ក្នុងបំណុល{" "}
          </div>
        </div>
        <div className="flex w-full items-end justify-between pt-2 p-4">
          <div className="flex items-center">
            <div className="">
              <div className="w-12 aspect-auto mr-4 rounded-full">
                <img
                  className="w-full rounded-full"
                  src="https://business-cambodia.com/cms/assets/dd16de73-246a-4012-a14e-c52adfb30b3a"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full text-sm">
              <div className="font-semibold text-gray-700">Toeuy Hong</div>
              <div className="font-light text-xs">JULY 19 2023</div>
              {/* <div className="text-xs">41.3 K views</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesByCat;
