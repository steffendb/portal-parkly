import CompaniesListItem from "./CompaniesListItem";

import TableSearch from "../../common/table-search";

import NewCompany from "./NewCompany";

import React from "react";

function CompaniesList(props) {
  return (
    <>
      <div className="list">
        <div className="list-header">
          <TableSearch />
          <NewCompany />
        </div>
        <div className="list-labels">
          <div className="list-title">Bedrift</div>
          <div className="list-spots">Plasser</div>
          <div className="list-daterange">Periode</div>
        </div>
        <CompaniesListItem entity="Treningssenteret Sprek" spots={10} spotsused={9} from="01.01.2020" to="31.12.2020" />
        <CompaniesListItem entity="Sentrumssenteret" spots={5} spotsused={2} from="01.01.2020" to="31.12.2020" />
        <CompaniesListItem entity="Kaffistova Kafé" spots={2} spotsused={0} from="01.01.2020" to="31.12.2020" />
        <CompaniesListItem entity="Frisøren på hjørnet" spots={3} spotsused={5} from="01.01.2020" to="31.12.2020" />
      </div>
    </>
  );
}

export default CompaniesList;
