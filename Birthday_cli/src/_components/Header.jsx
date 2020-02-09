import React from 'react';
import { connect } from 'react-redux';
import logo from '../../public/logo.png'
import { ruLang as lang } from "../_constants";


const Logout = (param) => {
return (
  <div className="logout">
    <a href="/login"> {(param.login)? lang.MENU_EXIT : lang.MENU_LOGIN}</a>
  </div>
)
}

class Header extends React.Component {
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
          <header className="header">
              <div>
                 <a href="/"><img src={logo} className="header-image" /></a>
              </div>
              <div>
              <p>{lang.SITE_NAME}</p>
              </div>
              <div>
                 {(login) ? lang.YOU_LOGIN_AS +  this.props.user.login    : lang.HELLO_GUEST}
                  <Logout login={login} />
              </div>
          </header>
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

const connectedHeader = connect(mapStateToProps)(Header);
export { connectedHeader as Header };
