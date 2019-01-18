import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Login from './Components/login'
import SignUp from './Components/SignUp'
import SplashPage from './Components/SplashPage'
import Action from './actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class RouterComponent extends React.Component {
  render() {
    return (

      <Router style={{ paddingTop: 10 }}>

        <Switch>
          <Route path='/' component={SplashPage} initial />
          <Route path='/login' component={Login} title='please login' />
          <Route path='/signUp' component={SignUp} title='please signUp' />

        </Switch>

      </Router>

    )
  }

}
const mapDispatchToProps = dispatch => bindActionCreators({
  // header

}, dispatch)

export default connect(null, mapDispatchToProps)(RouterComponent)
