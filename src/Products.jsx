import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProducts } from "./redux/actions/actions";

const Products = ({ getProducts, loading, products }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  if (loading) {
    return <h5>Loading...</h5>;
  }
  return (
    <>
      {products.map((i) => (
        <ul key={i.id} style={{ maxWidth: "700px", margin: "32px" }}>
          <hr />
          <h5>{i.title}</h5>
          <p>{i.body}</p>
        </ul>
      ))}
    </>
  );
};

Products.propTypes = {
  loading: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(PropTypes.object.isRequired),
  getProducts: PropTypes.func.isRequired,
};

const mapStateToProps = ({ productState: { products, loading } }) => {
  return { loading, products };
};

export default connect(mapStateToProps, { getProducts })(Products);
