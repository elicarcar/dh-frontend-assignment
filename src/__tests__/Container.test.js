import React from "react";
import Container from "../components/Container/Container.js";
import renderer from "react-test-renderer";
import "jest-styled-components";
import "@testing-library/jest-dom/extend-expect";

describe("<Container/> component", () => {
  it("renders correctly and have specified style rules", () => {
    const tree = renderer.create(<Container />).toJSON();
    expect(tree).toHaveStyleRule("position", "fixed");
    expect(tree).toHaveStyleRule("top", "250px");
    expect(tree).toMatchSnapshot();
  });
});
