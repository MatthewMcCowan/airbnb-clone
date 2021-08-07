import Image from "next/image";

const SmallCard = ({ img, location, distance }) => {
  return (
    <div className="flex items-center space-x-4 mb-4 rounded-lg hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out cursor-pointer ">
      <section className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </section>
      <section>
        <h2 className="font-bold text-lg tracking-wider">{location}</h2>
        <p className="text-gray-400 text-sm">{distance}</p>
      </section>
    </div>
  );
};

export default SmallCard;
