import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");

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

  if (loading) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <React.Fragment>
        <div className="container p-5">
          <div>
            <h1 className="mb-4 text-center"> SEARCH </h1>
            <hr></hr>
          </div>
          <div className="search-bar">
            <input
              type="text"
              placeholder=" Search..."
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            ></input>
          </div>
          <div className="products">
            {products
              .filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((product) => (
                <div className="card">
                  <h3 className="product-name">{product.title}</h3>
                  <p> {product.description}</p>
                  <p>$ {product.price}</p>
                </div>
              ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
};

export default Search;
