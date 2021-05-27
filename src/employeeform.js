import React, { useState } from 'react'


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
        <form onSubmit={submit}>
        Name<input type="text" placeholder="name" name="name" value ={name} onChange={changeNameValues}/><br></br>
        Age<input type="number" placeholder="age" name="age" value = {age} onChange={changeAgeValues}/><br></br>
        <button type="submit">Submit</button>
        </form>
        </div>
    )
}

export default EmployeeForm