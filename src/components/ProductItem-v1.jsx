/* eslint-disable react/prop-types */

function ProductItem({ product }) {
  return (
    <div
      style={{ alignItems: "center" }}
      className="container flex items-center justify-center p-4 px-4 m-2 mx-auto rounded shadow-xl "
    >
      <div>
        <div>
          <img
            src={product.image}
            alt="Product Item Pictures"
            className="object-cover h-52"
          />
        </div>
        <p className="pt-4">{product.title}</p>
        <h4 className="align-center">{product.price}</h4>
        <button className="p-2 text-white bg-green-600 rounded-md hover:bg-green-800">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
