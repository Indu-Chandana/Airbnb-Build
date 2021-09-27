import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function Search({searchResults}) {
    const router = useRouter();

    // console.log(searchResults)

    // How to grab those variable from search url. we use router.query
    // ES6 Destructuring
    const {noOfGuest, endDate, startDate, location} = router.query;

    //we can't use startDate and endDate straitly. it is messi like this 'startDate=2021-08-10T18%3A30%3A00.000Z'
    // we convert that to like this 11-july-21
    const formateStartDate = format(new Date(startDate), "dd MMMM yy")
    const formateEndDate = format(new Date(endDate), "dd MMMM yy")

    const range = `${formateStartDate} - ${formateEndDate}`

    return (
        <div>
            <Header placeholder={` ${location} | ${range} | ${noOfGuest} guests`}/>

            <main className="flex max-w-7xl mx-auto">
                <section className="flex-grow px-6 pt-14">
                    <p className="text-xs">300+ Stays - {range} - for {noOfGuest} number of Guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stay in {location}</h1>
                    <div className=" hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of place</p>
                        <p className=" button">Price</p>
                        <p className=" button">Rooms and Beds</p>
                        <p className=" button">More filters</p>
                    </div>

                    <div className="flex flex-col">
                        {searchResults?.map((item, location) => (
                            <InfoCard 
                            key={item.img}
                            location={item.location}
                            img={item.img}
                            description={item.description}
                            price={item.price}
                            star={item.star}
                            title={item.title}
                            total={item.total}
                            />
                        ))}

                    </div>
                    
                </section>
                <section className="hidden xl:inline-flex xl:min-w-[600px]">
                    <Map searchResults={searchResults} />
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default Search

export async function getServerSideProps(){
    const searchResults = await fetch("https://links.papareact.com/isz")
    .then(
        (res) => res.json()
    );

    return {
        props: {
            searchResults,
        }
    }
}

// export async function getServerSideProps() {
//     const searchResults = await fetch("https://links.papareact.com/isz")
//     .then((res) => res.json())

//     return{
//         props: {
//             searchResults,
//         },
//     };
// }
