import React, {useState} from 'react';
import './App.css';


function App() {
  const [teamMember, setTeamMember] = useState()

  const addNewTeamMember = person => {
    const newTeamMember = {
      id: Date.now(),
      name: person.name,
      jobTitle: person.jobTitle,
      email: person.email
    };
  };
  return (
    <div className="Team">
      <h1>My Team</h1>
      
    </div>
  )
}

export default App;