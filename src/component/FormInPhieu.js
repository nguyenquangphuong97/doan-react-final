import React, { Component } from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import swal from 'sweetalert';
import ReactToPrint from "react-to-print";

import { firebaseData } from '../firebaseConnect.js'
import Dangnhap from './Dangnhap.js';

import InFormInPhieu from './InFormInPhieu.js';
import Trangchu from './Trangchu.js';
import GiayTo from './GiayTo.js';

class FormInPhieu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            masv: '',
            hoten: '',
            diem: '',
            cmnd: '',
            checkboxDH: this.props.object.checkboxDH,
            checkboxC3: this.props.object.checkboxC3,
            checkboxC2: this.props.object.checkboxC2,
            checkboxHP: this.props.object.checkboxHP,
            checkboxBH: this.props.object.checkboxBH,
            checkboxPK: this.props.object.checkboxPK,
        }
    }
    print = () => {
       console.log("in phieu");
        return (
            <div>
        <ReactToPrint
          trigger={() => <a href="#">Print this out!</a>}
          content={() => this.componentRef}
        />
        <Trangchu ref={el => (this.componentRef = el)} />            </div>
        );
      }
    render() {
        var oj=this.props.object;
        return (
            <div >
            
            <div ref={el => (this.componentRef = el)}  className="container">
                <div className="card border-warning">
                   
                    <div className="card-body text-primary">
                    <div style={{backgroundColor: 'white'}} >
                            <div className="container" style={{backgroundColor: 'white'}} >
                              <div className="row " style={{backgroundColor: 'white'}} >
                                <div className="col-2"  >
                                  <img style={{backgroundColor: 'white'}} className="card-img-top"  style={{    margin: 'auto' }} height={120} width={150}   src="data:image/png;base64,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" />
                                </div>
                                <h3 style={{ marginLeft: '400px' }}>Phiếu Nhập Học</h3>
                                <br></br>
                                
                                <div className="col" style={{backgroundColor: 'white'}} >
                                  <div >
                                    <div className="card-body">
                                      <b  style={{color:'black'}} >TRƯỜNG ĐẠI HỌC BÁCH KHOA</b>
                                      <p  style={{color:'black'}}>Địa chỉ: 54 Nguyễn Lương Bằng, TP. Đà Nẵng</p>
                                      <p  style={{color:'black'}}>MST:01238700462 </p>
                                     
                                    </div>
                                  </div>
                                
                                </div>
                              </div>
                            </div>
                         </div>



                        <label style={{ color: 'black' }} >Mã Số SV</label>
                        <input disabled defaultValue={this.props.object.masv}  placeholder="Diem" type="text" name="tel" className="form-control" />
                        <label style={{ color: 'black' }} >Họ Tên Sinh Viên</label>
                        <input disabled defaultValue={this.props.object.hoten}  placeholder="Ho Ten" type="text" name="tel" className="form-control" />
                        <label style={{ color: 'black' }}>Điểm Thi</label>
                        <input disabled defaultValue={this.props.object.diem}  placeholder="Diem" type="text" name="tel" className="form-control" />
                        <label style={{ color: 'black' }}>CMND</label>
                        <input disabled defaultValue={this.props.object.cmnd}  placeholder="Ho Ten" type="text" name="tel" className="form-control" />
                        <div>
                            <br />
                            <h3 style={{ color: 'black' }}>Những Hồ Sơ Đã Thu Bao Gồm</h3>
                            <div className="row">
                                <div className="col-6">
                                    <div className="checkbox" disabled >
                                        <label style={{ fontSize: '20px' }}><input type="checkbox" value="false" defaultChecked={this.props.object.checkboxDH} />Hồ sơ đại học</label>
                                        <div className="checkbox" disabled>
                                            <label style={{ fontSize: '20px' }}><input type="checkbox" value="false" defaultChecked={this.props.object.checkboxC3} />Hồ sơ cấp 3</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="checkbox " disabled>
                                        <label style={{ fontSize: '20px' }}><input type="checkbox" value="false" defaultChecked={this.props.object.checkboxC2} />Hồ sơ trung học</label>
                                    </div>
                                    <div className="checkbox " disabled>
                                        <label style={{ fontSize: '20px' }}><input type="checkbox" value="false" defaultChecked={this.props.object.checkboxC1} />Hồ sơ tiểu học</label>
                                    </div>
                                </div>
                            </div>
                            <h3 style={{ color: 'black' }}>Những Khoảng Tiền Đã Thu Bao Gồm</h3>
                            <div className="row">
                                <div className="col-6">
                                    <div className="checkbox" >
                                        <label style={{ fontSize: '20px' }}><input type="checkbox" value="false" defaultChecked={this.props.object.checkboxHP}  />Tiền Học Phí</label>
                                        <div className="checkbox">
                                            <label style={{ fontSize: '20px' }}><input type="checkbox" value="false" defaultChecked={this.props.object.checkboxBH} />Tiền Bảo Hiểm</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="checkbox ">
                                        <label style={{ fontSize: '20px' }}><input type="checkbox" value="false" defaultChecked={this.props.object.checkboxPK} />Tiền Phí Khác</label>
                                    </div>

                                </div>
                            </div>


                        </div>
                        <br></br>
                         

                    </div>
                </div>

            </div> 
            <div className="container" >
            <ReactToPrint className="col-6"
                            trigger={() => <button className="btn btn-primary" ><a href="#" style={{ color: 'white' }}>In Phiếu Nhập học</a></button>}
                             content={() => this.componentRef}
                            />
            </div>
            </div>

        );
    }
}

export default FormInPhieu;