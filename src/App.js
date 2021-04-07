import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Search from "./components/search"
import EventGrid from "./components/event-grid/event-grid";
import Home from "./home";

function App() {
    return (
        <BrowserRouter>
            <div className="container-fluid">
                <Route path="/" exact={true}>
                    <Home/>
                </Route>
                <Route path="/events" exact={true}>
                    <EventGrid/>
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
