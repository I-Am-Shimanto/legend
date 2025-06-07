import React from "react";

const BannerCard = ({ image, title }) => {
  return (
    <>
      <div className="banner_card p-6 rounded-xl border border-[rgba(255,255,255,0.15)] cursor-pointer">
        <img src={image} alt="banner" />
        <h4 className="text-base font-semibold font-inter text-white leading-6 mt-13">
          {title}
        </h4>
      </div>
    </>
  );
};

export default BannerCard;
