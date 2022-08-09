import style from './Header.module.scss';
import { useContext } from 'react';
import OrderContext from '../../context/OrderContext';
import { Link } from 'react-router-dom';
export default function Header() {
  const { orderItems } = useContext(OrderContext);

  return (
    <div className={style.fixedHeader}>
      <Link className={style.headerLink} to='/'>
        Hangry Hippo{' '}
      </Link>{' '}
      <Link className={style.headerLink} to='/order'>
        Cart: {orderItems.length}
      </Link>
    </div>
  );
}
