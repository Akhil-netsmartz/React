function EmployeeForm (){
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
    console.log(id)
    console.log(name)
    console.log(age)
}
     return(
        <div>
        <form onSubmit={submit}>
        <input type="text" placeholder="name" name="name" value ={name} onChange={changeNameValue}/>Name
        <input type="number" placeholder="age" name="age" value = {age} onChange={changeAgeValues}/>Age
        <button type="submit">Submit</button>
        </form>
        </div>
    )
}

export default EmployeeForm