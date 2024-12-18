import React, { use, useState } from 'react'
import Child from './Child';


const parent = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const [name,setName]=useState("");
    const [password,setPassword] = useState("");

    const submitForm=(e)=>{
        e.preventDefault();

        setIsLoggedIn(true);
    }
    
  return (
    <div>
        <form onSubmit={(e)=>submitForm(e)}>
            <div>
                <label>Username: </label>
                <input type="Name" onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
                <label>Password: </label>
                <input type="Password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
        </form>
        {isLoggedIn && <Child name={name} password={password}/>}
    </div>
  )
}

export default parent