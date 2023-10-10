type ProductData = {
  id: number;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
};

type CartItemProps = {
  quantity: number;
} & ProductData;
