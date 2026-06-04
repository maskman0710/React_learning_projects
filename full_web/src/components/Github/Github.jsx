import React , {useEffect, useState} from 'react';
import { useLoaderData } from 'react-router';

function Github() {
    const Data = useLoaderData()
    // const [Data , setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/maskman0710')
    //     .then(res => res.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // },[])
    return (
        <>
            <div className = 'text-center m-4 bg-gray-500 text-slate-300 p-4 text-3xl'>Github Followers: {Data.followers}
                <img className="flex justify-center items-center mx-auto" src={Data.avatar_url} alt="GitHub Picture" width={200}></img>
            </div>
        </>
     );
}

export default Github;

export const githubinfo = async () => {
    const response = await fetch('https://api.github.com/users/maskman0710')
    return response.json()
}