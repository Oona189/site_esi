import React from "react";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";

function Alumni() {
  return (
    <div>
      <SearchBar />
      <div className="flex flex-wrap justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Alumni;
