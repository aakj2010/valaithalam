import Image from "next/image";
import React from "react";

const HeroBanner = () => {
  return (
    <div className="max-w-screen-xl max-h-[768px] overflow-y-hidden relative mx-auto pt-52">
      <h1 className="text-[80px] !z-50 leading-[90px] text-center">
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
      <p className="text-[20px] leading-[28px] text-center lg:!w-3/5 mx-auto mt-7 mb-12 text-text_secondary_light dark:text-text_secondary_dark">
        We craft websites and mobile apps for businesses, professionals, and
        creators who wants to embrace the power of converting visitors to
        customers.
      </p>
      <div className="mx-auto w-max flex flex-col md:!flex-row gap-3">
        <button className="dark:bg-button_bg_dark bg-button_bg_light text-button_text_light dark:text-button_text_dark dark:hover:text-button_text_light hover:text-button_text_dark px-4 py-2.5 rounded-[8px] hover:bg-menu_hover_light dark:hover:bg-menu_hover_dark ">
          Get Estimate
        </button>
        <button className="dark:bg-button_bg_light border dark:border-menu_border_dark border-menu_border_light px-4 py-2.5 rounded-[8px] bg-button_bg_dark text-button_text_dark dark:text-button_text_light dark:hover:text-button_text_light hover:text-button_text_dark hover:bg-menu_hover_light dark:hover:bg-menu_hover_dark">
          Call us to get started right away!
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
// background: linear-gradient(180deg, #A1A1AA 0%, #09090B 100%);
