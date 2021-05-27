import { useState } from "react"

function EmployeeFilter(props){
    const [age,setAge] = useState('');
    function selectedValue(e){
        setAge(e.target.value)
        console.log("Selected age is ",age)
    }

    return(
        <div>
            <div> Select your age</div>
            <select value ={age} onChange={selectedValue}>
            {props.ages.map((item,index) => <option key = {index} value={item}>{item}</option>)}
            </select>
        </div>

    )
}

export default EmployeeFilter