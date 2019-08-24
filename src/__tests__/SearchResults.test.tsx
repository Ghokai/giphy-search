import { mount } from "enzyme";
import React from "react";
import SearchResults from "../components/SearchResults";
import { Image } from "../store/models";

const testData: Image[] = [
  {
    id: "id_1",
    url: "https://via.placeholder.com/150",
    giphyUrl: "https://www.google.com/"
  },
  {
    id: "id_2",
    url: "https://via.placeholder.com/150",
    giphyUrl: "https://www.google.com/"
  },
  {
    id: "id_3",
    url: "https://via.placeholder.com/150",
    giphyUrl: "https://www.google.com/"
  },
  {
    id: "id_4",
    url: "https://via.placeholder.com/150",
    giphyUrl: "https://www.google.com/"
  },
  {
    id: "id_5",
    url: "https://via.placeholder.com/150",
    giphyUrl: "https://www.google.com/"
  }
];

describe("SearchResults", () => {
  it("check search results is rendering correctly for single column list", () => {
    const wrapper = mount(
      <SearchResults items={testData} singleColumnList={true} />
    );

    expect(
      wrapper.find(".search-results-single-column").children().length
    ).toEqual(5);
  });

  it("check search results is rendering correctly for three column list", () => {
    const wrapper = mount(
      <SearchResults items={testData} singleColumnList={false} />
    );

    expect(
      wrapper.find(".search-results-three-column").children().length
    ).toEqual(5);
  });
});
