import styles from './orderProduct.module.css';
import Button from '../../button';
import { decrement, increment, removeProduct } from '../../../redux/actions';
import { connect } from 'react-redux';

function OrderProduct({
  product,
  amount = 0,
  increment,
  decrement,
  removeProduct,
}) {
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
        {product.price * amount}
      </div>
      <div className={styles.button}>
        <Button onClick={removeProduct} icon="delete" />
      </div>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  amount: state.order[props.product.id] || 0,
});

const mapDispatchToProps = (dispatch, props) => ({
  decrement: () => dispatch(decrement(props.product.id)),
  increment: () => dispatch(increment(props.product.id)),
  removeProduct: () => dispatch(removeProduct(props.product.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderProduct);
