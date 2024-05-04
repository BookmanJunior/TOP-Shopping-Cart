type CategoriesAsideProps = {
  categories: string[];
  handleActiveCategory: (arg0: string) => void;
};

export default function CategoriesAside({
  categories,
  handleActiveCategory,
}: CategoriesAsideProps) {
  return (
    <aside className="categories">
      <div className="flex flex-col flex-wrap gap-4 p-4 rounded-[8px] sticky top-[80px] bg-primary-product-bg">
        <span className="font-bold border-b-[2px] border-solid border-primary-bg uppercase pb-1">
          Categories
        </span>
        {categories.map((item) => (
          <label
            key={item}
            className="flex items-center uppercase cursor-pointer"
          >
            <input
              className="mr-1 cursor-pointer border-[2px] border-solid w-[18px] aspect-square accent-accent-clr"
              type="checkbox"
              name="category"
              id={item}
              value={item}
              onChange={() => handleActiveCategory(item)}
            />
            {item}
          </label>
        ))}
      </div>
    </aside>
  );
}
