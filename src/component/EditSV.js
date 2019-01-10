import React, { Component } from 'react';
import { firebaseData } from '../firebaseConnect.js'

class EditSV extends Component {
    constructor(props) {
        super(props);
        this.state = {
            masv: '',
            hoten: '',
            diem: '',
            cmnd: ''
        }
    }
    isChangemasv = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        //console.log(name);
        //console.log(value);
        this.setState({
            masv: value
        })
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
    isChangecmnd = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        //console.log(name);
        //console.log(value);
        this.setState({
            cmnd: value
        })
    }
    savebutton = () => {
        var item = {};
        if (this.state.masv == "") { item.masv = this.props.object.masv; } else { item.masv = this.state.masv; }
        if (this.state.hoten == "") { item.hoten = this.props.object.hoten; } else { item.hoten = this.state.hoten; }
        if (this.state.diem == "") { item.diem = this.props.object.diem; } else { item.diem = this.state.diem; }
        if (this.state.cmnd == "") { item.cmnd = this.props.object.cmnd; } else { item.cmnd = this.state.cmnd; }
        firebaseData.ref('sinhvien').child(this.props.object.key).update({
            masv: item.masv,
            hoten: item.hoten,
            diem: item.diem,
            cmnd: item.cmnd
        })
        console.log(item);

    }


    render() {
        return (
            <div className="card border-warning">
                <div className="card-header">Edit</div>
                <div className="card-body text-primary">
                    {/* <div className="form-group">                       
                        <input defaultValue={this.props.object.masv} onChange={(event) => this.isChangemasv(event)} placeholder="Ten" type="hidden" name="name" className="form-control" />
                    </div> */}
                   
                    <label>Ho Ten</label>
                        <input defaultValue={this.props.object.hoten} onChange={(event) => this.isChangehoten(event)} placeholder="Ho Ten" type="text" name="tel" className="form-control" />
                   
                 
                    <label>Diem</label>
                        <input defaultValue={this.props.object.diem} onChange={(event) => this.isChangediem(event)} placeholder="Diem" type="text" name="tel" className="form-control" />
                  
                  
                    <label>CMND</label>
                        <input defaultValue={this.props.object.cmnd} onChange={(event) => this.isChangecmnd(event)} placeholder="CMND" type="text" name="tel" className="form-control" />
                        <br></br>
                         <button className="btn btn-warning" onClick={() => this.savebutton()} >Save</button>
                   
                </div>
            </div>
        );
    }
}

export default EditSV;