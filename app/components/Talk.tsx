import heroimgpattern from "../images/bg-pattern-hero-home.svg";
import Image from "next/image";



function Talk() {
return (
    <div>
        <section className='flex flex-col lg:flex-row gap-25 lg:gap-5 justify-around items-center py-14 px-8 w-[90%] lg:w-[80%] xl:w-[65%] m-auto bg-peach h-full rounded-[20px] relative'>
            <div className="absolute">
                <Image src={heroimgpattern} alt="" width={250}/>
                    </div> 
            <div className="flex flex-col gap-5 lg:text-start text-center">
                <h3 className='text-white font-jost tracking-wider lg:text-[2.3em] md:text-[2em] sm:text-[1.6em] text-[1.5em] leading-10 font-semibold'>Let’s talk about <br/>your project</h3>
                <span className='text-white font-poppins tracking-wider text-[0.9em] w-full max-w-[500px]'>
                Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
                </span>
            </div>
            <div className=" lg:mt-0 mt-20">
                <button className='py-4 px-[3.5vmin] font-poppins uppercase bg-white border text-black rounded-lg transition-all duration-300 hover:bg-transparent hover:text-white tracking-widest'>Get In Touch</button>
            </div>
        </section>
    </div>
)
}

export default Talk;