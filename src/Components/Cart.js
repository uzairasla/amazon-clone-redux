import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
} from "../actions/cartAction";
import "./cart.css";

const Cart = (props) => {
  const handleRemove = (id) => {
    props.removeItem(id);
  };

  //to substruct from the quantity
  const handleSubtractQuantity = (id) => {
    props.subtractQuantity(id);
  };
  console.log(props);
  let addedItems = props.items.length ? (
    props.items.map((item) => {
      return (
        <li className="list-group-item measurement" key={item.id}>
          <div className="item-img">
            <img src={item.img} alt={item.img} className="img-resizing" />
          </div>

          <div className="item-desc">
            <span className="title">{item.title}</span>
            <p>{item.desc}</p>
            <p>
              <b>Price: {item.price}$</b>
            </p>
            <p>
              <b>Quantity: {item.quantity}</b>
            </p>
            <Link to="/cart">
              <button
                className="btn btn-outline-danger"
                onClick={() => props.addQuantity(item.id)}
              >
                +
              </button>
            </Link>

            <Link to="/cart">
              <button
                className="btn btn-outline-danger ml-2"
                onClick={() => {
                  handleSubtractQuantity(item.id);
                }}
              >
                -
              </button>
            </Link>

            <button
              className=" btn btn-outline-danger ml-2"
              onClick={() => handleRemove(item.id)}
            >
              Remove
            </button>
          </div>
        </li>
      );
    })
  ) : (
    <p className="display-4 text-center">Cart is Empty</p>
  );
  return (
    <div className="container-fluid">
      <h5 className="text-center lead">You have ordered:</h5>
      <ul className="list-group mt-5 mr-2">
        <div className="d-flex flex-wrap justify-content-center ">
          {addedItems}
        </div>
        <hr />
        <div className="d-flex justify-content-center">
          Total: {props.total}
        </div>
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    total: state.checkout.total,
    items: state.checkout.addedItems,
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
