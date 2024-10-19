import Image from "next/image";
import React from "react";

const HeroBanner = () => {
  return (
    <div className="max-w-screen-2xl flex flex-col justify-center items-center h-screen overflow-y-hidden relative mx-auto">
      <h1 className="text-[34px] leading-[42px] lg:!text-[80px] 3xl:!text-[108px] font-medium lg:leading-[90px] 3xl:leading-[124px] text-center">
        <span className="bg-clip-text text-transparent bg-primary_h1_gradient_light dark:bg-primary_h1_gradient_dark">
          Building Websites
        </span>{" "}
        <br />
        <span className="bg-clip-text text-transparent bg-primary_h1_gradient_light dark:!bg-primary_h1_gradient_dark">
          that boosts{" "}
        </span>{" "}
        🚀
        <span className="bg-clip-text text-transparent bg-primary_h1_gradient_light dark:bg-primary_h1_gradient_dark">
          {" "}
          your revenue!
        </span>
      </h1>
      <p className="text-[20px] 3xl:!text-[26px] 3xl:!leading-[36px] leading-[28px] text-center lg:!w-3/5 mx-auto lg:!mt-7 2xl:!mt-[52px] mt-14 lg:!mb-12 2xl:!mb-20 text-text_secondary_light dark:text-text_secondary_dark">
        We craft websites and mobile apps for businesses, professionals, and
        creators who wants to embrace the power of converting visitors to
        customers.
      </p>
      <div className="mx-auto w-max flex flex-col md:!flex-row gap-3">
        <button className="shadow-[0px_2px_6px_0px_rgba(0,0,0,0.09)] font-semibold dark:bg-button_bg_dark bg-button_bg_light text-button_text_light dark:text-button_text_dark dark:hover:text-button_text_light hover:text-button_text_dark px-4 py-2.5 rounded-[8px] hover:bg-menu_hover_light dark:hover:bg-menu_hover_dark ">
        Get Your Estimate
        </button>
        <button className="shadow-[0px_2px_6px_0px_rgba(0,0,0,0.09)] dark:bg-button_bg_light border dark:border-button_secondary_dark border-button_secondary_light px-4 py-2.5 rounded-[8px] bg-button_bg_dark text-button_text_dark dark:text-button_text_light dark:hover:text-button_text_light hover:text-button_text_dark hover:bg-menu_hover_light dark:hover:bg-menu_hover_dark">
          Call us to get started right away!
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
// background: linear-gradient(180deg, #A1A1AA 0%, #09090B 100%);
