import React, { Component } from 'react';

class Filter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tempvalue: ""
        }
    }
    
    isChange = (event) => { //get gia tri tu form 
        // console.log(event.target.value);
        var value = event.target.value;
        this.state.tempvalue=value;
        console.log(this.state.tempvalue);
        this.props.filter(this.state.tempvalue);//live search

    }

    render() {
        return (
            
                <select className="form-control" style={{width: '30%'}} onChange={(event)=>this.isChange(event)}>
<option value="tatca">Tất cả</option>

<option value="dathutien">Đã thu tiền</option>
<option value="dathuhoso">Đã thu hồ sơ</option>
<option value="chuadaydu">Chưa đầy đủ</option>
</select>
            
        );
    }
}

export default Filter;