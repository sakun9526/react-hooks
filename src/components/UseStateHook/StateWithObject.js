import React, {useState} from 'react'

function StateWithObject() {
    const [Name, setName] = useState({firstName:'', lastName:''})

    const updateField = e => {
        setName({
          ...Name,
          [e.target.name]: e.target.value
        });
      };

    return (
        <div>
           <form>
               <input
                  type="text"
                  value={Name.firstName}
                  name ="firstName"
                  onChange={updateField}
               />

                <input
                  type="text"
                  value={Name.lastName}
                  name ="lastName"
                  onChange={updateField}
               />

               <h2>First name is = {Name.firstName} </h2>
               <h2>Last name is = {Name.lastName} </h2>
           </form>            
        </div>
    )
}

export default StateWithObject

