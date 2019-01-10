import React, { Component } from 'react';
import AddSV from './AddSV.js';
import TableRowSinhVien from './TableRowSinhVien.js'
import ReactToExcel from 'react-html-table-to-excel'
class TableData extends Component {
constructor(props) {
    super(props);
    this.state={
        trangthai:false,
        userObject: {}
    }
    
}

getDataFromDb = () => this.props.datafirebase.map((value, key) => (
    <TableRowSinhVien
      key={key}
      e={value.key}
      a={value.masv}
      b={value.hoten}
      c={value.diem}
      d={value.cmnd}
      editFunClick={(user)=>this.props.editFun(value)}
    //   removeFun={() => this.removeUser(value)}
      changeEdit={()=>this.props.changeEditUserStatu()}
      removeFun={(user)=>this.props.removeFunClick(value)}
    >
    </TableRowSinhVien>
    

  ))
    render() {
        return (
            <div>
                
                <table className="table table-striped" id="table1">
                <thead className="thead-default">
              <tr>
                <th>SBD</th>
                <th>Họ Tên</th>
                <th>Điểm </th>
                <th>CMND </th>
                <th>Edit </th>
                <th>Delete</th>
               
              </tr>
            </thead>
            <tbody>
              
              {this.getDataFromDb()}
             
            </tbody>

          </table>
          <ReactToExcel
                   table="table1"
                   filename="excelFile"
                   sheet="sheet 1"
                   buttonText="Export "
                  className="btn btn-primary"
                  
                ></ReactToExcel>
            </div>
          
        );
    }
}

export default TableData;