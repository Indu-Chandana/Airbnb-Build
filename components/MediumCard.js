import Image from "next/image"
function MediumCard({ key, img, title }) {
    return (
        <div className=" cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
            {/* if u use layout="fill" everytime cover with div tag. otherwise ur picture take full of page. */}
            <div className="relative h-80 w-80"> 
            <Image src={img} layout="fill" className=" rounded-xl"/>
            </div>

            <h3 className="text-2xl mt-3">{title}</h3>
            
        </div>
    )
}

export default MediumCard
