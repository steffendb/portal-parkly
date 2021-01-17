import FailedRegistrationsList from "./list/FailedReigistrationsList";
import FailedRegistrationsItem from "./item/FailedRegistrationsItem";

const FailedRegistrations = (props) => {
  return (
    <>
      <div className="list">
        <FailedRegistrationsList />
      </div>
    </>
  );
};

export default FailedRegistrations;
