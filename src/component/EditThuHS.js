import React, { Component } from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import swal from 'sweetalert';
import ReactToPrint from "react-to-print";

import { firebaseData } from '../firebaseConnect.js'
import Dangnhap from './Dangnhap.js';
import Trangchu from './Trangchu.js';
class EditThuHS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            masv: '',
            hoten: '',
            diem: '',
            cmnd: '',
            checkboxDH:this.props.object.checkboxDH,
            checkboxC3:this.props.object.checkboxC3,
            checkboxC2:this.props.object.checkboxC2,
            checkboxC1:this.props.object.checkboxC1
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
          
    thaydoicbDH=(e)=>{
       //console.log(this.state.checkboxDH);
       this.setState({checkboxDH:!this.state.checkboxDH})
    }
    thaydoicbC3=(e)=>{
       // console.log(this.state.checkboxDH);
        this.setState({checkboxC3:!this.state.checkboxC3})
     }
     thaydoicbC2=(e)=>{
       // console.log(this.state.checkboxDH);
        this.setState({checkboxC2:!this.state.checkboxC2})
     }
     thaydoicbC1=(e)=>{
       // console.log(this.state.checkboxDH);
        this.setState({checkboxC1:!this.state.checkboxC1})
     }
    savebutton = () => {
        var item = {};
        if (this.state.checkboxDH === '') { item.checkboxDH = this.props.object.checkboxDH; } else { item.checkboxDH = this.state.checkboxDH; }
        if (this.state.checkboxC3 === '') { item.checkboxC3 = this.props.object.checkboxC3; } else { item.checkboxC3 = this.state.checkboxC3; }
        if (this.state.checkboxC2 === '') { item.checkboxC2 = this.props.object.checkboxC2; } else { item.checkboxC2 = this.state.checkboxC2; }
        if (this.state.checkboxC1 === '') { item.checkboxC1 = this.props.object.checkboxC1; } else { item.checkboxC1 = this.state.checkboxC1; }
        console.log( item.checkboxDH);

        firebaseData.ref('sinhvien').child(this.props.object.key).update({
            checkboxDH: item.checkboxDH,
            checkboxC3: item.checkboxC3,
            checkboxC2: item.checkboxC2,
            checkboxC1: item.checkboxC1
        })
        console.log(item);
        swal("Completed...", "Thu hồ sơ thành công ", "success"); 

    }
    render() {
        return (
            <div>

            <div ref={el => (this.componentRef = el)} className="container">
                <div className="card border-warning">
                    <div className="card-header float-center"  ><h4 style={{marginLeft:'420px'}}>Thu Hồ Sơ Sinh Viên</h4></div>
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
                                        <label style={{ fontSize: '20px' }}><input type="checkbox"  value="false" defaultChecked={this.props.object.checkboxDH}  name="checkboxdaihoc" onClick={(e)=>this.thaydoicbDH(e)}  />Hồ sơ đại học</label>
                                        <div className="checkbox">
                                            <label style={{ fontSize: '20px' }}><input type="checkbox" value="false" defaultChecked={this.props.object.checkboxC3}  onClick={(e)=>this.thaydoicbC3(e)}/>Hồ sơ cấp 3</label>
                                        </div>
                                    </div>
                                </div>
                           
                            <div className="col-6">
                                <div className="checkbox ">
                                    <label style={{ fontSize: '20px' }}><input type="checkbox" value="false" defaultChecked={this.props.object.checkboxC2}  onClick={(e)=>this.thaydoicbC2(e)}/>Hồ sơ trung học</label>
                                </div>
                                <div className="checkbox ">
                                    <label style={{ fontSize: '20px' }}><input type="checkbox" value="false" defaultChecked={this.props.object.checkboxC1} onClick={(e)=>this.thaydoicbC1(e)}/>Hồ sơ tiểu học</label>
                                </div>
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

export default EditThuHS;