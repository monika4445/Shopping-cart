import { useState } from "react";
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <ProductList addToCart={(product) => setCart([...cart, product])} />
      <ShoppingCart cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;
