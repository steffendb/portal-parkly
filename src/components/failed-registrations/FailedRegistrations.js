import {
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import FailedRegistrationsList from "./list/FailedRegList";
import FailedRegistrationsItem from "./item/FailedRegistrationsItem";

const FailedRegistrations = (props) => {
  return (
    <>
      <Switch>
        <Route exact path="/failed-registrations">
          <div className="sticky-header main">
            <h1>Feilregistreringer</h1>
          </div>
          <FailedRegistrationsList />
        </Route>
        <Route path="/failed-registrations/item">
          <div className="sticky-header main">
            <NavLink className="back-arrow" to="/failed-registrations">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15.54" viewBox="0 0 20 15.54"><polygon points="20 6.769 3.868 6.769 9.652 1.392 8.356 0 0 7.771 8.356 15.54 9.652 14.148 3.864 8.769 20 8.769 20 6.769"/></svg>
            </NavLink>
            <h1>Feilregistreringer</h1>
          </div>
          <FailedRegistrationsItem />
        </Route>
      </Switch>
    </>
  );
};

export default FailedRegistrations;
