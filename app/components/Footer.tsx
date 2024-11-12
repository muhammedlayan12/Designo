import Link from "next/link"; 
import Image from "next/image";
import logo from "../images/logofooter.png";
import facebookimg from "../images/facebook.svg";
import twitterimg from "../images/twitter.svg";
import githubimg from "../images/github.svg";
import linkedinimg from "../images/linkedin.svg";

function Footer() {
  return (
    <div>
        <footer className="text-white mt-[15vmin] bg-metalic flex flex-col gap-7 py-[5vmin] justify-center px-8">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-2 justify-evenly">
                <div className="logo md:flex md:justify-center">
                    <Image src={logo} alt="" width={220}/>
                </div>
                <div className="flex gap-5">
                    <Image width={30} src={facebookimg} alt=""/>
                    <Image width={30} src={twitterimg} alt=""/>
                    <Image width={30} src={githubimg} alt=""/>
                    <Image width={30} src={linkedinimg} alt=""/>
                </div>
            </div>
            <hr className="w-[70%] m-auto border-[#959595]"/>
            <div className="flex md:justify-evenly justify-center md:gap-10 flex-wrap gap-14 md:text-start text-center">
              
              <div className="flex flex-col gap-4">
                <h4 className="font-semibold text-[1.2em] tracking-widest font-poppins">Services</h4>
                <span className="text-[0.9em] text-[#838383] font-poppins transition-all duration-500 hover:text-peach">Digital Marketing</span>
                <span className="text-[0.9em] text-[#838383] font-poppins transition-all duration-500 hover:text-peach">App Development</span>
                <span className="text-[0.9em] text-[#838383] font-poppins transition-all duration-500 hover:text-peach">Web Designing</span>
                <span className="text-[0.9em] text-[#838383] font-poppins transition-all duration-500 hover:text-peach">Web Development</span>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="font-semibold text-[1.2em] tracking-widest font-poppins">Quick Links</h4>
                <Link href="/" className="text-[0.9em] text-[#838383] font-poppins transition-all duration-500 hover:text-peach">Home</Link>
                <Link href="/services" className="text-[0.9em] text-[#838383] font-poppins transition-all duration-500 hover:text-peach">Services</Link>
                <Link href="/about" className="text-[0.9em] text-[#838383] font-poppins transition-all duration-500 hover:text-peach">About</Link>
                <Link href="/contact" className="text-[0.9em] text-[#838383] font-poppins transition-all duration-500 hover:text-peach">Contact</Link>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="font-semibold text-[1.2em] tracking-widest font-poppins">Contact</h4>
                <span className="text-[0.9em] text-[#838383] font-poppins transition-all duration-500 hover:text-peach">+12 333 758950</span>
                <span className="text-[0.9em] text-[#838383] font-poppins transition-all duration-500 hover:text-peach">3886 Wellington Street Toronto</span>
                <span className="text-[0.9em] text-[#838383] font-poppins transition-all duration-500 hover:text-peach">contact@designogmail.com</span>
              </div>

            </div>
        </footer>
    </div>
  )
}

export default Footer;
