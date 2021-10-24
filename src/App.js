import { 
  BrowserRouter as Router,
  Switch, Route
 } from "react-router-dom"

import Main from "./pages/Main"
import Admin from "./pages/Admin";
import NavBar from "./common/navbar";
import Contacts from "./pages/contacts";
import Single from "./pages/Single";
import Category from "./pages/Category";

function App() {
  return (
    <Router>
       <NavBar/>
      <Switch>
        <Route exact path="/">
          
          <Main/>
        </Route>
        <Route  path="/admin">
          <Admin/>
        </Route>
        <Route  path="/contacts">
          <Contacts/>
        </Route>
        <Route  path="/single/:id">
          <Single/>
        </Route>
        <Route  path="/category/:id">
          <Category/>
        </Route>
        
      </Switch>

    </Router>
  );
}

export default App;
