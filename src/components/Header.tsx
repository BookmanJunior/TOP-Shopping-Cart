import HeroImage from "../assets/image-hero.png";
import HeroImageTablet from "../assets/image-header-tablet.jpg";
import HeroImagePhone from "../assets/image-header-phone.jpg";

export default function Header() {
  return (
    <header className="homepage-header">
      <div className="homepage-header-wrapper">
        <div className="product-info">
          <span className="product-new">New Product</span>
          <p className="product-name">XX99 MARK II HEADPHONES</p>
          <p className="product-desc">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
        </div>
        <picture>
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
