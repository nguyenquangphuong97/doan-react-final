import React, { Component } from 'react';
import TableData from './TableData';
import { firebaseData } from '../firebaseConnect.js'
import TableThuHS from './TableThuHS';
import Navbar from './Navbar';
import Dangnhap from './Dangnhap';

class KhoanThuKhac extends Component {
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
            arrayData.push({
              key: key,
              masv: masv,
              hoten: hoten,
              diem: diem,
              cmnd: cmnd,
              hoso:hoso
    
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
    render() {
          if(localStorage.getItem("User")!=null)

        return (
            <div>
                <Navbar></Navbar>
              <TableThuHS keyFun={(key)=>this.hosokey(key)}
              hosoFun={(user) => this.hosoUser(user)} 
              datafirebase={this.state.dataFromFirseBase}></TableThuHS>
            </div>
        );
        else return(<Dangnhap />);
    }
}

export default KhoanThuKhac;