import { Switch, Route, NavLink } from "react-router-dom";

import CompanyAllocation from "./CompanyAllocation";
import CompanyPersonsList from "./CompanyPersonsList";
import CompanyUsersList from "./CompanyUsersList";
import CompanyContactInfo from "./CompanyContactInfo";

const CompanyRoute = (props) => {
  return (
    <>
      <nav className="breadcrumbs">
        <span className="crumb">Kunder</span>
        <NavLink className="crumb crumb--link" exact to="/companies">
          Bedrifter
        </NavLink>
      </nav>
      <h1>Treningssenteret Sprek</h1>
      <nav className="tab-nav mb-24">
        <NavLink className="nav-link" exact to="/companies/company">
          Personer
        </NavLink>
        <NavLink className="nav-link" to="/companies/company/invoices">
          Fakturahistorikk
        </NavLink>
        <NavLink className="nav-link" to="/companies/company/settings">
          Innstillinger
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/companies/company">
          <CompanyPersonsList />
        </Route>
        <Route exact path="/companies/company/invoices">
          <h2>Kommer snart</h2>
          <p>
            Snart vil du kunne se fakturahistorikk for bedrifter i denne fanen.
          </p>
        </Route>
        <Route exact path="/companies/company/settings">
          <CompanyContactInfo></CompanyContactInfo>
          <CompanyAllocation></CompanyAllocation>
          <CompanyUsersList></CompanyUsersList>
          <h2>Sletting</h2>
          <p>Du kan slette en bedrift så lenge det ikke finnes fakturaer eller transaksjoner.</p>
          <button className="secondary delete mt-24">
            <span>Slett bedrift</span>
          </button>
        </Route>
      </Switch>
    </>
  );
};

export default CompanyRoute;
