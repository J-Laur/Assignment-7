import React, { Fragment, useState } from "react";

const Random = () => {

    const [state, setState] = useState([]);

    const onSubmitForm = async(e) => {
        e.preventDefault()

            const request = fetch("ZIP URL");

        try{

        }
        catch(err){

            console.error(err.message)
        }

    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">
                Random Image Search
            </h1>
            <form className = "d-flex m-5" >
                <div className="input-group bg-secondary text-white">
                  <input type="text" 
                  className="form-control" 
                  placeholder="Random search" 
                  aria-label="ZIP field" aria-describedby="basic-addon2"
                  value = {state}
                  onChange = {e => setState(e.target.value)}></input>
                  <span className="input-group-text btn btn-outline-info btn-lg" id="basic-addon2">SEARCH</span>
                </div>
            </form>
        <ZipCodes />

        </Fragment>
    )
}

export default Random;