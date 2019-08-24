import React from "react";
import { mount } from "enzyme";
import GiphyItem from "../components/GiphyItem";
import { Image } from "../store/models";

describe("GiphyItem", () => {
  it("check giphy item component renders correctly for single column props", () => {
    const testImage: Image = {
      id: "test1",
      url: "https://via.placeholder.com/150",
      giphyUrl: "https://www.google.com"
    };
    const singleColumnListWrapper = mount(
      <GiphyItem singleColumnList={true} image={testImage} />
    );

    expect(
      singleColumnListWrapper
        .find(".giphy-item-image-single-column")
        .prop("src")
    ).toEqual(testImage.url);

    expect(
      singleColumnListWrapper
        .find(".giphy-item-image-single-column")
        .prop("alt")
    ).toEqual(testImage.id);

    expect(singleColumnListWrapper.find("a").prop("href")).toEqual(
      testImage.giphyUrl
    );
  });

  it("check giphy item component renders correctly for three column props", () => {
    const testImage: Image = {
      id: "test1",
      url: "https://via.placeholder.com/150",
      giphyUrl: "https://www.google.com"
    };
    const singleColumnListWrapper = mount(
      <GiphyItem singleColumnList={false} image={testImage} />
    );

    expect(
      singleColumnListWrapper.find(".giphy-item-image-three-column").prop("src")
    ).toEqual(testImage.url);

    expect(
      singleColumnListWrapper.find(".giphy-item-image-three-column").prop("alt")
    ).toEqual(testImage.id);

    expect(singleColumnListWrapper.find("a").prop("href")).toEqual(
      testImage.giphyUrl
    );
  });
});
