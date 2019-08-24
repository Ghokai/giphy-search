import React from "react";
import { Image } from "../store/models";
import GiphyItem from "./GiphyItem";

interface SearchResultsProps {
  items: Image[];
  singleColumnList: boolean;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  items,
  singleColumnList
}: SearchResultsProps): React.ReactElement => {
  return (
    <div
      className={singleColumnList ? "search-results-single-column" : "search-results-three-column"}
    >
      {items.map((item: Image, index: number) => (
        <GiphyItem
          singleColumnList={singleColumnList}
          key={index}
          image={item}
        />
      ))}
    </div>
  );
};

export default SearchResults;
