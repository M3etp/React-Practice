import React,{useContext, useState} from "react";
import UserContext from "../Context/UserContext";

export default function Login(){
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username,password})
    }
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)
    return (
        <>
        <div>
            <input type="text" 
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder="Username" />
            <input type="text" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Password" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
        </>
    )
}