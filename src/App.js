import logo from './logo.svg';
import './App.css';
import employeeData from './employeeData'
import EmployeeData from './employeeData';
import NewEmployee from './newemployee'
import EmployeeFilter from './EmployeeFilter';
import { useState } from 'react';
import Employees from './Employees';
 const employees= [
  {
    id: 'e1',
    name: 'Akhil',
    age: 20
  },
  {
    id: 'e2',
    name: 'Aman',
    age: 21
  },
{
    id: 'e3',
    name: 'Vikas',
    age: 22
  },
{
    id: 'e4',
    name: 'Harminder',
    age: 23
  },
{
    id: 'e5',
    name: 'Deeksha',
    age: 24
  },
{
    id: 'e6',
    name: 'Puneet',
    age: 25
  },
];

const ageFilter =[12,20, 22,21, 23, 24]

function App() {
  
  // const employees= [
  //   {
  //     id: 'e1',
  //     name: 'Akhil',
  //     age: 20
  //   },
  //   {
  //     id: 'e2',
  //     name: 'Aman',
  //     age: 21
  //   },
  // {
  //     id: 'e3',
  //     name: 'Vikas',
  //     age: 22
  //   },
  // {
  //     id: 'e4',
  //     name: 'Harminder',
  //     age: 23
  //   },
  // {
  //     id: 'e5',
  //     name: 'Deeksha',
  //     age: 24
  //   },
  // {
  //     id: 'e6',
  //     name: 'Puneet',
  //     age: 25
  //   },
  // ];

  const[id,setId] = useState('')
  const [name,setName]=useState('')
    const [age,setAge]=useState('')
  function empData(id, name, age){
    console.log("Id is ",id)
    console.log("Name is ",name)
    console.log("Age is ",age)
    setName(name)
    setId(id)
    setAge(age)
  }
  return (
    <div className="App">
      <EmployeeData employees = {employees} />
      <NewEmployee data = {empData}/>
      {/* <div>{id}</div>
      <div>{name}</div>
      <div>{age}</div> */}
      <Employees />
    </div>
  );
}

export default App;
