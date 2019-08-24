import React from "react";
import ReactDOM from "react-dom";
import AppWrapper from "../components/AppWrapper";
import { mount } from "enzyme";
import { flushPromises } from "../setupTests";

jest.mock("../api/giphy");

describe("AppWrapper", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AppWrapper />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("AppWrapper test search for single column", async () => {
    const appWrapper = mount(<AppWrapper />);

    appWrapper
      .find(".ant-input")
      .simulate("change", { target: { value: "cat" } });

    appWrapper.find(".ant-input").simulate("keyDown", { keyCode: 13 });

    await flushPromises();
    appWrapper.update();

    expect(
      appWrapper.find(".search-results-three-column").children().length
    ).toEqual(0);

    expect(
      appWrapper.find(".search-results-single-column").children().length
    ).toEqual(5);
  });

  it("AppWrapper test search for three column", async () => {
    const appWrapper = mount(<AppWrapper />);

    appWrapper
      .find(".search-bar-icon-three")
      .first()
      .simulate("click");

    appWrapper
      .find(".ant-input")
      .simulate("change", { target: { value: "cat" } });

    appWrapper.find(".ant-input").simulate("keyDown", { keyCode: 13 });

    await flushPromises();
    appWrapper.update();

    expect(
      appWrapper.find(".search-results-single-column").children().length
    ).toEqual(0);

    expect(
      appWrapper.find(".search-results-three-column").children().length
    ).toEqual(5);
  });
});
