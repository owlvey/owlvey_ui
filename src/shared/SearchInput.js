import React from "react";
import { MdSearch } from "react-icons/md";

const SearchInput = () => {
  return (
    <form
      className="cr-search-form form-inline"
      onSubmit={e => e.preventDefault()}
    >
      <MdSearch size="20" className="cr-search-form__icon-search text-dark" />
      <input
        type="search"
        className="cr-search-form__input form-control"
        placeholder="Search..."
      />
    </form>
  );
};

export default SearchInput;
