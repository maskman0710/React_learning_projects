import React from 'react';
import { useParams } from 'react-router';
function User() {
    const {userid} = useParams()
    return ( 
        <div className='bg-gray-700 text-green-700 px-2'>
            User : {userid}
        </div>
     );
}

export default User;
