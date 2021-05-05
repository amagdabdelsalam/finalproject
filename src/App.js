import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import handleInitialData from './Actions/shared'


import LoadingBar from 'react-redux-loading'
import Nav from './Components/Nav'
import Signing from './Components/Signin'
import TimeLine from './Components/Timeline'
import NewQuestion from './Components/NewQuestion';
import QuestionPage from './Components/QuestionPage'
import LeaderBoard from './Components/LeaderBoard'
import NotFound from './Components/NotFound'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
        <Fragment>
          <LoadingBar />
          <div className="container">
            {
              Object.keys(this.props.users).length === 0
                ? null
                : <Fragment>
                  <Nav />
                  {this.props.authedUser === null ? <Signing users={this.props.users} />
                    : <Fragment>
                      <Switch>
                        <Route path='/' exact component={TimeLine} />
                        <Route path='/add' component={NewQuestion} />
                        <Route path='/questions/:id' component={QuestionPage} />
                        <Route path='/leaderboard' component={LeaderBoard} />
                        <Route component={NotFound} />
                      </Switch>
                    </Fragment>
                  }

                </Fragment>
            }

          </div>
        </Fragment>
    )
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    users,
    authedUser
  }
}
export default connect(mapStateToProps)(App);
