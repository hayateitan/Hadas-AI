import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Login/Login'
import Container from './Container'
import Home from './Home/Home'
import Notebook from './Notebook/Notebook'
import Predict from './Notebook/Predict'
import Repository from './Notebook/RepositoryNotebook'
import CreateNotebook from './Notebook/CreateNotebook'
import "bootstrap/dist/css/bootstrap.min.css";
import BlockCode from "./Notebook/BlockCode";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Home" component={() => <Container><Home /></Container>} />
          <Route exact path="/Notebook" component={() => <Container><Notebook /></Container>} />
          <Route exact path="/Predict" component={() => <Container><BlockCode /></Container>} />
          <Route exact path="/Repository" component={() => <Container><Repository /></Container>} />
          <Route exact path="/CreateNoteBook" component={() => <Container><CreateNotebook /></Container>} />
     
        </Switch>
      </Router>
    </div>
  );
}

export default App;
