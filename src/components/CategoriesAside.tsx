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
      <div className="categories-wrapper">
        <span className="aside-categories-title">Categories</span>
        {categories.map((item) => (
          <label key={item}>
            <input
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
