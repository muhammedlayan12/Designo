import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Talk from "../components/Talk";
import img1 from "../images/illustration-canada.svg";
import img2 from "../images/illustration-australia.svg";
import img3 from "../images/illustration-united-kingdom.svg";

function Contact() {
  return (
    <div>
      <Navbar />



    <div className="flex justify-center m-auto mb-24">
      
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.1574236808624!2d67.18157891116421!3d24.892611343877906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339e1488a7319%3A0x7a620bd385c286fd!2sMoinabad%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1729345765078!5m2!1sen!2s"
        width="90%"
        height="450"
         style={{border:0}}
          allowFullScreen
       loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>

      

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



      <section className="mb-24 flex flex-col-reverse gap-10 lg:gap-5 lg:flex-row justify-around items-center py-12 lg:py-24 px-6 md:px-8 lg:px-0 w-[90%] lg:w-[80%] xl:w-[65%] mx-auto bg-peach rounded-2xl relative">
        
     
     

        <div className="content pl-4 lg:pl-8 text-center lg:text-left">
          <h3 className="font-semibold text-white font-jost text-[1.5em] sm:text-[2em] md:text-[2.2em] lg:text-[2.5em] xl:text-[2.8em] mb-4">
            Contact Us
          </h3>
          <p className="font-jost text-white text-sm sm:text-base md:text-lg max-w-md mx-auto lg:mx-0">
            Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.
          </p>
        </div>
        



        <form action="" className="flex flex-col gap-5 w-full max-w-md pl-4 lg:pl-8 mr-8">
          <input 
            type="text" 
            className="text-white bg-transparent font-poppins border-b border-white pl-2 pb-2 placeholder-white focus:outline-none focus:border-white transition-all" 
            placeholder="Name" 
          />
          <input 
            type="email" 
            className="text-white bg-transparent font-poppins border-b border-white pl-2 pb-2 placeholder-white focus:outline-none focus:border-white transition-all" 
            placeholder="Email" 
          />
          <textarea 
            className="text-white bg-transparent font-poppins border-b border-white pl-2 pb-2 placeholder-white focus:outline-none focus:border-white transition-all resize-none h-24 md:h-32" 
            placeholder="Message" 
          />
          <input 
            type="submit" 
            value="Submit" 
            className="py-3 px-6 bg-white text-black rounded-xl font-poppins uppercase transition-all duration-500 hover:bg-transparent hover:text-white border border-white cursor-pointer"
          />
        </form>
      </section>
      
      <Talk />
      <Footer />
    </div>
  );
}

export default Contact;
