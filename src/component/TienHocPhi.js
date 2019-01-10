import React, { Component } from 'react';
import TableData from './TableData';
import { firebaseData } from '../firebaseConnect.js'
import TableThuHP from './TableThuHP';
import Navbar from './Navbar';
import EditThuHP from './EditThuHP';
import Dangnhap from './Dangnhap';
import Search from './Search.js';
import {BrowserRouter as Router, Route, Link,NavLink} from 'react-router-dom';

class TienHocPhi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFromFirseBase: [],
            trangthai: false,
            userObject: {},
            ketqua1: [],
            searchText:''
   
          }
    }
    componentWillMount() { // thuc hien truoc khi render  lay data tu firebase     
        firebaseData.ref('sinhvien').on('value', (admins) => {
          var arrayData = [];
          admins.forEach(element => {
            const key = element.key;
            const masv = element.val().masv;
            const hoten = element.val().hoten;
            const diem = element.val().diem;
            const cmnd = element.val().cmnd;
            const hoso = element.val().hoso;
            const checkboxDH = element.val().checkboxDH;
            const checkboxC3 = element.val().checkboxC3;
            const checkboxC2 = element.val().checkboxC2;
            const checkboxC1 = element.val().checkboxC1;
            const checkboxHP = element.val().checkboxHP;
            const checkboxBH = element.val().checkboxBH;
            const checkboxPK = element.val().checkboxPK;
            const checkboxPP = element.val().checkboxPP;
            arrayData.push({
              key: key,
              masv: masv,
              hoten: hoten,
              diem: diem,
              cmnd: cmnd,
              hoso:hoso,
              checkboxDH:checkboxDH,
              checkboxC3:checkboxC3,
              checkboxC2:checkboxC2,
              checkboxC1:checkboxC1,
              checkboxHP:checkboxHP,
              checkboxBH:checkboxBH,
              checkboxPK:checkboxPK,
              checkboxPP:checkboxPP,
            })
          });
    
          this.setState({
            dataFromFirseBase: arrayData
          });
        })
        
      }
      hosokey=(key)=>{
        this.state.userObject=key;
        console.log("ho so key "+this.state.userObject.key);
        
      }
      hosoUser = (user) => {   //lay du lieu tu bang do ra form edit
        // this.setState({
        //   userObject: user
        // });
        // var item = {};
        //   item.hoso=this.state.userObject.hoso;
        
        console.log("ho so User "+this.state.userObject.key);
         firebaseData.ref('sinhvien').child('-LTWRDBpIrQJCTMQ_Don').update({
            hoso:user
       })
      }
      changetrangthai = () => {
        this.setState({
          trangthai: !this.state.trangthai
        })
      }
      editUser = (user) => {   //lay du lieu tu bang do ra form edit
        this.setState({
          userObject: user
        });
        console.log("edituser " + user.masv);
    
      }
      hienthiformsua = () => {
        if (this.state.trangthai == true) {
          return (
            <EditThuHP object={this.state.userObject}></EditThuHP>
          )
        }
      }
    render() {
          if(localStorage.getItem("User")!=null)

        return (
          
            <div>
                <Navbar></Navbar>
              <div className="container">
                <div className="row">
                  <div className="col-9">
                      <Search search={(dl) => this.getTextfromSearch(dl)}>
                   
                    </Search>
                      </div>

                    <TableThuHP keyFun={(key)=>this.hosokey(key)}
                    hosoFun={(user) => this.hosoUser(user)} 
                    datafirebase={this.state.dataFromFirseBase}
                    editFun={(user) => this.editUser(user)}
                    changeEditUserStatu={() => this.changetrangthai()}
                    >
                    
                    </TableThuHP>
              {this.hienthiformsua()}
                   </div>
                   <ul className="pagination">
              <li className="page-item">
                <Link to="/sinhvien/1" ><div className="page-link" >1</div></Link>
              </li>
              <li className="page-item ">
                <Link to="/sinhvien/2" ><div className="page-link" href="#">2 </div></Link>
              </li>
              <li className="page-item">
              <Link to="/sinhvien/3" ><div className="page-link" >3</div></Link>
              </li>
            </ul>
                </div>
              </div>
 
        );
        else return(<Dangnhap />)
    }
}

export default TienHocPhi;