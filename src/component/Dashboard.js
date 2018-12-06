import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Dashboard extends Component {

    state = {
        pollSwitch: 'unanswered', 
    }

    setPollType = (type)=>{
        this.setState({
            pollSwitch: type
        })
    }
    render(){
        const polls = this.props[this.state.pollSwitch]
        const pollswitch = this.state.pollSwitch; 
        return(
            <div className="container mt-5">
                <div className="">
                    <button className={(pollswitch === 'unanswered'? 'btn-primary': 'btn-light') + " btn mr-1"} 
                            onClick={()=>{this.setPollType("unanswered")}}>Unanswered</button>

                    <button className={(pollswitch === 'unanswered'? 'btn-light': 'btn-primary') + " btn mr-1"} 
                            onClick={()=>{this.setPollType("answered")}}>Answered</button>
                    
                    <div className="mt-3">
                        <div className="row">
                            {
                                polls.map((poll)=>(
                                    <div className="col-sm-4 mb-3" key={poll.id}>
                                        <div className="card shadow rounded">
                                            <div className="card-body">
                                                <h4 className="card-title">Would you rather</h4>
                                                <p className="card-text">{poll.optionOne.text}</p>
                                                <p className="card-text">{poll.optionTwo.text}</p>
                                                <Link to={"/question/" + poll.id} className="btn btn-warning">See Detail</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({polls, users, authedUser})=>{
    const unanswered = [];
    const answered = []; 
    const key_Users = Object.keys(users); 
    const key_Polls = Object.keys(polls); 
    
    // instead of using filter(), use for..of only loop database once
    if(key_Users.length !== 0) {
        key_Polls.sort((a, b)=>{
            return polls[b].timestamp - polls[a].timestamp; 
        }); 
        key_Polls.forEach((pollid)=>{
            const poll = polls[pollid];
            const usersanswer = Object.keys(users[authedUser].answers);
            if(usersanswer.indexOf(pollid.toString()) !== -1){
                answered.push(poll)
            }else{
                unanswered.push(poll)
            }
        })
    }
    return {
        unanswered, 
        answered, 
        authedUser
    }
}

export default connect(mapStateToProps)(Dashboard)