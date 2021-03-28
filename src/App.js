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
        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code>src/App.js</code> and save to reload.
        //     </p>
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a>
        //   </header>
        // </div>
    );
}

export default App;
