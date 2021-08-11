import Image from "next/image";
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/solid";
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/dist/client/router";

function Header({ placeholder }) {

    const router = useRouter();

    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate ] = useState(new Date());
    const [noOfGuest, setNoOfGuest ] = useState('1');

    const handleSelect = (ranges) => { 
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const resetInput = () => {
        setSearchInput("")
    }
    //this router.push is very special. we can share the url someone else they can have ur results. we use redux we can not do that.
    //Like this 'http://localhost:3000/search?location=colombo&startDate=2021-08-10T18%3A30%3A00.000Z&endDate=2021-08-17T18%3A30%3A00.000Z&noOfGuest=1'
    const search = () => {
        router.push({
            pathname:'/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(), // it need to be a string. this is string representation and that can use to inside of url.
                endDate: endDate.toISOString(),
                noOfGuest,
            }
        })
        
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }
    return (
        <header className=" sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-3 px-5 md:px-10 ">
            {/* left */}
            <div onClick={() => router.push("/")} 
            className="relative flex h-10 items-center cursor-pointer my-auto"
            >
                <Image
                src="https://links.papareact.com/qd3"
                layout="fill"
                objectFit='contain' //it keep photo orginal quality and size 
                objectPosition='left'
                />
            </div>

            {/* middle */}
            <div className="flex items-center md:border-2 py-1 justify-between rounded-full md:shadow-sm">
                <input
                value={searchInput} //can't type anything
                onChange={(e) => setSearchInput(e.target.value)} //this time u can type anything 
                type="text" placeholder={placeholder ||"Start your search"} className=" pl-2  bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"/>
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
                                               {/* this class can do same spacing with x axies (col-span-3 mx-auto) */}
            {searchInput && <div className="flex flex-col col-span-3 mx-auto"> 
                <DateRangePicker 
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={["#FD5B61"]}
                onChange={handleSelect}
                />
                <div className="flex items-center border-b mb-4">
                    <h2 className="pl-2 font-bold flex-grow">Number of Guest</h2>
                    <UsersIcon className="h-5"/>
                    {/* type="number" */}
                    <input 
                    value={noOfGuest}
                    onChange={(e) => setNoOfGuest(e.target.value)}
                    type="number" 
                    min={1}
                    className=" w-12 pl-2 outline-none text-red-400"/> 
                </div>

                <div>
                    <div className=" flex justify-between">
                        <button onClick={resetInput} className="flex-grow text-gray-500">Cancel</button>
                        <button onClick={search} className="flex-grow text-red-400">Search</button>
                    </div>
                </div>
            </div>}

        </header>
    )
}

export default Header
