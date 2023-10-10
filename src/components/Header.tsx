import HeroImage from "../assets/image-hero.png";
import "../styles/header.css";

export default function Header() {
  return (
    <header>
      <div className="product-info">
        <span className="product-new">New Product</span>
        <p className="product-name">XX99 MARK II HEADPHONES</p>
        <p className="product-desc">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button>See Product</button>
      </div>
      <img
        src={HeroImage}
        alt="XX99 MARK II HEADPHONES Image"
        className="hero-img"
      />
    </header>
  );
}
