import EmployeeFilter from './EmployeeFilter';
const ageFilter =[12,20, 22,21, 23, 24]
function Employees(){
   
    return(
    <div><EmployeeFilter ages={ageFilter}/></div>)
}

export default Employees

