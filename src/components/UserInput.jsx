import React from "react";
import "../css/user_input.css"


const UserInput = ({placeholder, value, onChange}) =>{
    return (
        <>
         <input placeholder={placeholder} value={value} onChange={onChange}/>
        </>
    )
}

export default UserInput;