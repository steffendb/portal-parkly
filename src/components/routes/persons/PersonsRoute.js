import {
  Switch,
  Route
} from "react-router-dom";

import PersonsList from "./PersonsList";

const PersonsRoute = (props) => {
  return (
    <>
      <main>
        <Switch>
          <Route exact path="/persons">
            <nav className="breadcrumbs">
              <span className="crumb">Personer</span>
            </nav>
            <h1>Personer</h1>
            <PersonsList />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default PersonsRoute;