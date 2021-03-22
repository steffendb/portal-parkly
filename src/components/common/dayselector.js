import React, { useState } from "react";

const DaySelector = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  function handleOnToggle(event) {
    toggle(!open);
  }

  return (
    <>
      <div className="form-field">
        <div className="checkbox">
          <input
            type="checkbox"
            id="days"
            name="days"
            defaultChecked
            onChange={() => handleOnToggle()}
          />
          <label for="days">Mandag til søndag</label>
        </div>
      </div>
      {open && (
        <div className="grid seven-col">
          <div className="checkbox">
            <div className="form-field">
              <input type="checkbox" id="day-1" name="day-1" />
              <label for="day-1">Ma</label>
            </div>
          </div>
          <div className="checkbox">
            <div className="form-field">
              <input type="checkbox" id="day-2" name="day-2" />
              <label for="day-2">Ti</label>
            </div>
          </div>
          <div className="checkbox">
            <div className="form-field">
              <input type="checkbox" id="day-3" name="day-3" />
              <label for="day-3">On</label>
            </div>
          </div>
          <div className="checkbox">
            <div className="form-field">
              <input type="checkbox" id="day-4" name="day-4" />
              <label for="day-4">To</label>
            </div>
          </div>

          <div className="checkbox">
            <div className="form-field">
              <input type="checkbox" id="day-5" name="day-5" />
              <label for="day-5">Fr</label>
            </div>
          </div>
          <div className="checkbox">
            <div className="form-field">
              <input type="checkbox" id="day-6" name="day-6" />
              <label for="day-6">Lø</label>
            </div>
          </div>
          <div className="checkbox">
            <div className="form-field">
              <input type="checkbox" id="day-7" name="day-7" />
              <label for="day-7">Sø</label>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DaySelector;
