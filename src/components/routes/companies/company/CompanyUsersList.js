import CompanyUsersListItem from "./CompanyUsersListItem";

import NewCompanyUser from "./NewCompanyUser";

const UserList = (props) => {
  return (
    /* prettier-ignore */
    <div className="mb-24">
    <h2>Brukere</h2>
      <p>Personer som har tilgang til å administrere bedriftens tildelinger, og se fakturahistorikk. Alle brukere kan slette og legge til brukere.</p>
      <div className="list">
        <div className="list-header">
          <NewCompanyUser />
        </div>
        <div className="list-labels">
          <div className="list-title">Bruker</div>
          <div className="list-email">E-post</div>
          <div className="list-text">Status</div>
        </div>
      <CompanyUsersListItem name="Navn Navnesen" email="navn.navnesen123@gmail.com" status="Aktiv bruker"/>
      <CompanyUsersListItem email="navn.navnesen124@gmail.com" status="Invitasjon sendt"/>
      <CompanyUsersListItem name="Navn Navnesen" email="navn.navnesen125@gmail.com" status="Aktiv bruker"/>
      </div>
    </div>
  );
};

export default UserList;
