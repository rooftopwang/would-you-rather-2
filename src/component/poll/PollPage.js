import React, { Component } from 'react'
import { connect } from 'react-redux'
import PollAnswered from './PollAnswered'
import PollToAnswer from './PollToAnswer'
import User from '../general/User.js'
import { Redirect } from 'react-router-dom'

class PollPage extends Component {
    render() {
        const { answered, pollid, notFound} = this.props; 
        
        if (notFound) return <Redirect to='/404' />
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-sm-4 mx-auto mt-5 pt-3">
                        <User userId={this.props.author}/>
                        <div className="card-body px-0">
                            {answered && <PollAnswered pollid={pollid} />}
                            {!answered && <PollToAnswer pollid={pollid} />}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ users, polls, authedUser }, {match})=>{
    const pollid = match.params.pollid; 
    const notFound = Object.keys(polls).indexOf(pollid) === -1 ? true: false; 
    if(!notFound && users[authedUser] && Object.keys(polls).length > 0){
        
        const answeres = users[authedUser].answers; 
        const answered = Object.keys(answeres).indexOf(pollid) !== -1 ? true: false;
        const author = polls[pollid].author;
        return {
            authedUser, 
            answered, 
            pollid,
            author, 
            notFound
        }
    }
    return {
        notFound
    }
    
}

export default connect(mapStateToProps)(PollPage)