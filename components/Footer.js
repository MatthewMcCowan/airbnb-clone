const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:place-items-center mb-6 text-gray-600 max-w-7xl mx-auto px-8 sm:px-16">
      <div className="text-xs space-y-4 px-10 py-4 cursor-pointer">
        <h3 className="font-bold tracking-wider">ABOUT</h3>
        <p>How AirBnB Works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>AirBnB Plus</p>
        <p>AirBnB Lux</p>
      </div>
      <div className="text-xs space-y-4 px-10 py-4 cursor-pointer">
        <h3 className="font-bold tracking-wider">COMMUNITY</h3>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>I really like this clone</p>
        <p>Yabadaba do</p>
        <p>Feeling Lucky Punk?</p>
      </div>
      <div className="text-xs space-y-4 px-10 py-4 cursor-pointer">
        <h3 className="font-bold tracking-wider">HOST</h3>
        <p>Papa React</p>
        <p>Kevin Powell</p>
        <p>The Net Ninja</p>
        <p>Colt Steele</p>
        <p>Ania Kubów</p>
      </div>
      <div className="text-xs space-y-4 px-10 py-4 cursor-pointer">
        <h3 className="font-bold tracking-wider">SUPPORT</h3>
        <p>TailwindCSS</p>
        <p>NextJS</p>
        <p>REACTJS</p>
        <p>Youtube</p>
        <p>That's all folks</p>
      </div>
    </div>
  );
};

export default Footer;
