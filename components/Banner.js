import Image from "next/image";
const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://a0.muscache.com/im/pictures/e4a2a61c-589f-4e49-b3b8-968a6bc23389.jpg?im_w=2560"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-28 w-64 left-24">
        <p className="text-white font-bold text-5xl">
          Olympian and Paralympian Online Experiences
        </p>
        <button className=" bg-white py-2 px-4 rounded-lg shadow-md my-5 font-semibold hover:shadow-xl active:scale-90 transition duration-150 text-sm">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
//   h-[clamp(300px,100%,700px)]
