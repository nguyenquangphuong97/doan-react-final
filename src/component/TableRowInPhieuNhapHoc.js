import React, { Component } from 'react';

class TableRowInPhieuNhapHoc extends Component {
    constructor(props) {
        super(props);
        this.state={
            tthoso:true,
            tthosoOut:"Đã in"
        }
    }
    
    HoSoClick =()=>{
      //  console.log("props f  "+this.props.f);
      this.setState({
        tthoso:!this.state.tthoso
    })
     if(this.state.tthoso==true){
         this.state.tthosoOut="Đã in"
     }else{
        this.state.tthosoOut="Chưa in"   
     }

       // this.props.hosoFunClick(this.state.tthosoOut);
      //  this.props.keyclick();
     //   console.log(ok);

    }

    render() {
        return (
            <tr>
                <td>{this.props.a}</td>
                <td>{this.props.b}</td>
                <td>{this.props.c}</td>
                <td>{this.props.d}</td>
                <td>{this.state.tthosoOut}</td>
                <td>bb</td>
                <td><button onClick={()=>this.HoSoClick()} className="btn btn-secondary">In Phiếu</button></td>
             


            </tr>
        );
    }
}

export default TableRowInPhieuNhapHoc;