import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useParams,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import FailedRegistrations from "../../failed-registrations/FailedRegistrations";
import FailedRegistrationsAside from "../../failed-registrations/aside/aside";

const FailedRegistrationsRoute = (props) => {
  let history = useHistory();
  function handleBack() {
    history.goBack();
  }
  return (
    <>
      <main>
        <div className="box main-header">
          <h1>Feilregistreringer</h1>
          <Switch>
            <Route exact path="/failed-registrations/info">
              <a className="box-button aside-toggle" onClick={handleBack}>
                {/* prettier-ignore */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="24" opacity="0"/><path d="M12,1.25A10.75,10.75,0,1,0,22.75,12,10.762,10.762,0,0,0,12,1.25Zm0,20A9.25,9.25,0,1,1,21.25,12,9.26,9.26,0,0,1,12,21.25Z"/><polygon points="17.78 7.28 16.72 6.22 12 10.939 7.28 6.22 6.22 7.28 10.939 12 6.22 16.72 7.28 17.78 12 13.061 16.72 17.78 17.78 16.72 13.061 12 17.78 7.28"/></svg>
              </a>
            </Route>
            <Route path="/failed-registrations">
              {/* prettier-ignore */}
              <NavLink className="box-button aside-toggle" to="/failed-registrations/info">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="24" opacity="0"/><path d="M12,22.75A10.75,10.75,0,1,0,1.25,12,10.762,10.762,0,0,0,12,22.75Zm0-20A9.25,9.25,0,1,1,2.75,12,9.26,9.26,0,0,1,12,2.75Z"/><rect x="11.25" y="10.072" width="1.5" height="6.854"/><rect x="11.25" y="7.072" width="1.5" height="1.5"/></svg>
          </NavLink>
            </Route>
          </Switch>
        </div>
        <Switch>
          <Route exact path="/failed-registrations/info">
            <FailedRegistrationsAside />
          </Route>
          <Route path="/failed-registrations">
            <FailedRegistrations />
          </Route>
        </Switch>
      </main>
      <aside>
        <div className="sidebar">
          <FailedRegistrationsAside />
        </div>
      </aside>
    </>
  );
};

export default FailedRegistrationsRoute;
