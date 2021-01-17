import { NavLink } from "react-router-dom";

const PrepaidListItem = (props) => {
  return (
    <>
      <div className="list-item">
        <NavLink className="list-item-link" to="/prepaid/entity">
          <div className="list-title">{props.entity}</div>
          <div className="list-text">{props.spotsused > props.spots ? <span class="red-text">{props.spotsused}</span> : <span>{props.spotsused}</span>}/{props.spots} tildelt</div>
          <div className="list-daterange">{props.from} - {props.to}</div>
          <div className="status">{props.status}</div>
        </NavLink>
      </div>
    </>
  );
};

export default PrepaidListItem ;
