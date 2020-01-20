import React from "react";
import { create } from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";
import Wrapper from "../components/DropdownSearch/DropdownSearchWrapper/Wrapper.js";

describe("<Wrapper/>", () => {
  it("has the style rules", () => {
    const tree = create(<Wrapper />).toJSON();
    expect(tree).toHaveStyleRule("position", "relative");
    expect(tree).toHaveStyleRule("display", "inline-block");
    expect(tree).toHaveStyleRule("margin", "20px");
    expect(tree).toHaveStyleRule("position", "absolute", {
      modifier: ":before"
    });
    expect(tree).toHaveStyleRule("display", "none", {
      modifier: ":before"
    });
  });

  it("matches snapshot", () => {
    const tree = create(<Wrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
