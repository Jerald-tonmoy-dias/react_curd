import logo from './logo.svg';
import './App.css';
import Home from './component/pages/Home';
import Navbar from './component/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './component/pages/About';
import Contact from './component/pages/Contact';
import NotFound from './component/pages/NotFound';
import AddUsert from './component/users/AddUsert';
import EditUser from './component/users/EditUser';
import ViewUser from './component/users/ViewUser';

function App(props) {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/user/add" component={AddUsert} />
        <Route exact path="/user/edit/:id" component={EditUser} />
        <Route exact path="/user/view/:id" component={ViewUser} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
