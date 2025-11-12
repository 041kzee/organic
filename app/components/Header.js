'use client';
import { Outfit } from "next/font/google"
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation"
import { useAuth } from "../contexts/AuthContext";

const validRoutes = {
  "Home": "/",
  "About Us": "/about",
  "Contact Us": "/contact",
  "Shop": "/products",
  "Blog": "/blog"
};

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "700", "800", "900"]
})


export function Header() {
  const { cart } = useAuth();
  const [isClicked, setIsClicked] = useState(false)
  const [isCart, setIsCart] = useState(false)
  let cartTotal = 0
  cart.forEach((item) => {
    cartTotal += parseFloat(item.price.replace('$', ''))
  })


  const handleMouseEnter = () => {
    setIsCart(true)
  }

  const handleMouseLeave = () => {
    setIsCart(false)
  }

  return (
    // <div className="bg-white w-full">
    <>
      <div className={`${outfit.className} bg-[#1f4e3d] py-2 hidden text-white sm:flex flex-row justify-between items-center gap-2 lg:px-20`}>
        <div className="flex flex-row items-center gap-4 lg:mx-0 mx-auto">
          <div className="flex flex-row items-center gap-2">
            <img
              className="h-5 w-5 inline"
              src="https://icones.pro/wp-content/uploads/2021/03/symbole-de-l-horloge-jaune-300x300.png"
            />

            <p className="">
              Opening Hours : Sunday–Friday, 08:00 am – 05:00 pm
            </p>

          </div>
          <div className="border-r h-5 hidden md:block lg:hidden border-r-white"></div>

          <div className="flex flex-row items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#d4af37"  // gold color
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-7 h-7 bg-[#204e3a] p-1 rounded"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.1 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.81.37 1.6.72 2.34a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.37 6.37l1.27-1.27a2 2 0 0 1 2.11-.45c.74.35 1.53.6 2.34.72a2 2 0 0 1 1.73 2z" />
            </svg>


            <p className="">+4733378901</p>

          </div>
        </div>
        <div className="lg:flex hidden gap-6">
          <img src="facebook (2).png" className="h-6 w-6" />
          <img src="twitter.png" className="h-6 w-6" />
          <img src="youtube.png" className="h-6 w-6" />
          <img src="linkdin.png" className="h-6 w-6" />
        </div>
      </div>


      <header className="w-full sticky top-0 dark:bg-black dark:text-white bg-white z-50 shadow-md">
        <div className="flex relative flex-row md:px-20 sm:px-14 px-4 items-center justify-between py-4">
          <MobileDropDown isClicked={isClicked} setIsClicked={setIsClicked} />

          <img
            src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo.png&w=828&q=75"
            alt="Logo"
            className="h-16 w-auto dark:hidden"
          />
          <img
            src="logo-black.png"
            alt="Logo"
            className="h-16 w-auto hidden dark:block"
          />

          <div className="hidden lg:flex flex-row gap-6">
            <DropDown itemHead={"Home"} itemList={["Home Agriculture", "Home Farming", "Agriculture Shop", "Diary Farm"]} />
            <DropDown itemHead={"Pages"} itemList={["About Us", "Team", "Team Details", "Contact Us", "Register", "Login", "Error Page"]} />
            <DropDown itemHead={"Projects"} itemList={["Project", "Project Details"]} />
            <DropDown itemHead={"Services"} itemList={["Services Version One", "Services Version Two", "Services Details"]} />
            <DropDown itemHead={"Blog"} itemList={["Blog Standard", "Blog With Sidebar", "Blog Grid Two Column", "Blog Grid Three Column", "Blog Single", "Blog Single With Sidebar"]} />
            <DropDown itemHead={"Shop"} itemList={["Shop Product", "Shop Single", "Shop Single Version Two", "Cart", "Checkout"]} />
          </div>

          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="flex items-center gap-4">
            <div className="relative bg-blue-100 p-3 rounded-full cursor-pointer">
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cart.length}
              </span>
              🛒
              {
                isCart && (
                  <div className={`${outfit.className} absolute w-74 right-0 top-15 bg-white dark:bg-black p-6 dark:text-white`}>
                    {
                      cart.map((item, index) => (
                        <div className="flex border-b border-b-gray-300 flex-row gap-4 items-center py-3" key={index}>
                          <img className="w-16 h-16" src={item.img}></img>
                          <div>
                            <h1 className="text-md font-semibold mb-2">{item.prodName}</h1>
                            <div className="flex flex-row gap-3 items-center">
                              <p className="text-gray-500 font-semibold">1x</p>
                              <p className="text-[#49a760] font-semibold text-lg">{item.price}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                    <div className="py-4 flex flex-row items-center justify-between">
                      <p className="font-semibold">Total</p>
                      <p>: ${cartTotal}.00</p>
                    </div>
                    <button className="text-white text-md font-semibold w-full py-2 mb-2 rounded-md bg-[#1f4e3d]">
                      CART
                    </button>
                    <button className="text-black text-md font-semibold w-full py-2 rounded-md bg-[#f7c35f]">
                      CHECKOUT
                    </button>
                  </div>
                )
              }

            </div>

            <button className={`${outfit.className} cursor-pointer font-semibold border-2 lg:block hidden border-yellow-600 px-10 py-3 rounded-full hover:bg-yellow-600 hover:text-white`}>
              Register
            </button>
          </div>
          <img className="absolute dark:hidden md:mt-20 mt-20 inset-0 z-0" src="/header.png"></img>

        </div>
      </header>
    </>
  );
}

function DropDown({ itemHead, itemList }) {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false)

  const handleMouseEnter = () => {
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    setIsOpen(false)
  }


  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
      className={`${outfit.className} cursor-pointer relative hidden lg:flex items-center gap-6`}
    >
      <div onClick={() => {
        if (itemHead in validRoutes)
          router.push(validRoutes[itemHead])
        else
          router.push("/")
      }} className="flex gap-2 flex-row items-center">
        <p className="font-semibold">{itemHead}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
      {
        isOpen && (
          <div className="absolute z-100 top-6 -left-4 bg-white dark:bg-black w-70 p-6 shadow-2xl gap-2 flex flex-col">
            {
              itemList.map((item, index) => (
                <p onClick={() => {
                  if (item in validRoutes)
                    router.push(validRoutes[item])
                  else
                    router.push("/")
                }} key={index}>{item}</p>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

function MobileDropDown({ isClicked, setIsClicked }) {
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsClicked(false);
      }
    }

    if (isClicked) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isClicked, setIsClicked]);

  return (
    <div ref={menuRef} className={`lg:hidden ${outfit.className}`}>
      <svg
        onClick={() => {
          setIsClicked(true)
        }}
        fill="currentColor"
        className="dark:text-white h-7 w-7 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
        <path d={"M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"}></path>
      </svg>
      {
        isClicked && (
          <div className="p-6 flex flex-col fixed h-full overflow-y-scroll sm:w-[45%] top-0 left-0 w-[80%] z-100 dark:bg-black bg-white">
            <div className="flex flex-row items-center mb-6 justify-between">
              <img
                src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo.png&w=828&q=75"
                alt="Logo"
                className="sm:h-16 h-12 w-auto dark:hidden"
              />
              <img
                src="logo-black.png"
                alt="Logo"
                className="sm:h-16 h-12 w-auto dark:block hidden"
              />

              <div
                onClick={() => {
                  setIsClicked(false)
                }}
                className="cursor-pointer h-8 flex items-center flex-col justify-center w-8 border-2 rounded-full border-gray-200">
                <p className="text-xs font-bold">✕</p>
              </div>
            </div>
            <SubMenuMobile itemHead={"Home"} itemList={["Home Agriculture", "Home Farming", "Agriculture Shop", "Diary Farm"]} />
            <SubMenuMobile itemHead={"Pages"} itemList={["About Us", "Team", "Team Details", "Contact Us", "Register", "Login", "Error Page"]} />
            <SubMenuMobile itemHead={"Projects"} itemList={["Project", "Project Details"]} />
            <SubMenuMobile itemHead={"Services"} itemList={["Services Version One", "Services Version Two", "Services Details"]} />
            <SubMenuMobile itemHead={"Blog"} itemList={["Blog Standard", "Blog With Sidebar", "Blog Grid Two Column", "Blog Grid Three Column", "Blog Single", "Blog Single With Sidebar"]} />
            <SubMenuMobile itemHead={"Shop"} itemList={["Shop Product", "Shop Single", "Shop Single Version Two", "Cart", "Checkout"]} />
          </div>
        )
      }
    </div>
  )
}

function SubMenuMobile({ itemHead, itemList }) {
  const router = useRouter();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)

  return (
    <div>
      <div onClick={() => {
        setIsSubMenuOpen(!isSubMenuOpen)
      }} className="flex cursor-pointer flex-row justify-between items-center border-b-gray-200 font-semibold py-4 border-b">
        <p onClick={() => {
          if (itemHead in validRoutes)
            router.push(validRoutes[itemHead])
          else
            router.push("/")
        }} className="">
          {itemHead}
        </p>

        {isSubMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 lucide lucide-chevron-down-icon lucide-chevron-down"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 lucide lucide-chevron-right-icon lucide-chevron-right"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        )}
      </div>

      {isSubMenuOpen && (
        <div className="flex ml-4 flex-col">
          {itemList.map((item, index) => {
            return (
              <p onClick={() => {
                if (item in validRoutes)
                  router.push(validRoutes[item])
                else
                  router.push("/")
              }} key={index} className="cursor-pointer border-b-gray-200 py-3 border-b font-semibold text-sm">{item}</p>
            )
          })}

        </div>
      )}
    </div>
  )
}
