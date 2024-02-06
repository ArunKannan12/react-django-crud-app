
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from "./component/Navigation"
import Home from './component/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Students from './component/Students';
import Manage from './component/Manage';
function App() {
  

  return (
   <div>
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route exact="true" path="/" element={<Home/>}/>
       <Route exact="true" path='/students' element={<Students/>}/>
       <Route exact="true" path='/managestudents' element={<Manage/>}/>
        
      </Routes>
    </BrowserRouter>
  
   </div>
  )
}

export default App
