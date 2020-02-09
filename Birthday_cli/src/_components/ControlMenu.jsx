import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { ruLang as lang   } from "../_constants";


class ControlMenu extends React.Component {
    render() {
      var show = false;
      if (localStorage.getItem('user')) {
        var user = JSON.parse(localStorage.getItem('user'));
        if (user.role === 1) { show = true; }
      }
        return (
          <div className="userMenu">
          {show &&
            <React.Fragment>
              <div>
              <Link to="/control/departments">{lang.LINK_DEPARTMENTS}</Link>
              </div>
              <div>
                <Link to="/control/categories">{lang.LINK_CATEGORIES}</Link>
              </div>
              <div>
                <Link to="/control/products">{lang.LINK_PRODUCTS}</Link>
              </div>
              </React.Fragment>
        }
        </div>
        );
    }
}

const mapStateToProps = state => {
  const { authentication } = state;
  const { user } = authentication;
  return {
   user
  }
}

const connectedControlMenu = connect(mapStateToProps)(ControlMenu);
export { connectedControlMenu as ControlMenu };
