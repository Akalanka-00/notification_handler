import './App.css';
import HomePage from './Pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Customer from './Pages/Customer';
import Admin from './Pages/Admin';
import GameDeveloper from './Pages/GameDeveloper';
import Notification from './Pages/Notification';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path = "/" exact element = {<HomePage/>}></Route>
        <Route path = "/customer" exact element = {<Customer/>}></Route>
        <Route path = "/admin" exact element = {<Admin/>}></Route>
        <Route path = "/developer" exact element = {<GameDeveloper/>}></Route>
        <Route path = "/customer/notifications" exact element = {<Notification isDev={false}/>}></Route>
        <Route path = "/developer/notifications" exact element = {<Notification isDev={true}/>}></Route>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
