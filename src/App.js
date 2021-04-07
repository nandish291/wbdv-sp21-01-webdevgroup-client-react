import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"
import EventManager from "./components/event-manager/event-manager"
import AdminDashBoard from "./components/admin-dashboard/admin-dashboard";

function App() {
  return (
      <BrowserRouter>
        <div className="container-fluid">
          <Route path="/" exact={true}  component={Home}/>
          <Route path="/events"  component={EventManager}/>
          <Route path="/admin"  component={AdminDashBoard}/>
          {/*<div className="container-fluid">*/}
          {/*  <CourseManager/>*/}
          {/*  <CourseEditor/>*/}
          {/*</div>*/}
        </div>
      </BrowserRouter>
  );
}

export default App;
