import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent, act, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { toBeVisible } from "@testing-library/jest-dom/dist/to-be-visible";
import "jest-styled-components";
import DropdownSearch from "../components/DropdownSearch/DropdownSearch.js";
expect.extend({ toBeVisible });

afterEach(cleanup);
describe("<DropdownSearch/>", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<DropdownSearch />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("displays navbar when focusing on input", () => {
    const { getByTestId } = render(<DropdownSearch />);
    const input = getByTestId("contact-input");
    act(() => {
      input.focus();
    });
    expect(document.querySelector('[data-testid="navBar"]')).toHaveStyleRule(
      "visibility",
      "visible"
    );
  });

  it("changes the value", () => {
    const { getByPlaceholderText } = render(<DropdownSearch />);
    const input = getByPlaceholderText("Type or Search..");
    act(() => {
      fireEvent.change(input, { target: { value: "hello" } });
    });
    expect(input).toHaveValue("hello");
  });

  it("hides navbar when input blurs", () => {
    const { getByTestId } = render(<DropdownSearch />);

    const nav = getByTestId("navBar");
    const input = getByTestId("contact-input");

    act(() => {
      input.blur();
    });

    expect(nav).not.toBeVisible();
  });
});
