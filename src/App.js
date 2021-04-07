import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import home from "./components/home";

function App() {
  return (

    <BrowserRouter>
      <Route path="/" exact={true} component={home}/>
    </BrowserRouter>
  );
}

export default App;
