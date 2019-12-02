import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderContainer from  './components/Header/HeaderContainer.js';
import Profile from  './components/Profile/Profile.js';
import Nav from  './components/Navbar/nav.js';
import DialogsContainer from  './components/Dialogs/Dialogs_Container.js';
import News from  './components/News/News.js';
import Music from  './components/Music/Music.js';
import Friends from  './components/Friends/Friends.js';
import Login from  './components/Login/Login.js';
import Preloader from  './components/Command/preLoader.js';
import UsersContainer from  './components/Users/UsersContainer.js';
import Settings from  './components/Settings/Settings.js';
import {BrowserRouter, Route, withRouter} from  'react-router-dom';
import {initializeApp} from  './Redux/App_Reducer.js';
import {connect} from "react-redux";
import {compose} from "redux";
import ProfileContainer from './components/Profile/ProfileContainer.js';
//import Tehnologies from  './Tehnologies.js';
//import Footer from  './footer.js';

class  App extends Component {
      componentDidMount() {
            this.props.initializeApp();
        }
        render() {
          if (!this.props.initializeApp){
          return <Preloader />
            }


    return (
     <div className='app-wrapper'>
      <HeaderContainer />
      <div className="sideBar">
      <Nav />
      </div>
      <div className='app-wrapper-content'>
       <Route path='/profile/:userId?' render = { () => <ProfileContainer   />} />
             <Route path='/dialogs'
              render = { () => <DialogsContainer />}/>
       <Route path='/news'  component = { News } />
       <Route path='/music' component = {Music} />
       <Route path='/users'  render = { () => <UsersContainer />} />
       <Route path='/login'  render = { () => <Login />} />
       <Route path='/settings' component = {Settings} />
      </div>

     </div>


 );

 }
}

        let mapStateToProps = (state) => ({
            initialized: state.app.initialized
        });
export default compose(
                withRouter,
                connect(mapStateToProps, {initializeApp}))(App);
