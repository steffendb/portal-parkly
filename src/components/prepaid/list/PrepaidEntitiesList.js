import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import PrepaidListItem from "./PrepaidListItem";

const PrepaidEntitiesList = (props) => {
  return (
    /* prettier-ignore */
    <>
    <div className="box info-box">
      <div className="counter">
        <h4>4 <span className="unit">bedrifter</span></h4>
      </div>
      <div className="counter">
        <h4>16/20 <span className="unit">plasser tildelt</span></h4>
      </div>
    </div>
      <PrepaidListItem entity="Treningssenteret Sprek" spots={10} spotsused={9} from="01.01.2020" to="31.12.2020" status="aktiv"/>
      <PrepaidListItem entity="Sentrumssenteret" spots={5} spotsused={2} from="01.01.2020" to="31.12.2020" status="aktiv"/>
      <PrepaidListItem entity="Kaffistova Kafé" spots={2} spotsused={0} from="01.01.2020" to="31.12.2020" status="inaktiv"/>
      <PrepaidListItem entity="Frisøren på hjørnet" spots={3} spotsused={5} from="01.01.2020" to="31.12.2020" status="aktiv"/>
    </>
  );
};

export default PrepaidEntitiesList;
