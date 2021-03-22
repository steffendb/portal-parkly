import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import DaySelector from "../../common/dayselector";

const NewPerson = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const history = useHistory();

  function handleOnToggle(event) {
    toggle(!open);
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
              className="modal-closebutton delete"
              onClick={() => handleOnToggle()}
            >
              {/* prettier-ignore */}
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 16" width="16" height="16"><g transform="matrix(0.6666666666666666,0,0,0.6666666666666666,0,0)"><path d="M23.5 0.5L0.5 23.5" fill="none" stroke-linecap="round" stroke-linejoin="round"></path><path d="M23.5 23.5L0.5 0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
            </button>
            <h2 className="pb-24">Ny person</h2>
            <form className="grid">
              <div className="grid two-col">
                <div className="form-field">
                  <label>Fornavn</label>
                  <input type="text"></input>
                </div>
                <div className="form-field">
                  <label>Etternavn</label>
                  <input type="text"></input>
                </div>
              </div>
              <div className="form-field">
                <label>Telefonnummer</label>
                <input type="text" className="input--large"></input>
              </div>
              <div className="form-field">
                <label>Plasser</label>
                <input type="text" className="input--small"></input>
              </div>
              <div className="grid two-col">
                <div className="form-field">
                  <label>Gyldig fra</label>
                  <input type="text"></input>
                </div>
                <div className="form-field">
                  <label>Gyldig til</label>
                  <input type="text"></input>
                </div>
              </div>
              <DaySelector />
              <div className="form-field">
                <label>E-postadresse</label>
                {/* prettier-ignore */}
                <span>Inviterer personen til å registrere, eller benytte sin eksisterende, Parkly-konto for å administrere sine kjøretøy selv.</span>
                <input type="text"></input>
              </div>
              <div className="form-field">
                <label>Kjøretøy</label>
                {/* prettier-ignore */}
                <span>Ett eller flere registreringsnummer som umiddelbart får aktive tillatelser. Personen kan selv administrere disse senere – ved at du fyller inn e-postadresse i feltet over.</span>
                <button type="button" className="secondary">
                  <span>Legg til kjøretøy</span>
                </button>
              </div>
              <div className="form-field">
                <button className="primary">
                  <span>Lagre</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default NewPerson;
