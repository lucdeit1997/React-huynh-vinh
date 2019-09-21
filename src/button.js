import React from 'react';
import Axios from 'axios';

export default class ButtonTodos extends React.Component{
    constructor(props){
        super(props);
    }

    state = {
        alert : '',
        txtName: '',
        txtAge: ''
    }

   getValueInput = (event)=>{
       let target = event.target;
       let { name, value } = target;
       
       this.setState({
        [name] : value
       })
    }

    addStudent =()=>{
        let { txtName, txtAge } = this.state;
        this.props.onAdd(txtName, txtAge);
    }
    render(){
        return(
            <div>
                <div className="container">
                    <button type="button" className="btn  btn-success" data-toggle="modal" data-target="#myModal">ADD</button>
                    <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#myModal">DELETE</button>
                    <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#myModal">UPDATE</button>

                    <div className="modal fade" id="myModal" role="dialog">
                        <div className="modal-dialog">
                        
                        <div className="modal-content">
                            <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">INFOR STUDENT</h4>
                            <h4>{this.state.alert}</h4>
                            </div>
                            <div className="modal-body">
                               <p>Name : </p> <input name='txtName' value={this.state.txtName}  onChange={this.getValueInput} />
                               <p>old : </p> <input name='txtAge' type='number' value={this.state.txtAge } onChange={this.getValueInput}  />
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-success" onClick ={this.addStudent}>confirm</button>
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                        
                        </div>
                    </div>
            
                </div>

            </div>
        );
    }
}