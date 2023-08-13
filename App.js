import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import AddEmployee from './AddEmployee';
import EmployeeDetails from './Components/EmployeeDetails';
import EditEmployee from './Components/EditEmployee';
import EmpDemo from './Components/EmpDemo';
import Employeelist from './Employeelist';

function App() {
  return (
   <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Employeelist/>}></Route>
      <Route path='/AddEmployee' element={<AddEmployee/>}></Route>
      <Route path='/EditEmployee' element={<EditEmployee/>}></Route>
      <Route path='/EmployeeDetails' element={<EmployeeDetails/>}></Route>
      <Route path='/EditEmployee/:id' element={<EditEmployee/>}></Route>
      </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;
