import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import React from "react";
import Input from "../components/DropdownSearch/DropdownInput/Input";
import Nav from "../components/DropdownSearch/DropdownSearchNav/Nav";
import ListItems from "../components/DropdownSearch/DropdownListItems/ListItems";
import "jest-styled-components";
import "@testing-library/jest-dom/extend-expect";

describe("<Input/>", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("<ListItems/>", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<ListItems />).toJSON();
    expect(tree).toHaveStyleRule("color", "#798697");
    expect(tree).toHaveStyleRule("line-height", "30px");
    expect(tree).toHaveStyleRule("padding", "1px");
    expect(tree).toHaveStyleRule("padding-left", "11px");
    expect(tree).toHaveStyleRule("font-size", "14px");
    expect(tree).toHaveStyleRule("color", "#4a4a4a", {
      modifier: ":hover"
    });
    expect(tree).toMatchSnapshot();
  });
});

describe("<Nav/>", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<Nav />).toJSON();
    expect(tree).toHaveStyleRule("position", "relative");
    expect(tree).toHaveStyleRule("visibility", "visible");
    expect(tree).toHaveStyleRule("opacity", "1");
    expect(tree).toHaveStyleRule("transition", "visibility 0s,opacity 0.5s");
    expect(tree).toHaveStyleRule("transition-delay", "0.1s");
    expect(tree).toMatchSnapshot();
  });
});
