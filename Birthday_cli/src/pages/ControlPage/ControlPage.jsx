import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { categoriesActions } from "../../_actions";
import { ruLang as lang, table_localization as localization } from "../../_constants";
import MaterialTable from 'material-table';
import {ImageUpload} from '../../_components';


class ControlPage extends React.Component {
  constructor() {
    super();

    this.onSubmit = this.onSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }


  onSubmit(event) {
    this.props.add({ name: this.state.name, description: this.state.desc });
    event.preventDefault();
  }
  handleUpdate(values) {
    this.props.update(values);
  }
  handleRemove(id) {
    var idJson = { id: id };
    this.props.remove(idJson);
  }
  componentDidMount() {
    this.props.getAll();
  }

  render() {
    console.log('controlPage')
    var categories;
    var { datacategories } = this.props;
    try {
      categories = datacategories.items;
    } catch (e) {
      console.log(e);
    }

    const headRows = [
      { title: lang.TABLE_NAME, field:"name" },
      { title: lang.TABLE_DESCRIPTION, field: "description" },
      {
        field: 'url',
        Title: 'image',
        render: rowData => <img src={rowData.url} style={{width: 50, borderRadius: '50%'}}/>
      },{
        field: 'url',
        Title: 'image',
        render: rowData => <ImageUpload/>
      }
    ];


    return (
      <div> <h1>Админка</h1>
            {categories &&

            <MaterialTable
            localization={localization}
            title={lang.TITLE_CATEGORIES}
            columns={headRows}
            data={categories}
            editable={{
              onRowAdd: newData =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    this.props.add(newData);
                  }, 600);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                  this.handleUpdate(newData)
                  }, 600);
                }),
              onRowDelete: oldData =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    console.log(oldData)
                this.handleRemove(oldData._id)
                  }, 600);
                }),
            }}
          />
        }
        </div>
    );
  }
}

const mapStateToProps = store => {
  const { datacategories, authentication } = store;
  const { user } = authentication;
  return {
    user,
    datacategories
  };
};
const mapDispatchToProps = dispatch => ({
  getAll: () => dispatch(categoriesActions.getAll()),
  add: params => dispatch(categoriesActions.add(params)),
  update: params => dispatch(categoriesActions.update(params)),
  remove: params => dispatch(categoriesActions.remove(params))
});
const connectedControlPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlPage);
export { connectedControlPage as ControlPage };
