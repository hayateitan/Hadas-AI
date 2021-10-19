import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Login/Login'
import Container from './Container'
import Home from './Home/Home'
import Notebook from './Notebook/Notebook'
import Predict from './Notebook/Explain'
import Repository from './Notebook/RepositoryNotebook'
import CreateNotebook from './Notebook/CreateNotebook'
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
          <Route exact path="/Repository" component={() => <Container><Repository /></Container>} />
          <Route exact path="/CreateNoteBook" component={() => <Container><CreateNotebook /></Container>} />
     
        </Switch>
      </Router>
    </div>
  );
}

export default App;
