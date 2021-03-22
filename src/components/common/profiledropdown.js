import React, { useState, useRef } from "react";
import { useClickAway } from "ahooks";
import { ReactComponent as ProfileIcon } from "../../icons/user-24.svg";
import { ReactComponent as CheckCircleIcon } from "../../icons/check-circle-16.svg";

const ProfileDropdown = () => {
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
      <div className="dropdown-container ml-24" ref={ref}>
        <button className="nav-button" className={open ? "nav-button active" : "nav-button"} onClick={() => handleOnToggle()}>
          <div className="nav-button-icon">
            <ProfileIcon />
          </div>
          <span className="media-s-up">Navn Navnesen</span>
        </button>
        {open && (
          <div className="dropdown">
            <button className="dropdown-button">
              <span>Min profil</span>
            </button>
            <button className="dropdown-button">
              <span>Logg ut</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileDropdown;
