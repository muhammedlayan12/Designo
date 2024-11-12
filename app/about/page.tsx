import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Talk from "../components/Talk";
import aboutimg from "../images/about.jpg";
import about from "../images/imgabout.jpg";
import img1 from "../images/illustration-canada.svg";
import img2 from "../images/illustration-australia.svg";
import img3 from "../images/illustration-united-kingdom.svg";

function About() {
  return (
    <div>
      <Navbar />

      <section className="my-10 flex flex-col-reverse lg:flex-row justify-between items-center md:w-[60%] w-[90%] lg:w-[80%] xl:w-[65%] m-auto bg-peach rounded-[20px] overflow-hidden relative">
        
        <div className="px-5 py-10 text-white flex flex-col gap-5 lg:text-start text-center lg:w-1/2 lg:px-10 lg:py-20">
          <h3 className="font-semibold font-jost text-3xl lg:text-4xl">About Us</h3>
          <p className="font-poppins xl:text-[0.8em] lg:text-[0.7em] sm:text-[1em] text-[0.8em]">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We&rsquo;ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make a real
            impact. We&rsquo;re always looking forward to creating brands, products,
            and digital experiences that connect with our clients&rsquo; audiences.
          </p>
        </div>

        <div className="w-full lg:w-1/2 h-full p-0 m-0">
          <Image
            src={aboutimg}
            alt="About Us Image"
            layout="responsive"
            objectFit="cover"
            className="rounded-r-[20px]"
          />
        </div>
      </section>

      <section className="py-20 px-6 flex-col lg:flex-row flex justify-center gap-14 items-center">
        <Image src={about} alt="" className="rounded-lg"/>
        <div className="text-black flex flex-col font-jost gap-5 lg:text-start text-center">
            <h2 className="font-jost md:text-[2.5em] sm:text-[2.1em] text-[1.8em] text-peach font-semibold tracking-wider">World-class talent</h2>
            <p className="font-jost leading-2 sm:text-[1em] text-[0.55em] md:w-[450px] sm:w-[400px] w-[280px]">
            We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.
            <br/>
            <br/>
            Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulate their brand&rsquo;s story and mission.
            </p>
        </div>
      </section>

      <section className="flex flex-wrap justify-center gap-24 pb-[14vmin] px-4 sm:px-8 md:px-16 lg:px-24 items-center">
        <div className="flex flex-col items-center max-w-sm p-4">
          <Image
            src={img1}
            alt=""
            className="w-full max-w-[150px] md:max-w-[200px]"
          />
          <div className="font-poppins text-center mt-4 gap-3">
            <h4 className="font-semibold tracking-widest uppercase text-[1.4em]">
              Pakistan
            </h4>
            <button className="mt-2 rounded-[10px] transition-all duration-500 hover:text-peach hover:bg-transparent border py-4 px-6 text-[1em] bg-peach text-white ">See Location</button>
          </div>
        </div>

        <div className="flex flex-col items-center max-w-sm p-4">
          <Image
            src={img2}
            alt=""
            className="w-full max-w-[150px] md:max-w-[200px]"
          />
          <div className="font-poppins text-center mt-4 gap-3">
            <h4 className="font-semibold tracking-widest uppercase text-[1.4em]">
            America
            </h4>
            <button className="mt-2 rounded-[10px] transition-all duration-500 hover:text-peach hover:bg-transparent border py-4 px-6 text-[1em] bg-peach text-white ">See Location</button>
          </div>
        </div>

        <div className="flex flex-col items-center max-w-sm p-4">
          <Image
            src={img3}
            alt=""
            className="w-full max-w-[150px] md:max-w-[200px]"
          />
          <div className="font-poppins text-center mt-4 gap-3">
            <h4 className="font-semibold tracking-widest uppercase text-[1.4em]">
              Germany
            </h4>
            <button className="mt-2 rounded-[10px] transition-all duration-500 hover:text-peach hover:bg-transparent border py-4 px-6 text-[1em] bg-peach text-white ">See Location</button>
          </div>
        </div>
      </section>

      <Talk />
      <Footer />
    </div>
  );
}

export default About;
