import React, { useState } from 'react'
import './Login.css'
const Login = () => {
  const [action,setAction] = useState("Sign Up")
  return (
    <div className="container">
      <div className="head">
        <div className="text">{action}</div>
      </div>
      <div className="inputs">
        <div className="inp">
            <img src="" alt="" />
            <input type="text" placeholder="name" />
        </div>
        {action==="Login"?<div></div>:<div className="inp">
            <img src="" alt="" />
            <input type="email" placeholder="email id" />
        </div>}
        {action==="Login"?<div></div>:<div className="inp">
            <img src="" alt="" />
            <input type="password" placeholder="create password" />
        </div>}
        {action==="Login"?<div></div>:<div className="inp">
            <img src="" alt="" />
            <input type="password" placeholder="confirm password" />
        </div>}
        {action==="Sign Up"?<div></div>:<div className="inp">
            <img src="" alt="" />
            <input type="password" placeholder="password" />
        </div>}
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot">Forgot Password? <span>click here</span></div>}
      <div className="submit">
        <div className = {action==="Sign Up"?"sub gray":"sub"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className = {action==="Login"?"log gray":"log"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
  )
}

export default Login
