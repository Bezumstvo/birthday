import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {wishesActions} from '../../_actions';

import { ruLang as lang, table_localization as localization } from "../../_constants";
import { ProductGrid } from '../../_components';

class WishesPage extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getAll();
  }

  render() {
    let wishes;
    const { dataproducts } = this.props;
    
    try {
      wishes = dataproducts.items;
      console.log(wishes)
    } catch (e) {
      console.log(e);
    }

    return (
      <div>
        <div className="App">

            {wishes &&
              <ProductGrid
              data = {wishes}
              columns = {4}
              />
        }
        </div>
        <hr />
      </div>
    );
  }
}

const mapStateToProps = store => {
  const { dataproducts, authentication } = store;
  const { user } = authentication;
  return {
    user,
    dataproducts
  };
};

const mapDispatchToProps = dispatch => ({
  getAll: () => dispatch(wishesActions.getAll()),
})

const connectedWishesPage = connect(mapStateToProps,mapDispatchToProps)(WishesPage);
export { connectedWishesPage as WishesPage };
