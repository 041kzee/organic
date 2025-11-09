'use client';
import { Outfit } from "next/font/google"
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation"

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
  const [isClicked, setIsClicked] = useState(false)

  return (
    // <div className="bg-white w-full">
    <>
      <div className="bg-green-800 hidden text-white sm:flex flex-row items-center gap-2 p-2 h-10">
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
            <MobileDropDown isClicked={isClicked} setIsClicked={setIsClicked} />

          <img
            src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo.png&w=828&q=75"
            alt="Logo"
            className="h-12 w-auto"
          />
          <div className="hidden lg:flex flex-row gap-6">
            <DropDown itemHead={"Home"} itemList={["Home Agriculture", "Home Farming", "Agriculture Shop", "Diary Farm"]} />
            <DropDown itemHead={"Pages"} itemList={["About Us", "Team", "Team Details", "Contact Us", "Register", "Login", "Error Page"]} />
            <DropDown itemHead={"Projects"} itemList={["Project", "Project Details"]} />
            <DropDown itemHead={"Services"} itemList={["Services Version One", "Services Version Two", "Services Details"]} />
            <DropDown itemHead={"Blog"} itemList={["Blog Standard", "Blog With Sidebar", "Blog Grid Two Column", "Blog Grid Three Column", "Blog Single", "Blog Single With Sidebar"]} />
            <DropDown itemHead={"Shop"} itemList={["Shop Product", "Shop Single", "Shop Single Version Two", "Cart", "Checkout"]} />
          </div>

          <div className="flex items-center gap-4">
            <div className="relative bg-blue-100 p-3 rounded-full cursor-pointer">
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
              🛒
            </div>

            <button className="border-2 lg:block hidden border-yellow-600 px-4 py-2 rounded-full hover:bg-yellow-600 hover:text-white">
              Register
            </button>
          </div>
          <img className="absolute md:mt-16 mt-20 inset-0 z-0" src="/header.png"></img>

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
        <img className="h-4 w-4" src="/dropdown-head.svg"></img>
      </div>
      {
        isOpen && (
          <div className="absolute z-100 top-6 -left-4 bg-white w-70 p-6 shadow-2xl gap-2 flex flex-col">
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
      // if clicked outside the menu and hamburger icon, close it
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsClicked(false);
      }
    }

    if (isClicked) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // cleanup on unmount
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isClicked, setIsClicked]);

  return (
    <div ref={menuRef} className={`lg:hidden ${outfit.className}`}>
      <svg
        onClick={() => {
          setIsClicked(true)
        }}
        className="dark:text-white h-7 w-7 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
        <path d={"M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"}></path>
      </svg>
      {
        isClicked && (
          <div className="p-6 flex flex-col fixed h-full overflow-y-scroll sm:w-[45%] top-0 left-0 w-[80%] z-100 bg-white">
            <div className="flex flex-row items-center mb-6 justify-between">
              <img
                src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo.png&w=828&q=75"
                alt="Logo"
                className="sm:h-16 h-12 w-auto"
              />
              <div className="h-8 flex items-center flex-col justify-center w-8 border-2 rounded-full border-gray-200">
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
