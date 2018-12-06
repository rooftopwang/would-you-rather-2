import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {authedUserLogout} from '../../action/authedUser'
import User from './User.js'

class Navbar extends Component {
    logout = (e)=>{
        e.preventDefault(); 
        this.props.logout();
    }
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/somewhere">Would You Rather</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/somewherenavbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/add">Add Poll</Link>
                    </li>
                    
                    <li className="nav-item">
                        <button className="nav-link" onClick={this.logout}>Logout</button>
                    </li>
                    <li className="nav-item navUser">
                        <User userId={this.props.authedUser}/>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        logout: ()=>{
            dispatch(authedUserLogout())
        }
    }
}

const mapStateToProps = ({authedUser})=>{
    return {
        authedUser
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)