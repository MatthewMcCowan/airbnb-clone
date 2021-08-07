import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 ">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
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
          type="text"
          placeholder="Search for things"
          className="p-2 outline-none flex-grow  bg-transparent"
        />
        <SearchIcon className=" hidden md:inline-flex h-8 cursor-pointer bg-red-400 m-2 rounded-full p-2 text-white" />
      </div>
      <div className="flex items-center space-x-4 justify-end cursor-pointer">
        <p className="hidden md:inline">Become a Host</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex items-center space-x-4 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
