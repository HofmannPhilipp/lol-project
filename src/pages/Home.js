import React from "react";
import SearchBar from "../components/SearchBar";
import UserList from "../components/users/UserList";

const Home = () => {
  return (
    <div>
      <SearchBar />
      <UserList />
    </div>
  );
};

export default Home;
