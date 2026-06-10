import React from "react";

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        5.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}
