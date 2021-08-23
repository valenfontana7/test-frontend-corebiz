import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="*">
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
    </Router>
  )
}
