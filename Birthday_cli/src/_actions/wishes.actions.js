import { routeConstants } from "../_constants";
import { wishesService } from "../_services";
import { alertActions } from "./";
import { history } from "../_helpers";

export const wishesActions = {
  getAll,
  getById,
  add,
  update,
  remove
};

function getAll(params) {
  return dispatch => {
    wishesService
      .getAll(params)
      .then(
        dataproducts => dispatch(success(dataproducts)),
        error => dispatch(failure(error))
      );
  };
  function request() {
    return { type: routeConstants.GET_PRODUCTS_REQUEST };
  }
  function success(dataproducts) {
    return { type: routeConstants.GET_PRODUCTS_SUCCESS, dataproducts };
  }
  function failure(error) {
    return { type: routeConstants.GET_PRODUCTS__FAILURE, error };
  }
}

function getById(params) {
  return dispatch => {
    wishesService
      .getById(params)
      .then(
        dataproduct => dispatch(success(dataproduct)),
        error => dispatch(failure(error))
      );
  };
  function request() {
    return { type: routeConstants.GET_PRODUCT_REQUEST };
  }
  function success(dataproduct) {
    return { type: routeConstants.GET_PRODUCT_SUCCESS, dataproduct };
  }
  function failure(error) {
    return { type: routeConstants.GET_PRODUCT__FAILURE, error };
  }
}

function add(params) {
  return dispatch => {
    wishesService
      .add(params)
      .then(
        dataproducts => dispatch(success(dataproducts)),
        error => dispatch(failure(error))
      );
  };
  function request() {
    return { type: routeConstants.GET_PRODUCTS_REQUEST };
  }
  function success(dataproducts) {
    return { type: routeConstants.GET_PRODUCTS_SUCCESS, dataproducts };
  }
  function failure(error) {
    return { type: routeConstants.GET_PRODUCTS__FAILURE, error };
  }
}

function update(params) {
  return dispatch => {
    wishesService
      .update(params)
      .then(
        dataproducts => dispatch(success(dataproducts)),
        error => dispatch(failure(error))
      );
  };
  function request() {
    return { type: routeConstants.GET_PRODUCTS_REQUEST };
  }
  function success(dataproducts) {
    return { type: routeConstants.GET_PRODUCTS_SUCCESS, dataproducts };
  }
  function failure(error) {
    return { type: routeConstants.GET_PRODUCTS__FAILURE, error };
  }
}

function remove(params) {
  return dispatch => {
    wishesService
      .remove(params)
      .then(
        dataproducts => dispatch(success(dataproducts)),
        error => dispatch(failure(error))
      );
  };
  function request() {
    return { type: routeConstants.GET_PRODUCTS_REQUEST };
  }
  function success(dataproducts) {
    return { type: routeConstants.GET_PRODUCTS_SUCCESS, dataproducts };
  }
  function failure(error) {
    return { type: routeConstants.GET_PRODUCTS__FAILURE, error };
  }
}
