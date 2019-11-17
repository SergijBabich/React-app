import React from 'react';

import {BrowserRouter, Route} from  'react-router-dom';
import {connect} from   'react-redux';
import {setUserData} from '../../Redux/Auth_Reducer.js';
import * as axios from 'axios';
import Header from './Header.js'

class HeaderContainer extends React.Component {

    componentDidMount() {

            axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {  withCredentials: true })
              .then(response => {

              if ( response.data.resultCode === 0) {
                let {id, email , login} =  response.data.data;
                this.props.setUserData(id, email , login);
              }

        });
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
export default connect (mapStateToProps, {setUserData})(HeaderContainer);
