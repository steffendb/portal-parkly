const TableSearch = (props) => {
  return (
    <div className="table-search">
      <input type="search" placeholder=" "></input>
      <span className="table-search-icon">
        {/* prettier-ignore */}
        <svg className="icon" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 16" width="16" height="16"><g transform="matrix(0.6666666666666666,0,0,0.6666666666666666,0,0)"><path d="M0.500 10.500 A10.000 10.000 0 1 0 20.500 10.500 A10.000 10.000 0 1 0 0.500 10.500 Z" fill="none" stroke-linecap="round" stroke-linejoin="round"></path><path d="M23.5 23.5L17.571 17.571" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
        </span>
    </div>
  );
};

export default TableSearch;
