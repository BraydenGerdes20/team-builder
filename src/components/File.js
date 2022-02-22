import React from "react";

const File = (props) => {
    
    const teamChange = event =>{
        const { name, value } = event.target;
        props.change(name, value);
    }

    const teamSubmit = event => {
        event.preventDefault();
        props.submit();
    }

    return(
        
        <form onSubmit={teamSubmit}>
            <label>Name
            <input placeholder="Enter team member name here!" 
            value={props.values.name}
            name='name'
            onChange={teamChange}
            />
            </label>
            <label>Email
                <input placeholder="Enter team mamber email here!"
                value={props.values.email}
                name="email"
                onChange={teamChange}
                />
            </label>
            <label>Role
                <input placeholder="Enter team member role here!"
                value={props.values.role}
                name="role"
                onChange={teamChange}
                />
            </label>
            <input type="submit" value="Create the greatest team!"/>
        </form>
        
        
        
    )
}

export default File;