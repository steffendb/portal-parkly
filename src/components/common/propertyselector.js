import React, { useState, useRef } from "react";
import { useClickAway } from "ahooks";
import { ReactComponent as CarPinIcon } from "../../icons/pin-car-24.svg";
import { ReactComponent as CheckCircleIcon } from "../../icons/check-circle-16.svg";

const PropertySelector = () => {
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
      <div className="dropdown-container" ref={ref}>
        <button className="nav-button" className={open ? "nav-button active" : "nav-button"} onClick={() => handleOnToggle()}>
          <div className="nav-button-icon">
            <CarPinIcon />
          </div>
          <span className="media-s-up">Sundgata 12</span>
        </button>
        {open && (
          <div className="dropdown">
            <button className="dropdown-button">
              <span>Acme properties</span>
            </button>
            <button className="dropdown-button">
              <span>Banana Benders Inc.</span>
            </button>
            <button className="dropdown-button">
              <span>Sundgata 12</span>
              <CheckCircleIcon />
            </button>
            <button className="dropdown-button">
              <span>Underground Lair</span>
            </button>
            <button className="dropdown-button">
              <span>Wayland Industries</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default PropertySelector;
