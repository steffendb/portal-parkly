import React, { useState } from "react";

import DaySelector from "../../../common/dayselector";

const CompanyAllocation = (props) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  function handleOnToggle(event) {
    toggle(!open);
  }
  return (
    <div className="mb-24">
      <h2>Bedriftstildeling</h2>
      <div className="list">
        <div className="list-labels">
          <div className="list-spots">Plasser</div>
          <div className="list-overbooking">Overforbruk</div>
          <div className="list-daterange">Periode</div>
          <div className="list-daterange">Dager</div>
        </div>
        <div className="list-item">
          <div className="list-item-link" onClick={() => handleOnToggle()}>
            <div className="list-spots">8 av 10 tildelt</div>
            <div className="list-overbooking">Faktureres bedrift</div>
            {/* prettier-ignore */}
            <div className="list-daterange">01.01.2021 - 31.12.2021</div>
            <div className="list-daterange">Mandag til søndag</div>
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
              <h2 className="pb-24">Bedriftstildeling</h2>
              <form className="grid">
                <div className="form-field">
                  <label>Plasser</label>
                  <input
                    type="text"
                    className="input--small"
                    value="10"
                  ></input>
                </div>
                <div className="form-field">
                  <label>Overforbruk</label>
                  <span>
                    Bedriftens adminstrator kan tildele til flere personer og
                    kjøretøy enn antallet plasser. Hvem skal faktureres dersom
                    antallet samtidige parkeringer overstiger
                    bedriftstildelingen?
                  </span>
                  <div className="checkbox">
                    <input type="radio" id="b" name="inv" checked />
                    <label for="b">Bedriften</label>
                  </div>
                  <div className="checkbox">
                    <input type="radio" id="p" name="inv" />
                    <label for="p">Personen</label>
                  </div>
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
                  <button className="primary" onClick={() => handleOnToggle()}>
                    <span>Lagre</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyAllocation;
