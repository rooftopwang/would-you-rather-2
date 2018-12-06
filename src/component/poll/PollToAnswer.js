import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveQuestionAnswer } from '../../action/shared'
import { bindActionCreators } from 'redux'

class PollToAnwser extends Component {
    saveAnswer = (answer)=>{
        this.props.saveQuestionAnswer(this.props.pollid, answer)
    }
    render (){

        return (
            <div>
                <h5>Would You Rather</h5>
                <div>
                    <button className="btn btn-primary btn-block" onClick={(e)=>{this.saveAnswer("optionOne")}}>
                        {this.props.OptionOneText}
                    </button>
                    <button className="btn btn-primary btn-block" onClick={(e)=>{this.saveAnswer("optionTwo")}}>
                        {this.props.OptionTwoText}
                    </button>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = ({ polls, authedUser }, {pollid})=>{
    return {
        OptionOneText: polls[pollid].optionOne.text, 
        OptionTwoText: polls[pollid].optionTwo.text,
        authedUser,
        pollid
    }    
}

const mapDispatchToProps = (dispatch)=>{
    return {
        saveQuestionAnswer: bindActionCreators(saveQuestionAnswer, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PollToAnwser)