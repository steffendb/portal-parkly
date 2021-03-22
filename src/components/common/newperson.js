import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const NewCompany = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const history = useHistory();
  
  function handleOnToggle(event) {
    toggle(!open);
  }

  function handleOnSubmit(event) {
    history.push("/companies/company");
  }

  return (
    <>
      <button
        className={open ? "primary open" : "primary"}
        onClick={() => handleOnToggle()}
      >
        <span>Ny person</span>
        {/* prettier-ignore */}
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 16" width="16" height="16"><g transform="matrix(0.6666666666666666,0,0,0.6666666666666666,0,0)"><path d="M12 1L12 23" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path><path d="M23 12L1 12" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
        </button>
      {open && (
        <div className="modal-container">
          <div className="modal modal-width--normal">
            <button
              className="modal-closebutton"
              onClick={() => handleOnToggle()}
            >
              {/* prettier-ignore */}
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24" width="24" height="24"><g transform="matrix(1,0,0,1,0,0)"><path d="M0.500 12.000 A11.500 11.500 0 1 0 23.500 12.000 A11.500 11.500 0 1 0 0.500 12.000 Z" fill="none" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 7L17 17" fill="none" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 7L7 17" fill="none" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
            </button>
            <h2 className="pb-24">Ny bedrift</h2>
            <form>
              <label>Bedriftens navn</label>
              <input type="text"></input>
              <label>Bedriftens e-postadresse</label>
              <span>Brukes til fakturautsending og meldinger</span>
              <input type="text"></input>
              <label>Adresse</label>
              <input type="text"></input>
              <label>Postnummer</label>
              <input type="text" className="input--small"></input>
              <label>Poststed</label>
              <input type="text" className="input--large"></input>
              <button
                className="primary mt-24"
                onClick={() => handleOnSubmit()}
              >
                <span>Opprett</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default NewCompany;
