import rocket from "../../assets/rocket.svg";
import planet from "../../assets/planet.svg";
import clouds from "../../assets/clouds-2.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar } from "react-icons/fa";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  });
  return (
    <>
      <div className="bg-primary text-white min-h-[630px] flex justify-center items-center overflow-hidden relative z-10  ">
        <div className="container grid md:grid-cols-2 place-items-center ">
          <div className="text-center md:text-left space-y-6 py-10 md:py-0 relative z-10">
            <p data-aos="fade-up">EXPLORE THE UNIVERSE</p>
            <FaStar  className="hidden md:block right-7 absolute "data-aos="fade-up" data-aos-delay="700" />
            <h1
              data-aos="fade-up "
              data-aos-delay="300"
              className="text-4xl md:text-6xl font-bold"
            >
              Start Exploring <br />
              All Over The <span> Space</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="500">
              Start to Explore in the Space, Navigate and discover all the
              wonders of the universe.
            </p>
            
            <div data-aos="fade-up" data-aos-delay="700" data-aos-offset="0">
              
              <button
                className="bg-secondary text-white rounded-full px-8 py-2 shadow-custom-inset
              hover:scale-105 transition duration-200"
              >
                Get Started
              </button>
            </div>
            
          </div>
          <div
            className=""
            data-aos="fade-up-right "
            data-aos-delay="700"
            data-aos-duration="1000"
          >
            <FaStar  className="hidden md:block right-7 absolute "data-aos="fade-up" data-aos-delay="700"/>
            <img
              src={rocket}
              alt=""
              className="max-h-[500px] relative z-10 animate-rocket"
            />
          </div>
          <img
            src={planet}
            alt=""
            className="absolute top-1/2  opacity-90
          h-[150px] w-48"
          data-aos="fade"
          data-aos-offset="0"
          data-aos-ease="ease-out-quad"
          data-aos-delay="600"
          />
         <FaStar  className="hidden md:block right-7 absolute "data-aos="fade-up" data-aos-delay="700"/>
          <img
            src={planet}
            alt=""
            className="absolute top-1 left-2/3 opacity-70
          h-[150px] w-28"
            data-aos="fade"
            data-aos-offset="0"
            data-aos-ease="ease-out-quad"
            data-aos-delay="900"
          />
        </div>
        
        <img
          src={clouds}
          className="absolute bottom-[-180px] md:bottom-[-100px] right-0 h-96 opacity-80 md:translate-y-40 lg:translate-y-14"
          alt=""
          data-aos="fade"
        />
       <FaStar  className="hidden md:block right-7 absolute "data-aos="fade-up" data-aos-delay="700"/>
      </div>
    </>
  );
};

export default Hero;
