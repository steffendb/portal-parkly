import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/frame/Header";
import MainNav from "./components/frame/MainNav";
import HomeRoute from "./components/routes/home/HomeRoute";
import FailedRegistrationsRoute from "./components/routes/failed-registrations/FailedRegistrationsRoute";
import CompaniesRoute from "./components/routes/companies/CompaniesRoute";
import PersonsRoute from "./components/routes/persons/PersonsRoute";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <MainNav />
        <Switch>
          <Route exact path="/">
            <HomeRoute />
          </Route>
          <Route path="/failed-registrations">
            <FailedRegistrationsRoute />
          </Route>
          <Route path="/companies">
            <CompaniesRoute />
          </Route>
          <Route path="/persons">
            <PersonsRoute />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
