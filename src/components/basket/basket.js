import styles from './basket.module.css';
import OrderProduct from './orderProduct';

import { restaurants } from '../../fixtures';

function Basket({ products }) {
  // products = restaurants[0].menu;
  return (
    <div className={styles.container}>
      {products?.map((product) => (
        <OrderProduct product={product} key={product.id} />
      ))}
      <div className={styles.total_price}>
        <p>Total price:</p>
        <p>${0}</p>
      </div>
    </div>
  );
}
export default Basket;
