import PhotoHead from "../components/PhotoHead"
import { Outfit } from "next/font/google"

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "600", "700", "800", "900"]
})

export default function RegisterPage() {
    return (
        <div className={`w-full ${outfit.className}`}>
            <PhotoHead pageName={"Register"} imageUrl={"/contact.jpg"} pageHead={"Register Page"} />
            <div className="bg-[#e9f1ee]">
                <div className="md:px-30 px-6 py-10 flex lg:flex-row flex-col">
                    <div className="flex-1">
                        <img className="" src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F14.jpg&w=1920&q=75"></img>
                    </div>
                    <div className="flex-1 bg-white flex flex-col items-center justify-center lg:p-0 py-8">
                        <div className="flex flex-col gap-4 items-center justify-center w-[70%]">

                            <h1 className="text-3xl self-start font-bold text-transparent bg-clip-text bg-linear-to-r from-[#49a760] to-[#fcc51b]">
                                CREATE AN ACCOUNT
                            </h1>
                            <p className="text-gray-500 self-start text-md ">Enter your details to create a new account</p>
                            <input
                                className="w-full bg-gray-200 px-4 py-3 rounded-lg text-black placeholder:text-gray-600 focus:bg-white"
                                type="email"
                                placeholder="Email*"
                            />
                            <input
                                className="w-full bg-gray-200 px-4 py-3 rounded-lg text-black placeholder:text-gray-600 focus:bg-white"
                                type="password"
                                placeholder="Password*"
                            />
                            <input
                                className="w-full bg-gray-200 px-4 py-3 rounded-lg text-black placeholder:text-gray-600 focus:bg-white"
                                type="password"
                                placeholder="Confirm Password*"
                            />
                            <button className="w-full bg-[#f7c35f] py-3 rounded-lg font-semibold cursor-pointer hover:bg-[#1f4e3d] hover:text-white">
                                REGISTER
                            </button>
                            <h2 className="font-semibold text-2xl">
                                Or Register With
                            </h2>
                            <div className="w-full flex flex-row justify-between">
                                <button className="border border-gray-200 px-10 py-2 font-semibold text-md">
                                    <img className="h-8 w-8 inline-block mr-2" src="red-google.png"></img>
                                    Google
                                </button>
                                <button className="border border-gray-200 px-10 py-2 font-semibold text-md">
                                    <img className="h-8 w-8 inline-block mr-2" src="round-facebook.png"></img>
                                    Facebook
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}