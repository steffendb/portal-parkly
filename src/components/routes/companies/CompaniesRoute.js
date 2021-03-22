import { Switch, Route } from "react-router-dom";

import CompaniesList from "./CompaniesList";

import CompanyRoute from "./company/CompanyRoute";

const CompaniesRoute = (props) => {
  return (
    <>
      <main>
        <Switch>
          <Route exact path="/companies">
            <nav className="breadcrumbs">
              <span className="crumb">Kunder</span>
            </nav>
            <h1>Bedrifter</h1>
            <p>
              Som administrator for en parkeringsplass kan du tildele faste
              plasser til bedrifter. Bedriftens administrator kan videretildele
              plassene til privatpersoner. <b>18</b> av <b>80</b> plasser er
              tildelt.
            </p>
            <CompaniesList />
          </Route>
          <Route path="/companies/company">
            <CompanyRoute />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default CompaniesRoute;
