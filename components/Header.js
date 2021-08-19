import Image from "next/image";
import { DateRangePicker } from "react-date-range";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useRouter } from "next/dist/client/router";

const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numOfGuests, setNumOfGuests] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numOfGuests,
      },
    });
  };

  const resetInput = () => {
    setSearchInput("");
  };

  return (
    <header className="sticky top-0 z-50  shadow-lg">
      <nav className="grid grid-cols-3 container mx-auto p-4">
        <div
          onClick={() => router.push("/")}
          className="relative flex items-center h-10 cursor-pointer my-auto"
        >
          <Image
            src="https://links.papareact.com/qd3"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
        {/* Mid section Search */}
        <div className="flex items-center md:border-2 rounded-full p-2 md:shadow-lg">
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            placeholder={placeholder || "Search for things"}
            className="p-2 outline-none flex-grow  bg-transparent"
          />
          <SearchIcon
            onClick={search}
            className=" hidden md:inline-flex h-8 cursor-pointer bg-red-400 m-2 rounded-full p-2 text-white"
          />
        </div>
        <div className="flex items-center space-x-4 justify-end cursor-pointer">
          <p className="hidden md:inline">Become a Host</p>
          <GlobeAltIcon className="h-6" />
          <div className="flex items-center space-x-4 border-2 p-2 rounded-full">
            <MenuIcon className="h-6" />
            <UserCircleIcon className="h-6" />
          </div>
        </div>
        {searchInput && (
          <div className="flex flex-col col-span-3 mx-auto my-5">
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#fd5b61"]}
              onChange={handleSelect}
            />
            <div className="flex items-center border-b border-gray-300 my-4 py-4">
              <h2 className="flex-grow text-2xl font-semibold">
                Number of Guests
              </h2>
              <UsersIcon className="h-5" />
              <input
                value={numOfGuests}
                type="number"
                min="1"
                className="outline-none w-10 ml-4 text-red-400"
                onChange={(e) => setNumOfGuests(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <button onClick={resetInput} className="flex-grow text-gray-500">
                Cancel
              </button>
              <button onClick={search} className="flex-grow text-red-400">
                Search
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
