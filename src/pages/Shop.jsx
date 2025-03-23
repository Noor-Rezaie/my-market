import ProductItem from "../components/ProductItem";
import { products } from "../data/items";

function Shop() {
  return (
    <div className="container px-4 mx-auto">
      <div className="grid items-center justify-center gap-2 pt-12 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {products.map((item) => (
          <div key={item.id}>
            <ProductItem product={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
