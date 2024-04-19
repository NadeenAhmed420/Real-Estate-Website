import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion, spring } from "framer-motion";
import "./hero.css";

export default function Hero() {
  return (
    <>
      <div className=" py-5 ">
        <div className="container d-flex justify-content-center align-items-center ">
          <div className="row hero-row ">
            <div className=" col-md-12 col-lg-6 left ">
              <div className="content">
                <div className="title ">
                <div className="orange "></div>
                  <motion.h1
                    initial={{ y: "-2rem", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2, type: spring }}
                  >
                    Discover <br /> Most Suitable <br /> Property
                  </motion.h1>
                  
                </div>

                <p className="my-5 secondaryText">
                  Find a variety of properties that suit you very easilty Forget
                  all difficulties in finding a residence for you
                </p>
                <div className="search-bar px-2 ">
                  <HiLocationMarker color="var(--blue)" size={25} width={100} />
                  <input type="text" />
                  <button className="main-btn">Search </button>
                </div>
                <div className="stats d-flex justify-content-between align-items-center mt-5 ">
                  <div className="count d-flex flex-column align-items-center  ">
                    <span className=" text-white">
                      <CountUp start={8000} end={9000} duration={3} />
                      <span> +</span>
                    </span>{" "}
                    <span className="secondaryText">Premium Product</span>
                  </div>
                  <div className="count d-flex flex-column align-items-center  ">
                    <span className=" text-white">
                      <CountUp start={1500} end={2000} duration={3} />
                      <span> +</span>
                    </span>{" "}
                    <span className="secondaryText">Happy Customer</span>
                  </div>
                  <div className="count d-flex flex-column align-items-center ">
                    <span className="text-white">
                      <CountUp start={15} end={28} />
                      <span> +</span>
                    </span>{" "}
                    <span className="secondaryText">Awards Winning</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-5 offset-xl-1">
              <motion.div
               initial={{ x: "7rem", opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 2, type: spring }}
               className="image">
                <img src="/public/hero-image.png" alt="" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
