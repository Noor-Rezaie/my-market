const products = [
  {
    id: "01",
    title: "Product",
    price: 33,
    image: "/images/phone.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    id: "02",
    title: "Product",
    price: 44,
    image: "/images/phone.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    id: "03",
    title: "Product",
    price: 55,
    image: "/images/phone.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    id: "04",
    title: "Product",
    price: 66,
    image: "/images/phone.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
];

function getProductData(id) {
  let productData = products.find((item) => item.id === id);

  return productData;
}

export { getProductData, products };
