import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import home from "./components/home";
import EventDetails from "./components/event-details/event-details";
import AdminDashBoard from "./components/admin/admin-dashboard";
import LogIn from "./components/login/login";
import SignUp from "./components/signUp/signup";
//import Search from "./components/search/search";
import Profile from "./components/profile/profile"
import SearchResults from "./components/searchResults";

function App() {
  return (
      <>
        <BrowserRouter>
          <Route path="/" exact={true} component={home}/>
          <Route path="/event/:eventId" exact={true} component={EventDetails}/>
          <Route path="/admin"  component={AdminDashBoard}/>
          {/*<Route path="/search" component={SearchResults}/> */}
          <Route path="/login" exact={true} component={LogIn}/>
          <Route path="/signup" exact={true} component={SignUp}/>
          <Route path="/profile" exact={true} component={Profile}/>
        </BrowserRouter>
      </>
//import Profile from './components/profile'
//import profile from './imgs/profile.jpg'
//import event1 from './imgs/event1.jpg'
//import event2 from './imgs/event2.jpg'
//import event3 from './imgs/event3.jpg'
//import media1 from './imgs/media1.jpg'
//import media2 from './imgs/media2.jpg'

//function App() {
//  return (
//    <div className="App">
//      <Profile imgPath = {profile} events = {[event1, event2, event3]} media = {[media1, media2]} />
////    </div>
////  );
//}
)};
//
export default App;
