import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import axios from 'axios'
import SearchInput from "./components/SearchInput";
import Table from "./components/Table";

function App() {

  const [peopleData, setPeople] = useState([]);

  const loadPeople = () => {
    axios.get(
      "https://randomuser.me/api/?results=5&nat=us"
    ).then((res) => {
      console.log(res.data.results);
      const peopleData = res.data.results
      setPeople(peopleData)
    })
  }

  return (
    <div className="container">
      <SearchInput />
      <Table peopleData = {peopleData} />
      <h1>Page Deployed, Success!</h1>
      <button onClick={loadPeople}>Click me!</button>
      {peopleData.map((peopleData) => {
        console.log(peopleData);
      })}
    </div>
  

  );
}

export default App;
