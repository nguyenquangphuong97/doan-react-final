import React, { Component } from 'react';
import TableRowSinhVien from './TableRowSinhVien.js'
import Navbar from './Navbar'
import { firebaseData } from '../firebaseConnect.js'
import EditSV from './EditSV.js';
import AddSV from './AddSV.js';
import Search from './Search.js';
import Dangnhap from './Dangnhap.js';

import TableData from './TableData.js';
import GiayTo from './GiayTo.js';
import Pagination from "react-js-pagination";
import {BrowserRouter as Router, Route, Link,NavLink} from 'react-router-dom';

class SinhvienID extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFromFirseBase: [],
      trangthai: false,
      userObject: {},
      ketqua1: [],
      searchText: ''
      
    }
  }
  componentWillMount() { // thuc hien truoc khi render  lay data tu firebase     
    firebaseData.ref('sinhvien').on('value', (admins) => {
      var arrayData = []; var count =0;
      admins.forEach(element => {
      	count++;
        console.log(this.props.match.params.id+" "+count);
        const key = element.key;
        const masv = element.val().masv;
        const hoten = element.val().hoten;
        const diem = element.val().diem;
        const cmnd = element.val().cmnd;
        if(count>(this.props.match.params.id-1)*10&&count<=(this.props.match.params.id)*10)
        arrayData.push({
          key: key,
          masv: masv,
          hoten: hoten,
          diem: diem,
          cmnd: cmnd

        })
      });

      this.setState({
        dataFromFirseBase: arrayData
      });
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
    console.log("edituser " + user);

  }

  removeUser = (user) => {
    //console.log(user);
    firebaseData.ref('sinhvien').child(user.key).remove();
    this.setState({
      userObject: user
    });

  }
  hienthiformsua = () => {
    if (this.state.trangthai == true) {
      return (
        <EditSV object={this.state.userObject}></EditSV>
      )
    }
  }
  getNewUserData = (masv, hoten, diem, cmnd) => { //nhan du lieu de push vao firebase
    // console.log("du lieu nhan dc " +name);
    // console.log(tel);
    // console.log(Permission);    
    var item = {};
    item.masv = '';
    item.diem = '';
    item.hoten = '';
    item.cmnd = '';
    item.checkboxDH = false;
    item.checkboxC3 = false;
    item.checkboxC2 =false;
    item.checkboxC1 = false;
    item.checkboxHP = false;
    item.checkboxBH = false;
    item.checkboxPK =false;
    // item.checkboxPP = false;
    item.masv = masv;
    item.hoten = hoten;
    item.diem = diem;
    item.cmnd = cmnd;
    var items = [];
    //items.push(item);

    firebaseData.ref('sinhvien').push(item);
    console.log(items);
  }
  getTextfromSearch = (dl) => { //get du lieu tu searchText
    this.setState({
      searchText: dl
    });

    console.log("du lieu nhan dc la: " + dl);

  }
  shouldComponentUpdate() {
    // Odd Number
    return true;
  }

  render() {
    var ketqua = [];
    const temp = this.state.dataFromFirseBase;
    temp.forEach((item) => {
      if (item.hoten.indexOf(this.state.searchText) != -1) {
        ketqua.push(item);
      }
    // console.log("search " + ketqua);

    });
        if(localStorage.getItem("User")!=null)

    return (
      <div> 
        <Navbar></Navbar>

        <div className="container">
          <div className="row">

            <div className="col-9">
              <Search search={(dl) => this.getTextfromSearch(dl)}></Search>
               <TableData datafirebase={ketqua}
                editFun={(user) => this.editUser(user)}
                changeEditUserStatu={() => this.changetrangthai()}
                removeFunClick={(user) => this.removeUser(user)}
              ></TableData>


              <AddSV className="float right" add={(masv, hoten, diem, cmnd) => this.getNewUserData(masv, hoten, diem, cmnd)}  ></AddSV>
            </div>
            <div className="col-3">
              {this.hienthiformsua()}
           
            </div>
          

           <ul className="pagination">
              <li className="page-item"><a href="/sinhvien/1" className="page-link" >1</a></li>
              <li className="page-item ">
                <a href="/sinhvien/2" className="page-link" >2</a>
              </li>
              <li className="page-item"><a href="/sinhvien/3" className="page-link" >3</a></li>
            </ul>
          </div>
        </div>
    
      </div>


    );
  else return(<Dangnhap />)
  }
}

export default SinhvienID;