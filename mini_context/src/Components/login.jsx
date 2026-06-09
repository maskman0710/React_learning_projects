import React , {useState,useContext} from 'react';
import usercont from '../Context/Usercontext';
function Login() {
    const [user , setuser] = useState('')
    const [pass , setPass] = useState('')

    const {setusername} = useContext(usercont)
    const handlesubmit = (e) =>{
        e.preventDefault()
        setusername({user,pass})
    }
    return ( 
        <div>
            <h2>Login</h2>
            <input className="border border-gray-300 rounded py-2 px-4 mx-4" type="text" value={user} onChange={(e) => setuser(e.target.value)} placeholder='username'/>
            <input className="border border-gray-300 rounded py-2 px-4 mx-4"type="text" value={pass} onChange={(e) => setPass(e.target.value)} placeholder='password'/>
            <button onClick={handlesubmit}>Submit</button>
        </div>
     );
}

export default Login;