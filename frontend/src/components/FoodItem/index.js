import { useState, useContext } from 'react';
import style from './FoodItem.module.scss';
import OrderContext from '../../context/OrderContext';

export default function FoodItem({ food }) {
  const [quantity, setQuantity] = useState(0);
  const { addItem } = useContext(OrderContext);

  return (
    <div className={style.wrapper}>
      <div>{food.name}</div>
      <div className={style.actionWrapper}>
        <div className={style.action}>
          <span onClick={() => setQuantity(quantity - 1)}>-</span>
          {quantity}
          <span onClick={() => setQuantity(quantity + 1)}>+</span>
        </div>

        <button
          className={style.button}
          onClick={() => {
            addItem(food, quantity);
          }}
        >
          Add to order
        </button>
      </div>
    </div>
  );
}
