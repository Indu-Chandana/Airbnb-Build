import Footer from "../components/Footer";
import Header from "../components/Header";

function Search() {
    return (
        <div>
            <Header/>

            <main className="flex">
                <section>
                    <p className="text-xs">Hello</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stay in Mars</h1>
                    <div className="flex">
                        <p className="bg-gray-100 rounded-full px-4 py-2 border cursor-pointer hover:shadow-lg active:scale-95">Cancellation Flexibility</p>
                        <p className="bg-gray-100 rounded-full px-4 py-2 border cursor-pointer hover:shadow-lg active:scale-95">Type of place</p>
                        <p className="bg-gray-100 rounded-full px-4 py-2 border cursor-pointer hover:shadow-lg active:scale-95">Price</p>
                        <p className="bg-gray-100 rounded-full px-4 py-2 border cursor-pointer hover:shadow-lg active:scale-95">Rooms and Beds</p>
                        <p className="bg-gray-100 rounded-full px-4 py-2 border cursor-pointer hover:shadow-lg active:scale-95">More filters</p>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default Search
