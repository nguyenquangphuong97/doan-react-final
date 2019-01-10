import React, { Component } from 'react';
import Trangchu from './Trangchu.js'
import { firebaseData } from '../firebaseConnect.js'
class TrangChuForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            pass: '',
            hovaten: '',
            diachi: '',
            sdt: '',
            cmnd: ''
        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        //console.log(name);
        //console.log(value);
        this.setState({
            id: value
        })
    }
    isChangep = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        //console.log(name);
        //console.log(value);
        this.setState({
            pass: value
        })
    }
    isChangeh = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        //console.log(name);
        //console.log(value);
        this.setState({
            hovaten: value
        })
    }
    isChanged = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        //console.log(name);
        //console.log(value);
        this.setState({
            diachi: value
        })
    }
    isChanges = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        //console.log(name);
        //console.log(value);
        this.setState({
            sdt: value
        })
    }
    isChangec = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        //console.log(name);
        //console.log(value);
        this.setState({
            cmnd: value
        })
    }

    updateData = (id, pass, hovaten, diachi, sdt, cmnd) => {
        var item = {};
        //nếu state rỗng thì giá trị = giá trị cũ trong firebase
        // nếu state đã được nhập thì giá trị = giá trị mình vừa mới nhập
        if (id == "") { item.id = this.props.a;} else {item.id = id;}
        if (pass == "") { item.pass = this.props.b;} else {item.pass = pass;}
        if (hovaten == "") { item.hovaten = this.props.c;} else {item.hovaten = hovaten;}
        if (diachi == "") { item.diachi = this.props.d;} else {item.diachi = diachi;}
        if (sdt == "") { item.sdt = this.props.e;} else {item.sdt = sdt;}
        if (cmnd == "") { item.cmnd = this.props.f;} else {item.cmnd = cmnd;}
        // gọi firebase, chỏ tới bảng admin, chỏ tới cái child bằng cái key LTNp6pjZhAJIwtRveit
        // rồi gọi hàm update truyền tham số vô. xong. hắn sẽ tự update vào firebase
        firebaseData.ref('admin').child(localStorage.getItem('key')).update({
            id: item.id,
            pass: item.pass,
            hovaten: item.hovaten,
            diachi: item.diachi,
            sdt: item.sdt,
            cmnd: item.cmnd
        })
        alert("success")
        console.log(item);

    }
    render() {
   //     console.log(this.props.a);
        return (
            <div style={{backgroundColor:""}}>
            <div className="container" >
                <div className="row">
                    <div style={{marginTop:'45px'}}>
                        <div className="card border-default">
                       
                            <img className="card-img-top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAh1BMVEXaJR3//wDZEx7smBHYAB7aIB3YCx7ZGh7vrhDpjBTyuw3//AD64QbkcBfZFx742gjuqBDwtQ/hWRj88AP76wXdOxrdOBr53gfnfhX1ywv87wPxtw7jahj+9wP76AbtohHgUxn0xAztnhDrkhLjYhfbLxz20grfSxnohBTfRRrlbxbjZRfmdhabLLHOAAAERUlEQVR4nO3c63aqMBAFYImZYMViFa893pVaW9//+Q61agGDgtpiJvv737VgZNMhDKlUAAAAAAAAAAAAAAAAAAAAAAAAwF5U9gE8HuqhKGmyIcs+hEdDG2eDCyVJLJyFKPsgHoxsOAhPEnUdx+kiPHFiGdVkifDEyWZUkybCE0NdL6qJh/DEiCfnyxPC80O+7WryhvAcUXe8q8kY4Tny351v737Zh/Iw5HBfkyHCs0fdYF+TAOHZ8wfOwQDh+XaMDsJzQL3gWJMAK0s77tb5sXXLPpyHoOaxmsxV2YfzCCgMYjUJQoQnis6HEzdCeKLo1BM1qSM8UXaCRE0CZKfirpykFcKTig7CE1HjVE3G1teE2k5a2/Y7imqd1KRl+4Ui09GJwmP5c6AmOtaHR9U0NanZHR4ZaGoSWB0ebXQsD4960dbkxebwyI62Jh2Lw5MRHZ7hcZXIQ04zajKVuf5eGfS4SNvWdFG9bPmaUZPOMsdfL6atrUHXU6hrO+6vFZZ9ogWQ+tQ1HvcVjJRBl0nEr8x/uSTDinHvDEkOLp/XDd6lWRfJN9Fr/FpFJl1D2zqSv3WrbRl2J4mT26z/trcItkb3uaI3vHyOBQ27ho8CkqjeuSRVYW5uDlR7cseKdFaG3lyTXPp3t5LUyaBHnHPu16oMjGxK9ETYv0NFGj3Db65JJPUrakXUDG5K9OTotlYl+DC6KdHzw/kNJRnyys0BqaV3bUk4NCV6anZdqzJps2hK9Fw6fWV+2T8uTYkeqW3R/HgDdv9v0kSvWagkfdOf+PKgzDcYOlNGnes5sp23VQlWDJsSPZme68tSt6YkFTodTtIb2xGcSupDjPOs+Uwjd3QsCg/lf0doy6S5+5y7JI7zbEd4ZJGlyJYl4SmykPJa9sH+CXdUoCSWfOOkmSY/Gx7GywQ/iq2hTMo+3D9w8g3TJRZ846SdJj/HgklzKjqU0mDfttEs69wzu5YZ96JkTJM7wUyu9UPV/CfNM6Iz992K6+ufDbmHh9a6sx5/D+yRfNcurKx5F0Xo1mL760M61Ea3gD3lvUqtNNGpuT8dCLma+02D9Q2FNicnHDwnn3zl6HR1hfUuS2KRPt1hmA6GH56MBbLeWVamo7PUvOMjtUyHh/EiCoXJc+3M9HcKlW5VGG8Uk4pOXWQ93rkq2dUyDo+MT7V5g3OJkNt4q9JnGx7qxU6zuTn/24tuvFVhu0VZfKT65eLgEcUfjapcwyOPv/zrKE8Y5OdxNZvrtsy7vcl3hr18n2jFxgKZtm3i0HYscw/s0X5TZrZ7mu+jM5kVOT0xazAOz36D5eymRM8Vu3cfPLdl3sXAu+ITLfnxNRbIck/zr+j0r5qGFmGTZ3ho7Tm1Kwf2vr5g8Biutomq93z9Ty1HY4Ztmz+90MyfJzZT4z47v8y97drnPV8OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwn9cBTH3rpbD1AAAAABJRU5ErkJggg==" width="200px" height="200px" />
                                                  
                        </div>
                        <button style={{marginTop:'45px',marginLeft:'75px',backgroundColor:"#0097A7"}} className="btn btn-info">Change Avatar</button> 
                    </div>
                    <div className="col-6">
                    <h2 style={{textAlign:"center"}}>       Thông tin nhân viên</h2>
                    <div className="card border-success">
                        
                            <div className="card-body">
                                <label className="card-title">Mã Nhân Viên:  </label>
                                <input onChange={(event) => this.isChange(event)} name="id"  type="text" defaultValue={this.props.a} className="form-control"></input> 
                                <label className="card-title">Pass:  </label>
                                <input onChange={(event) => this.isChangep(event)} name="pass" type="text" defaultValue={this.props.b} className="form-control"></input> 
                                <label className="card-title">Họ Và Tên: </label>
                                <input onChange={(event) => this.isChangeh(event)} name="hovaten" type="text" defaultValue={this.props.c} className="form-control"></input> 
                                <label className="card-title">Địa Chỉ:  </label>
                                <input onChange={(event) => this.isChanged(event)} name="diachi"  type="text" defaultValue={this.props.d} className="form-control"></input>
                                <label className="card-title">Số Điện Thoại:  </label>
                                <input onChange={(event) => this.isChanges(event)} name="sdt"type="text" defaultValue={this.props.e} className="form-control"></input>
                                <label className="card-title">CMND: </label>
                                <input onChange={(event) => this.isChangec(event)} name="cmnd" type="text" defaultValue={this.props.f} className="form-control" ></input> <br></br>
                                <button onClick={() => this.updateData(this.state.id, this.state.pass, this.state.hovaten, this.state.diachi, this.state.sdt, this.state.cmnd)} className="btn btn-success float-right">Update</button>
                                <br></br>

                            </div>
                        
                        </div>
                    </div>

                </div>
            </div>
            </div>
        );
    }
}

export default TrangChuForm;