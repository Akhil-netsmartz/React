
import react from 'react'

// const EmployeeTile = (props) =>{
//     console.log(props)
//     return (
//         <h2>{props.message}</h2>
//     )
// }
// class EmployeeTile extends react.Component{
//     render(){
//           console.log(this.props)
        
//         return(<h1>nknlkn {this.props.message}</h1>)

//     }
//}
function EmployeeTile(props){
    console.log(props)
    return ( 
        <div>
            <div>
                <span>Name: {props.name}</span>
                <br />
                <div>Id : {props.id}</div>
                <span>Age: {props.age}</span>

                <br/>
                <br/>

            </div>
        </div>

     );
}
 export default EmployeeTile;