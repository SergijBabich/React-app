import React from 'react';

import {BrowserRouter, Route} from  'react-router-dom';
import {connect} from   'react-redux';
import {setUserData} from '../../Redux/Auth_Reducer.js';
import * as axios from 'axios';
import Header from './Header.js'
import {usersAPI} from "../../api/api.js";
import {authAPI} from "../../api/api.js";
import {getAuthData} from  '../../Redux/Auth_Reducer.js';
class HeaderContainer extends React.Component {

    componentDidMount() {

        this.props.getAuthData();

          }

  render(){
  return <Header   {...this.props} />

}
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login

  }
}
export default connect (mapStateToProps, {getAuthData})(HeaderContainer);
