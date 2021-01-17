import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import PrepaidEntitiesList from "../../prepaid/list/PrepaidEntitiesList";
import PrepaidPersonsList from "../../prepaid/list/PrepaidPersonsList";
import PrepaidAside from "../../prepaid/aside/aside";
import EntityItem from "../../prepaid/entity/entityitem";
import PersonItem from "../../prepaid/person/personitem";

const PrepaidRoute = (props) => {
  return (
    <>
      <main>
        <div className="box main-header">
          <h1>Faste plasser</h1>
        </div>
        <Switch>
          <Route exact path="/prepaid">
            {/* prettier-ignore */}
            <nav className="tab-nav">
              <NavLink exact to="/prepaid">Bedrifter</NavLink>
              <NavLink exact to="/prepaid/persons">Personer</NavLink>
            </nav>
            <PrepaidEntitiesList />
          </Route>
          <Route exact path="/prepaid/persons">
            {/* prettier-ignore */}
            <nav className="tab-nav">
              <NavLink exact to="/prepaid">Bedrifter</NavLink>
              <NavLink exact to="/prepaid/persons">Personer</NavLink>
            </nav>
            <PrepaidPersonsList />
          </Route>
          <Route exact path="/prepaid/entity">
            <EntityItem />
          </Route>
          <Route exact path="/prepaid/person">
            <PersonItem />
          </Route>
        </Switch>
      </main>
      <aside>
        <div className="sidebar">
          <PrepaidAside />
        </div>
      </aside>
    </>
  );
};

export default PrepaidRoute;
