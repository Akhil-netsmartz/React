import logo from './logo.svg';
import './App.css';
import employeeData from './employeeData'
import EmployeeData from './employeeData';

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
  
  
  
  return (
    <div className="App">
      <EmployeeData employees = {employees} />
    </div>
  );
}

export default App;
