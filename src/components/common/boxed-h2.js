import { NavLink, useHistory } from "react-router-dom";

const BoxedH2 = (props) => {
  let history = useHistory();
  function handleBack() {
    history.goBack();
  }
  return (
    /* prettier-ignore */
    <div className="box title-box">
      {props.showBack ? <button className="box-button" onClick={handleBack}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="15.54" viewBox="0 0 20 15.54"><polygon points="20 6.769 3.868 6.769 9.652 1.392 8.356 0 0 7.771 8.356 15.54 9.652 14.148 3.864 8.769 20 8.769 20 6.769"/></svg></button> : ""}
      <div className="box-title">
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};

export default BoxedH2;
