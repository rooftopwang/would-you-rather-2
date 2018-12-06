import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './general/User'

class Leaderboard extends Component {

    render() {
        const scores = this.props.scores; 
        return (

            <div className="container mt-5">
                <div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">User</th>
                            <th scope="col">Poll Aded</th>
                            <th scope="col">Poll Answered</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                scores && scores.map((score, index)=>(
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td><User userId={score[1].id}/></td>
                                        <td>{score[1].questions.length}</td>
                                        <td>{Object.keys(score[1].answers).length}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
        
    }
}


const mapStateToProps = ({users})=>{
    const scores = Object.keys(users).map((userid)=>{
        const user = users[userid];
        const ans = Object.keys(user.answers).length; 
        const ques = user.questions.length; 
        return [ans + ques, user]
    })
    scores.sort((a,b)=>{
        return b[0] - a[0]
    })
    return {scores}
}
export default connect(mapStateToProps)(Leaderboard)