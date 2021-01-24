import React from 'react';

const Results = (props) => {
    const   {firstName, lastname, email, password, cpassword} = props.data;
    return(
        <div>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastname}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {cpassword}</p>
        </div>
    )
}
export default Results;