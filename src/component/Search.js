import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempvalue: this.props.datafirebase
        }
    }

    //this.props.checkConnectProps
    isChange = (event) => { //get gia tri tu form 
        // console.log(event.target.value);
        var value = event.target.value;
      this.state.tempvalue=value;
        console.log(this.state.tempvalue);
        this.props.search(this.state.tempvalue);//live search
    }
    tenham= (event) => {
        var value = event.target.value;

        console.log(value);
    }
    render() {
        return (
            <div className="row">

                <div className="col-md-9">
                    <div className="form-group">
                        <input placeholder="Search" type="text" onChange={(event) => this.isChange(event)} className="form-control" name="" />
                        {/* <button onClick={(dl) => this.props.getProps(this.state.temvalue)} className="btn btn-primary" type="button">Search</button> */}
                    </div>
                </div>
                
            </div>

        );
    }
}

export default Search;