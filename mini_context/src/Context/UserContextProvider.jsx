import React , {useState} from 'react';
import usercont from './Usercontext';

const UserContextProvider = ({children})=>{
    const [username,setusername] = useState(0)
    return(
        <usercont.Provider value={{username,setusername}}>
            {children}
        </usercont.Provider>
    )
}

export default UserContextProvider