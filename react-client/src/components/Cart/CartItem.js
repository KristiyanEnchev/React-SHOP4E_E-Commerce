import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import {
  removeItem,
  increase,
  decrease,
} from '../../redux/Public/cartSlice.js';

export const CartItem = (item) => {
  const dispatch = useDispatch();

  return (
    <div className="product" key={item._id}>
      <img
        src={item?.item?.image}
        alt={`${item.item?.name}`}
        className="cart-product-image"
      />
      <div className="item-desc">
        <div className="flex top">
          <h5>{item.item?.name}</h5>
          <h4>${item.item?.price}</h4>
        </div>
        <div className="flex bottom">
          <div>
            <p className="quantity-desc">
              <span
                className="minus"
                onClick={() => {
                  if (item.item?.amount === 1) {
                    dispatch(removeItem(item.item?._id));
                    return;
                  }
                  dispatch(decrease(item.item?._id));
                }}
              >
                <AiOutlineMinus />
              </span>
              <span className="num">{item.item?.amount}</span>
              <span
                className="plus"
                onClick={() => dispatch(increase(item.item?._id))}
              >
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <button
            type="button"
            className="remove-item"
            onClick={() => dispatch(removeItem(item.item?._id))}
          >
            <TiDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
};
