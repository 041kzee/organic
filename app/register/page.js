"use client"

import PhotoHead from "../components/PhotoHead"
import { Outfit } from "next/font/google"
import { useRouter } from "next/navigation"
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth"
import { auth } from "../firebase/firebase"


const outfit = Outfit({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "600", "700", "800", "900"]
})

export default function RegisterPage() {
   const router = useRouter()

   
    const handleRegister = async () => {
        try {
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const confirm = document.getElementById("confirm").value;

            if (password !== confirm) {
                alert("Passwords do not match");
                return;
            }

            const userCred = await createUserWithEmailAndPassword(auth, email, password);
            await sendEmailVerification(userCred.user);

            alert("Account created! A verification email has been sent.");
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className={`w-full ${outfit.className}`}>
            <PhotoHead pageName={"Register"} imageUrl={"/contact.jpg"} pageHead={"Register Page"} />
            <div className="bg-[#e9f1ee]  dark:text-white">
                <div className="md:px-30 dark:bg-black px-6 py-10 flex lg:flex-row flex-col">
                    <div className="flex-1">
                        <img className="" src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F14.jpg&w=1920&q=75"></img>
                    </div>
                    <div className="flex-1 bg-white dark:bg-gray-800 flex flex-col items-center justify-center lg:p-0 py-8">
                        <div className="flex flex-col gap-4 items-center justify-center w-[70%]">

                            <h1 className="text-3xl self-start font-bold text-transparent bg-clip-text bg-linear-to-r from-[#49a760] to-[#fcc51b]">
                                CREATE AN ACCOUNT
                            </h1>
                            <p className="text-gray-500 self-start text-md ">Enter your details to create a new account</p>
                            <input
                                className="w-full focus:outline-2 focus:outline-blue-200 dark:focus:outline-blue-400 bg-gray-200 px-4 py-3 rounded-lg text-black placeholder:text-gray-600 focus:bg-white"
                                type="email"
                                id="email"
                                placeholder="Email*"
                            />
                            <input
                                className="w-full focus:outline-2 focus:outline-blue-200 dark:focus:outline-blue-400 bg-gray-200 px-4 py-3 rounded-lg text-black placeholder:text-gray-600 focus:bg-white"
                                type="password"
                                id="password"
                                placeholder="Password*"
                            />
                            <input
                                className="w-full focus:outline-2 focus:outline-blue-200 dark:focus:outline-blue-400 bg-gray-200 px-4 py-3 rounded-lg text-black placeholder:text-gray-600 focus:bg-white"
                                type="password"
                                id="confirm"
                                placeholder="Confirm Password*"
                            />
                            <button
                             onClick={handleRegister}
                            className="w-full bg-[#f7c35f] py-3 rounded-lg font-semibold cursor-pointer hover:bg-[#1f4e3d] hover:text-white">
                                REGISTER
                            </button>
                            <h2 className="font-semibold text-2xl">
                                Or Register With
                            </h2>
                            <div className="w-full flex md:flex-row flex-col gap-4 md:justify-between">
                                <button onClick={() => {
                                    router.push("https://www.google.com")
                                }} className="border cursor-pointer border-gray-200 flex-1  py-2 font-semibold text-md">
                                    <img className="h-8 w-8 inline-block mr-2" src="red-google.png"></img>
                                    Google
                                </button>
                                <button onClick={() => {
                                    router.push("https://www.facebook.com/")
                                }} className="border cursor-pointer border-gray-200 flex-1  py-2 font-semibold text-md">
                                    <img className="h-8 w-8 inline-block mr-2" src="round-facebook.png"></img>
                                    Facebook
                                </button>
                            </div>
                            <p className="text-gray-600 dark:text-white font-semibold">
                                Already have an account? <span className="underline cursor-pointer text-[#49a760]">Login now</span>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}