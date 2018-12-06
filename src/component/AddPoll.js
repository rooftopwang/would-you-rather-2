import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { saveQuestion } from '../action/shared.js'

class AddPoll extends Component {

    state = {
        OptionOne: "", 
        OptionTwo: ""
    }

    updateStateOption = (event, option)=>{
        const value = event.target.value; 
        this.setState({
            [option]: value
        })
    }

    addPollToState = ()=>{
        const { OptionOne, OptionTwo } = this.state; 
        this.props.saveQuestion( OptionOne, OptionTwo )

        const { history } = this.props;
        history.push('/');
    }

    render() {
        return (
            <div className="container">
                <div className="card col-sm-5 mx-auto mt-5">
                    <div className="card-body">
                        <h5 className="card-title">Would You Rather</h5>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Option One</span>
                            </div>
                            <input type="text" className="form-control" value={this.state.OptionOne} onChange={(e)=>{this.updateStateOption(e, 'OptionOne')}}/>
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Option Two</span>
                            </div>
                            <input type="text" className="form-control" value={this.state.OptionTwo} onChange={(e)=>{this.updateStateOption(e, 'OptionTwo')}}/>
                        </div>
                        <button className="btn btn-primary btn-block" onClick={this.addPollToState} >Submit</button>
                    </div>
                </div>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        saveQuestion: bindActionCreators(saveQuestion, dispatch)
    }
}
export default connect(null, mapDispatchToProps)(AddPoll)