import React, { useState, useRef } from "react";
import { useClickAway } from 'ahooks';

const ListDropdown = ({ items = [] }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const ref = useRef();
  useClickAway(() => {
    setOpen(false);
  }, ref);

  function handleOnClick(item) {
    setOpen(false);
  }

  function handleOnToggle(event) {
    toggle(!open);
  }

  return (
    <div className="dropdown-container" ref={ref}>
      <button
        className={open ? "dropdown-toggle open" : "dropdown-toggle "}
        onClick={() => handleOnToggle()}
      >
        {/* prettier-ignore */}
        <svg className="icon pos" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24" width="24" height="24"><g transform="matrix(1,0,0,1,0,0)"><path d="M5.750 12.000 A1.250 1.250 0 1 0 8.250 12.000 A1.250 1.250 0 1 0 5.750 12.000 Z" fill="none" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.750 12.000 A1.250 1.250 0 1 0 13.250 12.000 A1.250 1.250 0 1 0 10.750 12.000 Z" fill="none" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.750 12.000 A1.250 1.250 0 1 0 18.250 12.000 A1.250 1.250 0 1 0 15.750 12.000 Z" fill="none" stroke-linecap="round" stroke-linejoin="round"></path><path d="M0.500 12.000 A11.500 11.500 0 1 0 23.500 12.000 A11.500 11.500 0 1 0 0.500 12.000 Z" fill="none" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
      </button>
      {open && (
        <div className="dropdown">
          {items.map((item) => (
            <button key={item.id} onClick={() => handleOnClick(item)}>
              {item.value}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListDropdown;
