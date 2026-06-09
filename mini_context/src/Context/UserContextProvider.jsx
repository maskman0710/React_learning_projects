import React from 'react';
import usercont from './Usercontext';

const UserContextProvider = ({children})=>{
    const [username,setusername] = React.useState(0)
    return(
        <usercont.Provider value={{username,setusername}}>
            {children}
        </usercont.Provider>
    )
}

export default UserContextProvider