import React, {Component} from 'react'
import {connect} from 'react-redux'
import { register } from '../action/shared'
import { bindActionCreators } from 'redux'


class Register extends Component {
    state = {
        firstname: "", 
        lastname: "",
        avatarURL: "",
        redirect: "false"
    }

    handleInput = (e, input)=>{
        const value = e.target.value; 
        this.setState({
            [input]: value
        })
    }

    createNewUser = ()=>{
        const {firstname, lastname, avatarURL} = this.state; 
        if(firstname !== "" && lastname !== "") {
            this.props.register(firstname, lastname, avatarURL);
            const { history } = this.props;
            history.push('/'); 
        }
        
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-sm-4 mx-auto mt-5 pt-3 pb-3">
                        <div className="card-body ">
                            <h1>Register</h1>
                            <div className="form-group">
                                <label>First Name</label>
                                <input onChange={(e)=>{this.handleInput(e, "firstname")}} type="firstname" className="form-control" id="firstname" placeholder="First Name" />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input onChange={(e)=>{this.handleInput(e, "lastname")}} type="lastname" className="form-control" id="lastname" placeholder="Last Name" />
                            </div>
                            <div className="form-group">
                                <label>Avatar URL</label>
                                <input onChange={(e)=>{this.handleInput(e, "avatarURL")}} type="avatarURL" className="form-control" id="avatarURL" placeholder="Avatar URL" />
                            </div>
                            <button className="btn btn-primary btn-block" onClick={this.createNewUser}>LOGIN</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        register: bindActionCreators(register, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Register)