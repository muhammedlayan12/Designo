import Image from "next/image";
import webdesing from "../images/image-web-design.jpg";
import graphicdesing from "../images/image-graphic-design.jpg";
import appdesing from "../images/image-app-design.jpg";

function Services() {
  return (
    <div>
      <section className="items-center font-jost flex md:flex-row flex-col md:gap-20 sm:gap-12 gap-7 py-[15vmin] px-6 justify-center">
        <div className="relative group">
          <Image
            src={webdesing}
            alt=""
            className="rounded-[20px] w-full h-full"
          />

          <div className="absolute inset-0 bg-peach opacity-0 top-[-100%] group-hover:bottom-0 group-hover:opacity-20 transition-all duration-300 rounded-[20px]"></div>

          <div className="absolute text-center top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
            <h3 className="font-semibold  lg:text-[2em] md:text-[1.5em] sm:text-[1.5em] text-[1em] uppercase text-white tracking-wider">
              Web Development
            </h3>
            <span className="sm:text-[0.9em] text-[0.75em] uppercase text-white sm:tracking-[4px] tracking-[3px]">
              View Project
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-7">
          <div className="relative group">
            <Image
              src={appdesing}
              alt=""
              className="rounded-[20px] w-full h-full"
            />
            <div className="absolute inset-0 bg-peach opacity-0 top-[-100%] group-hover:bottom-0 group-hover:opacity-20 transition-all duration-300 rounded-[20px]"></div>
            <div className="absolute text-center top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
              <h3 className="font-semibold  lg:text-[2em] md:text-[1.5em] sm:text-[1.5em] text-[1em] uppercase text-white tracking-wider">
                App Development
              </h3>
              <span className="sm:text-[0.9em] text-[0.75em] uppercase text-white sm:tracking-[4px] tracking-[3px]">
                View Project
              </span>
            </div>
          </div>

          <div className="relative group">
            <Image
              src={graphicdesing}
              alt=""
              className="rounded-[20px] w-full h-full"
            />
            <div className="absolute inset-0 bg-peach opacity-0 top-[0%] group-hover:bottom-0 group-hover:opacity-20 transition-all duration-300 rounded-[20px]"></div>
            <div className="absolute text-center top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
              <h3 className="font-semibold  lg:text-[2em] md:text-[1.5em] sm:text-[1.5em] text-[1em] uppercase text-white tracking-wider">
                Graphics Designing
              </h3>
              <span className="sm:text-[0.9em] text-[0.75em] uppercase text-white sm:tracking-[4px] tracking-[3px]">
                View Project
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
