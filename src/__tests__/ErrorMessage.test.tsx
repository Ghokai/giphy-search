import React from "react";
import { mount } from "enzyme";
import ErrorMessage from "../components/ErrorMessage";

describe("ErrorMessage", () => {
  it("check error message component renders correctly", () => {
    const text = "test error message";
    const errorMessageWrapper = mount(<ErrorMessage text={text} />);

    expect(errorMessageWrapper.find(".ant-alert-description").text()).toEqual(
      text
    );
    expect(errorMessageWrapper.find(".ant-alert-message").text()).toEqual(
      "Error!"
    );
  });
});
