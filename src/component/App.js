import React, { Component, Fragment } from 'react';
import '../css/index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Login.js'
import Leaderboard from './Leaderboard'
import Dashboard from './Dashboard'
import PollPage from './poll/PollPage'
import AddPoll from './AddPoll'
import Register from './Register'
import NoMatch from './NotFound'
import {handleInitData} from '../action/shared'
import {connect} from 'react-redux'
import Navbar from './general/Navbar'

class App extends Component {
  componentDidMount (){
    this.props.dispatch(handleInitData())
  }
  render() {
    return (
        <BrowserRouter>
          {this.props.logedin ? (
            <Fragment>
                <Navbar />
                <Route exact path="/" component={Dashboard}/>
                <Route exact path="/leaderboard" component={Leaderboard}/>
                <Route exact path="/add" component={AddPoll}/>
                <Route exact path="/question/:pollid" component={PollPage}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/404" component={NoMatch} />
            </Fragment>
          ): (
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route path="/" component={Login}/>
            </Switch>
          )}
        </BrowserRouter>
    );
  }
}


const mapStateToProps = ({authedUser})=>{
  const logedin = Object.keys(authedUser).length === 0? false: true;
  
  return {
    logedin
  }
}
export default connect(mapStateToProps)(App);
