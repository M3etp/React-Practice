import React, {useEffect, useState} from "react";
import { useLoaderData } from "react-router-dom";

export default function Github(){
    const data = useLoaderData()
    // const [data, setData] = useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/M3etp')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])


    return(
        <>
        <div className=" text-center bg-orange-500 font-bold text-3xl text-black py-[25px]"> Github Followers : {data.followers}
        </div>
        <div className="mx-auto">
            <img src={data.avatar_url} alt="git picture" className="mx-auto w-[300px] rounded-[50%] my-[50px]" />
        </div> 
         </>
    )
}

export const githubInfoLoader = async () => {
    const respone = await fetch('https://api.github.com/users/M3etp')
    return respone.json()

}