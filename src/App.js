import './App.css';
import {BrowserRouter, Link, Route} from "react-router-dom";
import Search from "./components/search"
import EventGrid from "./components/event-grid/event-grid";
import Home from "./home";
import React from "react";
import LogIn from "./login";
import SignUp from "./signup";

function App() {
    return (
        <BrowserRouter>
            <div className="container-fluid">
                <Link to="/">
                    <i className="fas fa-2x fa-home float-right"/>
                </Link>

                <Route path="/" exact={true}>
                    <Home/>
                </Route>


                <Route path="/events" exact={true}>
                    <EventGrid/>
                </Route>
                <Route path="/events/search" exact={true}>
                    <Search/>
                </Route>
                <Route path="/events/login" exact={true}>
                    <LogIn/>
                </Route>
                <Route path="/events/signup" exact={true}>
                    <SignUp/>
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
