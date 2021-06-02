import { useState } from "react"
import './components/logic.css'

function EmployeeFilter(props){
const [age,setAge]=useState('')
    function selectedValue(e){
        setAge(e.target.value)       
    }

    return(
        <div className = "filter-design">
            <div className ="filter-align-left"> Select your age<br></br>
            <select value ={age} onChange={selectedValue}>
                <option>all</option>
            {props.ages.map((item,index) => (<option key = {index} >{item.age}</option>))}
            </select>
            </div>
            <span className ="filter-align-right">
                {props.ages.filter(item => item.age == age).map(filteredData => (
                    <li className = "list" key = {filteredData.id}>
                    Name:{filteredData.name}<br/>
                    Age:{filteredData.age}<br/>
                    Id:{filteredData.id}
                
                    </li>
                ))}
            </span>
        </div>

    )
}

export default EmployeeFilter