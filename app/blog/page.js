"use client"
import PhotoHead from "../components/PhotoHead"

import { Outfit } from "next/font/google"
import { useState } from "react"

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "600", "700", "800", "900"]
})

const blogs = [
    {
        "date": "25",
        "year": "Aug, 2025",
        "heading": "Announcing if attachment resolution sentiments.",
        "author": "Md Sohag",
        "exactDate": "25 Aug, 2025",
        "desc": "Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now.",
        "img": "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1-full.jpg&w=1920&q=75"
    },
    {
        "date": "26",
        "year": "Aug, 2025",
        "heading": "Minuter him own clothes but observe as country.",
        "author": "Md Sohag",
        "exactDate": "26 Aug, 2025",
        "desc": "Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now.",
        "img": "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F3-full.jpg&w=1920&q=75"
    },
    {
        "date": "08",
        "year": "Aug, 2025",
        "heading": "Overcame breeding point concerns has terminate",
        "author": "Md Sohag",
        "exactDate": "08 Aug, 2025",
        "desc": "Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now.",
        "img": "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2-full.jpg&w=1920&q=75"
    },
    {
        "date": "14",
        "year": "Sep, 2025",
        "heading": "Securing better habits amidst daily endeavors.",
        "author": "Md Sohag",
        "exactDate": "14 Sep, 2025",
        "desc": "Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now.",
        "img": "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F4-full.jpg&w=1920&q=75"
    },
    {
        "date": "18",
        "year": "Sep, 2025",
        "heading": "Steadily improving trends in urban agriculture.",
        "author": "Md Sohag",
        "exactDate": "18 Sep, 2025",
        "desc": "Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now.",
        "img": "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F8-full.jpg&w=1920&q=75"
    },
    {
        "date": "23",
        "year": "Sep, 2025",
        "heading": "Discovering charm through mindful creativity.",
        "author": "Md Sohag",
        "exactDate": "23 Sep, 2025",
        "desc": "Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now.",
        "img": "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F9-full.jpg&w=1920&q=75"
    },
    {
        "date": "02",
        "year": "Oct, 2025",
        "heading": "Innovations shaping the green future ahead.",
        "author": "Md Sohag",
        "exactDate": "02 Oct, 2025",
        "desc": "Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now.",
        "img": "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1-full.jpg&w=1920&q=75"
    },
    {
        "date": "10",
        "year": "Oct, 2025",
        "heading": "Balancing efficiency and sustainability goals.",
        "author": "Md Sohag",
        "exactDate": "10 Oct, 2025",
        "desc": "Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now.",
        "img": "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F3-full.jpg&w=1920&q=75"
    },
    {
        "date": "21",
        "year": "Oct, 2025",
        "heading": "Harvesting ideas from the heart of simplicity.",
        "author": "Md Sohag",
        "exactDate": "21 Oct, 2025",
        "desc": "Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now.",
        "img": "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F4-full.jpg&w=1920&q=75"
    }
];

export default function ContactPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 3;
    const start = (currentPage - 1) * blogsPerPage;
    const end = start + blogsPerPage;
    const currentBlogs = blogs.slice(start, end)
    return (
        <div className="w-full">
       
            <PhotoHead pageName={"Blog"} imageUrl={"/contact.jpg"} pageHead={"Explore Blogs"} />
            <div className="flex flex-col items-center gap-6 py-26 bg-[#e9f1ee] dark:bg-black">
                {
                    currentBlogs.map((blog, index) => {
                        return (
                            <BlogCard key={index} imgUrl={blog.img} date={blog.date} year={blog.year} exactDate={blog.exactDate} heading={blog.heading} author={blog.author} desc={blog.desc} />
                        )
                    })
                }
                <div className={`flex flex-row justify-center gap-2  ${outfit.className}`}>
                    {
                        [1, 2, 3, 4, 5].map((no) => (
                            <Pages key={no} no={no} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

function Pages({ no, currentPage, setCurrentPage }) {
    if (no == 1) {
        return (
            <div 
            onClick={() => {
                (currentPage > 1 && currentPage <=3) && setCurrentPage(currentPage - 1) 
            }}
            className="w-10 h-10 flex flex-col text-lg font-semibold items-center justify-center border bg-white hover:bg-gray-300 cursor-pointer border-gray-300 rounded-sm">
                <img className="h-8 w-8" src={`
                ${currentPage == 1
                        ? "/cancel.svg"
                        : "/left.svg"
                    }
                `}>
                </img>
            </div>
        )
    }
    else if (no == 5) {
        return (
            <div
                onClick={() => {
                  (currentPage <= 2) && setCurrentPage(currentPage + 1) 
                }}
                className="w-10 h-10 flex flex-col text-lg font-semibold items-center justify-center border bg-white hover:bg-gray-300 cursor-pointer border-gray-300 rounded-sm"
            >
                <img className="h-8 w-8" src={`
                ${currentPage == 3
                        ? "/cancel.svg"
                        : "/right.svg"
                    }
                `}>

                </img>
            </div>
        )
    }

    return (
        <div
            onClick={() => {
                setCurrentPage(no-1)
            }}
            className={`w-10 h-10 flex flex-col text-lg font-semibold items-center justify-center border cursor-pointer border-gray-300 rounded-sm
                ${
                    currentPage === no-1
                    ? "bg-[#49a760] text-white"
                    : "bg-white hover:text-blue-500 hover:bg-gray-300"
                }
        `}>
            {no-1}
        </div>
    )
}

function BlogCard({ date, year, exactDate, heading, author, desc, imgUrl }) {
    return (
        <div className={`lg:max-w-[60%] lg:m-0 md:mx-12 sm:mx-12 mx-2 dark:bg-gray-800 dark:text-white bg-white flex flex-col gap-6 ${outfit.className} rounded-b-lg`}>
            <div className="relative">
                <img src={`${imgUrl}`}></img>
                <div className="flex absolute -bottom-7 left-6 flex-col">
                    <p className="bg-[#f7c35f] w-23 flex flex-col items-center justify-center text-center h-15 text-4xl font-semibold">
                        {date}
                    </p>
                    <p className="bg-[#49a760] w-23 text-center text-sm text-white px-3 py-1 font-normal">
                        {year}
                    </p>
                </div>
            </div>
            <div className="px-6 flex flex-col gap-4 pt-8 pb-12 shadow-md rounded-b-lg">
                <div className="flex text-gray-500 flex-row gap-2">
                    <p>{author}</p>
                    <p className="text-black">•</p>
                    <p>{exactDate}</p>
                </div>
                <h1 className="text-4xl cursor-pointer hover:underline hover:text-[#49a760] font-semibold">
                    {heading}
                </h1>
                <p className="text-gray-500">
                    {desc}
                </p>
                <button className="bg-[#49a760] cursor-pointer hover:bg-[#1f4e3d] w-50 px-2 py-3 font-semibold text-lg rounded-lg text-white">
                    Learn More
                </button>
            </div>
        </div>

    )
}
