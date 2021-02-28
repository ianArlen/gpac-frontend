import './App.css';
import {Route} from "react-router-dom"
import Home from './Components/Home/index';
import Map from './Components/Map/Map';
import Candidate from './Components/Candidate/Candidate';
import CssBaseline from '@material-ui/core/CssBaseline';
import Login from './Components/Login/Login';

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Login}/>
      <Route path="/market" component={Home}/>
      <Route path="/map" component={Map}/>
      <Route path="/candidate" component={Candidate}/>
    </>
  );
}

export default App;
