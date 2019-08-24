import { mount } from "enzyme";
import React from "react";
import Loader from "../components/Loader";

describe("Loader", () => {
  it("check loader is rendering correctly", () => {
    const wrapper = mount(<Loader />);

    expect(wrapper.find(".loader-wrapper")).not.toBeNull();
  });
});
