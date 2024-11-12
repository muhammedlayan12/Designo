import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Talk from "../components/Talk";
import bullhorn from "../images/bullhorn.svg";
import tag from "../images/tag.svg";
import mobile from "../images/mobile.svg";
import seo from "../images/seo.svg";
import pencil from "../images/pencil.svg";
import headset from "../images/headset.svg";

function Services() {
  return (
    <div>
      <Navbar />

      <section className="mt-[10vmin] mb-[10vmin] max-w-7xl mx-auto flex flex-col justify-center py-10 px-6">
        <h1 className="font-semibold text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-jost text-black mb-10">
          Our <span className="text-peach">Services</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="service p-6 bg-gray-100 rounded-lg shadow-2xl text-center hover:shadow-xl hover:scale-105 transform transition-all duration-300">
            <div className="flex justify-center mb-4">
              <Image width={55} height={55} src={bullhorn} alt="Digital Marketing" />
            </div>
            <div className="content">
              <h3 className="text-[1.5em] font-semibold mb-2 font-jost">Digital Marketing</h3>
              <p className="text-[#838383] font-poppins text-[0.9em]">Boost your brand with tailored digital marketing strategies.</p>
            </div>
          </div>

          <div className="service p-6 bg-gray-100 rounded-lg shadow-2xl text-center hover:shadow-xl hover:scale-105 transform transition-all duration-300">
            <div className="flex justify-center mb-4">
              <Image width={70} height={70} src={tag} alt="Web Development" />
            </div>
            <div className="content">
              <h3 className="text-[1.5em] font-semibold mb-2 font-jost">Web Development</h3>
              <p className="text-[#838383] font-poppins text-[0.9em]">Create stunning, responsive websites that engage users.</p>
            </div>
          </div>

          <div className="service p-6 bg-gray-100 rounded-lg shadow-2xl text-center hover:shadow-xl hover:scale-105 transform transition-all duration-300">
            <div className="flex justify-center mb-4">
              <Image width={40} height={40} src={seo} alt="SEO Optimization" />
            </div>
            <div className="content">
              <h3 className="text-[1.5em] font-semibold mb-2 font-jost">SEO Optimization</h3>
              <p className="text-[#838383] font-poppins text-[0.9em]">Improve your search rankings and drive more traffic to your site.</p>
            </div>
          </div>

          <div className="service p-6 bg-gray-100 rounded-lg shadow-2xl text-center hover:shadow-xl hover:scale-105 transform transition-all duration-300">
            <div className="flex justify-center mb-4">
              <Image width={40} height={40} src={mobile} alt="App Development" />
            </div>
            <div className="content">
              <h3 className="text-[1.5em] font-semibold mb-2 font-jost">App Development</h3>
              <p className="text-[#838383] font-poppins text-[0.9em]">Design and develop mobile apps that offer seamless experiences.</p>
            </div>
          </div>

          <div className="service p-6 bg-gray-100 rounded-lg shadow-2xl text-center hover:shadow-xl hover:scale-105 transform transition-all duration-300">
            <div className="flex justify-center mb-4">
              <Image width={40} height={40} src={pencil} alt="Content Creation" />
            </div>
            <div className="content">
              <h3 className="text-[1.5em] font-semibold mb-2 font-jost">Content Creation</h3>
              <p className="text-[#838383] font-poppins text-[0.9em]">Engaging content that resonates with your audience.</p>
            </div>
          </div>

          <div className="service p-6 bg-gray-100 rounded-lg shadow-2xl text-center hover:shadow-xl hover:scale-105 transform transition-all duration-300">
            <div className="flex justify-center mb-4">
              <Image width={40} height={40} src={headset} alt="Customer Support" />
            </div>
            <div className="content">
              <h3 className="text-[1.5em] font-semibold mb-2 font-jost">Customer Support</h3>
              <p className="text-[#838383] font-poppins text-[0.9em]">24/7 support to ensure customer satisfaction.</p>
            </div>
          </div>

        </div>
      </section>

      <Talk />
      <Footer />
    </div>
  );
}

export default Services;
