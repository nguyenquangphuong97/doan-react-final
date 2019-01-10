import React, { Component } from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import swal from 'sweetalert';
import ReactToPrint from "react-to-print";

import { firebaseData } from '../firebaseConnect.js'
import Dangnhap from './Dangnhap.js';
import Trangchu from './Trangchu.js';
class EditThuHP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            masv: '',
            hoten: '',
            diem: '',
            cmnd: '',
            checkboxHP:this.props.object.checkboxHP,
            checkboxBH:this.props.object.checkboxBH,
            checkboxPK:this.props.object.checkboxPK,
            checkboxPP:this.props.object.checkboxCPP
        }
    }
    isChangehoten = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        //console.log(name);
        //console.log(value);
        this.setState({
            hoten: value
        })
    }
    isChangediem = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        //console.log(name);
        //console.log(value);
        this.setState({
            diem: value
        })
    }
    isChangeDH= (event) => {
        const name = event.target.name;
        const value = event.target.value;
        //console.log(name);
        
        
        this.setState({
            checkboxDH: value
        })
        console.log(value);
        // if()
    }
          
    thaydoicbHP=(e)=>{
       //console.log(this.state.checkboxDH);
       this.setState({checkboxHP:!this.state.checkboxHP})
    }
    thaydoicbBH=(e)=>{
       // console.log(this.state.checkboxDH);
        this.setState({checkboxBH:!this.state.checkboxBH})
     }
     thaydoicbPK=(e)=>{
       // console.log(this.state.checkboxDH);
        this.setState({checkboxPK:!this.state.checkboxPK})
     }
     thaydoicbPP=(e)=>{
       // console.log(this.state.checkboxDH);
        this.setState({checkboxPP:!this.state.checkboxPP})
     }
    savebutton = () => {
        var item = {};
        if (this.state.checkboxHP === '') { item.checkboxHP = this.props.object.checkboxHP; } else { item.checkboxHP = this.state.checkboxHP; }
        if (this.state.checkboxBH === '') { item.checkboxBH = this.props.object.checkboxBH; } else { item.checkboxBH = this.state.checkboxBH; }
        if (this.state.checkboxPK === '') { item.checkboxPK = this.props.object.checkboxPK; } else { item.checkboxPK = this.state.checkboxPK; }
        //if (this.state.checkboxPP === '') { item.checkboxPP = this.props.object.checkboxPP; } else { item.checkboxPP = this.state.checkboxPP; }
        console.log( item.checkboxHP);

        firebaseData.ref('sinhvien').child(this.props.object.key).update({
            checkboxHP: item.checkboxHP,
            checkboxBH: item.checkboxBH,
            checkboxPK: item.checkboxPK,
           // checkboxPP: item.checkboxPP
        })
        console.log(item);
        swal("Completed...", "Thu tiền thành công ", "success"); 

    }
    render() {
        return (
            <div>

            <div ref={el => (this.componentRef = el)} className="container">
                <div className="card border-warning">
                    <div className="card-header float-center"  ><h4 style={{marginLeft:'420px'}}>Thu Học Phí Sinh Viên</h4></div>
                    <div className="card-body text-primary">
                        {/* <div className="form-group">                       
                    <input defaultValue={this.props.object.masv} onChange={(event) => this.isChangemasv(event)} placeholder="Ten" type="hidden" name="name" className="form-control" />
                </div> */}
                        <label>Mã Số SV</label>
                        <input disabled defaultValue={this.props.object.masv} onChange={(event) => this.isChangediem(event)} placeholder="Diem" type="text" name="tel" className="form-control" />
                        <label>Họ Tên Sinh Viên</label>

                        <input disabled defaultValue={this.props.object.hoten} onChange={(event) => this.isChangehoten(event)} placeholder="Ho Ten" type="text" name="tel" className="form-control" />
                        <div>
                            <br />
                            <div className="row">
                                <div className="col-6">
                                    <div className="checkbox" >
                                        <label style={{ fontSize: '20px' }}><input type="checkbox"  value="false" defaultChecked={this.props.object.checkboxHP}  name="checkboxdaihoc" onClick={(e)=>this.thaydoicbHP(e)}  />Tiền Học Phí</label>
                                        <div className="checkbox">
                                            <label style={{ fontSize: '20px' }}><input type="checkbox" value="false" defaultChecked={this.props.object.checkboxBH}  onClick={(e)=>this.thaydoicbBH(e)}/>Tiền Bảo Hiểm</label>
                                        </div>
                                    </div>
                                </div>
                           
                            <div className="col-6">
                                <div className="checkbox ">
                                    <label style={{ fontSize: '20px' }}><input type="checkbox" value="false" defaultChecked={this.props.object.checkboxPK}  onClick={(e)=>this.thaydoicbPK(e)}/>Tiền Phí Khác</label>
                                </div>
                                {/* <div className="checkbox ">
                                    <label style={{ fontSize: '20px' }}><input type="checkbox" value="false" defaultChecked={this.props.object.checkboxPP} onClick={(e)=>this.thaydoicbPP(e)}/>Tiền Phung Phí</label>
                                </div> */}
                            </div>
                            </div>


                        </div>
                        <br></br>

                    </div>
                </div>
               
            </div>
            
            <div className="container" >
            <button className="btn btn-warning" onClick={() => this.savebutton()} >Save</button>
            <ReactToPrint className="col-6"
                            trigger={() => <button className="btn btn-primary" ><a href="#" style={{ color: 'white' }}>In Phiếu Thu Học Phí</a></button>}
                             content={() => this.componentRef}
                            />
                            </div>
            </div>

        );
    }
}

export default EditThuHP;