export default function formatPrice(num: number): number | string {
  return num % 1 === 0 ? num : num.toFixed(2);
}