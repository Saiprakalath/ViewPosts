import React from "react";

interface PropsType {
  totalNumber: any;
  paginate: any;
  handlePerPage: any;
  perPage: any;
}

export const Pagination: React.FC<PropsType> = ({
  totalNumber,
  paginate,
  handlePerPage,
  perPage,
}) => {
  const pageNumbers = [];


  for (let i = 1; i <= Math.ceil(totalNumber); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <select
          className="custom-select ms-2"
          id="inputGroupSelect01"
          value={perPage}
          onChange={(e) => handlePerPage(e)}
        >
          {pageNumbers.map((number) => (
            <option key={number} value={number}  data-testid={`testDataSelect-${number}`}>
              {number}
            </option>
          ))}
        </select>
        <div className="ms-3"></div>
        {pageNumbers.map((number) => (
          <li key={number} className="page-itemc ">
            <a
              onClick={() => paginate(number)}
              href="!#"
              className="page-link text-dark"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
