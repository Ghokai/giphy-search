import React, { useContext } from "react";
import { AppContext } from "./ContextProvider";
import SearchBar from "./SearchBar";
import { setNewTerm } from "../store/actions";
import SearchResults from "./SearchResults";
import useScrollableLoader from "../hooks/useScrollableLoader";
import { fetchImages, toggleListMode } from "../store/actions";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

const App: React.FC = (): React.ReactElement => {
  const {
    dispatch,
    images,
    isLoading,
    errorMessage,
    term,
    singleColumnList
  } = useContext(AppContext);

  const infiniteScrollCallback = async () => {
    await fetchImages(dispatch, term, images.length, singleColumnList);
  };

  useScrollableLoader(term, isLoading, infiniteScrollCallback);

  const searchHandler = async (term: string) => {
    if (term.trim().length > 0) {
      await setNewTerm(dispatch, term.trim(), singleColumnList);
    }
  };

  const onChangeListModeHandler = async () => {
    await toggleListMode(dispatch, term, images.length, singleColumnList);
  };

  return (
    <div className="app-container">
      <SearchBar
        onSearch={searchHandler}
        onChangeListMode={onChangeListModeHandler}
        singleColumnList={singleColumnList}
      />
      {images.length > 0 && (
        <SearchResults singleColumnList={singleColumnList} items={images} />
      )}
      {isLoading && <Loader />}
      {errorMessage && <ErrorMessage text={errorMessage} />}
    </div>
  );
};

export default App;
