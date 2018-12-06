import React, { Component } from 'react'
import { connect } from 'react-redux'

class User extends Component {

    render(){
        const { users, userId } = this.props; 
        return (
            <div className="media userPageUser">
                <img className="mr-3 rounded" src={users[userId].avatarURL} alt={userId} />
                <div className="media-body">
                    <h5 className="mt-0">{users[userId].name}</h5>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({users})=>{
    return {
        users
    }
}
export default connect(mapStateToProps)(User)