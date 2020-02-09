import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {categoriesActions} from '../../_actions';

class InformationPage extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
  }

  render() {
    return (
    <div className="row">
    <p>
      Сервис предназанчен для Бла бла бла...
    </p>
    </div>
    )}
}

const mapStateToProps = store => {
  const { datatable, authentication } = store;
  const { user } = authentication;
  return {
    user,
    datatable
  }
}
const mapDispatchToProps = dispatch => ({
  getAll: c => dispatch(categoriesActions.getAll(c)),
})
const connectedInformationPage = connect(mapStateToProps,mapDispatchToProps)(InformationPage);
export { connectedInformationPage as InformationPage };
