import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import EventManager from "./components/event-manager";

function App() {
    return (
        <BrowserRouter>
            <div className="container-fluid">
                <Route path="/"
                       exact={true}>
                    <EventManager/>
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
