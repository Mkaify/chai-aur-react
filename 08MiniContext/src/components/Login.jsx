import {useState, useContext} from "react";
import UserContext from "../context/userContext";


const Login = () => {

    const [password, setPassword] = useState('')
    const [username,setUsername] = useState('')
    
     
    const handleSubmit= (e) =>{
        e.preventDefault()
        setUsername({username,password})
    }

  return (
    <div>
      <h2>Login</h2>
      <input type="text" 
      value={username}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="username"/>
      <input type="text" placeholder="password"/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
