import {Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
)

export default App
