import { useReducer, useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import './App.css';
import Signin from './components/user/Signin';
import {reducer} from './reducers/app/reducer'
import {initialState} from './reducers/app/state'
import Actions from './reducers/app/actions'
import context from './reducers/app/context'
import Dashboard from './components/dashboard/Dashboard';
import Api from './api/api';
import Alert from './components/alert/Alert';
import Loading from './components/loader/Loading';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [api] = useState(new Api())
  const actions = new Actions(dispatch)

  const newAlert = text => {
    actions.alerts([...state.alerts, text])
  }

  const unmountAlert = index => {
    const dupArray = state.alerts
    dupArray.splice(index, 1)
    actions.alerts(dupArray)
  }

  const contextValue = {
    appState: state,
    appActions: actions,
    newAlert,
    api
  }
  return (
    <context.Provider value={contextValue}>
      <div className="App">
        {state.loading && <Loading/>}
        {state.alerts.map((e, i) => <Alert key={i + " " + e} data={{text: e, index: i}} unmountAlert={unmountAlert}/>)}
        <Router>
          <Switch>
            <Route exact path="/">{state.loggedIn ? <Dashboard/> : <Redirect to="/signin"/> }</Route>
            <Route path="/signin">{state.loggedIn ? <Redirect to="/"/> : <Signin/> }</Route>
          </Switch>
        </Router>
      </div>
    </context.Provider>
  );
}

export default App;
