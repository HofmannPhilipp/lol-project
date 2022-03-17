import React from "react";

const SearchBar = () => {
  return (
    <form className="mt-5 ml-3">
      <div>
        <input
          type="text"
          className="input input-bordered input-secondary"
          placeholder="search for user"
        />
        <button className=" btn btn-secondary"> Submit</button>
      </div>
    </form>
  );
};

export default SearchBar;
