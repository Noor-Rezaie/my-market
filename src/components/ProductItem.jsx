/* eslint-disable react/prop-types */

function ProductItem({ product }) {
  return (
    <div className="mx-auto rounded-md shadow-lg bg-stone-100">
      {/* <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0 md:grid-cols-3"> */}
      <div className="flex flex-col h-auto p-5 rounded-2xl">
        <img
          alt={product.title}
          src={product.image}
          className="object-cover w-full bg-white rounded-lg group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
        />
        <h3 className="text-sm text-gray-500 ">
          <a href={product.href}>
            <span className="absolute inset-0" />
            {product.price}
          </a>
        </h3>
        <p className="text-base font-semibold text-gray-900">{product.title}</p>
        <p className="text-base font-semibold text-gray-900">
          {product.description}
        </p>
        <input
          type="button"
          value="خرید"
          className="p-2 m-3 text-xl font-bold text-white rounded-md shadow-md cursor-pointer bg-stone-800 hover:bg-blue-950"
        />
      </div>
    </div>
  );
}

export default ProductItem;
