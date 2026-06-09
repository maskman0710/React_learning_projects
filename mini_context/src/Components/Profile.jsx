import React , {useState,useContext} from 'react';
import usercont from '../Context/Usercontext';
function Profile() {

    const {username} = useContext(usercont)
    
    if(!username) return <div className='mt-4'> Please Login</div>

    return <div className='mt-4'>Welcome {username.user}</div>
}

export default Profile;