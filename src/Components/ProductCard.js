import React, { useState } from "react";
import "./ProductCard.css";
import { connect } from "react-redux";
import { addToCart } from "../actions/cartAction";
const ProductCard = ({ auth, addToCart, id, img, title, desc, price }) => {
  const [buttonText, setButtonText] = useState("Add to Cart");

  const changeText = (text) => setButtonText(text);
  return (
    <div className="card" key={id}>
      <img className="card-img-top" src={img} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <p className="card-text">${price}</p>

        <button
          id="grab"
          className="btn btn-primary"
          onClick={() => {
            if (auth.uid) {
              addToCart(id);
              setButtonText("In Cart");
            } else {
              alert("Login to use this functionality");
            }
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    items: state.checkout.addedItems,
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
