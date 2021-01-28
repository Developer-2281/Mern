import React, { useState } from  'react';
    
    
const Form = (props) => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [cpassword, setCPassword] = useState("");  

    const [formResults, setFormResults] = useState({});

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, cpassword };
        console.log("Welcome", newUser);
        setFormResults({
            fName : firstname,
            lName : lastname,
            eName : email,
            pName : password,
            cpName : cpassword
        });
    };

    const fNameValid = (vfn) => { // this variable is created here valid first name vfn
        if(vfn.length > 1 || vfn.length == 0) { // if greater than three it is true // || means or
            return true;
        }
        return false; // if not true its false
    }

    const lNameValid = (vln) => { 
        if(vln.length > 1 || vln.length == 0) {
            return true;
        }
        return false; // if not true its false
    }

    const eValid = (vem) => {
        if(vem.length > 4 || vem.length == 0) {
            return true;
        }
        return false;
    }

    const pValid = (vpw) => {
        if(vpw.length > 7 || vpw.length == 0) {
            return true;
        }
        return false;
    }

    const cpValid = (vcp) => {
        if(password == cpassword || vcp.length == 0 && password.length == 0) { // confirm password error will trigger when any input is entered into password block and confirm password is empty or does not match
        return true
        }
        return false;
    }

    return(
        <div>     
            <div>
                <form id="formBox" onSubmit={ createUser }>
                    <div class="field">
                        <label>First Name: </label>
                        <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
                        {!fNameValid(firstname) ? <p>Name must be at least two characters</p> : ""}
                    </div>
                    <div class="field">
                        <label>Last Name: </label>
                        <input type="text" onChange={ (e) => setLastName(e.target.value) } />
                        {!lNameValid(lastname) ? <p>Name must be at least two characters</p> : ""}
                    </div>
                    <div class="field">
                        <label>Email Address: </label> 
                        <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                        {!eValid(email) ? <p>Email must be at least five characters</p> : ""}
                    </div>
                    <div class="field">
                        <label>Password: </label>
                        <input type="text" onChange={ (e) => setPassword(e.target.value) } />
                        {!pValid(password) ? <p>Password must be at least eight characters</p> : ""}
                    </div>
                    <div class="field">
                        <label>Confirm Password: </label>
                        <input type="text" onChange={ (e) => setCPassword(e.target.value) } />
                        {!cpValid(cpassword) ? <p>Confirm Password must match Password</p> : ""}
                    </div>
                    <input id="formBtn" type="submit" value="Create User" />
                </form>
            </div>
            {/* <div>
                <h2>Submitted Data</h2>
                <h3>{formResults.fName}</h3>
                <h3>{formResults.lName}</h3>
                <h3>{formResults.eName}</h3>
                <h3>{formResults.pName}</h3>
                <h3>{formResults.cpName}</h3>
            </div> */}
        </div>
    );
};

export default Form;
