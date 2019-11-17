import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderContainer from  './components/Header/HeaderContainer.js';
import Profile from  './components/Profile/Profile.js';
import Nav from  './components/Navbar/nav.js';
import DialogsContainer from  './components/Dialogs/Dialogs_Container.js';
import News from  './components/News/News.js';
import Music from  './components/Music/Music.js';
import Friends from  './components/Friends/Friends.js';
import UsersContainer from  './components/Users/UsersContainer.js';
import Settings from  './components/Settings/Settings.js';
import {BrowserRouter, Route} from  'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer.js';
//import Tehnologies from  './Tehnologies.js';
//import Footer from  './footer.js';

const App = (props) => {
    return (
     <div className='app-wrapper'>
    {/* созаем компонент шапки*/}
      <HeaderContainer />
      <div className="sideBar">
      {/*компонент навбара*/}
      <Nav />
      {/*компонент друзья в сайт баре*/}
    { /* <Friends  />*/}
      </div>
      <div className='app-wrapper-content'>
      {/*Route средит за состояние нашего урла и как только он сменился он его заменяет*/}
   {/*передаем параметры через пропс  для профиля*/}
       <Route path='/profile/:userId' render = { () => <ProfileContainer   />} />
          {/* передаем параметры через пропс  для диалогов */}
       <Route path='/dialogs'
              render = { () => <DialogsContainer />}/>
       <Route path='/news'  component = { News } />
       <Route path='/music' component = {Music} />
       <Route path='/users'  render = { () => <UsersContainer />} />
       <Route path='/settings' component = {Settings} />
      </div>

     </div>


 );
}
export default App;
