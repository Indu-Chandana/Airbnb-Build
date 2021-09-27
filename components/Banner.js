import Image from "next/image";
function Banner() {
    return (
        //we use relative for adjustment of the photo hight and width.
        <div className=" relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] "> 
            <Image
            src="https://links.papareact.com/0fm"
            layout="fill"
            objectFit="cover" //super usefull, Banner is goes to differnt sizes. photo adapt to it. 
            />
            <div className="absolute top-1/2 text-center w-full" >
                <p className=" text-sm sm:text-lg">Not sure where to go? Perfect.</p> 
                <button className=" text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">I'm Flexible</button> 
            </div> 
        </div>
    )
}

export default Banner
