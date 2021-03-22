const HomeRoute = (props) => {
  return (
    <>
      <main>
        <div className="sticky-header main">
          <h1>Hjem</h1>
        </div>
        <div className="sticky-header sub">
          <h2>Akkurat nå</h2>
        </div>
        <div className="pn">
          <div className="gauge-container">
            <div className="gauge-bar"></div>
            <div className="gauge-text">
              <span className="gauge-label">Plasser i bruk</span>
              <span className="gauge-value">64/169</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomeRoute;
