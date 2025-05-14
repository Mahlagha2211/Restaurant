import Nav from "../Components/Nav";
import "../cssStyle/ShoppingCartPageStyle/ShoppingCart.css";
import Cart from "../Components/ShoppingCartComponents/Cart";

export default function ShoppingCart() {
  return (
    <div className={`back fadeIn `}>
      <Nav />
      <Cart />
    </div>
  );
}
