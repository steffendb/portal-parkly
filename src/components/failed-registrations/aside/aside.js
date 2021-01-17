import BoxedH2 from "../../common/boxed-h2";

const FailedRegistrationsAside = (props) => {
  return (
    <>
      <div className="info-box">
        <p>
          Det er 3 registrerte feil. Listen er sortert slik at innkjøringsfeil
          ligger øverst. Det er viktig å korrigere innkjøringer først, da
          utkjøringer kan stå oppført grunnet manglende innkjøring.
        </p>
      </div>
    </>
  );
};

export default FailedRegistrationsAside;
