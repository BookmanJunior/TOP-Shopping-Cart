import Header from "../components/Header";
import ElectronicsImg from "../assets/electronics.webp";
import JewelryImg from "../assets/jewelry.webp";
import MClothingImg from "../assets/men's clothing.webp";
import WClothingImg from "../assets/women's clothing.webp";
import FeaturedCard from "../components/FeaturedCard";
// import "../styles/homepage.css";

export default function Homepage() {
  return (
    <>
      <Header />
      <section className="max-w-[1200px] mx-auto py-4">
        <p className="text-center text-[clamp(2rem,0.5rem+1.8vw,3rem)] font-bold uppercase my-4 tracking-[3px]">
          Categories
        </p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 justify-center">
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
