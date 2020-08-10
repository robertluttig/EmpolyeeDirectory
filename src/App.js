import React, {useState} from 'react';
import axios from 'axios'

function App() {

  const[people,setPeople] = useState([]);

    const loadPeople = () => {
       axios.get(
        "https://randomuser.me/api/?results=0&nat=us"
      ).then((res)=>{
        console.log(res.data.results);
        const peopleData = res.data.results
        setPeople(peopleData)
    })
  }
  
  


  return (
    <div className="App">
      <header>
        <h1>Page Deployed, Success!</h1>
        <button onClick={loadPeople}>Clcik me!</button>
        {people.map( (people)=>{
          console.log(people);
        })}

      </header>
    </div>
  );
}

export default App;
