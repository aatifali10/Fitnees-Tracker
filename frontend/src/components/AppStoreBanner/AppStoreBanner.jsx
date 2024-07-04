import React from "react";
import AppStoreImg from "../../assets/app_store.jpg";
import PlayStoreImg from "../../assets/play_store.jpg";
import pattern from "../../assets/dumbell.jpg";

const AppStoreBanner = () => {
  return (
    <div className=" bg-black w-full h-full">
      <div
        className="text-white sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl bg-cover bg-center bg-no-repeat"
       
      >
        <div className="w-full h-full">
          <div className="space-y-0 max-w-xl mx-auto">
            <h1
              data-aos="fade-up"
              className="text-2xl text-center sm:text-4xl font-semibold font-serif mb-4"
            >
              Get Started with our app
            </h1>
            <p>             </p>
            <div
              data-aos="fade-up"
              className="flex flex-wrap justify-center items-center gap-4"
            >
              <a href="https://play.google.com/store/login">
                <img
                  src={PlayStoreImg}
                  alt="Play Store"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStoreBanner;
