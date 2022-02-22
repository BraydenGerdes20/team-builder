import React, { useState } from "react";
import File from './components/File';


function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [values, setValues] = useState({name: '', email:'', role: ''})

  const onSubmit = () => {
    setTeamMembers([values, ...teamMembers])
    setValues({name: '', email: '', role:''});
  }

  const onChange =(name, value) => {
    setValues({...values, [name]: value})
  }

  return (
    <div className="App">
     <h1>BUILD YOUR TEAM!</h1>
     <File
        values={values}
        change={onChange}
        submit={onSubmit}
      />
      {teamMembers.map((member, index) => {
        return (
          <div key={index}>
            {member.email}, {member.name}, {member.role}
          </div>
        )
      })}
    </div>
  );
}

export default App;
