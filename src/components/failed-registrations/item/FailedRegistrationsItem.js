import React, { useState } from "react";
import useLockBodyScroll from "../../common/lock-body-scroll";

import img1 from "../../../img/1.jpg";
import img2 from "../../../img/2.jpg";
import img3 from "../../../img/3.jpg";

const FailedRegistrationsItem = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="sticky-header sub">
        <h2>Innkjøring 12345</h2>
      </div>
      <div className="failed-images">
        <div className="failed-img-overview" onClick={() => setModalOpen(true)}>
          <img src={img2} alt="Img 2" />
        </div>
        <div className="failed-img-overview" onClick={() => setModalOpen(true)}>
          <img src={img3} alt="Img 3" />
        </div>
        <div className="failed-img-plate" onClick={() => setModalOpen(true)}>
          <img src={img1} alt="Img 1" />
        </div>
      </div>
      {modalOpen && <Modal onClose={() => setModalOpen(false)} />}
      <div className="sticky-header sub">
        <h2>Oppdater registrering</h2>
      </div>
      <form>
        <label for="plate">Registreringsnummer</label>
        <input
          name="plate"
          type="text"
          value="DN23529"
          spellcheck="false"
        ></input>
        <label for="plate">Retning</label>
        <input type="radio" id="in" name="direction" value="in" checked />
        <label for="in">Innkjøring</label>
        <input type="radio" id="out" name="direction" value="out" />
        <label for="out">Utkjøring</label>
        <button className="primary">Lagre</button>
      </form>
    </>
  );
};

function Modal({ img, onClose }) {
  useLockBodyScroll();
  return (
    <div className="modal-overlay zoom-out" onClick={onClose}>
      <div className="modal">
        {img}
        <div className="modal-img">
          <img src={img2} alt="Img 2"></img>
        </div>
      </div>
    </div>
  );
}

export default FailedRegistrationsItem;
