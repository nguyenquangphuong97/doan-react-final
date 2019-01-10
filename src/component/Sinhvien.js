import React, { Component } from 'react';
import TableRowSinhVien from './TableRowSinhVien.js'
import Navbar from './Navbar'
import { firebaseData } from '../firebaseConnect.js'
import EditSV from './EditSV.js';
import AddSV from './AddSV.js';
import Search from './Search.js';
import TableData from './TableData.js';
import GiayTo from './GiayTo.js';
import Pagination from "react-js-pagination";
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Dangnhap from './Dangnhap.js'
import Filter from './Filter.js'
class Sinhvien extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFromFirseBase: [],
      trangthai: false,
      userObject: {},
      ketqua1: [],
      searchText: '',
      filterText: 'tatca'

    }
  }
  componentWillMount() { // thuc hien truoc khi render  lay data tu firebase     
    firebaseData.ref('sinhvien').on('value', (admins) => {
      var arrayData = [];
      admins.forEach(element => {
        console.log(element.key);
        const key = element.key;
        const masv = element.val().masv;
        const hoten = element.val().hoten;
        const diem = element.val().diem;
        const cmnd = element.val().cmnd;
        const checkboxDH = element.val().checkboxDH;
        const checkboxC1 = element.val().checkboxC1;
        const checkboxC2 = element.val().checkboxC2;
        const checkboxC3 = element.val().checkboxC3;
        const checkboxHP = element.val().checkboxHP;

        arrayData.push({
          key: key,
          masv: masv,
          hoten: hoten,
          diem: diem,
          cmnd: cmnd,
          checkboxDH: checkboxDH,
          checkboxC1: checkboxC1,
          checkboxC2: checkboxC2,
          checkboxC3: checkboxC3,
          checkboxHP: checkboxHP,

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
    item.checkboxC2 = false;
    item.checkboxC1 = false;
    item.checkboxHP = false;
    item.checkboxBH = false;
    item.checkboxPK = false;
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
  getTextfromFilter = (dl2) => { //get du lieu tu searchText
    this.setState({
      filterText: dl2
    });

    console.log("du lieu nhan dc la: " + dl2);

  }
  a = () => {
    var result = <ul className="pagination">
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
    return (result);
  }
  render() {
    var ketqua = [];
    var ketqua2 = [];
    var count = 0;
    const temp = this.state.dataFromFirseBase;
    temp.forEach((item) => {
      if (item.hoten.indexOf(this.state.searchText) != -1) {
        ketqua2.push(item);
      }
      console.log("search " + ketqua + "11212");

    });
    if (this.state.filterText == "tatca") {
      ketqua2.forEach((item) => {
        count++;
        if (count < 10)
          ketqua.push(item);

        console.log("search " + ketqua + "2");
      });
    }
    else
      if (this.state.filterText == "dathutien") {
        ketqua2.forEach((item) => {
          if (item.checkboxHP === true) {
            ketqua.push(item);
          }
          console.log(ketqua);
        });
      }
      else
        if (this.state.filterText == "dathuhoso") {
          ketqua2.forEach((item) => {
            if (item.checkboxDH === true && item.checkboxC1 === true && item.checkboxC2 === true && item.checkboxC3 === true) {
              ketqua.push(item);
            }
            console.log(ketqua);
          });
        }
        else
          if (this.state.filterText == "chuadaydu") {
            ketqua2.forEach((item) => {
              if (item.checkboxDH === false || item.checkboxC1 === false || item.checkboxC2 === false || item.checkboxC3 === false || item.checkboxHP === false) {
                ketqua.push(item);
              }
              console.log(ketqua);
            });
          }

    if (localStorage.getItem("User") != null)
      return (
        <div>
          <Navbar></Navbar>

          <div className="container">


            <div className="col-12">
              <div className="row">
                <Search className="col-md-12" search={(dl) => this.getTextfromSearch(dl)}>

                </Search>
                <Filter className="col-md-6" filter={(dl2) => this.getTextfromFilter(dl2)}>

                </Filter>
              </div>
              <TableData datafirebase={ketqua}
                editFun={(user) => this.editUser(user)}
                changeEditUserStatu={() => this.changetrangthai()}
                removeFunClick={(user) => this.removeUser(user)}
              ></TableData>
              {this.hienthiformsua()}


              <AddSV className="float right" add={(masv, hoten, diem, cmnd) => this.getNewUserData(masv, hoten, diem, cmnd)}  ></AddSV>

              <div className="col-12">


              </div>
              { /*this.a(()=>{})*/}
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

        </div>


      );
    else return (<Dangnhap />);
  }
}

export default Sinhvien;