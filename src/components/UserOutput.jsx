import React from "react";
import "../css/user_output.css"


const UserOutput = ({username}) =>{
    return (
      <>
       <div id="div-label">Username:</div>
        <div id="div-value">{username}</div>
     </>
    )
}

export default UserOutput;