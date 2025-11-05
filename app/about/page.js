
import {Footer} from "../components/Footer.js"

import PhotoHead from "../components/PhotoHead"
import { Outfit } from "next/font/google";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "600", "700", "800", "900"]
});


export default function AboutUs(){
    return(
        <div>
          
            <PhotoHead pageName={"About Us"} imageUrl={"/contact.jpg"} pageHead={"About-Us"} />
            <AgricultureSection/>
            <Timeline/>
             <Footer/>
        </div>
    )

}

function AgricultureSection() {
  return (
    <section className="w-full px-10 py-16 mx-auto flex flex-col lg:flex-row gap-12 items-start relative bg-white dark:bg-gray-800 transition-colors duration-300">

     
      <img
        src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F1.png&w=256&q=75"
    
        className="absolute left-15 top-1/2 -translate-y-1 w-50  z-30"
      />

      <div className="w-full mx-auto lg:w-1/2 relative">
        <img
          src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fabout%2F1.jpg&w=640&q=75"
    
          className="mx-auto mr-4 shadow-md w-150 h-180"
        />
      </div>

      <div className="w-full lg:w-1/2 relative">
        <h1 className="text-4xl font-bold leading-tight text-black dark:text-white">
          Agriculture & Organic <br />
          Product Farm
        </h1>

        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-lg">
          There are many variations of passages of ipsum available but the
          majority have suffered alteration in some form by injected humor or
          random word which don’t look even. Comparison new ham melancholy.
        </p>

        <div className="flex items-end gap-3 mt-6">
          <span className="text-8xl font-bold text-green-600 dark:text-green-400">25M</span>
          <p className="text-medium font-semibold text-gray-600 dark:text-gray-300 leading-tight">
            Growth Tonns <br /> of Harvest
          </p>
        </div>

        <div className="absolute -left-20 top-[350px] z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-[#F6C764] dark:bg-yellow-600 p-8 shadow-xl h-[300px] w-[300px] flex flex-col">
              <div className="mb-4">
                <img
                  className="h-20 w-20"
                  src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F3.png&w=256&q=75"
                />
              </div>
              <h3 className="font-bold text-xl leading-tight text-black dark:text-white">
                100% Guaranteed <br /> Organic Product
              </h3>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 mt-3">
                Always parties but trying she showing of moment.
              </p>
            </div>

            
            <div className="bg-[#4DA66C] dark:bg-green-700 p-8 shadow-xl h-[300px] w-[300px] text-white flex flex-col">
              <div className="mb-4">
                <img
                  className="h-20 w-20"
                  src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F2.png&w=256&q=75"
                />
              </div>
              <h3 className="font-bold text-xl leading-tight">
                Top-Quality Healthy <br /> Foods Production
              </h3>
              <p className="text-sm mt-3 font-semibold">
                Majority have suffered alteration in some form by injected humor.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}


 function Timeline() {
  const items = [
    { year: "1906", title: "Open Farm" },
    { year: "1920", title: "Farm Remodelacion" },
    { year: "1925", title: "Grainfarmers Formed" },
    { year: "1930", title: "Start of Agriculture" },
  ];

  return (
    <div
      className="w-full py-20 px-5 bg-no-repeat bg-cover bg-center dark:bg-gray-800"
      style={{ backgroundImage: "url('YOUR_BG_URL')" }}
    >
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-14">
          <h2 className={` ${outfit.className} text-4xl md:text-5xl font-bold mb-4`}>
            Farming have been <br /> since 1866
          </h2>
          <p className={` ${outfit.className}text-gray-600 dark:text-gray-300 max-w-xl`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eaque
            laborum ad asperiores dolorem, adipisci error eaque dolorem.
          </p>
        </div>

        <div className="md:hidden space-y-10">
          {items.map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-4 h-4 bg-teal-700 rounded-full mx-auto mb-5"></div>
              <h1 className={` ${outfit.className} text-4xl font-bold text-teal-800 dark:text-teal-300 mb-2`}>
                {item.year}
              </h1>
              <p className={`${outfit.className} text-lg font-semibold text-gray-900 dark:text-white`}>
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <div className="hidden md:flex justify-between text-center relative">
  <div className="absolute top-5 left-0 w-full h-[3px] bg-teal-700"></div>

          {items.map((item, i) => (
            <div key={i}>
              <div className="w-4 h-4 bg-teal-700 rounded-full mx-auto mb-5"></div>
              <h1 className="text-4xl font-bold text-teal-800 dark:text-teal-300 mb-2">
                {item.year}
              </h1>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}


