import * as css from "./SearchBox.module.css";

const SearchBox = ({ searchValue, filter }) => {
  return (
    <div className={css.search}>
      <p className={css.noMargin}>Find contacts by name</p>
      <input type="text" value={searchValue} onChange={filter}></input>
    </div>
  );
};

export default SearchBox;
