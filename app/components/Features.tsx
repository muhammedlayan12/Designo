import Image from "next/image";
import img1 from "../images/illustration-passionate.svg";
import img2 from "../images/illustration-resourceful.svg";
import img3 from "../images/illustration-friendly.svg";
function Features() {
  return (
    <div>
      <section className="flex flex-wrap justify-center gap-10 pb-[14vmin] px-4 sm:px-8 md:px-16 lg:px-24 items-center">
        <div className="flex flex-col items-center max-w-sm p-4">
          <Image
            src={img1}
            alt=""
            className="w-full max-w-[150px] md:max-w-[200px]"
          />
          <div className="font-poppins text-center mt-4 gap-3">
            <h4 className="font-semibold tracking-widest uppercase text-[1.4em]">
              Passionate
            </h4>
            <span className="text-[#838383] text-[0.9em] w-full max-w-[300px]">
              Each project starts with an in-depth brand research to ensure we
              only create products that serve a purpose. We merge art, design,
              and technology into exciting new solutions.
            </span>
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
              Resourcefull
            </h4>
            <span className="text-[#838383] text-[0.9em] w-full max-w-[300px]">
              Everything that we do has a strategic purpose. We use an agile
              approach in all of our projects and value customer collaboration.
              It guarantees superior results that fulfill our clients’ needs.
            </span>
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
              Friendly
            </h4>
            <span className="text-[#838383] text-[0.9em] w-full max-w-[300px]">
            We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.

            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
