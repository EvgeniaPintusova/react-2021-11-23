import styles from './orderProduct.module.css';
import Button from '../../button';
import { decrement, increment } from '../../../redux/actions';

export default function OrderProduct({ product, amount = 0 }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{product.name}</div>
      <div className={styles.counter}>
        <div className={styles.button}>
          <Button onClick={decrement} icon="minus" />
        </div>
        <div>{amount}</div>

        <div className={styles.button}>
          <Button onClick={increment} icon="plus" />
        </div>
      </div>
      <div className={styles.price}>
        <span>$</span>
        {product.price}
      </div>
      <div className={styles.button}>
        <Button onClick={increment} icon="delete" />
      </div>
    </div>
  );
}
