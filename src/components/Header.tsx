import HeroImage from "../assets/image-hero.png";
import HeroImageTablet from "../assets/image-header-tablet.jpg";
import HeroImagePhone from "../assets/image-header-phone.jpg";

export default function Header() {
  return (
    <header className="grid place-content-center bg-nav-color text-secondary-text-clr">
      <div className="grid max-w-[1200px] h-view-height overflow-hidden">
        <div className="col-start-1 row-start-1 max-w-[400px] p-4 self-center z-10 max-[949px]:justify-self-center max-[949px]:text-center">
          <span className="uppercase text-dark-gray tracking-[0.625rem] text-[0.9rem]">
            New Product
          </span>
          <p className="text-[clamp(2rem,10vw,3.5rem)] font-bold my-4">
            XX99 MARK II HEADPHONES
          </p>
          <p className="text-dark-gray">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
        </div>
        <picture className="col-start-1 row-start-1 [&>img]:w-full [&>img]:h-full [&>img]:object-cover">
          <source media="(min-width: 950px)" srcSet={HeroImage} />
          <source media="(max-width: 500px)" srcSet={HeroImagePhone} />
          <img
            src={HeroImageTablet}
            alt="XX99 MARK II HEADPHONES Image"
            className="hero-img"
          />
        </picture>
      </div>
    </header>
  );
}
