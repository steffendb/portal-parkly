import "./App.scss";
import MainNav from "./components/main-nav/MainNav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeRoute from "./components/routes/home/HomeRoute";
import FailedRegistrationsRoute from "./components/routes/failed-registrations/FailedRegistrationsRoute";
import PrepaidRoute from "./components/routes/prepaid/PrepaidRoute";

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          {/* prettier-ignore */}
          <svg className="logo" xmlns="http://www.w3.org/2000/svg" width="32" height="37.715" viewBox="0 0 32 37.715"><rect x="17.518" y="28.925" width="10.778" height="6.063" rx="0.471" transform="translate(-15.887 25.558) rotate(-45)"/><rect x="11.801" y="23.209" width="10.778" height="6.063" rx="0.471" transform="translate(-13.52 19.841) rotate(-45)"/><rect x="0.37" y="11.778" width="10.778" height="6.063" rx="0.471" transform="translate(-8.785 8.41) rotate(-45)"/><rect x="20.852" y="14.159" width="10.778" height="6.063" rx="0.471" transform="translate(-4.47 23.59) rotate(-45)"/><rect x="15.136" y="8.443" width="10.778" height="6.063" rx="0.471" transform="translate(-2.102 17.874) rotate(-45)"/><rect x="9.42" y="2.728" width="10.778" height="6.063" rx="0.471" transform="translate(0.265 12.159) rotate(-45)"/></svg><MainNav></MainNav>
        </header>
        <Switch>
          <Route exact path="/">
            <HomeRoute />
          </Route>
          <Route path="/failed-registrations">
            <FailedRegistrationsRoute />
          </Route>
          <Route path="/prepaid">
            <PrepaidRoute />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
