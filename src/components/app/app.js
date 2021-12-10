import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';
import { connect } from 'react-redux';

// import { restaurants } from '../../fixtures';

class App extends PureComponent {
  // const order = this.props.

  render() {
    console.log(this.props);
    const order = this.props.order;
    console.log('ORDER: ', order);
    return (
      <div>
        <Basket products={order}/>
        <Header />
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    );
  }
}

App.propTypes = {
  restaurants: PropTypes.array,
};
const mapStateToProps = (state) => {
  return { ...state };
};
export default connect(mapStateToProps)(App);
