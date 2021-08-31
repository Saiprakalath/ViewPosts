import { render, screen } from "@testing-library/react";
import { Pagination } from "../Shered/pagination";
import Data from "./data.test.json";

it("render detailstable", () => {
  const handlePerPage = jest.fn();

  const { getByTestId, container } = render(
    <Pagination
      perPage={5}
      totalNumber={20}
      paginate={1}
      handlePerPage={handlePerPage}
    />
  );
  const elem = getByTestId("testDataSelect-5");
  expect(elem.innerHTML).toBe("5");
});
