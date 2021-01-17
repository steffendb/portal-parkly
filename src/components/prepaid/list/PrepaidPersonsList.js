import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import PrepaidListPersonItem from "./PrepaidListPersonItem";

const PrepaidPersonsList = (props) => {
  return (
    /* prettier-ignore */
    <>
      <PrepaidListPersonItem name="Navn Navnesen" spots={1} from="01.01.2020" to="31.12.2020" status="aktiv"/>
      <PrepaidListPersonItem name="Navn Navnesen" spots={2} from="01.01.2020" to="31.12.2020" status="aktiv"/>
      <PrepaidListPersonItem name="Navn Navnesen" spots={1} from="01.01.2020" to="31.12.2020" status="inaktiv"/>
      <PrepaidListPersonItem name="Navn Navnesen" spots={1} from="01.01.2020" to="31.12.2020" status="aktiv"/>
    </>
  );
};

export default PrepaidPersonsList;
