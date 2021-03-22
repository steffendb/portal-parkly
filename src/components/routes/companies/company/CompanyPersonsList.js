import CompanyPersonsListItem from "./CompanyPersonsListItem";

import NewCompanyPerson from "./NewCompanyPerson";

import TableSearch from "../../../common/table-search";

const PersonsList = (props) => {
  return (
    <>
      <p>
        Persontildelinger knytter plasser til en person. Du kan velge å legge
        til kjøretøy med registreringsnummer. Disse vil få aktive tillatelser,
        uten at brukeren selv må registrere seg. <b>5</b> av <b>10</b> plasser
        er tildelt.
      </p>
      <div className="list">
        <div className="list-header">
          <TableSearch />
          <NewCompanyPerson />
        </div>
        <div className="list-labels">
          <div className="list-title">Person</div>
          <div className="list-spots--narrow">Plasser</div>
          <div className="list-daterange">Periode</div>
          <div className="list-text">Status</div>
        </div>
        {/* prettier-ignore */}
        <CompanyPersonsListItem name="Navn Navnesen" spots={1} from="01.01.2020" to="31.12.2020" status="Aktiv bruker"/>
        {/* prettier-ignore */}
        <CompanyPersonsListItem name="Navn Navnesen" spots={2} from="01.01.2020" to="31.12.2020" status="Invitasjon sendt"/>
        {/* prettier-ignore */}
        <CompanyPersonsListItem name="Navn Navnesen" spots={1} from="01.01.2020" to="31.12.2020" status="Manuell"/>
        {/* prettier-ignore */}
        <CompanyPersonsListItem name="Navn Navnesen" spots={1} from="01.01.2020" to="31.12.2020" status="Aktiv bruker"/>
      </div>
    </>
  );
};

export default PersonsList;
