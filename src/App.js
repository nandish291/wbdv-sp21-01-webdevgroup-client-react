import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import home from "./components/home";
import EventDetails from "./components/event-details/event-details";
import AdminDashBoard from "./components/admin/admin-dashboard";
import LogIn from "./components/login/login";
import SignUp from "./components/signUp/signup";
import Search from "./components/search/search";
import Profile from './components/profile/profile'

function App() {
  return (
<>
    <BrowserRouter>
      <Route path="/" exact={true} component={home}/>
      <Route path="/event/:eventId" exact={true} component={EventDetails}/>
      <Route path="/admin"  component={AdminDashBoard}/>
        <Route path="/events/search" exact={true}>
            <Search/>
        </Route>
        <Route path="/events/login" exact={true}>
            <LogIn/>
        </Route>
        <Route path="/events/signup" exact={true}>
            <SignUp/>
        </Route>
        <Route path="/profile" exact={true} component={Profile}/>
    </BrowserRouter>
</>
  );
}

export default App;
