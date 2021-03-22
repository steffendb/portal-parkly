import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useClickAway } from "ahooks";
import { ReactComponent as MenuIcon } from "../../icons/menu-24.svg";

const MainNavDropdown = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const ref = useRef();
  useClickAway(() => {
    setOpen(false);
  }, ref);

  function handleOnToggle(event) {
    toggle(!open);
  }

  return (
    <>
      <div className="dropdown-container ml-24 media-m-down" ref={ref}>
        <button className="nav-button" className={open ? "nav-button active" : "nav-button"} onClick={() => handleOnToggle()}>
          <div className="nav-button-icon">
            <MenuIcon />
          </div>
          <span className="media-s-up">Meny</span>
        </button>
        {open && (
          <div className="dropdown">
            <div className="dropdown-text">
              <span className="h4 pb-10">Sundgata 12</span>
            </div>
            <NavLink className="dropdown-button" exact to="/">
              <span>Hjem</span>
            </NavLink>
            <NavLink className="dropdown-button" to="/failed-registrations">
              <span>Feilregistreringer</span>
            </NavLink>
            <NavLink className="dropdown-button" to="/settings">
              <span>Innstillinger</span>
            </NavLink>
            <div className="dropdown-text">
              <span className="h4 pb-10">Kunder</span>
            </div>
            <NavLink className="dropdown-button" to="/companies">
              <span>Bedrifter</span>
            </NavLink>
            <NavLink className="dropdown-button" to="/persons">
              <span>Personer</span>
            </NavLink>
            <div className="dropdown-text">
              <span className="h4 pb-10">Rapporter</span>
            </div>
            <NavLink className="dropdown-button" to="/parkings">
              <span>Parkeringer</span>
            </NavLink>
            <NavLink className="dropdown-button" to="/invoices">
              <span>Fakturaer</span>
            </NavLink>
            <NavLink className="dropdown-button" to="/revenue">
              <span>Omsetning</span>
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
};

export default MainNavDropdown;
