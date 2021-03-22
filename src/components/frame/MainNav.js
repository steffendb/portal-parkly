import { NavLink } from "react-router-dom";

import { ReactComponent as GarageIcon } from "../../icons/garage-24.svg";
import { ReactComponent as CarErrorIcon } from "../../icons/car-error-24.svg";
import { ReactComponent as PropertySettingsIcon } from "../../icons/property-settings-24.svg";
import { ReactComponent as CompanyIcon } from "../../icons/company-24.svg";
import { ReactComponent as UsersIcon } from "../../icons/users-24.svg";
import { ReactComponent as CarOkIcon } from "../../icons/car-ok-24.svg";
import { ReactComponent as InvoiceIcon } from "../../icons/invoice-24.svg";
import { ReactComponent as GrowMoneyIcon } from "../../icons/grow-money-24.svg";

const MainNav = (props) => {
  return (
    <nav className="main flex-m-up">
      <span className="h4 pb-10">Sundgata 12</span>
      <NavLink className="nav-button" exact to="/">
        <div className="nav-button-icon">
          <GarageIcon />
        </div>
        <span>Hjem</span>
      </NavLink>
      <NavLink className="nav-button" to="/failed-registrations">
        <div className="nav-button-icon">
          <CarErrorIcon />
        </div>
        <span>Feilregistreringer</span>
      </NavLink>
      <NavLink className="nav-button" to="/settings">
        <div className="nav-button-icon">
          <PropertySettingsIcon />
        </div>
        <span>Innstillinger</span>
      </NavLink>
      <span className="h4 pt-20 pb-10">Kunder</span>
      <NavLink className="nav-button" to="/companies">
        <div className="nav-button-icon">
          <CompanyIcon />
        </div>
        <span>Bedrifter</span>
      </NavLink>
      <NavLink className="nav-button" to="/persons">
        <div className="nav-button-icon">
          <UsersIcon />
        </div>
        <span>Personer</span>
      </NavLink>
      <span className="h4 pt-20 pb-10">Rapporter</span>
      <NavLink className="nav-button" to="/parkings">
        <div className="nav-button-icon">
          <CarOkIcon />
        </div>
        <span>Parkeringer</span>
      </NavLink>
      <NavLink className="nav-button" to="/invoices">
        <div className="nav-button-icon">
          <InvoiceIcon />
        </div>
        <span>Fakturaer</span>
      </NavLink>
      <NavLink className="nav-button" to="/revenue">
        <div className="nav-button-icon">
          <GrowMoneyIcon />
        </div>
        <span>Omsetning</span>
      </NavLink>
    </nav>
  );
};

export default MainNav;
