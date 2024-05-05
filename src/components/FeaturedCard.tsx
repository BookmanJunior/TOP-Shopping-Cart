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
    <Link
      to={`category/${title}`}
      className="grid place-content-center overflow-hidden group"
    >
      <div className="grid place-content-center col-start-1 row-start-1 text-center bg-black bg-opacity-20">
        <p className="text-secondary-text-clr font-bold uppercase text-[2rem] tracking-[5px]">
          {title}
        </p>
      </div>
      <img
        src={imageElement}
        alt={title}
        className="col-start-1 row-start-1 w-full aspect-square object-cover z-[-1] group-hover:scale-110 transition-[transform]"
      />
    </Link>
  );
}
