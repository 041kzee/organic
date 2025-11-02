'use client';
import { useState } from 'react';
import { Header } from './/components/Header.js';
import { Footer } from './/components/Footer.js';

import "./globals.css";
import { Pacifico } from "next/font/google";
import { useRouter } from "next/navigation";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400"
});

export default function Home() {
  return (
    <>
      <Header />
      <HeroPage />
      <br></br>
      <AgricultureSection/><br></br>
      <WhatweDo/>
      <Fruits/>
      <br/>
      <Gallery/>
      <Organic/>

      <Contact/>
      <Blog />
      <Footer/>
    </>
  );
}

function HeroPage() {
  return (
    <div
      className=" w-full h-[500px] bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/1f/c7/bd/1fc7bd20c98e7da43b9b4f3c8720fc1c.jpg')"
      }}
    >
     

     
      <div className=" absolute inset-0 flex items-center px-10">
        <div className="text-white ml-40 max-w-xl">

      
          <h1 className={`${pacifico.className} text-5xl font-normal leading-tight`}>
            Agriculture & Organic Product Farm
          </h1>

          <p className="mt-4 text-lg">
           Dissuade ecstatic and properly saw entirely sir why <br></br>
           laughter endeavor. In my jointer horrible<br></br>
           margaret suitable
          </p>
<br></br><br></br>        <button className=" bg-yellow-600 px-4 py-2 rounded-3xl h-30 w-80 text-2xl hover:bg-green-600 hover:text-white">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
}
 function AgricultureSection() {
  return (
    <section className="w-full px-10 py-16 flex flex-col lg:flex-row gap-12 items-start relative">

     
      <div className="w-full lg:w-1/2 relative">
        <img
          src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fabout%2F1.jpg&w=640&q=75"
          alt="Farmer"
          className="rounded-lg shadow-md w-full h-auto"
        />
      </div>

      
      <div className="w-full lg:w-1/2 relative">
        <h1 className="text-4xl font-bold leading-tight">
          Agriculture & Organic <br />
          Product Farm
        </h1>

        <p className="mt-4 text-gray-600 max-w-lg">
          There are many variations of passages of ipsum available but the
          majority have suffered alteration in some form by injected humor or
          random word which don’t look even. Comparison new ham melancholy.
        </p>

        <div className="flex items-end gap-3 mt-6">
          <span className="text-8xl font-bold text-green-600">25M</span>
          <p className="text-medium font-semibold text-gray-600 leading-tight">
            Growth Tonns <br /> of Harvest
          </p>
        </div>

     
        <div className="absolute -left-20 top-[350px] z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 {/* CARD 1 */}
            <div className="bg-[#F6C764] p-8 rounded-lg shadow-xl h-[400px] w-64 flex flex-col">
              <div className="text-4xl mb-4"><img className='h-30 w-30'
              src='https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F3.png&w=256&q=75'
              ></img></div>
              <h3 className="font-bold text-xl leading-tight">
                100% Guaranteed <br /> Organic Product
              </h3>
              <p className="text-sm font-semibold text-gray-700 mt-3">
                Always parties but trying she showing of moment.
              </p>
            </div>

           
            <div className="bg-[#4DA66C] p-8 rounded-lg shadow-xl h-[400px] w-64 text-white flex flex-col">
             <div className="text-4xl mb-4"><img className='h-30 w-30'
              src='https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F2.png&w=256&q=75'
              ></img></div>
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


function WhatweDo(){
  return(
    <div>
      <section className="w-full bg-[#e8f1eb] py-20 px-6 lg:px-20 relative overflow-hidden">
      
      
      <img
        src="barn-removebg-preview.png"
        alt="Barn"
        className="hidden lg:block absolute right-0 top-10 w-[450px] opacity-90 pointer-events-none"
      />

      
      <div className="text-center mb-14">
        <h3 className="text-green-600 text-lg font-semibold font-serif">What We Do</h3>
        <h1 className="text-4xl lg:text-5xl font-bold mt-2">
          Currently we are <br /> selling organic food
        </h1>
      </div>

      {/* Cards */}
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

        {/* CARD 3 */}
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
    <YouTubeBackground/>
    
    </div>
  )
}
 function YouTubeBackground() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* YouTube Iframe */}
      <iframe
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&controls=0&loop=1&playlist=YLIZIMYnZlw&modestbranding=1&showinfo=0"
        allow="autoplay; fullscreen"
      ></iframe>

     
      

     
      <div className="relative top-16 flex items-center ml-15 h-150">
      <div className="bg-[#3FAF55] text-white p-12  w-150 ">
  <h2 className="text-5xl font-bold leading-tight mb-6">
    Distributors of <br /> Organic Produce
  </h2>

  <p className="text-white/90 leading-relaxed mb-8">
    Contrasted dissimilar get joy you instrument out reasonably. Again<br/> keeps at no meant stuff. 
    To perpetual do existence northward as<br/> difficult preserved daughters. 
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
    <div className="flex">
      
    
      <img className="h-[600px] w-[600px] object-cover" src="hey.png" />

      {/* green fruit */}
      <div className="flex-1 bg-green-900 relative overflow-hidden">

      
        <img
          src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F11.png&w=384&q=75"
          className="absolute bottom-0 right-0 w-56 opacity-70 z-0 pointer-events-none"
        />

       
        <div className="relative z-10 grid grid-cols-3 gap-12 mt-14 py-10 px-10">
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
    <section className="w-full py-16 px-6 md:px-12">
      <div className="text-center mb-12">
        <p className={`${pacifico.className} text-5xl  leading-tight text-green-600 font-semibold`}> Awesome Gallery</p>
        <h2 className="text-3xl md:text-4xl font-bold">Explore Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {projects.map((item, index) => (
          <div
            key={index}
            className="relative w-full h-[400px]  overflow-hidden group shadow-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute bottom-5 left-5 text-left">
              <p className="text-yellow-300 text-sm uppercase font-semibold drop-shadow-lg">
                {item.category}
              </p>
              <h3 className="text-white font-bold drop-shadow-lg">
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
    <section className="w-full py-16 bg-white ml-30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-center px-6">

        
        <div className="relative flex justify-center">
          <div className="absolute -bottom-6 -left-6 w-64 h-64 border-4 border-yellow-500"></div>
          <img
            src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F9.png&w=1200&q=75"
            className="relative z-10 w-full max-w-sm"
          />
        </div>

       
        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-bold">Pure & Organic</h2>
            <p className="text-gray-600 mt-2">
              Continued at up to zealously necessary breakfast. Surrounded sir
              motionless she end literature. Gay direction neglected but
              supported yet her.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Always Fresh</h2>
            <p className="text-gray-600 mt-2">
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
    <section className="w-full bg-[#e7f0eb] py-32 relative">
      <div className="max-w-7xl mx-auto relative">

       
        <div className="grid grid-cols-1 lg:grid-cols-3">

       
          <div className="flex justify-center items-end relative">
            <img
              src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F10.png&w=750&q=75"
            
              className="w-64 lg:w-80 relative z-30 :-mr-0.5"
            />
          </div>

          <div></div>

          <div className="bg-[#0f4a3a] text-white p-12 lg:p-20 relative z-10">
            <h2 className="text-3xl font-bold">
              Contact<span className="underline decoration-yellow-400">Information</span>
            </h2>

            <p className="text-sm text-gray-300 mt-3 leading-relaxed max-w-sm">
              Plan upon yet way get cold spot its week. Almost do am or limits hearts.
              Resolve parties but why she shewing.
            </p>

            <div className="mt-10 space-y-8 text-sm">
              <div>
                <p className="font-bold">Hotline</p>
                <p className="text-gray-300 mt-1">+4733378901</p>
              </div>

              <div>
                <p className="font-bold">Our Location</p>
                <p className="text-gray-300 mt-1 leading-snug">
                  55 Main Street, The Grand Avenue 2nd Block,<br />
                  New York City
                </p>
              </div>

              <div>
                <p className="font-bold">Official Email</p>
                <p className="text-gray-300 mt-1">info@agrul.com</p>
              </div>
            </div>
          </div>
        </div>

       
        <div className="absolute top-1/2 left-[40%] transform -translate-y-1/2 -translate-x-1/2 
        bg-white shadow-xl rounded-lg p-10 w-[90%] lg:w-[45%] z-20">

          <p className="text-green-700 font-semibold text-lg">Have Questions?</p>
          <h2 className="text-3xl font-bold mt-2">Send us a message</h2>

          <div className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 bg-gray-100 rounded-md outline-none"
            />

            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Email*"
                className="w-1/2 p-3 bg-gray-100 rounded-md outline-none"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-1/2 p-3 bg-gray-100 rounded-md outline-none"
              />
            </div>

            <textarea
              rows="4"
              placeholder="Tell Us About Project *"
              className="w-full p-3 bg-gray-100 rounded-md outline-none"
            />

            <button className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-md flex items-center gap-2 hover:bg-yellow-400 transition">
               Get In Touch
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
function Blog() {
  const router = useRouter();
  const goToBlog = () => router.push("/blog");

  return (
    <section className=" ml-30 py-20 bg-white">
      
      <div className="text-center mb-14">
        <p className="text-green-700 font-semibold text-lg">Latest News</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Check out our blog posts
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        
        <div
          className="relative h-[400px]   rounded-xl overflow-hidden shadow-lg cursor-pointer"
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