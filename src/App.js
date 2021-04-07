import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import home from "./components/home";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={home}/>
    </BrowserRouter>
  );
}

export default App;
