'use client';

export function Header() {
  return (
    // <div className="bg-white w-full">
    <>
      <div className="bg-green-800 text-white flex flex-row items-center gap-2 p-2 h-10">
        <img
          className="h-5 w-5 ml-9"
          src="https://icones.pro/wp-content/uploads/2021/03/symbole-de-l-horloge-jaune-300x300.png"
        />

        <p className="text-sm">
          Opening Hours : Sunday–Friday, 08:00 am – 05:00 pm
        </p>

        <img
          className="h-5 w-5 ml-9"
          src="https://www.pinclipart.com/picdir/big/162-1625836_icon-telephone-yellow-png-clipart.png"
        />

        <p className="text-sm">+4733378901</p>

        <div className="flex ml-auto gap-2 pr-8">
          <img src="facebook-app-symbol.png" className="h-6 w-6" />
          <img src="linkedin.png" className="h-6 w-6" />
          <img src="youtube.png" className="h-6 w-6" />
        </div>
      </div>


      <header className="w-full sticky top-0 bg-white z-50 shadow-md">
        <div className="flex relative flex-row px-12 items-center justify-between py-4">
          <img
            src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo.png&w=828&q=75"
            alt="Logo"
            className="h-12 w-auto"
          />
          <div className="hidden md:flex items-center gap-6">
            <p>Home</p>
            <p>Pages</p>
            <p>Projects</p>
            <p>Services</p>
            <p>Blog</p>
            <p>Shop</p>

          </div>


          <div className="flex items-center gap-4">
            <div className="relative bg-blue-100 p-3 rounded-full cursor-pointer">
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
              🛒
            </div>

            <button className="border-2 border-yellow-600 px-4 py-2 rounded-full hover:bg-yellow-600 hover:text-white">
              Register
            </button>
          </div>
          <img className="absolute mt-16 inset-0 z-0" src="/header.png"></img>

        </div>
      </header>
    </>
  );
}
