import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropsTypes from "prop-types";
import "./Store.css";
import "./styles.css";

function Store({ title, price, image }) {
  return (
    <>
      <span>스토어</span>
      <hr />
      <div className='item'>
        <img
          src='https://shop-phinf.pstatic.net/20191227_228/1577424225033QgC9W_JPEG/14786558588705979_1660534407.jpg?type=f260'
          alt={title}
          title={title}
        />
        <div className='item__data'>
          <a
            href={{
              pathname: "/store-detail",
              state: { title, price, image },
            }}
          >
            <h3 className='item__title'>{title}</h3>
          </a>
          <h5 className='item__price'>{price}</h5>
        </div>
      </div>
    </>
  );
}

Store.PropsTypes = {
  id: PropsTypes.number.isRequired,
  price: PropsTypes.number.isRequired,
  item: PropsTypes.string.isRequired,
  image: PropsTypes.string.isRequired,
};

export default Store;
