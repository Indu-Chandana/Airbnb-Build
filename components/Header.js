import Image from "next/image";
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/solid";

function Header() {
    return (
        <header className=" sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-3 px-5 md:px-10 ">
            {/* left */}
            <div className="relative flex h-10 items-center cursor-pointer my-auto">
                <Image
                src="https://links.papareact.com/qd3"
                layout="fill"
                objectFit='contain' //it keep photo orginal quality and size 
                objectPosition='left'
                />
            </div>

            {/* middle */}
            <div className="flex items-center md:border-2 py-1 justify-between rounded-full md:shadow-sm">
                <input type="text" placeholder="Start your search" className=" pl-2  bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"/>
                <SearchIcon className=" hidden md:inline-flex h-8 bg-red-400 rounded-full text-white p-2 cursor-pointer md:mx-2"/>
            </div>

            {/* right */}
            <div className="flex items-center space-x-4 justify-end text-gray-500">
                <p className="hidden md:inline-flex cursor-pointer">Become a Host</p>
                <GlobeAltIcon className=" hidden sm:inline-flex h-6"/>
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <MenuIcon className="h-6"/>
                    <SearchIcon className="h-6"/>
                </div>
            </div>

        </header>
    )
}

export default Header
