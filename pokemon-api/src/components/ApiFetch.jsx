import React, { useState } from  'react';

const ApiFetch = () => {

    const [state, setState] = useState([]);

    const getPokemon = () => {
    //basic fetch
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0") // limit is how many to fetch, offset is what indext to start fetching at
            .then(response => {return response.json();
            })
            .then(response => {setState(response.results);
            })
            .catch(err => {console.log(err);
            })
    }

    return(
        <>
            <p> <button type="submit" onClick={getPokemon}>Fetch Pokemon</button></p>
            
            {
            state.map((poke, i) => {
                return <ul><li>{poke.name}</li></ul>
            })
            
            }
        </>
    );
}

export default ApiFetch;