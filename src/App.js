import './App.css';
import NavBar from './Component/NavBar/NavBar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, {Suspense} from "react";
import News from "./Component/News/News";
import Settings from "./Component/Settings/Settings";
import DialogsConteiner from "./Component/Dialogs/DialogsConteiner";
import Musicc from "./Component/Redux/music";
import HeaderContainer from "./Component/Header/HeaderContainer";
import Login from "./Login/Login.";
import Preloader from "./Component/components/common/Preloader/Preloader";
const UsersConteiner = React.lazy(() => import('./Component/Users/UsersConteiner')   );
const ProfileContainer = React.lazy(() => import('./Component/Profile/ProfileContainer') );
function App(props) {
  return (
    <BrowserRouter>
                <div className='app-wrapper'>
              <HeaderContainer/>
              <NavBar/>


              <div className='app-wrapper-content'>
                  <Suspense fallback={<div> <Preloader /> </div>}>
                  <Routes>
                      <Route path='profile' element={<ProfileContainer/>} >
                          <Route path=':userId' element={<ProfileContainer/>} />
                      </Route>
                      <Route path="/users" element={<UsersConteiner/> }/>
                        <Route path="/dialogs/*" element={<DialogsConteiner   />}/>
                      <Route path="/news" element={<News />}/>
                      <Route path="/music/" element={<Musicc/>}/>
                      <Route path="/settings" element={<Settings />}/>
                      <Route path="/login" element={<Login />}/>
                  </Routes> </Suspense>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
