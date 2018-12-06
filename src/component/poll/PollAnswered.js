import React, { Component } from 'react'
import { connect } from 'react-redux'

class PollAnswered extends Component {
    render (){
        const { poll, optionOnePerentage, optionTwoPerentage, answeredOptionOne } = this.props;
        return (
            <div>
                <h5>You Have Chose</h5>
                <ul className="list-group">
                    <li className={(answeredOptionOne? "active" : "") + " list-group-item"}>
                        <div>{poll.optionOne.text}</div>
                        <div>{poll.optionOne.votes.length} vote(s) | { optionOnePerentage }</div>
                    </li>
                    <li className={(answeredOptionOne? "" : "active") + " list-group-item"}>
                        <div>{poll.optionTwo.text}</div>
                        <div>{poll.optionTwo.votes.length} vote(s) | { optionTwoPerentage }</div>
                    </li>
                </ul>
            </div>
            
        )
    }
}

const mapStateToProps = ({ users, polls, authedUser }, {pollid})=>{
    if(users[authedUser] && Object.keys(polls).length > 0){

        const answeredOptionOne = users[authedUser].answers[pollid] === "optionOne" ? true : false;

        const poll = polls[pollid]; 
        const optionOneLen = poll.optionOne.votes.length; 
        const optionTwoLen = poll.optionTwo.votes.length; 
        const sum = optionOneLen + optionTwoLen; 
        let optionOnePerentage = sum === 0 ? 0 : optionOneLen/sum; 
        const optionTwoPerentage = Math.floor((1 - optionOnePerentage) * 100) + "%"; 
        optionOnePerentage = Math.floor(optionOnePerentage * 100) + "%"; 
        return {
            authedUser, 
            poll, 
            answeredOptionOne,
            optionOnePerentage, 
            optionTwoPerentage
        }
    }
    return {}
    
}
export default connect(mapStateToProps)(PollAnswered)