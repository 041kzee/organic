export  function Footer() {
  return (
    <footer className="bg-[#0f4a3a] text-white pt-20 pb-10 relative overflow-hidden">

      
      <img
        src="diasy-removebg-preview.png" 
         className="absolute bottom-0 left-0 w-60 md:w-72 opacity-90 pointer-events-none"
      />

      
      <img
        src="tractor-removebg-preview.png" 
       className="absolute bottom-0 right-0 w-72 md:w-96  pointer-events-none"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-14 relative z-10">

       
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75" className="w-50 h-15 rounded-full"></img>
           
          </div>

          <p className="text-gray-300 leading-relaxed max-w-sm mb-6">
            Happen active county. Winding morning ambition shyness evident to poor.
            Because elderly new to the point to main success.
          </p>

        
          <div className="bg-white rounded-full flex items-center px-6 py-3 w-[90%] max-w-sm">
            <input
              type="text"
              placeholder="Your Email"
              className="flex-1 text-black outline-none"
            />
            <button className="bg-yellow-500 font-bold text-black px-5 py-2 rounded-full hover:bg-yellow-400 transition">
              GO
            </button>
          </div>
        </div>

        {/* EXPLORE */}
        <div>
          <h3 className="text-xl font-bold mb-6">Explore</h3>

          <ul className="space-y-3 text-gray-300">
            <li>About Us</li>
            <li>Meet Our Team</li>
            <li>News & Media</li>
            <li>Services</li>
            <li>Contact Us</li>
            <li>Volunteers</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-xl font-bold mb-6">Recent Posts</h3>

     <div className="flex gap-4 mb-6">
            <div className="w-14 h-14 bg-gray-300 rounded-md overflow-hidden">
              <img src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumbs%2F3.jpg&w=828&q=75"  className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-yellow-400 font-semibold text-xs">26 AUG, 2025</p>
              <p className="text-sm leading-snug">
                Minuter him own clothes but observe as country.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-14 h-14 bg-gray-300 rounded-md overflow-hidden">
              <img src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumbs%2F2.jpg&w=828&q=75"  className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-yellow-400 font-semibold text-xs">08 DEC, 2025</p>
              <p className="text-sm leading-snug">
                Overcame breeding point concerns has terminate
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6">Contact Info</h3>

          <div className="space-y-6 text-gray-300 text-sm">

            <div className="flex gap-4 items-start">
              <span className="text-xl">🏠</span>
              <div>
                <p className="font-bold text-white text-xs">ADDRESS:</p>
                <p>5919 Trussville Crossings Pkwy, Birmingham</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-xl">📧</span>
              <div>
                <p className="font-bold text-white text-xs">EMAIL:</p>
                <p>info@validtheme.com</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-xl">📞</span>
              <div>
                <p className="font-bold text-white text-xs">PHONE:</p>
                <p>+123 34598768</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <p className="text-center text-gray-300 text-sm mt-16 relative z-10">
        © Copyright 2025. All Rights Reserved by{" "}
        <span className="font-bold">validthemes</span>
      </p>

    </footer>
  );
}
