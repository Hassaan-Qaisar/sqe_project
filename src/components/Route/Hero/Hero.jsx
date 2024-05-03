import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Best Collection for <br /> Everything
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
        Step into a world of shopping possibilities on our Home Page. From top-tier Computers and Laptops 
        to  <br /> pampering Cosmetics, chic Accessories, trendy Clothing, and more, our diverse categories 
        cater to every <br /> taste. Explore the latest in Mobile and Tablets, find the perfect Gifts, indulge in Pet Care essentials, and<br /> delve 
        into the realms of Music and Gaming. Elevate your shopping experience with us, where each<br /> category is a curated haven of quality and style. Start your 
        journey to discovery and convenience now.
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
