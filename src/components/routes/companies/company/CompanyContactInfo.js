import React, { useState } from "react";

const CompanyContactInfo = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  function handleOnToggle(event) {
    toggle(!open);
  }

  return (
    <>
      <div className="mb-24">
        <h2 className="mb-8">Kontaktinformasjon</h2>
        <p>Treningssenteret Sprek</p>
        <p>123456789</p>
        <p>post@treningssenteret.no</p>
        <p>Gategata 30, 6030 Ålesund</p>
        <button className="link-like" onClick={() => handleOnToggle()}>
          <span>Endre</span>
        </button>
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
            <h2 className="pb-24">Endre Kontaktinformasjon</h2>
            <form>
              <label>Bedriftens navn</label>
              <input type="text" value="Treningssenteret Sprek"></input>
              <label>Organisasjonsnummer</label>
              <input type="text" value="123456789"></input>
              <label>Bedriftens e-postadresse</label>
              <span>Brukes til fakturautsending og meldinger</span>
              <input type="text" value="post@treningssenteret.no"></input>
              <label>Adresse</label>
              <input type="text" value="Gategata 30"></input>
              <label>Postnummer</label>
              <input type="text" className="input--small" value="6030"></input>
              <label>Poststed</label>
              <input type="text" className="input--large" value="Ålesund"></input>
              <button
                className="primary mt-24"
                onClick={() => handleOnToggle()}
              >
                <span>Lagre</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CompanyContactInfo;
