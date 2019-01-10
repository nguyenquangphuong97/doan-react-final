import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link,NavLink,Redirect} from 'react-router-dom';
import {firebaseData} from '../firebaseConnect.js'
import swal from 'sweetalert';
import { log } from 'util';
import { exists } from 'fs';
import TrangChuForm from './TrangChuForm.js';
import TrangChu from './Trangchu.js'
class Dangnhap extends Component {
    constructor(props) {
        super(props);
        this.state={
            dataFromFirseBase:[],
            id: '',
          pass: ''
        }
        

    }

    isChange=(event)=>{
       var name=event.target.name;
       var value = event.target.value;
     
        console.log(name);
        console.log(value);   
        this.setState({
                id:value

        }) 
    
    }
        isChangep=(event)=>{
        //    var name=event.target.name;
            var value = event.target.value;
          
           //  console.log(name);
           //  console.log(value);   
             this.setState({
                     pass:value
     
             }) 
            }
        
   componentWillMount() { // thuc hien troc khi render        
    firebaseData.ref('admin').on('value',(admins )=>{
        var arrayData= [];
        admins.forEach(element => {
            const key=element.key;
            const id=element.val().id;
            const pass=element.val().pass;
            arrayData.push({
                key:key,
                id:id,
                pass:pass
            })  
            });
            this.setState({
                dataFromFirseBase:arrayData               
        });            
    })
    }
    
    checkLogin=()=>{
        var f=0;
        firebaseData.ref('admin').on('value',(admins )=>{
            var arrayData= [];
            admins.forEach(element => {
                const key=element.key;
                const id=element.val().id;
                const pass=element.val().pass;
                const role=element.val().role;

                if(this.state.id==id && this.state.pass==pass){ 
                    
                    window.location="/trangchu";
                    localStorage.setItem('User', this.state.id);
                    localStorage.setItem('role',role);
                    localStorage.setItem('key',key);

                    f=1;
                }
                
                arrayData.push({
                    key:key,
                    id:id,
                    pass:pass
                })  
                });
            

                  
                        
        })
        if(f==0) swal("Oops...", "ID HOAC ", "error");
      
       
    
    }

    render() {
        var a=localStorage.getItem('User');
        if(a==null)
        return (
            <div>
                <div>
                    <h2 className="display-4" style={{ textAlign: 'center' }}>Trang Đăng Nhập</h2>
                </div>
            
             
                <div className="w3-display-container w3-green">
                    <div className="row">
                        <div className="col-sm-4 push-sm-3" style={{ margin: 'auto' }}>
                            <label>ID</label>
                            <input  onChange={(event)=>this.isChange(event)} className="form-control"  name="id"/>
                            <label>Pass</label>
                            <input type="password" onChange={(event)=>this.isChangep(event)} className="form-control" name="pass" /><br></br>
                                                   
                            <button onClick={()=>this.checkLogin()}   className="btn btn-primary float-right">Login</button>
                            
                        </div>
                        
                    </div>  
                </div>
            
            
            </div>

        );
        else
        {
            window.location="/trangchu";
        }
    }
}

export default Dangnhap;
