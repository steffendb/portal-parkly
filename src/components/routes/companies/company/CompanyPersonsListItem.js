import React, { useState } from "react";

import DaySelector from "../../../common/dayselector";

const CompanyPersonsListItem = (props) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  function handleOnToggle(event) {
    toggle(!open);
  }

  return (
    <>
      <div className="list-item">
        <div className="list-item-link" onClick={() => handleOnToggle()}>
          <div className="list-title">{props.name}</div>
          <div className="list-spots--narrow">{props.spots}</div>
          {/* prettier-ignore */}
          <div className="list-daterange">{props.from} - {props.to}</div>
          <div className="list-text">{props.status}</div>
          {/* prettier-ignore */}
          <svg className="icon list-item-icon" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 16" width="16" height="16"><g transform="matrix(0.6666666666666666,0,0,0.6666666666666666,0,0)"><path d="M10.5 20.499L3.5 20.499 3.5 13.499" fill="none" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.5 10.499L20.5 3.499 13.5 3.499" fill="none" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.5 20.499L20.5 3.499" fill="none" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
        </div>
      </div>
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
            <h2 className="pb-24">Navn Navnesen</h2>
            <form className="grid">
              <div className="grid two-col">
                <div className="form-field">
                  <label>Fornavn</label>
                  <input type="text" value="Navn"></input>
                </div>
                <div className="form-field">
                  <label>Etternavn</label>
                  <input type="text" value="Navnesen"></input>
                </div>
              </div>
              <div className="form-field">
                <label>Telefonnummer</label>
                <input
                  type="text"
                  className="input--large"
                  value="96629918"
                ></input>
              </div>
              <div className="form-field">
                <label>Plasser</label>
                <input type="text" className="input--small" value="2"></input>
              </div>
              <div className="grid two-col">
                <div className="form-field">
                  <label>Gyldig fra</label>
                  <input type="text" value="01.01.2021"></input>
                </div>
                <div className="form-field">
                  <label>Gyldig til</label>
                  <input type="text" value="31.12.2021"></input>
                </div>
              </div>
              <DaySelector />
              <div className="form-field">
                <label>E-postadresse</label>
                {/* prettier-ignore */}
                <span>Inviterer personen til å registrere, eller benytte sin eksisterende, Parkly-konto for å administrere sine kjøretøy selv.</span>
                <input type="text" value="navn.navnesen12345@gmail.com"></input>
                <button className="secondary mt-8">
                  <span>Send ny invitasjon</span>
                </button>
              </div>
              <div className="form-field">
                <label>Kjøretøy</label>
                {/* prettier-ignore */}
                <span>Ett eller flere registreringsnummer som umiddelbart får aktive tillatelser. Personen kan selv administrere disse senere – ved at du fyller inn e-postadresse i feltet over.</span>
                <div className="input-with-delete">
                  <input type="text" value="AB12345"></input>
                  <button type="button" className="delete">
                    {/* prettier-ignore */}
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 16" width="16" height="16"><g transform="matrix(0.6666666666666666,0,0,0.6666666666666666,0,0)"><path d="M0.500 12.000 A11.500 11.500 0 1 0 23.500 12.000 A11.500 11.500 0 1 0 0.500 12.000 Z" fill="none" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 7L17 17" fill="none" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 7L7 17" fill="none" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                  </button>
                </div>
                <div className="input-with-delete">
                  <input type="text" value="CD56789"></input>
                  <button type="button" className="delete">
                    {/* prettier-ignore */}
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 16" width="16" height="16"><g transform="matrix(0.6666666666666666,0,0,0.6666666666666666,0,0)"><path d="M0.500 12.000 A11.500 11.500 0 1 0 23.500 12.000 A11.500 11.500 0 1 0 0.500 12.000 Z" fill="none" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 7L17 17" fill="none" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 7L7 17" fill="none" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                  </button>
                </div>
                <button type="button" className="secondary">
                  <span>Legg til kjøretøy</span>
                </button>
              </div>
              <div className="form-field">
                <div className="modal-footer">
                  <button className="primary" onClick={() => handleOnToggle()}>
                    <span>Lagre</span>
                  </button>
                  <button type="button" className="secondary delete">
                    <span>Slett</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CompanyPersonsListItem;
