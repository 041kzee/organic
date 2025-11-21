'use client';
import { useState,useEffect } from 'react';
import "./globals.css";
import { Outfit } from "next/font/google";
import { Shadows_Into_Light_Two } from 'next/font/google';



import { useRouter } from "next/navigation";

const shadow = Shadows_Into_Light_Two({
subsets:["latin"],
weight: "400"
});



const outfit = Outfit({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "600", "700", "800", "900"]
});

export default function Home() {
  return (
    <div>
      
      <HeroPage />
     
      <AgricultureSection />
      <WhatweDo />
      <Fruits />
     <Testimonials/>
     

      <Gallery />
      <Organic />

      <Contact />
      <Blog />
    </div>
  );
}


function HeroPage() {
  const images = [
   
     "https://agrica-nextjs.vercel.app/assets/img/banner/4.jpg",
  
   "https://agrica-nextjs.vercel.app/assets/img/banner/3.jpg",
    
   
   ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[700px] overflow-hidden">

      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity  ${
            index === i ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${src})` }}
          
        />
      ))}

      
      <div className="absolute inset-0 bg-black/50 z-10 flex items-center">

        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2  h-10 w-10 flex flex-col justify-center items-center -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="absolute flex flex-col justify-center items-center  h-10 w-10 right-5 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md"
        >
          ›
        </button>

       
        <img
          className="h-100 mb-70"
          src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F2.png&w=750&q=75"
        />

        <CircleTag />

        
        <div className="text-white lg:ml-40 mx-auto lg-mr-0 max-w-xl">
          <h1 className={`${shadow.className} text-8xl font-bold`}>
            Homemade<br />
            Organic Product
          </h1>

          <p className={`${outfit.className} mt-4 text-lg`}>
            Dissuade ecstatic and properly saw entirely sir why <br />
            laughter endeavor. In my jointer horrible<br />
            margaret suitable
          </p>

          <br /><br />
          <button
            className={`${outfit.className} bg-yellow-500 px-4 py-2 rounded-2xl h-15 text-black w-60 text-2xl hover:bg-green-600 hover:text-white`}
          >
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
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


function WhatweDo() {
  return (
    <div>
      <section className="w-full bg-[#e8f1eb] py-20 px-6 lg:px-20 relative overflow-hidden">


        <img
          src="https://agrica-nextjs.vercel.app/assets/img/shape/9.png"
          className="hidden lg:block absolute right-0 top-10 w-[450px] opacity-90 pointer-events-none"
        />


        <div className="text-center mb-14">
          <h3 className={`${shadow.className} text-green-600 text-lg font-semibold font-serif`}>What We Do</h3>
          <h1 className={` ${outfit.className} text-4xl lg:text-5xl font-bold mt-2`}>
            Currently we are <br /> selling organic food
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">


          <div className="bg-white p-10 rounded-3xl shadow-md">
            <img
              src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F2.png&w=750&q=75"

              className="w-28 h-auto mb-6"
            />

            <h2 className="text-xl font-bold">AGRICULTURE</h2>
            <p className="text-green-600 font-medium text-sm">PRODUCTS</p>

            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              Seeing rather her you not esteem men settle genius excuse. Deal say over means age from.
              Comparison new melancholy son devonshire to the dispatched.
            </p>

            <button className="mt-6 w-12 h-12 bg-[#F6C764] rounded-full flex items-center justify-center text-xl hover:bg-green-700">
              ➜
            </button>
          </div>


          <div className="bg-white p-10 rounded-3xl shadow-md">
            <img
              src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F3.png&w=750&q=75"

              className="w-28 h-auto mb-6"
            />

            <h2 className="text-xl font-bold">FRESH</h2>
            <p className="text-green-600 font-medium text-sm">VEGETABLES</p>

            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              Perring rather her you not esteem men settle genius excuse. Deal say over means age from.Comparison new melancholy son devonshire to the dispatched.
            </p>

            <button className="mt-6 w-12 h-12 bg-[#F6C764] rounded-full flex items-center justify-center text-xl hover:bg-green-700">
              ➜
            </button>
          </div>

     
          <div className="bg-white p-10 rounded-3xl shadow-md">
            <img
              src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F4.png&w=750&q=75"

              className="w-28 h-auto mb-6"
            />

            <h2 className="text-xl font-bold">DAIRY</h2>
            <p className="text-green-600 font-medium text-sm">PRODUCTS</p>

            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              Seeing rather her you not esteem men settle genius excuse. Deal say over means age from.Comparison new melancholy son devonshire to the dispatched.
            </p>

            <button className="mt-6 w-12 h-12 bg-[#F6C764] rounded-full flex items-center justify-center text-xl hover:bg-green-700">
              ➜
            </button>
          </div>

        </div>

      </section>
      <YouTubeBackground />

    </div>
  )
}
function YouTubeBackground() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
     
      <iframe
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&controls=0&loop=1&playlist=YLIZIMYnZlw&modestbranding=1&showinfo=0"
        allow="autoplay; fullscreen"
      ></iframe>





      <div className="absolute bottom-0 left-0 top-16 flex items-center mt-full h-150">
        <div className="bg-[#3FAF55] text-white p-12  w-150 ">
          <h2 className="text-5xl font-bold leading-tight  mb-6">
            Distributors of <br /> Organic Produce
          </h2>

          <p className="text-white/90 leading-relaxed mb-8">
            Contrasted dissimilar get joy you instrument out reasonably. Again<br /> keeps at no meant stuff.
            To perpetual do existence northward as<br /> difficult preserved daughters.
            Continued at up to zealously.
          </p>

          <ul className="space-y-3 text-lg">
            <li className="flex items-center gap-2">
              <span className="text-xl">✔</span> Modern Agriculture Equipment
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xl">✔</span> Awesome Harvest of Wheat
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xl">✔</span> Fresh Fruits & Vegetables
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
function Fruits() {
  const fruits = [
    {
      image:
        "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F9.png&w=640&q=75",
      name: "Blueberry",
    },
    {
      image:
        "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F10.png&w=640&q=75",
      name: "Strawberry",
    },
    {
      image:
        "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F11.png&w=640&q=75",
      name: "Cabbage",
    },
    {
      image:
        "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F12.png&w=640&q=75",
      name: "Maize",
    },
    {
      image:
        "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F13.png&w=640&q=75",
      name: "Orange",
    },
    {
      image:
        "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F14.png&w=640&q=75",
      name: "Apples",
    },
  ];

  return (
    <div className="flex ">

<div className='flex-1'>
   <div className="relative w-full h-[400px]  bg-[url('https://agrica-nextjs.vercel.app/assets/img/banner/17.jpg')] bg-cover bg-center">
   <div className="absolute lg:block hidden inset-0 bg-white"></div>

 <h1 className={`absolute inset-0 flex items-center justify-center 
             text-8xl font-bold  ${shadow.className} mt-7
             bg-[url('https://agrica-nextjs.vercel.app/assets/img/banner/17.jpg')] bg-cover bg-center 
             bg-clip-text text-transparent`}>
Healthy Life <br></br> With Fresh <br></br> Products
  </h1>
</div>
</div>

 
      <div className="lg:flex-1 bg-[#1f4e3d] w-full overflow-hidden">
        <h1 className={` lg:hidden block ${shadow.className} text-3xl text-yellow-400 text-center mt-20 w-full`}>
          Healthy Life With Fresh <br></br> Products
        </h1>


       

        <div className="relative z-10 grid grid-cols-3 gap-7 mt-14 py-10 px-10 ">
          {fruits.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 mb-3"
              />
              <p className="text-white text-lg font-medium">{item.name}</p>
            </div>
             
          ))}
          <div>
           <img
          src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F11.png&w=384&q=75"
          className="absolute bottom-0 right-0 w-56 opacity-70 z-0 pointer-events-none"
        />
</div>
        </div>

        

      </div>
    </div>
  );
}
const projects = [
  {
    category: "FRUIT",
    title: "Healthy Food",
    image:
      "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fprojects%2F1.jpg&w=828&q=75",
  },
  {
    category: "ORGANIC",
    title: "Cow Milk",
    image:
      "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fprojects%2F2.jpg&w=828&q=75",
  },
  {
    category: "VEGETABLES",
    title: "Organic Vegetables",
    image:
      "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fprojects%2F3.jpg&w=828&q=75",
  },
];

function Gallery() {
  return (
    <section className="w-full py-16 px-6 dark:bg-gray-800 md:px-12">
      <div className="text-center mb-12">
        <p className={`${shadow.className} text-3xl  leading-tight text-green-600 font-semibold`}> Awesome Gallery</p><br></br>
        <h2 className={` ${outfit.className} text-3xl md:text-4xl font-bold dark:text-white`}>Explore Projects</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {projects.map((item, index) => (
          <div
            key={index}
            className="relative w-full h-[400px]  overflow-hidden group shadow-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className={` ${outfit.className} object-cover transition-transform duration-500 group-hover:scale-105`}
            />

            <div className="absolute bottom-5 left-5 text-left">
              <p className={` ${outfit.className} text-yellow-300 text-sm uppercase font-semibold drop-shadow-lg`}>
                {item.category}
              </p>
              <h3 className={ `${shadow.className} text-white text-3xl font-bold drop-shadow-lg`}>
                {item.title}
              </h3>
            </div>
          </div>
        ))}

      </div>
    </section>
    
  );
}

function Organic() {
  return (
    <section className="w-full py-16 flex flex-col bg-white  lg:block dark:bg-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-center px-6">


        <div className="relative  flex justify-center">
          <div className="absolute  -bottom-6 -left-6 w-64 h-64 border-4 lg:block hidden border-yellow-500 "></div>
          <img
            src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F9.png&w=1200&q=75"
            className="relative z-10 w-full max-w-sm"
          />
        </div>


        <div className="space-y-10 lg:block flex flex-col">
          <div>
            <h2 className="text-2xl font-bold ">Pure & Organic</h2>
            <p className="text-gray-600 mt-2 dark:text-white">
              Continued at up to zealously necessary breakfast. Surrounded sir
              motionless she end literature. Gay direction neglected but
              supported yet her.
            </p>
          </div>

          <div className='lg:block flex flex-col'>
            <h2 className="text-2xl font-bold">Always Fresh</h2>
            <p className="text-gray-600 dark:text-white mt-2">
              Continued at up to zealously necessary breakfast. Surrounded sir
              motionless she end literature. Gay direction neglected but
              supported yet her.
            </p>
          </div>
        </div>


        <div className="space-y-10 flex flex-col items-center lg:items-start">


          <div className="flex flex-col items-center">
            <div className="w-32 h-32 relative">
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
                  strokeDashoffset="48"  // 83%
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-yellow-500">
                83%
              </span>
            </div>
            <p className="mt-2 font-semibold text-black">Organic Solutions</p>
          </div>


          <div className="flex flex-col items-center">
            <div className="w-32 h-32 relative">
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
                  strokeDashoffset="113"
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-yellow-500">
                60%
              </span>
            </div>
            <p className="mt-2 font-semibold text-black">Quality Agriculture</p>
          </div>

        </div>
      </div>
    </section>
  );
}
function Contact() {
    return (
        <div className="dark:bg-black bg-green-50 py-26 flex flex-col lg:flex-row">
            <img className="-ml-24 h-120 z-1000 self-end -mb-20 hidden lg:block" src="/man.png"></img>
            <Message />
            <Contact4 />
        </div>
    )
}

function Message() {
    return (
        <div className="bg-white mx-auto dark:bg-gray-800 lg:-ml-20 lg:py-20 lg:px-26 px-6 py-12 lg:flex-[50%] flex flex-col items-center gap-2">
            <h3 className={`text-green-700 dark:text-[#f7c35f] self-start ${shadow.className} text-2xl`}>Have Questions?</h3>
            <h2 className={`font-semibold dark:text-white self-start ${outfit.className} mb-6 text-5xl`}>Send us a message</h2>
            <div className="w-full flex flex-col gap-4 mt-2">
                <input className="bg-gray-100 focus:outline-2 w-full focus:outline-blue-200  py-2 px-4 rounded-lg" type="text" placeholder="Name"></input>
                <div className="flex flex-col lg:flex-row w-full gap-4">
                    <input className="bg-gray-100 flex-1 font-medium focus:outline-2  focus:outline-blue-200 py-2 px-4 rounded-lg" type="text" placeholder="Email"></input>
                    <input className="bg-gray-100  flex-1 focus:outline-2  focus:outline-blue-200 py-2 px-4 rounded-lg" type="text" placeholder="Phone"></input>
                </div>
                <textarea className="bg-gray-100 focus:outline-2 h-40 w-full focus:outline-blue-200 py-2 px-4 rounded-lg" placeholder="Tell Us About Project"></textarea>
            </div>
            <button className="bg-[#f7c35f] cursor-pointer mt-2 hover:bg-[#49a760] hover:text-white self-start rounded-lg px-8 py-2 text-lg font-bold ">
                <svg className="w-6 h-6 inline -mt-1 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                    <path d={"M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"}></path>
                </svg>
                Get in Touch
            </button>
        </div>
    )
}

function Contact4() {
    return (
        <div className="dark:bg-black bg-green-900 text-white dark:text-white lg:flex-[50%] flex flex-col gap-6 lg:py-20 lg:px-12 py-4 px-6">
            <h2 className={`font-semibold relative self-start ${outfit.className} mt-4 mb-4 text-5xl`}>
                Contact&nbsp; Information
            </h2>
            <p className={`text-white dark:text-white text-md ${outfit.className}`}>Plan upon yet way get cold spot its week. Almost do<br /> am or limits hearts. Resolve parties but why she<br /> shewing.</p>
            <div>
                <h2 className="text-lg font-semibold">Hotline</h2>
                <p>+4733378901</p>
            </div>
            <div>
                <h2 className="text-lg font-semibold">Our Location</h2>
                <p className={`text-gray-white dark:text-white text-md ${outfit.className}`}>55 Main Street, The Grand Avenue 2nd Block,<br />New York City</p>
            </div>
            <div>
                <h2 className="text-lg font-semibold">Office Email</h2>
                <p>info@agrul.com</p>
            </div>
        </div>
    )
}
function Blog() {
  const router = useRouter();
  const goToBlog = () => router.push("/blog");

  return (
    <section className="px-30 py-20 dark:bg-black bg-white">

      <div className="text-center mb-14">
        <p className="text-green-700 font-semibold text-lg">Latest News</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 dark:text-white">
          Check out our blog posts
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">


        <div
          className="relative h-[400px]  rounded-xl overflow-hidden shadow-lg cursor-pointer"
          onClick={goToBlog}
        >
          <img
            src="https://i.pinimg.com/736x/f5/48/98/f5489887f8c39c04ddfae8454f130c11.jpg"
            className="w-full h-full object-cover bg-gray-200"

          />

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h3 className="text-2xl font-semibold leading-snug">
              Miscorvery incommode earnestly commanded if.
            </h3>
            <p className="mt-2 text-sm opacity-90">
              Seeing rather her you not esteem men settle genius excuse.
            </p>

            <button
              onClick={goToBlog}
              className="mt-6 font-semibold flex items-center gap-2 hover:opacity-75 transition"
            >
              CONTINUE READING →
            </button>
          </div>
        </div>


        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">


          <div className="cursor-pointer" onClick={goToBlog}>
            <div className="relative">
              <img
                src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F3.jpg&w=1920&q=75"
                className="rounded-xl w-full h-48 object-cover bg-gray-200"

              />

              <div className="absolute bottom-3 left-3 bg-yellow-400 px-2 py-2 rounded shadow-md">
                <p className="text-xl font-bold">26</p>
                <p className="text-xs bg-green-700 text-white px-2 rounded mt-1">
                  Aug, 2025
                </p>
              </div>
            </div>

            <p className="text-gray-700 text-sm mt-4">
              Md Sohag • 26 Aug, 2025
            </p>

            <h3 className="text-lg font-semibold mt-1">
              Minuter him own clothes but observe as country.
            </h3>

            <button
              onClick={goToBlog}
              className="mt-3 font-semibold flex items-center gap-2 hover:text-green-700 transition"
            >
              CONTINUE READING →
            </button>
          </div>


          <div className="cursor-pointer" onClick={goToBlog}>
            <div className="relative">
              <img
                src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2.jpg&w=1920&q=75"
                className="rounded-xl w-full h-48 object-cover bg-gray-200"

              />

              <div className="absolute bottom-3 left-3 bg-yellow-400 px-2 py-2 rounded shadow-md">
                <p className="text-xl font-bold">08</p>
                <p className="text-xs bg-green-700 text-white px-2 w-max rounded mt-1">
                  Dec, 2025
                </p>
              </div>
            </div>

            <p className="text-gray-700 text-sm mt-4">
              Md Sohag • 08 Dec, 2025
            </p>

            <h3 className="text-lg font-semibold mt-1">
              Overcame breeding point concerns has terminate
            </h3>

            <button
              onClick={goToBlog}
              className="mt-3 font-semibold flex items-center gap-2 hover:text-green-700 transition"
            >
              CONTINUE READING →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
function CircleTag(){
  return (
    
    <div className="relative w-40 h-40  hidden lg:flex  items-center justify-center">
      
      <div className="absolute inset-0 rounded-full bg-black/40 backdrop-blur-sm"></div>

   
      <svg
        viewBox="0 0 300 300"
        className="absolute w-full h-full"
      >
        <defs>
          <path
            id="circlePath"
            d="M 150,150
               m -120,0
               a 120,120 0 1,1 240,0
               a 120,120 0 1,1 -240,0"
          />
        </defs>

        <text
          className={`${shadow.className}`}
          fill="white"
          fontSize="28"
          fontWeight="600"
          letterSpacing="12"
        >
          <textPath
            href="#circlePath"
            startOffset="50%"
            textAnchor="middle"

          >
            100% ORGANIC PRODUCT
          </textPath>
        </text>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-white z-10"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 17l10-10m0 0H9m8 0v8"
        />
      </svg>
    </div>
  );
};

function Testimonials() {
  const testimonials = [
    {
      image:
        "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffarmers%2F3.jpg&w=828&q=75",
      text:
        "Targeting consultation discover apartments. Indulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week.",
      name: "Matthew J. Wyman",
      role: "SENIOR CONSULTANT",
      rating: 5,
    },
    {
      image:
        "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffarmers%2F2.jpg&w=828&q=75",
      text:
        "Consultation discover apartments. Indulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits.",
      name: "Anthom Bu Spar",
      role: "MARKETING MANAGER",
      rating: 4,
    },
    {
      image:
        "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffarmers%2F1.jpg&w=828&q=75",
      text:
        "Business discover apartments. Indulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts.",
      name: "Metho K. Partho",
      role: "SENIOR DEVELOPER",
      rating: 5,
    },
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
        setFade(true);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[index];

  return (
    <section className={`w-full bg-[#e8f1eb]  pt-20 px-4 ${outfit.className}`}>

      <div className="relative flex justify-center mb-16">
    <img
          src="https://agrica-nextjs.vercel.app/assets/img/shape/5.png"
        />
        <h2 className="absolute -top-8 text-4xl font-bold">
          Testimonials
        </h2>
      </div>
      <div className="max-w-5xl mx-auto flex items-center">

        <div
          className={`bg-white shadow-lg p-10 pl-60 w-full transition-opacity  relative duration-500 ${ fade ? "opacity-100" : "opacity-0"}`}
        >
        <div className='flex-1 absolute -top-20 -left-20 '>
        <img
          src={t.image}
          className="w-70 h-70 object-cover "
        />
        </div>
          <img
            src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2Fquote-big.png&w=640&q=75"className="w-12 mb-4" />

          <p className="text-gray-500 text-4xl leading-relaxed mb-6">
            “{t.text}”  </p>

          <div className="border-t-2 border-gray-700 my-4"></div>
<h4 className="font-bold text-lg">{t.name}</h4>
          <p className="text-green-600 text-sm mb-2">{t.role}</p>
           <div className="text-yellow-400 text-xl">
            {"★".repeat(t.rating)}
            {"☆".repeat(5 - t.rating)}
          </div>
        </div>
      </div>

      <div className="flex mt-10">
        <img src="https://agrica-nextjs.vercel.app/assets/img/shape/13.png" />
        <img src="https://agrica-nextjs.vercel.app/assets/img/shape/13.png" />
        <img src="https://agrica-nextjs.vercel.app/assets/img/shape/13.png" />
        <img src="https://agrica-nextjs.vercel.app/assets/img/shape/13.png" />
        <img src="https://agrica-nextjs.vercel.app/assets/img/shape/13.png" />
        <img src="https://agrica-nextjs.vercel.app/assets/img/shape/13.png" />
      </div>
    </section>
  );
}