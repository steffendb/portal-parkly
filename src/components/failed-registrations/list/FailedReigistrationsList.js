import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useParams,
  useRouteMatch
} from "react-router-dom";

import BoxedH2 from "../../common/boxed-h2";
import FailedRegistrationsItem from "../item/FailedRegistrationsItem";
import FailedRegListItem from "./item/FailedRegListItem";

const FailedRegistrationsList = (props) => {

  return (
    <>
      <Switch>
        <Route exact path="/failed-registrations">
          <BoxedH2 title="Innkjøringer" />
          <FailedRegListItem id="12345" date="01.01" time="12:27" confidence="51" plate="EK64761"/>
          <FailedRegListItem id="12346" date="01.01" time="14.35" confidence="95" plate="HH34412"/>
          <FailedRegListItem id="12347" date="01.01" time="15.40" confidence="93" plate="GH451234"/>
          <FailedRegListItem id="12348" date="01.01" time="20.56" confidence="64" plate="EBB5475"/>
          <FailedRegListItem id="12348" date="01.01" time="21.02" confidence="87" plate="XDD1535"/>
          <FailedRegListItem id="12345" date="01.01" time="12:27" confidence="51" plate="EK64761"/>
          <FailedRegListItem id="12346" date="01.01" time="14.35" confidence="95" plate="HH34412"/>
          <FailedRegListItem id="12347" date="01.01" time="15.40" confidence="93" plate="GH451234"/>
          <FailedRegListItem id="12348" date="01.01" time="20.56" confidence="64" plate="EBB5475"/>
          <FailedRegListItem id="12348" date="01.01" time="21.02" confidence="87" plate="XDD1535"/>
          <FailedRegListItem id="12345" date="01.01" time="12:27" confidence="51" plate="EK64761"/>
          <FailedRegListItem id="12346" date="01.01" time="14.35" confidence="95" plate="HH34412"/>
          <FailedRegListItem id="12347" date="01.01" time="15.40" confidence="93" plate="GH451234"/>
          <FailedRegListItem id="12348" date="01.01" time="20.56" confidence="64" plate="EBB5475"/>
          <FailedRegListItem id="12348" date="01.01" time="21.02" confidence="87" plate="XDD1535"/>
          <FailedRegListItem id="12345" date="01.01" time="12:27" confidence="51" plate="EK64761"/>
          <FailedRegListItem id="12346" date="01.01" time="14.35" confidence="95" plate="HH34412"/>
          <FailedRegListItem id="12347" date="01.01" time="15.40" confidence="93" plate="GH451234"/>
          <FailedRegListItem id="12348" date="01.01" time="20.56" confidence="64" plate="EBB5475"/>
          <FailedRegListItem id="12348" date="01.01" time="21.02" confidence="87" plate="XDD1535"/>
          <FailedRegListItem id="12348" date="01.01" time="21.02" confidence="87" plate="XDD1535"/>
          <FailedRegListItem id="12345" date="01.01" time="12:27" confidence="51" plate="EK64761"/>
          <FailedRegListItem id="12346" date="01.01" time="14.35" confidence="95" plate="HH34412"/>
          <FailedRegListItem id="12347" date="01.01" time="15.40" confidence="93" plate="GH451234"/>
          <FailedRegListItem id="12348" date="01.01" time="20.56" confidence="64" plate="EBB5475"/>
          <FailedRegListItem id="12348" date="01.01" time="21.02" confidence="87" plate="XDD1535"/>
          <FailedRegListItem id="12345" date="01.01" time="12:27" confidence="51" plate="EK64761"/>
          <FailedRegListItem id="12346" date="01.01" time="14.35" confidence="95" plate="HH34412"/>
          <FailedRegListItem id="12347" date="01.01" time="15.40" confidence="93" plate="GH451234"/>
          <FailedRegListItem id="12348" date="01.01" time="20.56" confidence="64" plate="EBB5475"/>
          <FailedRegListItem id="12348" date="01.01" time="21.02" confidence="87" plate="XDD1535"/>
          <BoxedH2 title="Utkjøringer" />
          <FailedRegListItem id="12345" date="01.01" time="12:27" confidence="51" plate="EK64761"/>
          <FailedRegListItem id="12346" date="01.01" time="14.35" confidence="95" plate="HH34412"/>
          <FailedRegListItem id="12347" date="01.01" time="15.40" confidence="93" plate="GH451234"/>
          <FailedRegListItem id="12348" date="01.01" time="20.56" confidence="64" plate="EBB5475"/>
          <FailedRegListItem id="12348" date="01.01" time="21.02" confidence="87" plate="XDD1535"/>
          <FailedRegListItem id="12345" date="01.01" time="12:27" confidence="51" plate="EK64761"/>
          <FailedRegListItem id="12346" date="01.01" time="14.35" confidence="95" plate="HH34412"/>
          <FailedRegListItem id="12347" date="01.01" time="15.40" confidence="93" plate="GH451234"/>
          <FailedRegListItem id="12348" date="01.01" time="20.56" confidence="64" plate="EBB5475"/>
          <FailedRegListItem id="12348" date="01.01" time="21.02" confidence="87" plate="XDD1535"/>
          <FailedRegListItem id="12345" date="01.01" time="12:27" confidence="51" plate="EK64761"/>
          <FailedRegListItem id="12346" date="01.01" time="14.35" confidence="95" plate="HH34412"/>
          <FailedRegListItem id="12347" date="01.01" time="15.40" confidence="93" plate="GH451234"/>
          <FailedRegListItem id="12348" date="01.01" time="20.56" confidence="64" plate="EBB5475"/>
          <FailedRegListItem id="12348" date="01.01" time="21.02" confidence="87" plate="XDD1535"/>
          <FailedRegListItem id="12348" date="01.01" time="21.02" confidence="87" plate="XDD1535"/>
          <FailedRegListItem id="12345" date="01.01" time="12:27" confidence="51" plate="EK64761"/>
          <FailedRegListItem id="12346" date="01.01" time="14.35" confidence="95" plate="HH34412"/>
          <FailedRegListItem id="12347" date="01.01" time="15.40" confidence="93" plate="GH451234"/>
          <FailedRegListItem id="12348" date="01.01" time="20.56" confidence="64" plate="EBB5475"/>
          <FailedRegListItem id="12348" date="01.01" time="21.02" confidence="87" plate="XDD1535"/>
        </Route>
        <Route path="/failed-registrations/item">
          <FailedRegistrationsItem />
        </Route>
      </Switch>
    </>
  );
};

export default FailedRegistrationsList;
