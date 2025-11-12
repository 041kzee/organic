"use client"

import {useRouter} from "next/navigation"

export default function PhotoHead({ pageName, imageUrl, pageHead }) {
    const router = useRouter();
    return (
        <div>
            <div className="relative">
                <img
                    src={imageUrl}
                    className="max-h-115 saturate-180 w-full "
                >
                </img>
                <div className="absolute inset-0 bg-gray-800/50"></div>
                <div className="absolute flex gap-4 justify-center items-center flex-col inset-0">
                    <h1 className="text-white font-semibold text-4xl sm:text-5xl">{pageHead}</h1>
                    <div className="flex flex-row items-center gap-2">
                        <div onClick={() => {
                            router.push("/")
                        }}
                            className="text-white flex flex-row gap-1.5 items-center hover:text-yellow-500 cursor-pointer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                width="24"
                                height="24"
                                fill="currentColor"
                                aria-hidden="true"
                                role="img"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d={"M256 48 L66.627 204.8 A24 24 0 0 0 64 218.133 V392 a32 32 0 0 0 32 32 H168 a32 32 0 0 0 32-32 V312 h112 v80 a32 32 0 0 0 32 32 h72 a32 32 0 0 0 32-32 V218.133 a24 24 0 0 0-2.627-13.333 L256 48 Z M352 56 a16 16 0 0 1 16-16 h32 a12 12 0 0 1 12 12 v88 a12 12 0 0 1-12 12 h-36 a16 16 0 0 1-16-16 V56 Z M224 288 H288 v136 H224 V288 Z"}
                                />
                            </svg>
                            <p className="font-semibold text-lg">Home</p>
                        </div>
                        <p className="font-semibold text-lg text-yellow-500">&gt; {pageName}</p>

                    </div>
                </div>
            </div>
        </div>
    )

}