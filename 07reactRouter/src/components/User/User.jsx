import React from "react";
import { useParams } from "react-router-dom";

export default function User(){
    const {userid} = useParams()
    return(
        <div className=" max-w-[1170px] mx-auto text-center text-3xl font-bold">User: {userid}</div>
    )
}