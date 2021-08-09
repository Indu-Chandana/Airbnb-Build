import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer';
import Header from '../components/Header'
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCards from '../components/SmallCards';

export default function Home({ exploreData, cardData }) {
  return (
    <div>
      <Head>
        <title>Airbnb-Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner/>
                                {/* mx-auto use to middle of the screen */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className=" text-4xl font-semibold pb-5"> Explore Nearbly </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCards 
              key={item.img}
              img={item.img} 
              distance={item.distance}
              location={item.location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
                  {/* we add scroll bar hide plugging for tailwind */}
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardData?.map((item) => (
              <MediumCard 
              key={item.img}
              img={item.img}
              title={item.title}
              />
            ))}
          </div>
        </section>

        <LargeCard
        img="https://links.papareact.com/4cj"
        title="The Geatest Outdoors"
        description="Wishlists curated by Airbnb"
        buttonText="Get Inspired"
        />

        
      </main>

      <Footer/>
    </div>
  )
}

export async function getStaticProps(){
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardData = await fetch("https://links.papareact.com/zp1").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      cardData
    }
  }
}




// export async function getStaticProps() {
//   const exploreData = await fetch("https://links.papareact.com/pyp").then(
//     (res) => res.json()
//   );

//   return {
//     props: {
//       exploreData
//     }
//   }
// }