import { Shadows_Into_Light_Two, Outfit } from "next/font/google";

const shadows = Shadows_Into_Light_Two({
    subsets: ["latin"],
    weight: "400",
});

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "600", "700", "800", "900"]
})

export default function ContactForm() {
    return (
        <div className="dark:bg-black bg-gray-200 py-26 flex flex-col lg:flex-row">
            <img className="-ml-24 h-120 z-1000 self-end -mb-20 hidden lg:block" src="/man.png"></img>
            <Message />
            <Contact />
        </div>
    )
}

function Message() {
    return (
        <div className="bg-white dark:bg-gray-800 lg:-ml-20 lg:py-20 lg:px-26 px-6 py-12 mx-4 lg:flex-[50%] flex flex-col items-center gap-2">
            <h3 className={`text-green-700 dark:text-[#f7c35f] self-start ${shadows.className} text-2xl`}>Have Questions?</h3>
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

function Contact() {
    return (
        <div className="dark:text-white lg:flex-[50%] flex flex-col gap-6 lg:py-20 lg:px-12 py-4 px-6">
            <h2 className={`font-semibold relative self-start ${outfit.className} mt-4 mb-4 text-5xl`}>
                Contact&nbsp; Information
            </h2>
            <p className={`text-gray-500 dark:text-white text-md ${outfit.className}`}>Plan upon yet way get cold spot its week. Almost do<br /> am or limits hearts. Resolve parties but why she<br /> shewing.</p>
            <div>
                <h2 className="text-lg font-semibold">Hotline</h2>
                <p>+4733378901</p>
            </div>
            <div>
                <h2 className="text-lg font-semibold">Our Location</h2>
                <p className={`text-gray-500 dark:text-white text-md ${outfit.className}`}>55 Main Street, The Grand Avenue 2nd Block,<br />New York City</p>
            </div>
            <div>
                <h2 className="text-lg font-semibold">Office Email</h2>
                <p>info@agrul.com</p>
            </div>
        </div>
    )
}