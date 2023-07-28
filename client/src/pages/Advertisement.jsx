import React from "react";
// import ads from "../assets/ads.gif";

const Advertisement = () => {
  return (
    <div className="py-12 px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 gap-x-3 items-center lg:mt-0">
        <div className="font-bold font-hanuman text-xl md:text-2xl hidden lg:block">
          <div>ការផ្សព្វផ្សាយពាណិជ្ជកម្ម</div>
          <div>របស់យើង</div>
          <div className="mt-6">
            <hr className="w-8 border-b border-gray-600" />
          </div>
        </div>
        <div>
          <a href="https://www.facebook.com/upgpipe" target="_blank">
            <div className="rounded-lg w-full my-1">
              <img
                format="webp"
                loading="lazy"
                src="https://business-cambodia.com/cms/assets/f35287e8-1382-4584-8e38-a6e33aa86560"
                alt=""
                className="w-full rounded-lg"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
