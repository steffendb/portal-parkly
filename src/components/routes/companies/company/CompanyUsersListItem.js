import React, { useState } from "react";

import DaySelector from "../../../common/dayselector";

const CompanyUsersListItem = (props) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const [deleteopen, setDeleteOpen] = useState(false);
  const toggleD = () => setDeleteOpen(!open);

  function handleOnToggle(event) {
    toggle(!open);
  }

  function handleOnDelete(event) {
    toggleD(!deleteopen);
  }

  return (
    <>
      <div className="list-item">
        <div className="list-item-link" onClick={() => handleOnToggle()}>
          <div className="list-title">{props.name}</div>
          <div className="list-email">{props.email}</div>
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
              <div className="form-field">
                <label>E-postadresse</label>
                {/* prettier-ignore */}
                <input type="text" value="navn.navnesen12345@gmail.com"></input>
              </div>
              <div className="form-field">
                <label>Status</label>
                <span>Invitasjon er sendt til e-postadressen over.</span>
                <button className="secondary">
                  <span>Send ny invitasjon</span>
                </button>
              </div>
              <div className="modal-footer">
                <button className="primary" onClick={() => handleOnToggle()}>
                  <span>Lagre</span>
                </button>
                <button
                  type="button"
                  className="secondary delete"
                  onClick={() => handleOnDelete()}
                >
                  <span>Slett</span>
                </button>
              </div>
              {deleteopen && (
                <div className="delete-footer">
                  <p>Er du sikker?</p>
                  <div className="yesno">
                    <button className="delete" onClick={() => handleOnToggle()}>
                      <span>Ja, slett</span>
                    </button>
                    <button
                      className="tertiary"
                      onClick={() => handleOnDelete()}
                    >
                      <span>Avbryt</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CompanyUsersListItem;
