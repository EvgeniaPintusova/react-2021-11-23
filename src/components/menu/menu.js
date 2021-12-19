import { Component } from 'react';
import PropTypes from 'prop-types';

import Product from '../product';
import Basket from '../basket';

import styles from './menu.module.css';
import { loadProduct } from '../../redux/actions';
import { connect } from 'react-redux';

class Menu extends Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };

  state = { error: null};

  componentDidCatch(error) {
    this.setState({ error });
  }

  componentDidMount() {
    this.props.loadProduct('d75f762a-eadd-49be-8918-ed0daa8dd024');
  }

  render() {
    const { menu } = this.props;

    if (this.state.error) {
      return <p>Меню этого ресторана сейчас недоступно :(</p>;
    }
    {/* <Product key={id} id={id} prId={id} /> */}
    return (
      <div className={styles.menu}>
        <div>
          {menu.map((id) => (
        <p>{id}</p>
          ))}
        </div>
        <div>
          <Basket />
        </div>
      </div>
    );
  }
}
// export default Menu;
const mapDispatchToProps = {
  loadProduct,
};

export default connect(null, mapDispatchToProps)(Menu);
