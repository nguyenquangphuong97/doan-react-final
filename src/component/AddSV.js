import React, { Component } from 'react';

class AddSV extends Component {
    constructor(props) {
        super(props);
        this.state={
            trangthai:false,
            masv:'',
            name:'',
            diem:'',
            cmnd:'',

        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
        //package thanh 1 item
        // var item = {};
        // item.id = this.state.id;
        // item.name = this.state.name;
        // item.tel = this.state.tel;
        // item.Permission = this.state.Permission;
        // console.log(item);

    }
   
    hienthiNut = () => {
        if (this.state.trangthai === true) {
            return (
                <div className="btn btn-block btn-outline-info" onClick={() => this.thaydoitrangThai()}>Đóng lại</div>
            )
        } else {
            return (
                <div className="btn btn-block btn-outline-info" onClick={() => this.thaydoitrangThai()}>Thêm mới</div>
            )
        }
    }
    hienthiForm = () => {
        if (this.state.trangthai === true) {
            return (
                <div className="card border-primary">
                   <form>
                   <div className="card-header">Add </div>
                    <div className="card-body text-primary">
                        <div className="form-group">
                            <input onChange={(event) => { this.isChange(event) }} placeholder="Masv" type="text" name="masv" className="form-control" />
                        </div>  
                        <div className="form-group">
                            <input onChange={(event) => { this.isChange(event) }} placeholder="HoTen" type="text" name="name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input onChange={(event) => { this.isChange(event) }} placeholder="Diem" type="text" name="diem" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input onChange={(event) => { this.isChange(event) }} placeholder="CMND" type="text" name="cmnd" className="form-control" />
                        </div>

                        <div className="form-group">
                            <button className="btn btn-primary" type="reset" onClick={() => { this.props.add(this.state.masv,this.state.name, this.state.diem, this.state.cmnd) }}>Add</button>
                        </div>
                    </div>
                   </form>
                </div>

            )
        } else {
            return (
                <div></div>
            )
        }
    }
    thaydoitrangThai = () => {
        this.setState(
            {
                trangthai: !this.state.trangthai
            }
        )
    }
    
    render() {
        return (
            <div>
                {this.hienthiNut()}
                {this.hienthiForm()}
            </div>
        );
    }
}

export default AddSV;