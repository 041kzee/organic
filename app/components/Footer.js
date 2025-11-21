import { Outfit } from "next/font/google";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "700", "800", "900"]
})

export function Footer() {
  return (
    <footer className={`${outfit.className} bg-[#0f4a3a] text-white pt-20 pb-30 px-20 relative  overflow-hidden`}>


      <img
        src="flower-footer.png"
        className="absolute bottom-0 left-0 w-30 lg:w-40 opacity-90"
      />


      <img
        src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F7.png&w=1080&q=75"
        className="absolute bottom-0 right-0 w-72 md:w-96"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-14 relative z-10">


        <div className="border-r-gray-500 lg:border-r pr-4">
          <div className="flex items-center gap-3 mb-6">
            <img src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75" className="w-50 h-15 rounded-full"></img>

          </div>

          <p className={`${outfit.className} text-gray-300 leading-relaxed max-w-sm mb-6`}>
            Happen active county. Winding morning ambition shyness evident to poor.
            Because elderly new to the point to main success.
          </p>


          <div className="bg-white rounded-full flex items-center px-6 py-3 w-[90%] max-w-sm">
            <input
              type="text"
              placeholder="Your Email"
              className="flex-1 text-black outline-none"
            />
            <button className="bg-yellow-500 font-bold text-black  -ml-25 px-2 py-2 rounded-full hover:bg-yellow-400 transition">
              GO
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6">Explore</h3>

          <ul className={`space-y-3 text-gray-300 ${outfit.className}`}>

            <li>About Us</li>
            <li>Meet Our Team</li>
            <li>News & Media</li>
            <li>Services</li>
            <li>Contact Us</li>
            <li>Volunteers</li>
          </ul>
        </div>


        <div>
          <h3 className={`text-xl font-bold mb-6 ${outfit.className}`}>Recent Posts</h3>

          <div className="flex gap-4 mb-6">
            <div className="w-30 h-20 bg-gray-300 rounded-md overflow-hidden">
              <img src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumbs%2F3.jpg&w=828&q=75" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className={`${outfit.className} text-yellow-400 font-semibold text-xs`}>26 AUG, 2025</p>
              <p className="text-sm font-bold text-gray-300 leading-snug">
                Minuter him own clothes but observe as country.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-30 h-20 bg-gray-300 rounded-md overflow-hidden">
              <img src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumbs%2F2.jpg&w=828&q=75" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className={`${outfit.className} text-yellow-400 font-semibold text-xs`}>08 DEC, 2025</p>
              <p className="text-sm  font-bold text-gray-300 leading-snug">
                Overcame breeding point concerns has terminate
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className={` ${outfit.className} text-xl font-bold mb-6`}>Contact Info</h3>

          <div className="space-y-6 text-gray-300 text-sm">

            <div className="flex gap-4 items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 9.75L12 3l9 6.75V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1V9.75z"
                />
              </svg>
              <div>
                <p className={` ${outfit.className} font-bold text-white text-xs`}>ADDRESS:</p>
                <p>5919 Trussville Crossings Pkwy, Birmingham</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                  ry="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7l9 6 9-6"
                />
              </svg>
              <div>
                <p className={` ${outfit.className} font-bold text-white text-xs`}>EMAIL:</p>
                <p>info@validtheme.com</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 rounded-full  text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 3.5l4 1c.4.1.7.4.8.8l1 4c.1.5-.1 1-.5 1.3l-2 1.5c1.1 2.4 3 4.3 5.4 5.4l1.5-2c.3-.4.8-.6 1.3-.5l4 1c.4.1.7.4.8.8l1 4c.1.5-.2 1-.7 1.2-2.4.9-8.3.4-13.2-4.5S3.6 5.9 4.5 3.5c.2-.4.7-.7 1.2-.5z"
                />
              </svg>
              <div>
                <p className={` ${outfit.className} font-bold text-white text-xs`}>PHONE:</p>
                <p>+123 34598768</p>
              </div>
            </div>

          </div>
        </div>
      </div>


      <p className="text-center text-gray-300 text-sm mt-16 relative z-10">
        © Copyright 2025. All Rights Reserved by{" "}
        <span className="font-bold">validthemes</span>
      </p>

    </footer>
  );
}
