import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link,NavLink} from 'react-router-dom';
class Navbar extends Component {
    render() {
      if(localStorage.getItem("role")==1)
        return (
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              {/* <a class="navbar-brand" href="#">Navbar</a> */}
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active" >
                     <NavLink to="/trangchu" className="navbar-brand" >Trang Chủ</NavLink>
                  </li>
                  <li className="nav-item active">
                     <NavLink to="/sinhvien" className="navbar-brand">Sinh Viên</NavLink>
                  </li>
                  <li className="nav-item active" >
                     <NavLink to="/giayto" className="navbar-brand" >Thu Hồ Sơ</NavLink>
                  </li>
                  <li className="nav-item active" >
                     <NavLink to="/tienhocphi" className="navbar-brand" >Thu Tiền</NavLink>
                  </li>
                
                  <li className="nav-item">
                  <NavLink className="navbar-brand" to="/xuatfile">In Phiếu Nhập Học</NavLink>
                  </li>
                  <form>
                    <input className="form-control" placeholder="Tìm kiếm" />
                  </form>
                  <li className="nav-item">
                  {/* <NavLink className="navbar-brand" to="/dangxuat">Đăng xuất</NavLink> */}
                  <h4 className="display-5"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Xin chào &nbsp;{localStorage.getItem("User")} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
                                      </li>
                  <li className="nav-item">
                  <NavLink className="navbar-brand float-right" to="/dangxuat">Đăng xuất</NavLink>
                  </li>

                </ul>
              </div>
            </nav>
          
        );
        else if(localStorage.getItem("role")==2)
        return (
            
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* <a class="navbar-brand" href="#">Navbar</a> */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active" >
                 <NavLink to="/trangchu" className="navbar-brand" >Trang Chủ</NavLink>
              </li>
              <li className="nav-item active" >
                 <NavLink to="/giayto" className="navbar-brand" >Thu Hồ Sơ</NavLink>
              </li>
            
              <li className="nav-item">
              <NavLink className="navbar-brand" to="/xuatfile">In Phiếu Nhập Học</NavLink>
              </li>
              <form>
                <input className="form-control" placeholder="Tìm kiếm" />
              </form>
              <li className="nav-item">
              {/* <NavLink className="navbar-brand" to="/dangxuat">Đăng xuất</NavLink> */}
              <h4 className="display-5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Xin chào &nbsp;{localStorage.getItem("User")} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
                                  </li>
              <li className="nav-item">
              <NavLink className="navbar-brand float-right" to="/dangxuat">Đăng xuất</NavLink>
              </li>

            </ul>
          </div>
        </nav>
        
      );
      else if(localStorage.getItem("role")==3)
      return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* <a class="navbar-brand" href="#">Navbar</a> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active" >
               <NavLink to="/trangchu" className="navbar-brand" >Trang Chủ</NavLink>
            </li>
            <li className="nav-item active" >
               <NavLink to="/tienhocphi" className="navbar-brand" >Thu Tiền</NavLink>
            </li>
          
            <li className="nav-item">
            <NavLink className="navbar-brand" to="/xuatfile">In Phiếu Nhập Học</NavLink>
            </li>
            <form>
              <input className="form-control" placeholder="Tìm kiếm" />
            </form>
            <li className="nav-item">
            {/* <NavLink className="navbar-brand" to="/dangxuat">Đăng xuất</NavLink> */}
            <h4 className="display-5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Xin chào &nbsp;{localStorage.getItem("User")} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
                                </li>
            <li className="nav-item">
            <NavLink className="navbar-brand float-right" to="/dangxuat">Đăng xuất</NavLink>
            </li>

          </ul>
        </div>
      </nav>
      );
    }
}

export default Navbar;