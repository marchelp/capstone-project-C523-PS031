import Image from 'next/image';
import Button from './Button';

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row items-center">
      {/* Hero Map */}
      <div className="hero-map">
        <img src="/hero.png" alt="Hero Map" />
      </div>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col xl:w-1/2 items-center md:items-start">
        <h1 className="bold-52 lg:bold-60 text-green-500 mb-6 text-center md:text-left">
          Ikuti Perjalanan Kami dalam membuat Dampak Kelestarian
        </h1>
        <p className="regular-16 text-gray-500 xl:max-w-[520px] mb-8 text-center md:text-left">
          We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col w-full gap-3 sm:flex-row justify-center md:justify-start">
          <Button 
            type="button" 
            title="Download App" 
            variant="btn_green" 
          />
          <Button 
            type="button" 
            title="How we work?" 
            icon="/play.svg"
            variant="btn_white_text" 
          />
        </div>
      </div>

      {/* Hidden Content (For Larger Screens) */}
      <div className="hidden md:flex-1 items-start relative">
        {/* You can add an Image or other content here */}
      </div>
    </section>
  );
};

export default Hero;
