import './App.css';
// import SignUp from './Components/SignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import First from './routes/First';
import Second from './routes/Second';
import Third from './routes/Third';
import Forth from './routes/Forth';
import Nav from './Components/Nav';



function App() {
  return (
    <div className="App">
      <h1>This is Login Page</h1>
      <div>
        <Login/>
        <BrowserRouter>
       <Nav/>  
        <Routes>
          <Route path='/' element={<First/>}/>
          <Route path='/second' element={<Second/>}/>
          <Route path='/third' element={<Third/>}/>
          <Route path='/forth' element={<Forth/>}/>
        </Routes>
      </BrowserRouter>
        {/* <Login/> */}
        {/* <SignUp/> */}
      </div>
    </div>
    
  );
}

export default App;
