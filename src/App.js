import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import axios from 'axios'
import SearchInput from "./components/SearchInput";
import Table from "./components/Table";

function App() {

  const [people, setPeople] = useState([]);

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
      <Table />
      <h1>Page Deployed, Success!</h1>
      <button onClick={loadPeople}>Click me!</button>
      {people.map((people) => {
        console.log(people);
      })}
    </div>
  

  );
}

export default App;
