import React from 'react'

const NavIcons = () => {
    return (
        <div className='hidden md:flex items-center gap-4 xl:gap-6'>
            <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 text-gray-800 dark:text-white hover:border-b focus:ring-4 focus:ring-gray-300">
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                    <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg> */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                </svg>
                <span className="text-sm text-white dark:text-white  font-medium">Gifts</span>
            </div>

            <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 text-gray-800 dark:text-white hover:border-b focus:ring-4 focus:ring-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                </svg>
                <span className="text-sm text-white dark:text-white  font-medium">Favorites</span>
            </div>

            <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 text-gray-800 dark:text-white hover:border-b focus:ring-4 focus:ring-gray-300">
                <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">3</span>
                </div>
                <span className="text-sm text-white dark:text-white  font-medium">Cart</span>
            </div>

            <div className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                <span className="text-sm text-white font-medium">Sign in</span>
            </div>
        </div>
    )
}

export default NavIcons;