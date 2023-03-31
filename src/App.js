import {Routes, Route} from 'react-router-dom';
import Login1 from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import EmployeePresence from './Pages/EmployeePresence';
import "./App.css";
 function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login1/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/' element={<Dashboard/>} />
        <Route path='/el' element={<EmployeePresence/>} />
      </Routes>
    </>
  );
};

export default App;
