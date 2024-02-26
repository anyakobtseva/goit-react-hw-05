const SearchBox = ({ searchValue, filter }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" value={searchValue} onChange={filter}></input>
    </>
  );
};

export default SearchBox;
