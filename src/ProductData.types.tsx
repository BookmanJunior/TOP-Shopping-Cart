type ProductData = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

type CartItemProps = {
  quantity: number;
} & ProductData;
