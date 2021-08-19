import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";

const Search = ({ searchResults }) => {
  const router = useRouter();
  // ES6 Destructoring
  const { location, endDate, startDate, numOfGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `From ${formattedStartDate} to ${formattedEndDate}`;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${numOfGuests}`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays ( {range} ) for {numOfGuests} number of guests...
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in{" "}
            <span className="uppercase text-red-300"> {location} </span>
          </h1>
          <div className="gap-4 hidden lg:inline-flex text-gray-800 mb-5">
            <p className="btn">Cancellation Flexibility</p>
            <p className="btn">Type of Place</p>
            <p className="btn">Price</p>
            <p className="btn">Rooms and Bed</p>
            <p className="btn">More Filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults?.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
