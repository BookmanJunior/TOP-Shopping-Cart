import Header from "../components/Header";
import ElectronicsImg from "../assets/electronics.jpeg";
import JewelryImg from "../assets/jewelry.avif";
import MClothingImg from "../assets/men's clothing.jpg";
import WClothingImg from "../assets/women's clothing.avif";
import FeaturedCard from "../components/FeaturedCard";
import "../styles/homepage.css";

export function Homepage() {
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

type CategoryLoaderProps = {
  params: { name: string };
};

export async function CategoryLoader({ params }: CategoryLoaderProps) {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${params.name}`
  );

  if (res.ok) return res.json();

  throw new Error();
}
