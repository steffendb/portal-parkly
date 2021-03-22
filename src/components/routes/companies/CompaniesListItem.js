import { NavLink } from "react-router-dom";

const CompaniesListItem = (props) => {
  return (
    <>
      <div className="list-item">
        <NavLink className="list-item-link" to="/companies/company">
          <div className="list-title">{props.entity}</div>
          <div className="list-spots">{props.spotsused > props.spots ? <span class="red-text">{props.spotsused}</span> : <span>{props.spotsused}</span>} av {props.spots} tildelt</div>
          {/* prettier-ignore */}
          <div className="list-daterange">{props.from} - {props.to}</div>
          {/* prettier-ignore */}
          <svg className="icon list-item-icon" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 16" width="16" height="16"><g transform="matrix(0.6666666666666666,0,0,0.6666666666666666,0,0)"><path d="M5.651,23.5,18.227,12.374a.5.5,0,0,0,0-.748L5.651.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
        </NavLink>
      </div>
    </>
  );
};

export default CompaniesListItem;
