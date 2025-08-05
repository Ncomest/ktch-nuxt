export default function calcDiscount(price, discountPercent) {
  if (discountPercent) {
    const discountAmount = +price * (+discountPercent / 100);
    const discountedPrice = +price - discountAmount;
    return discountedPrice.toLocaleString("ru-RU");
  }
}
