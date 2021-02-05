import logo from './logo.svg';
import './App.css';
import Home from './components/home'
import Student from './components/student'
import NotFound from './components/not-found'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers'
import promiseMW from 'redux-promise'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import   StudentDetails    from './container/studentDetails'
const createStoreWithMW = applyMiddleware(promiseMW)(createStore)
function App() {
  return (
    <div className="App">
        <Provider store={createStoreWithMW(reducers)}>
          <BrowserRouter>
              <div className="container-fluid">
                <Switch>
                  <Route exact path='/' component={Home}></Route>
                  <Route path='/students/:id' component={StudentDetails}></Route>
                  <Route path='*' component={NotFound}></Route>
                </Switch>
              </div>
          </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
