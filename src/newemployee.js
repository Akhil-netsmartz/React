import { useState } from 'react';
import EmployeeForm from './employeeform';

function NewEmployee(props) {
    
    const [id, setId] =useState('')
    const [name, setName] = useState('')
    const [age,setAge] = useState('')
    function setData(id, name, age){
        props.data(id,name,age)
    }
return(
    <div> 
        <EmployeeForm formData = {setData}/>
        <div> {id}</div>
        <div> {name}</div>
        <div> {age}</div>
    </div>

)
}

export default NewEmployee;