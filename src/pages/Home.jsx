import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductTile from "../components/product-tile/ProductsTile";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllProducts = async () => {
    setLoading(true);
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    if (data) {
      setLoading(false);
      setProducts(data);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full justify-center items-center">
          <Circles
            height={"120"}
            width={"120"}
            color="rgb(127,29,29)"
            visible={true}
          />
        </div>
      ) : (
        <div className="min-h-[80vh] grid md:grid-cols-3 lg:grid-cols-4 ">
        {
            products && products.length
            ? products.map((productItem) => (
                <ProductTile product={productItem} key={productItem.id}/>
              ))
            : null
        }
        </div>
      )}
    </div>
  );
}
