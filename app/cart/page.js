"use client"

import { useAuth } from "../contexts/AuthContext"
import PhotoHead from "../components/PhotoHead"
import { Outfit } from "next/font/google"
import { useState } from "react"

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "600", "700", "800", "900"]
})

export default function CartPage() {
    const { cart, cartTotal } = useAuth();
    return (
        <div className={`${outfit.className}`}>
            <PhotoHead pageName={"Cart"} imageUrl={"/contact.jpg"} pageHead={"Cart Page"} />
            <div className="dark:bg-black py-20">
                <div className="flex flex-col justify-center items-center max-w-[80%] mx-auto">
                    <table className="dark:bg-gray-800 dark:text-white border border-gray-200 w-full table-auto">
                        <thead className="bg-gray-200 text-left">
                            <tr className="text-gray-600">
                                <th className="p-4">Remove</th>
                                <th className="p-4">Thumbnail</th>
                                <th className="p-4">Product</th>
                                <th className="p-4">Price</th>
                                <th className="p-4">Quantity</th>
                                <th className="p-4">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody className="text-left">
                            {cart.map((item, index) => (
                                <tr key={index} className="border-b border-b-gray-200">
                                    <td className="p-4">
                                        <div className="flex flex-col bg-[#ff6262] rounded-full items-center justify-center cursor-pointer w-6 h-6">
                                            <p className=" text-white text-sm font-semibold">✕</p>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <img src={item.img} className="w-18 h-18">

                                        </img>
                                    </td>
                                    <td className="p-4 font-semibold text-lg">{item.prodName}</td>
                                    <td className="p-4 dark:text-white text-gray-600 font-semibold text-xl">
                                        ${item.price}.00
                                    </td>
                                    <td className="p-4">
                                        <Quantity no={item.quantity}/>
                                    </td>
                                    <td className="p-4 dark:text-white text-gray-600 font-semibold text-xl">
                                        ${item.price * item.quantity}.00
                                    </td>
                                </tr>
                            ))}
                            <tr className="">
                                <td className="p-4" colSpan={3}>
                                    <input className="outline-none w-[45%] border mr-4 border-gray-200 placeholder:text-gray-600 rounded-lg p-4" placeholder="Coupon Code"></input>
                                    <button className="font-semibold hover:text-white hover:bg-[#1f4e3d] cursor-pointer px-8 py-4 bg-[#f7c35f] rounded-lg">Apply Coupon</button>
                                </td>
                                <td colSpan={2}></td>
                                <td className="p-4">
                                    <button className="font-semibold hover:text-white hover:bg-[#1f4e3d] cursor-pointer p-4 w-full bg-[#f7c35f] rounded-lg">Checkout</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="max-w-[80%] mx-auto mt-10 dark:text-white">
                    <h2 className="font-semibold text-3xl mb-6">Cart totals</h2>
                    <table className="dark:bg-gray-800 border-collapse border border-gray-200 w-full font-semibold">
                        <tbody>
                            <tr>
                                <td className="border border-gray-200 p-4">Subtotal</td>
                                <td className="border border-gray-200 p-4">${cartTotal}.00</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-200 p-4">Shipping</td>
                                <td className="border border-gray-200 p-4">
                                    <p className="text-gray-600 dark:text-white font-medium">Free shipping</p>
                                    <p className="text-gray-600 dark:text-white font-medium">Shipping to Australia.</p>
                                    <p>Change address</p>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-200 p-4">Total</td>
                                <td className="border border-gray-200 p-4 font-medium">${cartTotal}.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

function Quantity({no}) {
    const [quantity, setQuantity] = useState(no)
    return (
        <input
            onChange={(e) => {
                setQuantity(e.target.value)
            }}
            className="border p-2 w-16" value={quantity} type="number"
        >
        </input>

    )
}