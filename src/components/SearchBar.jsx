import * as css from "./SearchBar.module.css"
const SearchBar = ({ onSubmit }) => {
  return (
    <>
      <header className={css.header}>
        <form className={css.search}
          onSubmit={(event) => {
            event.preventDefault();
            event.nativeEvent.stopImmediatePropagation();
            onSubmit(event.target.elements.search.value.trim());
            event.target.reset();
          }}
        >
          <input className={css.textsearch}
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.btnsearch} type="submit">🔍</button>
        </form>
      </header>
    </>
  );
};

export default SearchBar;
