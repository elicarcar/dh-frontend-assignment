import React from "react";
import { mount, shallow } from "enzyme";
import Wrapper from "../components/ContactInput/ContactInput";
import Input from "../components/ContactInput/ContactInput";

import ContactInput from "../components/ContactInput/ContactInput";

describe("<ContactInput />", () => {
  it("Renders something", () => {
    expect(mount(<ContactInput />).isEmptyRender()).toEqual(false);
  });
});

describe("<ContactInput/>", () => {
  it("renders the <Wrapper/> component", () => {
    const wrapper = shallow(<ContactInput />);
    expect(wrapper.find(Input)).to.have.lengthOf(1);
    console.log(Input);
  });
});
