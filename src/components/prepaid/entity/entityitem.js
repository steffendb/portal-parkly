import BoxedH2 from "../../common/boxed-h2";
import PersonList from "../list/PrepaidPersonsList";

const EntityItem = (props) => {
  return (
    <>
      <div className="box info-box">
        <h2>Treningssenteret sprek</h2>
        <span className="translucent">post@sprek.no</span>
        <div className="counter">
          <span className="number">20</span>
          <span className="unit">plasser</span>
        </div>
        <div className="counter">
          <span className="number">2</span>
          <span className="unit">brukere</span>
        </div>
        <div className="buttons">
          <button className="button primary">
            {/* prettier-ignore */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16.5" height="16.5" viewBox="0 0 16.5 16.5"><polygon points="16.5 7.5 9 7.5 9 0 7.5 0 7.5 7.5 0 7.5 0 9 7.5 9 7.5 16.5 9 16.5 9 9 16.5 9 16.5 7.5"/></svg>
            <span>Ny tildeling</span>
          </button>
          <button className="button secondary">
            {/* prettier-ignore */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16.5" height="16.5" viewBox="0 0 16.5 16.5"><path d="M12.942.375,4.905,8.413l-.53,3.712,3.712-.53,8.038-8.038ZM14,3.557l-1.45,1.45L11.493,3.946,12.942,2.5ZM7.38,10.18l-1.238.177L6.319,9.12l4.113-4.113,1.061,1.061Z"/><path d="M8.25,16.5A8.25,8.25,0,0,1,8.25,0V1.5A6.75,6.75,0,1,0,15,8.25h1.5A8.259,8.259,0,0,1,8.25,16.5Z"/></svg>
            <span>Endre</span>
          </button>
          <button className="button tertiary right">
            {/* prettier-ignore */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16.5" height="16.5" viewBox="0 0 16.5 16.5"><path d="M16.5.972h-.943v0L10.543.981,9.889,0H6.764L6.105.989,0,1,0,2.5l1.049,0,1,14h12.4l1-14.027H16.5ZM13.052,15h-9.6L2.555,2.5l5.688-.012,5.7-.01Z"/><rect x="5.5" y="3.916" width="1.5" height="9.639"/><rect x="9.5" y="3.916" width="1.5" height="9.639"/></svg>
            <span>Slett</span>
          </button>
        </div>
      </div>
      <div class="box title-box">
        <div class="box-title">
          <h2>Persontildelinger</h2>
        </div>
      </div>
      <PersonList />
    </>
  );
};

export default EntityItem;
