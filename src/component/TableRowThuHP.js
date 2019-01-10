import React, { Component } from 'react';

class TableRowThuHP extends Component {
    constructor(props) {
        super(props);
        this.state={
      
        }
    }
    
    HocPhiClick =()=>{
     this.props.editFunClick();
     this.props.changeEdit();
    }
        InPhieuClick =()=>{

     }
    render() {
        return (
            <tr>
                <td>{this.props.a}</td>
                <td>{this.props.b}</td>
                <td>{this.props.c}</td>
                <td>{this.props.d}</td>
                
                <td><button onClick={()=>this.HocPhiClick()} className="btn btn-info">Thu Học Phí</button></td>
                              <td><button onClick={()=>this.InPhieuClick()} className="btn btn-success">In Phiếu</button></td>

            


            </tr>
        );
    }
}

export default TableRowThuHP;