import { NavLink } from "react-router-dom";

const PrepaidListPersonItem = (props) => {
  return (
    <>
      <div className="list-item">
        <NavLink className="list-item-link" to="/prepaid/person">
          <div className="list-title">{props.name}</div>
          <div className="list-text">{props.spots > 1 ? props.spots+" plasser" : props.spots+" plass"}</div>
          <div className="list-daterange">{props.from} - {props.to}</div>
          <div className="status">{props.status}</div>
        </NavLink>
      </div>
    </>
  );
};

export default PrepaidListPersonItem;
