import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import axios from "axios";

const ProductListing = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://api.sit.stixcloudtest.com/assignment/api/products?page=0&amp;size=5000&amp;search=api"
      );
      setProducts(res.data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  // get current posts
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <React.Fragment>
        <div className="container p-5">
          <div>
            <h1 className="mb-4 text-center"> PRODUCTS </h1>
            <hr></hr>
          </div>
          <Link className="search" to="/search">
            Search
          </Link>
          <div className="page-numbers">
            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={products.length}
              paginate={paginate}
            />
          </div>
          <div className="products">
            {products.map((product) => (
              <div className="card">
                <h3 className="product-name">{product.title}</h3>
                <p> {product.description}</p>
                <p>$ {product.price}</p>
                <button
                  className="btn add-product-cart"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
};

export default ProductListing;
