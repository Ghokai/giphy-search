import { mount } from "enzyme";
import React from "react";
import SearchBar from "../components/SearchBar";

describe("SearchBar", () => {
  it("check search bar is rendering correctly", () => {
    const onSearchMockFn = jest.fn();
    const onChangeListModeMockFn = jest.fn();
    const wrapper = mount(
      <SearchBar
        onSearch={onSearchMockFn}
        onChangeListMode={onChangeListModeMockFn}
        singleColumnList={true}
      />
    );

    wrapper
      .find(".search-bar-icon-three")
      .first()
      .simulate("click");

    wrapper.find(".ant-input").simulate("change", { target: { value: "cat" } });

    wrapper.find(".ant-input").simulate("keyDown", { keyCode: 13 });

    expect(onChangeListModeMockFn).toBeCalledTimes(1);
    expect(onSearchMockFn).toBeCalledTimes(1);
  });
});
