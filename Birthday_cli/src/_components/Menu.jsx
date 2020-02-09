import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ruLang as lang } from "../_constants";


class Menu extends React.Component {
    render() {
      var loginDiv = '';
      var login = false;
      try{
        if (this.props.user) {
          const { user } = this.props
          login = true;
        } else {
          login = false;
          }
      }catch(e) {console.log(e)}
        return (
          <div className="aSideMenu">
              <div>
                <Link to="/categories">{lang.MENU_CATEGORY}</Link>
              </div>
              <div>
                <Link to="/wishes">{lang.MENU_PRODUCT}</Link>
              </div>
              <div>
                <Link to="/information">{lang.MENU_INFORMATION}</Link>
              </div>
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

const connectedMenu = connect(mapStateToProps)(Menu);
export { connectedMenu as Menu };
