import EmployeeFilter from './employeeFilter';
const ageFilter =[12,20, 22,21, 23, 24]
function Employees(props){
   
    return(
    <div><EmployeeFilter ages={props.employees} /></div>)
}

export default Employees

