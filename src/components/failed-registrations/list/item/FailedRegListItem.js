import { NavLink } from "react-router-dom";

const FailedRegListItem = (props) => {
  return (
    <>
      <div className="list-item">
        <NavLink className="list-item-link" to="/failed-registrations/item">
          <div className="list-id">{props.id}</div>
          <div className="list-date">{props.date}</div>
          <div className="list-time">{props.time}</div>
          <div className="list-confidence">{props.confidence}</div>
          <div className="list-plate">{props.plate}</div>
        </NavLink>
      </div>
    </>
  );
};

export default FailedRegListItem;
