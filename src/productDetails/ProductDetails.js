import "./ProductDetails.css";
import Header from "../components/header/Header";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../actions/productActions";
import Table from "../components/table/Table";
import Tags from "../components/tags/Tags";
import { formatSalesData } from "../utils/formatHelper";

function ProductDetails() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product)?.product;

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <>
      <Header />
      {product && (
        <div className="detail-wrapper">
          <div className="details wrapper-base">
            <div className="detail-info">
              <img
                src={product.image}
                alt={product.brand}
                className="product-image"
              />
              <h2 className="product-title">{product.title} </h2>
              <p className="product-subtitle"> {product.subtitle} </p>
            </div>
            <Tags tags={product.tags} />
          </div>
          <div className="retail-table-wrapper wrapper-base">
            <Table data={formatSalesData(product.sales)} />
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
