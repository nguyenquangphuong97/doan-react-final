import React, { Component } from 'react';
import TableRowSinhVien from './TableRowSinhVien.js'
import TableRowThuHP from './TableRowThuHP.js';
class TableThuHP extends Component {
    constructor(props) {
        super(props);

    }
    getDataFromDb = () => this.props.datafirebase.map((value, key) => (
        <TableRowThuHP
          key={key}
          e={value.key}
          a={value.masv}
          b={value.hoten}
          c={value.diem}
          d={value.cmnd}
          f={value.hoso}
          g={value.checkboxDH}
          e={value.checkboxC3}
          f={value.checkboxC2}
          k={value.checkboxC1}
          l={value.checkboxHP}
          m={value.checkboxBH}
          n={value.checkboxPK}
        //   o={value.checkboxPP}
          hosoFunClick={(ok)=>this.props.hosoFun(ok)}
          removeFun={() => this.removeUser(value)}
          keyclick={(user)=>this.props.keyFun(value)}
          editFunClick={(user)=>this.props.editFun(value)}
          changeEdit={()=>this.props.changeEditUserStatu()}
         
        >
        </TableRowThuHP>
        
    
      ))
    render() {
        return (
            <div className="container">

                <table className="table table-striped" id="table1">
                    <thead className="thead-default">
                        <tr>
                            <th>SBD</th>
                            <th>Họ Tên</th>
                            <th>Điểm </th>
                            <th>CMND </th>
                            
                            <th>Thu Tiền</th>
                            <th>In Phiếu Thu Tiền</th>

                           

                        </tr>
                    </thead>
                    <tbody>

                        {this.getDataFromDb()}

                    </tbody>

                </table>

            </div>
        );
    }
}

export default TableThuHP;