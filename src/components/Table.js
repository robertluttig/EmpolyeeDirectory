import React from "react";

function Table( {peopleData} ) {
    console.log(peopleData)
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Gender</th>
          <th scope="col">Name</th>
          <th scope="col">Location</th>
          <th scope="col">Email</th>
          <th scope="col">Login</th>
        </tr>
      </thead>
      {/* <tbody> */}
        {/* {peopleData.map((peopleData) => {
          return (
            <tr key={peopleData.email}>
                <td>{peopleData.name}</td>
                <td>{peopleData.location}</td>
                <td>{peopleData.email}</td>
                <td>{peopleData.login}</td>
            </tr>
          );
        })}
      </tbody> */}
    </table>
    
  );
}

export default Table;
