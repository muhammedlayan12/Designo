import Image from "next/image"; 
import heroimg from "../images/image-hero-phone.png";
import heroimgpattern from "../images/bg-pattern-hero-home.svg";

function Hero() {
  return (
    <div>
      <div className="flex flex-col-reverse gap-15 lg:gap-5 lg:flex-row justify-center items-center py-6 px-8 w-[90%] lg:w-[80%] xl:w-[65%] m-auto bg-peach rounded-[20px] relative">
        
        <div className="absolute bottom-2 lg:top-2 right-2 z-[10]">
          <Image src={heroimgpattern} alt="hero image" className="w-[80%] h-auto" />
        </div>
        
        <div className="font-jost text-center lg:text-left">
          <h2 className="text-[1.3em] sm:text-[2.1em] md:text-[2.5em] lg:text-[2.1em] xl:text-[2.5em] text-white font-[500] leading-[1.2] w-full md:w-[400px] lg:w-[450px]">
            Award-winning custom <br/>designs and digital<br/> branding solutions
          </h2>
          <p className="text-[0.7em] text-white w-full sm:text-[1em]  md:w-[350px]  lg:w-[400px] xl:w-[450px] mt-4">
            With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
          </p>
          <button className="mt-6 font-poppins rounded-[10px] py-4 px-8 bg-white text-black uppercase tracking-wider transition-all duration-300 hover:bg-peach border hover:text-white"> 
            Learn More
          </button>
        </div>

         <div className="w-full h-auto text-center flex justify-center">
         <Image src={heroimg} alt="Hero Image" className="lg:w-[50vmin] md:w-[50vmin] sm:w-[50vmin] w-[80vmin] h-auto" />
         </div>
      </div>
    </div>
  );
}

export default Hero;
