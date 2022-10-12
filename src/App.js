import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css'
import LoginPage from './components/Loginpage'
import Job from './components/Jobpage'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProtectionPage from './components/Protectionpage'
import PageNotFound from './components/Pagenotfound'
import Newjob from './components/Newjob'

// Replace your code here
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <ProtectionPage exact path="/" component={Home} />
      <ProtectionPage exact path="/jobs" component={Job} />
      <ProtectionPage exact path="/jobs/:id" component={Newjob} />
      <ProtectionPage exact path="/not" component={PageNotFound} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
