
"use client";
import PhotoHead from "../components/PhotoHead"
import { Outfit } from "next/font/google";
import { Shadows_Into_Light_Two } from 'next/font/google';
import { useRouter } from "next/navigation";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "600", "700", "800", "900"]
});

const shadow = Shadows_Into_Light_Two({
subsets:["latin"],
weight: "400"
});



export default function AboutUs(){
    return(
        <div>
          
            <PhotoHead pageName={"About Us"} imageUrl={"/contact.jpg"} pageHead={"About-Us"} />
            <AgricultureSection/>
            <Timeline/>
            <CuteFarmer/>
            <OurFarmer/>
            
        </div>
    )

}

function AgricultureSection() {
  return (
    <section className="w-full px-10 py-16 mx-auto flex flex-col lg:flex-row gap-12 items-start relative bg-white dark:bg-gray-800">

     
      <img
        src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F1.png&w=256&q=75"
    
        className="absolute left-15 top-1/2  hidden lg:block -translate-y-1 w-50  z-30"
      />

      <div className="w-full  mx-auto lg:w-1/2 relative">
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

        <div className="lg:absolute -left-20 top-[350px] z-20">
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
      className="w-full py-20 px-5 bg-no-repeat bg-cover bg-center bg-[#e9f1ee] dark:bg-gray-800"
      style={{ backgroundImage: "url('https://agrica-nextjs.vercel.app/assets/img/shape/21.png')" }}
    >
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-14">
          <h2 className={` ${outfit.className} text-4xl md:text-5xl font-bold mb-4`}>
            Farming have been <br /> since 1866
          </h2>
          <p className={` ${outfit.className}text-gray-600 dark:text-gray-300 max-w-xl`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eaque
            laborum ad asperiores dolorem, adipisci error eaque dolorem. 
            itaque aliquam animi fuga dolor ipsam! Velit ratione hic corporis veritatis odit.
          </p>
        </div>

      

        <div className=" md: hidden lg:flex justify-between text-center relative">
  <div className=" absolute top-5 left-0 w-full h-[3px] bg-teal-700"></div>

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
<div className="lg:hidden flex flex-col justify-around h-full w-[3px] bg-[#1f4e3d] relative mb-50">
          {items.map((item, i) => (
            <div className="flex flex-row gap-20" key={i}>
              <div className="w-5 absolute h-5 flex flex-col justify-center items-center bg-white border-2 border-[#1f4e3d] rounded-full">
                <div className="w-2 h-2 bg-[#1f4e3d] rounded-full"></div>
              </div>
              <div className="h-[3px] w-30 z-100 bg-[#1f4e3d]"></div>
              <div>
                <h1 className="-ml-5 text-4xl font-bold text-[#1f4e3d] dark:text-teal-300 mb-2">
                  {item.year}
                </h1>
                <p className="-ml-5 text-lg font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
 
function CuteFarmer(){
  const items = [
    "Bio-dynamic food",
    "Organic gardening",
    "Organic food certification"
  ];
  return(<div className="flex md:flex-col lg:flex-row bg-[#1f4e3d] relative">
    <div className="flex-1 ">
<img src="https://agrica-nextjs.vercel.app/assets/img/about/3.jpg" className="h-full w-full"></img>
    </div>
    <div className={`${outfit.className} flex-1 text-white pl-30 pt-30 pb-40 `}>
      <h1 className="text-5xl font-semibold">
        Healthy life with <br></br>fresh products
      </h1>
      <br/>
<p className="text-gray-300">
  Consume ipsum dolor sit amet consectetur adipisicing elit. Veritatis, illo ullam harum et fuga suscipit quibusdam sapiente. 
  Corrupti ut consequatur magni minus! Iusto eos consectetur similique minus culpa odio temporibus.
</p>
<br/>
<div className="flex flex-row">
  <div className="flex-1 ">



          <div className="flex flex-col ">
            <div className="w-32 h-32 relative ">
              <svg className="w-full h-full">
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  stroke="green"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray="283"
                  strokeDashoffset="48" 
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-yellow-500">
                83%
              </span>
            </div>
            <p className="mt-2 font-semibold">Organic Solutions</p>
          </div>
  </div>
  <div className=" p-10 flex-2 gap-6">
  <div className="border-l-white"></div>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3 text-white text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8FE0C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="border border-[#edf9f4] rounded-md p-1">
      <polyline points="20 6 9 17 4 12" />
            </svg> {item}
   </div>
        ))}
      </div>
    </div>


</div>
    </div>
    <div className="absolute -bottom-4 right-2">
      <img src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F17.png&w=1920&q=75" className="w-80 h-45"></img>
    </div>
  </div>
  );
}

function OurFarmer(){
  const router = useRouter();
  return(

    <div  className={`${outfit.className} flex flex-col lg:flex-row gap-10  p-40`}>
      <div className="flex-2  ">
        <p className={`${shadow.className} text-green-900 text-4xl`}>Our Farmers</p><br/>
        <h1 className={`${outfit.className} text-black text-5xl font-semibold`}>Meet our<br/> professional farm <br/> experts</h1>
        <br/><br/><br/>
        <button
        onClick={()=>router.push("/")}
         className="bg-green-700 rounded-2xl text-white h-15 w-60 hover:bg-green-950" > Meet Our Farmers</button>
      </div>
<div  className="flex-1 gap-2 relative  ">
  <img src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffarmers%2F1.jpg&w=1920&q=75" className="w-full "></img><br/>
  <div className="">
    <div className="absolute left-0 bottom-12 flex flex-col">

        <div className="relative group">

          <div className="bg-[#f4b544] p-3 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" viewBox="0 0 24 24">
              <path d="M18 8c-1.657 0-3 1.343-3 3 0 .299.05.584.121.859l-3.279 2.459c-.548-.41-1.229-.659-1.965-.659-1.657 0-3 1.343-3 3s1.343 3 3 3c.736 0 1.417-.249 1.965-.659l3.279 2.459c-.071.275-.121.56-.121.859 0 1.657 1.343 3 3 3s3-1.343 3-3-1.343-3-3-3c-.736 0-1.417.249-1.965.659l-3.279-2.459c.071-.275.121-.56.121-.859s-.05-.584-.121-.859l3.279-2.459c.548.41 1.229.659 1.965.659 1.657 0 3-1.343 3-3s-1.343-3-3-3z"/>
            </svg>
          </div>

          <div className="absolute  left-0 bottom-full flex flex-col opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">

            <div 
            onClick={()=>router.push('https://www.facebook.com/')}
            className="bg-[#3b5998] p-3 transform -translate-x-10 group-hover:translate-x-0 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.992H7.898v-2.886h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.874h2.773l-.443 2.886h-2.33v6.992C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </div>

            <div 
             onClick={()=>router.push('https://www.x.com/')}
            className="bg-[#1DA1F2] p-3 transform -translate-x-10 group-hover:translate-x-0 transition-all duration-300 delay-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M23.954 4.569c-.885.392-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.553-3.594-1.553-2.723 0-4.928 2.205-4.928 4.93 0 .386.045.762.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.374 4.6 3.414-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.179 1.397 4.768 2.213 7.557 2.213 9.054 0 14.004-7.496 14.004-13.986 0-.21-.006-.42-.017-.63.961-.689 1.8-1.56 2.46-2.548z"/>
              </svg>
            </div>

            <div
             onClick={()=>router.push('https://www.linkedin.com/')}
            className="bg-[#0077b5] p-3 transform -translate-x-10 group-hover:translate-x-0 transition-all duration-300 delay-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.967 0-1.75-.786-1.75-1.75s.783-1.75 1.75-1.75 1.75.786 1.75 1.75-.783 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.059-1.865-3.059-1.867 0-2.153 1.459-2.153 2.967v5.696h-3v-10h2.881v1.367h.041c.401-.762 1.379-1.566 2.837-1.566 3.034 0 3.594 2.001 3.594 4.604v5.595z"/>
              </svg>
            </div>

          </div>

        </div>
      </div>
  <p className="text-gray-400  font-semibold absolute right-12 "> Farmer of Cherries</p>
  <h2 className="text-black text-3xl font-bold absolute right-3 top-85 ">Kevin Martin</h2>
</div>
</div>

<div  className="flex-1 gap-2 relative  ">
  <img src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffarmers%2F2.jpg&w=1920&q=75" className="w-full"></img><br/>
   <div className="absolute left-0 bottom-12 flex flex-col">

        <div className="relative group">

          <div 
           onClick={()=>router.push('https://www.facebook.com/')}
          className="bg-[#f4b544] p-3 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" viewBox="0 0 24 24">
              <path d="M18 8c-1.657 0-3 1.343-3 3 0 .299.05.584.121.859l-3.279 2.459c-.548-.41-1.229-.659-1.965-.659-1.657 0-3 1.343-3 3s1.343 3 3 3c.736 0 1.417-.249 1.965-.659l3.279 2.459c-.071.275-.121.56-.121.859 0 1.657 1.343 3 3 3s3-1.343 3-3-1.343-3-3-3c-.736 0-1.417.249-1.965.659l-3.279-2.459c.071-.275.121-.56.121-.859s-.05-.584-.121-.859l3.279-2.459c.548.41 1.229.659 1.965.659 1.657 0 3-1.343 3-3s-1.343-3-3-3z"/>
            </svg>
          </div>

          <div className="absolute  left-0 bottom-full flex flex-col opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">

            <div 
             onClick={()=>router.push('https://www.x.com/')}
            className="bg-[#3b5998] p-3 transform -translate-x-10 group-hover:translate-x-0 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.992H7.898v-2.886h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.874h2.773l-.443 2.886h-2.33v6.992C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </div>

            <div 
             onClick={()=>router.push('https://www.linkedin.com/')}
            className="bg-[#1DA1F2] p-3 transform -translate-x-10 group-hover:translate-x-0 transition-all duration-300 delay-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M23.954 4.569c-.885.392-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.553-3.594-1.553-2.723 0-4.928 2.205-4.928 4.93 0 .386.045.762.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.374 4.6 3.414-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.179 1.397 4.768 2.213 7.557 2.213 9.054 0 14.004-7.496 14.004-13.986 0-.21-.006-.42-.017-.63.961-.689 1.8-1.56 2.46-2.548z"/>
              </svg>
            </div>

            <div className="bg-[#0077b5] p-3 transform -translate-x-10 group-hover:translate-x-0 transition-all duration-300 delay-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.967 0-1.75-.786-1.75-1.75s.783-1.75 1.75-1.75 1.75.786 1.75 1.75-.783 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.059-1.865-3.059-1.867 0-2.153 1.459-2.153 2.967v5.696h-3v-10h2.881v1.367h.041c.401-.762 1.379-1.566 2.837-1.566 3.034 0 3.594 2.001 3.594 4.604v5.595z"/>
              </svg>
            </div>

          </div>

        </div>
      </div>
  <p className="text-gray-400  font-semibold absolute right-12 "> Farmer of Tomatoes</p>
  <h2 className="text-black text-3xl font-bold absolute right-3 top-85 ">Aleesha Brown</h2>
</div>
    </div>
  )
}
