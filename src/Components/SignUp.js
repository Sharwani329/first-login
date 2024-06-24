import React,{useState} from 'react'

export default function SignUp() {
  const[Data,setDeta] = useState({
    username:'',
    email:'',
    password:'',
    conformpassword:''
  })
  const{username,email,password,conformpassword} = Data;
  const yashHandler = y =>{
    setDeta({...Data,[y.target.name]:y.target.value})
  }
  const SubmitHanduler= s =>{
    s.preventDefault()
    if(password==conformpassword){
      console.log(Data);
    }
    else{
      console.log("Passwords are not matching")
    }
  }
  return (
    <div>
      <h2>SignUp</h2>
      <form onSubmit={SubmitHanduler}>
        <input type='text'  name='username' value={username} onChange={yashHandler}/>
        <input type='email'  name='email' value={email} onChange={yashHandler}/>
        <input type='password' name='password' value={password} onChange={yashHandler}/>
        <input type='password' name='conformpassword' value={conformpassword} onChange={yashHandler}/>
        <button>SignUp</button>
        <p>If you have an account <a>Login</a></p>
      </form>
    </div>
  )
}
