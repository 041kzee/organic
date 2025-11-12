"use client"
import PhotoHead from "../components/PhotoHead"
import { Outfit } from "next/font/google"
import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "600", "700", "800", "900"]
})

const items = [
    {
        "img": "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproducts%2F1.png&w=640&q=75",
        "type": "Crop, Organic",
        "name": "Strawberry",
        "price": "$12.00"
    },
    {
        "img": "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproducts%2F2.png&w=640&q=75",
        "type": "Vegetables, Winter",
        "name": "Organic Carrot",
        "price": "$5.00"
    },
    {
        "img": "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproducts%2F3.png&w=640&q=75",
        "type": "Fruits, Juicy",
        "name": "Fresh Red Seedless",
        "price": "$14.00"
    },
    {
        "img": "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproducts%2F4.png&w=640&q=75",
        "type": "Fruits, Juicy",
        "name": "Organic Sweet Corn",
        "price": "$8.00"
    },
    {
        "img": "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproducts%2F5.png&w=640&q=75",
        "type": "Fish, Health",
        "name": "Fresh Fish",
        "price": "$25.00"
    },
    {
        "img": "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproducts%2F6.png&w=640&q=75",
        "type": "Seasonal, Fruit",
        "name": "Fresh Banana",
        "price": "$13.00"
    },
    {
        "img": "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproducts%2F7.png&w=640&q=75",
        "type": "Seasonal, Vegetables",
        "name": "Organic Cucumber",
        "price": "$3.00"
    },
    {
        "img": "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproducts%2F8.png&w=640&q=75",
        "type": "Vegetables, Fruit",
        "name": "Green Avocado",
        "price": "$6.00"
    },
    {
        "img": "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproducts%2F4.png&w=640&q=75",
        "type": "Fruits, Juicy",
        "name": "Organic Sweet Corn",
        "price": "$8.00"
    },
    {
        "img": "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproducts%2F1.png&w=640&q=75",
        "type": "Crop, Organic",
        "name": "Strawberry",
        "price": "$12.00"
    },
    {
        "img": "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproducts%2F7.png&w=640&q=75",
        "type": "Seasonal, Vegetables",
        "name": "Organic Cucumber",
        "price": "$3.00"
    },
    {
        "img": "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproducts%2F3.png&w=640&q=75",
        "type": "Fruits, Juicy",
        "name": "Fresh Red Seedless",
        "price": "$14.00"
    },
    {
        "img": "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproducts%2F6.png&w=640&q=75",
        "type": "Seasonal, Fruit",
        "name": "Fresh Banana",
        "price": "$13.00"
    },
    {
        "img": "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproducts%2F5.png&w=640&q=75",
        "type": "Fish, Health",
        "name": "Fresh Fish",
        "price": "$25.00"
    },
    {
        "img": "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproducts%2F8.png&w=640&q=75",
        "type": "Vegetables, Fruit",
        "name": "Green Avocado",
        "price": "$6.00"
    },
    {
        "img": "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproducts%2F2.png&w=640&q=75",
        "type": "Vegetables, Winter",
        "name": "Organic Carrot",
        "price": "$5.00"
    },
    {
        "img": "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproducts%2F5.png&w=640&q=75",
        "type": "Fish, Health",
        "name": "Fresh Fish",
        "price": "$25.00"
    },
    {
        "img": "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproducts%2F7.png&w=640&q=75",
        "type": "Seasonal, Vegetables",
        "name": "Organic Cucumber",
        "price": "$3.00"
    },
    {
        "img": "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproducts%2F1.png&w=640&q=75",
        "type": "Crop, Organic",
        "name": "Strawberry",
        "price": "$12.00"
    },
    {
        "img": "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproducts%2F3.png&w=640&q=75",
        "type": "Fruits, Juicy",
        "name": "Fresh Red Seedless",
        "price": "$14.00"
    }
]

export default function ProductPage() {
    const [drop, setDrop] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [grid, setGrid] = useState(true)
    const itemsPerPage = 8;
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentItems = items.slice(start, end)

    return (
        <div className={`w-full ${outfit.className}`}>
            <PhotoHead pageName={"Shop"} imageUrl={"/contact.jpg"} pageHead={"Products"} />
            <div className="bg-[#e9f1ee] dark:bg-black pb-12">
                <Head drop={drop} setDrop={setDrop} grid={grid} setGrid={setGrid} />
                <div className={`grid gap-4 justify-between max-w-[80%] mx-auto
                    ${grid
                        ? "lg:grid-cols-4 md:grid-cols-2 grid-cols-1"
                        : "lg:grid-cols-2 grid-cols-1"
                    }
                `}>
                    {
                        currentItems.map((item, index) => (
                            <ProductCard
                                key={index}
                                imgUrl={item.img}
                                type={item.type}
                                name={item.name}
                                price={item.price}
                                grid={grid}
                                setGrid={setGrid}
                            />
                        ))
                    }
                </div>
                <div className={`flex flex-row justify-center gap-2 mt-10`}>
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
                    (currentPage > 1 && currentPage <= 3) && setCurrentPage(currentPage - 1)
                }}
                className="rounded-full w-10 h-10 flex flex-col text-lg font-semibold items-center justify-center border bg-white hover:bg-gray-300 cursor-pointer border-gray-300">
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
                className="rounded-full w-10 h-10 flex flex-col text-lg font-semibold items-center justify-center border bg-white hover:bg-gray-300 cursor-pointer border-gray-300"
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
                setCurrentPage(no - 1)
            }}
            className={`rounded-full w-10 h-10 flex flex-col text-lg font-semibold items-center justify-center border cursor-pointer border-gray-300 
                ${currentPage === no - 1
                    ? "bg-[#49a760] text-white"
                    : "bg-white hover:text-blue-500 hover:bg-gray-300"
                }
        `}>
            {no - 1}
        </div>
    )
}


function ProductCard({ imgUrl, type, name, price, grid, setGrid }) {
        const { cart, setCart } = useAuth();

    return (
        <div className={`rounded-lg bg-white dark:bg-gray-800 dark:text-white py-8 flex items-center
            ${grid
                ? "flex-col gap-4 px-8"
                : "flex-row md:gap-8 sm:gap-8 gap-2 md:px-16 px-2 md:justify-start justify-center"
            }
        `}>
            <img className="w-30 h-30" src={`${imgUrl}`}></img>
            <div className={`flex flex-col gap-4 
            ${grid
                    ? "items-center"
                    : ""
                }
            `}>
                <p className="text-gray-600 dark:text-gray-400 font-semibold text-xs">
                    {type.toUpperCase()}
                </p>
                <p className="font-bold text-xl cursor-pointer hover:text-[#49a760]">
                    {name}
                </p>
                <p className="text-[#49a760] text-2xl font-bold">
                    {price}
                </p>
                <button className="hover:bg-[#f7c35f] cursor-pointer border-2 px-3 py-2 rounded-2xl border-[#f7c35f] flex flex-row items-center justify-center gap-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6 dark:text-white"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={"M6 7h12l-1 12H7L6 7z"}
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={"M9 7a3 3 0 0 1 6 0"}
                        />
                    </svg>
                    <p onClick={() => {
                        setCart(prev => [...prev, { prodName: name, price: price, img: imgUrl }])
                        console.log(cart)
                    }} className="text-sm font-semibold">ADD TO CART</p>
                </button>
            </div>
        </div>
    )
}

function Head({ drop, setDrop, grid, setGrid }) {
    return (
        <div className="flex lg:flex-row flex-col dark:text-white lg:gap-0 gap-4 justify-between py-12 mx-auto items-center max-w-[80%]">
            <div className="flex flex-row gap-2">
                <div
                    onClick={() => setGrid(true)}
                    className={`w-12 h-12 dark:text-white cursor-pointer rounded-md border flex flex-col justify-center items-center 
                    ${grid
                            ? "text-white bg-[#49a760] border-[#49a760]"
                            : "text-black border-gray-300"
                        }
                `}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6 "
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={"M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z"}
                        />
                    </svg>
                </div>
                <div
                    onClick={() => setGrid(false)}
                    className={`w-12 h-12 dark:text-white cursor-pointer rounded-md border flex flex-col justify-center items-center 
                    ${grid === false
                            ? "text-white bg-[#49a760] border-[#49a760]"
                            : "text-black border-gray-300"
                        }
                `}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="w-5 h-5"
                    >
                        <path d={"M48 48C21.5 48 0 69.5 0 96s21.5 48 48 48 48-21.5 48-48S74.5 48 48 48zm0 160c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm0 160c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zM160 88c0-13.3 10.7-24 24-24h304c13.3 0 24 10.7 24 24v16c0 13.3-10.7 24-24 24H184c-13.3 0-24-10.7-24-24V88zm0 160c0-13.3 10.7-24 24-24h304c13.3 0 24 10.7 24 24v16c0 13.3-10.7 24-24 24H184c-13.3 0-24-10.7-24-24v-16zm0 160c0-13.3 10.7-24 24-24h304c13.3 0 24 10.7 24 24v16c0 13.3-10.7 24-24 24H184c-13.3 0-24-10.7-24-24v-16z"} />
                    </svg>
                </div>
            </div>
            <div className="flex md:flex-row flex-col items-center gap-4">
                <p className="text-gray-500 dark:text-white font-semibold">
                    Showing 1-8 of 20 results
                </p>
                <div className="relative">
                    <div
                        onClick={() => { setDrop(!drop) }}
                        className="border cursor-pointer dark:border-white flex flex-row justify-between items-center gap-4 border-black px-3 py-2"
                    >
                        <p>Sort by Latest</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 text-black dark:text-white"
                        >
                            <path d={"M7 10l5 5 5-5H7z"} />
                        </svg>
                    </div>
                    {
                        drop &&
                        <div className="absolute bg-white dark:bg-black items-center left-0 flex flex-col border border-black w-41 py-3">
                            <div className="hover:bg-gray-300 w-full text-center cursor-pointer">Sort by Popular</div>
                            <div className="hover:bg-gray-300 w-full text-center cursor-pointer">Sort by Latest</div>
                            <div className="hover:bg-gray-300 w-full text-center cursor-pointer">Sort by Relevance</div>
                            <div className="hover:bg-gray-300 w-full text-center cursor-pointer">Sort by Recent</div>
                        </div>
                    }
                </div>
            </div>
        </div>

    )
}

