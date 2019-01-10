import React, { Component } from 'react';

class TableRowThuHs extends Component {
    constructor(props) {
        super(props);
        this.state={
      
        }
    }
    
    HoSoClick =()=>{
     this.props.editFunClick();
     this.props.changeEdit();
    }
    InPhieuClick =()=>{
      this.props.editFunClickInPhieu();
      this.props.changeEditInPhieu();
     }
    render() {
        return (
            <tr>
                <td>{this.props.a}</td>
                <td>{this.props.b}</td>
                <td>{this.props.c}</td>
                <td>{this.props.d}</td>
                
                <td><button onClick={()=>this.HoSoClick()} className="btn btn-info">Thu Hồ Sơ</button></td>
                                <td><button onClick={()=>this.InPhieuClick()} className="btn btn-success">In Phiếu</button></td>

                {/* //<td><button onClick={()=>this.InPhieuClick()} className="btn btn-success">In Phiếu</button></td> */}
                {/* <td><button  className="btn btn-success">Thu tiền</button></td> */}


            </tr>
        );
    }
}

export default TableRowThuHs;