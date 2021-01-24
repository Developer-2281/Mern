import React, { useState } from  'react';
    
    
const Form = (props) => {
    const{inputs, setInputs} = props;

    const onChange = (e) =>  {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };
//     const [firstname, setFirstName] = useState("");
//     const [lastname, setLastName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");  
//     const [cpassword, setCPassword] = useState("");  

//     const [formResults, setFormResults] = useState({});

//     const createUser = (e) => {
//         e.preventDefault();
//         const newUser = { firstname, lastname, email, password, cpassword };
//         console.log("Welcome", newUser);
//         setFormResults({
//             fName : firstname,
//             lName : lastname,
//             eName : email,
//             pName : password,
//             cpName : cpassword
//         });
//     };

    // const fNameValid = (vfn) => { // this variable is created here valid first name vfn
    //     if(vfn.length > 3 || vfn.length == 0) { // if greater than three it is true // || means or
    //         return true;
    //     }
    //     return false; // if not true its false
    // }

    // const lNameValid = (vln) => { 
    //     if(vln.length > 3 || vln.length == 0) {
    //         return true;
    //     }
    //     return false; // if not true its false
    // }
    return(
        <div>     
            <div>
                <form id="formBox" >
                    {/* onSubmit={ createUser } */}
                    <div class="field">
                        <label htmlFor="firstName"> First Name: </label>
                        <input onChange={onChange} type="text" name="firstName"/>
                        {/* {!fNameValid(firstname) ? <p>Name must be four or more characters</p> : ""} */}
                    </div>
                    <div class="field">
                        <label htmlFoor="lastname">Last Name: </label>
                        <input type="text" onChange={ (onChange) } name="lastname"/>
                        {/* {!lNameValid(lastname) ? <p>Name must be four or more characters</p> : ""} */}
                    </div>
                    <div class="field">
                        <label htmlFor="email">Email Address: </label> 
                        <input type="text" onChange={ (onChange) } name="email"/>
                    </div>
                    <div class="field">
                        <label html="password">Password: </label>
                        <input type="text" onChange={ (onChange) } name="password"/>
                    </div>
                    <div class="field">
                        <label htmlFor="cpassword">Confirm Password: </label>
                        <input type="text" onChange={ (onChange)} name="cpassword"/>
                    </div>
                    {/* <input id="formBtn" type="submit" value="Create User" /> */}
                </form>
            </div>
        </div>
    );
};

export default Form;


// <input type="text" onChange={ (e) => setFirstName(e.target.value) } value={ firstname }/>
// {!fNameValid(firstname) ? <p>Name must be four or more characters</p> : ""}
// <input type="text" onChange={ (e) => setLastName(e.target.value) } />
// {!lNameValid(lastname) ? <p>Name must be four or more characters</p> : ""}
// <input type="text" onChange={ (e) => setEmail(e.target.value) } />
// <input type="text" onChange={ (e) => setPassword(e.target.value) } />
// <input type="text" onChange={ (e) => setCPassword(e.target.value) } />

// <div>
// <h2>Submitted Data</h2>
// <h3>{formResults.fName}</h3>
// <h3>{formResults.lName}</h3>
// <h3>{formResults.eName}</h3>
// <h3>{formResults.pName}</h3>
// <h3>{formResults.cpName}</h3>
// </div>