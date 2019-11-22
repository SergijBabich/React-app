import React from 'react';
import {connect} from   'react-redux';
import { Redirect } from 'react-router-dom';
let mapStateToPropsForRedirest = (state)=> ({
    isAuth: state.auth.isAuth
});
export let withAuthRedirect = (Component) => {
 class RedirectComponent extends React.Component {
     render() {
     if( this.props.isAuth === false) {
       return <Redirect to='/login' />
     }
     return <Component {...this.props} />
   }
   }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirest) (RedirectComponent);

  return ConnectedAuthRedirectComponent ;



}
