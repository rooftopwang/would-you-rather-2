import React, {Component} from 'react'
import {connect} from 'react-redux'
import { authedUserLogin } from '../action/authedUser'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

class Login extends Component {

    state = {
        userChosenId : ""
    }
    selectUser = (event)=>{
        const value = event.target.value; 
        this.setState({userChosenId: value})
    }

    handleSubmit = ()=>{
        const id = this.state.userChosenId; 
        if(id !== "") this.props.letUserLogin(id); 
    }
    render () {

        
        return (
            <div className="loginPage text-left mt-5">
                <h1>Would You Rather</h1>
                <select className="custom-select custom-select mb-3" onChange={this.selectUser}>
                    <option value="none">Select User To Login</option>
                    {
                        this.props.users && Object.keys(this.props.users).map((username)=>{
                            const user = this.props.users[username];
                            return (
                                <option value={user.id} key={user.id}>{user.name}</option>
                            )
                        })
                    }
                </select>
                <p><Link to="/register">Register a New User</Link></p>
                <button className="btn btn-primary" onClick={(e)=>{this.handleSubmit()}}>LOGIN</button>


            </div>
        )
    }
}

const mapStateToProps = ({users}) => {
    return {users: users}
}
const mapDispatchToProps = (dispatch)=>{
    return {
        letUserLogin: bindActionCreators(authedUserLogin, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)