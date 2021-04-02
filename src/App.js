import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Search from "./components/search"

function App() {
    return (
        <BrowserRouter>
            <div className="container-fluid">
                <Route path="/"
                       exact={true}>
                    <Search/>
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
