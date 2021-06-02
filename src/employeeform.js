import React, { useState } from 'react';
import './components/logic.css'


function EmployeeForm (props){
    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const id = Math.random().toString()

function changeNameValues(e){
    setName(e.target.value)
}
function changeAgeValues(e){
    setAge(e.target.value)

}
function submit (e){
    e.preventDefault();
    props.formData(id, name, age)
}
     return(
        <div>
        <form className = "form-signup" onSubmit={submit}>
        Name <input className = "alignment-form" type="text" placeholder="name" name="name" value ={name} onChange={changeNameValues}/>
        Age <input className = "alignment-form" type="number" placeholder="age" name="age" value = {age} onChange={changeAgeValues}/>
        <button className = "alignment-form" type="submit">Submit</button>
        </form>
        </div>
    )
}

export default EmployeeForm