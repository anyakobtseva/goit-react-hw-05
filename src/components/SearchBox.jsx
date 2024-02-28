import * as css from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.search}>
      <p className={css.noMargin}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
      ></input>
    </div>
  );
};

export default SearchBox;
