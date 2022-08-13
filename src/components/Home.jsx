import React from "react";
import { useState } from "react";
import "./Home.css";
import Contact from "./Contact";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <div className='contactMain'>
        <input
          type='text'
          placeholder='search contact'
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Contact searchQuery={searchQuery} />
      </div>
    </>
  );
};

export default Home;
