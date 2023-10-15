import { Link } from "react-router-dom";

type FeaturedCardProps = {
  title: string;
  imageElement: string;
};

export default function FeaturedCard({
  title,
  imageElement,
}: FeaturedCardProps) {
  return (
    <Link to={`category/${title}`} className="featured-category">
      <div className="category-title-wrapper">
        <p className="category-title">{title}</p>
      </div>
      <img src={imageElement} alt="electronics" />
    </Link>
  );
}
