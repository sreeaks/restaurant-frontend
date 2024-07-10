import './App.css';
import './index.css';
import Nav from './components/Nav';
import Login from './components/Login';
import LoginFail from './components/LoginFail';
import Register from './components/Register';
import RegisterFail from './components/RegisterFail';
import Reserve from './components/Reserve';
import Fee from './components/Fee';
import FeeFail from './components/FeeFail';
import Home from './components/Home';
import ThankYou from './components/ThankYou';
import Reserve2 from './components/Reserve2';
import PromptGuest from './components/PromptGuest';
import AdminLogin from './components/AdminLogin';
import AdminRegister from './components/AdminRegister';
import AdminDashboard from './components/AdminDashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Logout from './components/Logout';
// npm install react-router-dom@5.2.0

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <div className='App-contents'>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/home" exact component={Home} />
              <Route path="/reserve" exact component={Reserve} />
              <Route path="/login" exact component={Login} />
              <Route path="/login-fail" exact component={LoginFail} />
              <Route path="/register" exact component={Register} />
              <Route path="/register-fail" exact component={RegisterFail} />
              <Route path="/fee" exact component={Fee} />
              <Route path="/fee-fail" exact component={FeeFail} />
              <Route path="/thank-you" exact component={ThankYou} />
              <Route path="/reserve2" exact component={Reserve2} />
              <Route path="/prompt-guest" exact component={PromptGuest} />
              <Route path="/admin/login" exact component={AdminLogin} />
              <Route path="/admin/register" exact component={AdminRegister} />
              <Route path="/admin/dashboard" exact component={AdminDashboard} />
              <Route path="/logout" exact component={Logout} />
            </Switch>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
