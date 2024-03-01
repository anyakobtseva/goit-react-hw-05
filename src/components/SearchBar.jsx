const SearchBar = ({ onSubmit }) => {
  return (
    <>
      <header>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            event.nativeEvent.stopImmediatePropagation();
            onSubmit(event.target.elements.search.value);
            event.target.reset();
          }}
        >
          <input
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </>
  );
};

export default SearchBar;
