import { render, screen } from "@testing-library/react";
import { DetailsTable } from "../detailsTable";
import Data from "./data.test.json";

const { test } = Data;

it("render detailstable", () => {
  render(<DetailsTable details={test} loading={false} />);
  const renderDetails = screen.getAllByTestId("testdata");
  expect(renderDetails.length).toEqual(test.length);
});

it("render detailsTable Id", () => {
  const { getByTestId, container} =  render(<DetailsTable details={test} loading={false} />);
  const elem = getByTestId('testDataId-1');
  expect(elem.innerHTML).toBe(" 1");

});

it("render detailstable Title", () => {
    const { getByTestId, container} =  render(<DetailsTable details={test} loading={false} />);
  const elem = getByTestId('testDataLength-1');
  expect(elem.innerHTML).toBe(" sunt aut facere repellat provident occaecati excepturi optio reprehenderit");

});

it("render detailstable Body ", () => {
    const { getByTestId, container} =  render(<DetailsTable details={test} loading={false} />);
    const elem = getByTestId('testdataBody-1');
    expect(elem.innerHTML).toBe(" quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto");
});
