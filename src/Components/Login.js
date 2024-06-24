import React,{useState} from 'react'
// if u want to store username and password from user we can use variable -usestate

function Login() {
  const[Data,setDeta] = useState({
    username : "",
    password : ""
  })
  const{username,password} = Data;
// if the value store(reflect) into particular email and password
// we make destructure and use the value
const sharHandler = e =>{
  setDeta({...Data,[e.target.name]:[e.target.value]})
}
const submitHandular = e =>{
  e.preventDefault()
 console.log(Data);
} 
const LoginHandular = s =>{
  document.getElementById()
}
  return(
    <div>
      <h2>Login</h2>
      <form onSubmit={submitHandular}>
        <input type='text' onChange={sharHandler} name='username' value={username}/><br/>
        <input type='text' onChange={sharHandler} placeholder='Password' name='password' value={password}/><br/>
        <button onSubmit={LoginHandular} >Login</button>
        {/* <p>Does't have an account?</p>
        <button>SignUp</button> */}
      </form>
    </div>
  )
}

export default Login