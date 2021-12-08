import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';

// import { restaurants } from '../../fixtures';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Basket />
        <Header />
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    );
  }
}

App.propTypes = {
  restaurants: PropTypes.array,
};
