import React from "react";
import { act, fireEvent } from "@testing-library/react";
import { mount } from "enzyme";
import "jest-styled-components";
import "@testing-library/jest-dom/extend-expect";
import "jest";
import App from "../App";

describe("<App/>", () => {
  it("matches snapshot", () => {
    const tree = mount(<App />);
    expect(tree).toMatchSnapshot();
  });

  it("Renders something", () => {
    expect(mount(<App />).isEmptyRender()).toEqual(false);
  });
});
