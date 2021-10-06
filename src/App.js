import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Login/Login'
import Container from './Container'
import Home from './Home/Home'
import Notebook from './Notebook/Notebook'
import Predict from './Notebook/Predict'
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/Home" component={() => <Container><Home /></Container>} />
          <Route exact path="/Notebook" component={() => <Container><Notebook /></Container>} />
          <Route exact path="/Predict" component={() => <Container><Predict /></Container>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
