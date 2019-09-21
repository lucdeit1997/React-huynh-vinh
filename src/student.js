import React from 'react';



export default class Student extends React.Component{
    constructor(props){
        super(props);
    }
      
 render(){
     const { todos } = this.props
     
     return (
      <div>
        { todos && 
        <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
        {todos.map((student)=>{
            return( 
              <tr key={student.id}>
                <th scope="row">1</th>
                <td> {student.id}</td>
                <td>{student.name}</td>
                <td>{student.old}</td>
              </tr>)
         })}
        </tbody>
    </table> }
      </div>
     )
 }   
}