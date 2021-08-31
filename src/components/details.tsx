import React, { useState, useEffect } from "react";
import { DetailsTable } from "./detailsTable";
import { Pagination } from "./Shered/pagination";
import { getDetails } from "../api/api";

const Details = () => {
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  React.useEffect(() => {
    document.title = "Details | Post";
  }, []);

  useEffect(() => {
    const detailsConfig = async () => {
      try {
        const recivedData = await getDetails();
        setDetails(recivedData.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    detailsConfig();
  }, []);

  const lastDetails = currentPage * perPage;
  const firstDetails = lastDetails - perPage;
  const currentDetails = details.slice(firstDetails, lastDetails);
  const totalNumber = details?.length && details.length / perPage;

  const paginate = (pageIndex: any) => {
    setCurrentPage(pageIndex);
  };

  const onPerPage = (e: any) => {
    setPerPage(parseInt(e.target.value));
  }; 

  return (
    <div className="Container mt-5">
      <div className="input-group mb-3">
        <h1 className="text-black-50" id="basic-addon1">
          {details.length}
        </h1>
        <h1 className="text-dark ms-2" id="basic-addon1">
          Total Posts
        </h1>
        <h1 className="text-dark ms-2" id="basic-addon1">
          |
        </h1>
        <h1 className="text-black-50 ms-2" id="basic-addon1">
          Page
        </h1>
        <h1 className="text-black-50 ms-2" id="basic-addon1">
          {`${currentPage}/${Math.ceil(totalNumber)} `}
        </h1>
      </div>
      <DetailsTable details={currentDetails} loading={loading} />
      <Pagination
        handlePerPage={onPerPage}
        perPage={perPage}
        totalNumber={totalNumber}
        paginate={paginate}
      />
    </div>
  );
};

export default Details;
