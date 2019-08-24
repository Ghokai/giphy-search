import React from "react";
import { Input, Icon } from "antd";

interface SearchBarProps {
  onSearch: (term: string) => Promise<void>;
  singleColumnList: boolean;
  onChangeListMode: () => Promise<void>;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  singleColumnList,
  onChangeListMode
}: SearchBarProps) => {
  return (
    <div className="search-bar">
      <Input.Search onSearch={onSearch} />
      {!singleColumnList ? (
        <Icon
          onClick={onChangeListMode}
          className="search-bar-icon search-bar-icon-single"
          type="border"
        />
      ) : (
        <Icon
          onClick={onChangeListMode}
          className="search-bar-icon search-bar-icon-three"
          type="table"
        />
      )}
    </div>
  );
};

export default SearchBar;
