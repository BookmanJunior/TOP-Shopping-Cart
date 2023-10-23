import Header from "../components/Header";
import ElectronicsImg from "../assets/electronics.webp";
import JewelryImg from "../assets/jewelry.webp";
import MClothingImg from "../assets/men's clothing.webp";
import WClothingImg from "../assets/women's clothing.webp";
import FeaturedCard from "../components/FeaturedCard";
import "../styles/homepage.css";

export default function Homepage() {
  return (
    <>
      <Header />
      <section className="featured-categories-wrapper">
        <p className="section-title">Categories</p>
        <div className="featured-categories">
          <FeaturedCard title={"electronics"} imageElement={ElectronicsImg} />
          <FeaturedCard title={"jewelery"} imageElement={JewelryImg} />
          <FeaturedCard title={"men's clothing"} imageElement={MClothingImg} />
          <FeaturedCard
            title={"women's clothing"}
            imageElement={WClothingImg}
          />
        </div>
      </section>
    </>
  );
}
