import { useEffect, useState } from "react";
function Cart() {
  const [data, setDeta] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((data) => data.json())
      .then((data) => setDeta(data))
      .catch((error) => console.log(error));
  }, []);

  const delite = (id) => {
    setDeta((prev) => {
      return {
        ...prev,
        products: prev.products.filter((product) => product.id !== id),
      };
    });
  };

  return (
    <ul className="flex flex-wrap gap-4 justify-center p-4 mt-30 mb-8">
      {data?.products?.map((product) => (
        <li key={product.id} className="w-80 bg-amber-50 shadow rounded">
          <figure className="px-6 pt-6">
            <img
              src={product.images[0]}
              alt={product.title}
              className="rounded-xl w-full h-48"
            />
          </figure>
          <div className="card-body items-center text-center text-black">
            <h2 className="card-title">{product.title}</h2>
            <p className="line-clamp-4">{product.description}</p>
            <p>Category: {product.category}</p>
            <p>Brand: {product.brand}</p>
            <p>Rating: {product.rating}</p>
            <p>Price: ${product.price}</p>
            <div className="card-actions">
              <button
                className="btn btn-primary"
                onClick={() => delite(product.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Cart;
