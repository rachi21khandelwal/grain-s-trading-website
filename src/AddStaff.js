
import React, { useState }  from 'react'

export const AddStaff= ()=> {

    var [name,setName]=useState()
    var [id,setId]=useState()
    
    const nameUpdate=(event)=>{ // Dealing with name field changes to update our state
        setName(event.target.value)
    }

    const idUpdate=(event)=>{ // Dealing with name field changes to update our state
        setId(event.target.value)
    }

    const handleSubmit=()=> { // Once the form has been submitted, this function will post to the backend
        const postURL = "http://localhost:4000/api/data/" //Our previously set up route in the backend
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ // We should keep the fields consistent for managing this data later
                name: name,
                id:id
            })
        })
        .then(()=>{
            // Once posted, the user will be notified 
            alert('You have been added to the system!');
        })
    }

  

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>ID:</label>
                <input required onChange={idUpdate}></input>
                <label>Full Name:</label>
                <input required onChange={nameUpdate}></input>
                <button type="submit"> Submit</button>
            </form>

        </div>
    )
    
}

export default AddStaff