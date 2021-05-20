import { render } from '@testing-library/react';
import React from 'react';
import EmployeeTile from './employeeTile';

function EmployeeData(props) {
    console.log(props)
    
    return (
    
      <div className="employee">
         <EmployeeTile
         name={props.employees[0].name}
         id={props.employees[0].id}
         age={props.employees[0].age}
       />
        <EmployeeTile
         name={props.employees[1].name}
         id={props.employees[1].id}
         age={props.employees[1].age}
       />
        <EmployeeTile
         name={props.employees[2].name}
         id={props.employees[2].id}
         age={props.employees[2].age}
       />
        <EmployeeTile
         name={props.employees[3].name}
         id={props.employees[3].id}
         age={props.employees[3].age}
       />
        <EmployeeTile
         name={props.employees[4].name}
         id={props.employees[4].id}
         age={props.employees[4].age}
       />
        <EmployeeTile
         name={props.employees[5].name}
         id={props.employees[5].id}
         age={props.employees[5].age}
       />
    </div>
  )
}


export default EmployeeData;
