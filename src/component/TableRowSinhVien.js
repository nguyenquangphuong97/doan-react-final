import React, { Component } from 'react';
import { firebaseData } from '../firebaseConnect.js'

class TableRowSinhVien extends Component {
    editClick = () => {
        this.props.editFunClick()
        this.props.changeEdit()
    }
    removeClick =()=>{
         this.props.removeFun();
        
    }
    render() {
        return (
            
                 <tr>
                      <td>{this.props.a}</td>
                      <td>{this.props.b}</td>
                      <td>{this.props.c}</td>
                      <td>{this.props.d}</td>
                      <td><button  onClick={() => this.editClick()}   className="btn btn-warning"><i className="fa fa-pencil"></i></button></td>
                      <td><button  onClick={() => this.removeClick()} className="btn btn-danger"><i className="fa fa-close"></i></button></td>
         
                     
                </tr>
               
            
        );
    }
}

export default TableRowSinhVien;