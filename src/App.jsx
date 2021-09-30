
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/styles.css';
import Authlayout from './layouts/Authlayout';
import Privatelayout from './layouts/Privatelayout';
import Publiclayout from './layouts/Publiclayout';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Index from './pages/Index';
import Registro from './pages/Registro';


function App() {
  return (
    <Router>
      <Switch>
        <Route path={['/admin']} >
          <Privatelayout>
            <Switch>
              <Route path='/admin'>
                <Admin />
              </Route>
            </Switch>
          </Privatelayout>
        </Route>
        <Route path={['/login', '/registro']}>
          <Authlayout>
            <Switch>
              <Route path='/login'>
                <Login />
              </Route>
              <Route path='/registro'>
                <Registro />
              </Route>
            </Switch>
          </Authlayout>
        </Route>
        <Route path={['/']}>
          <Publiclayout>
            <Switch>
              <Route path='/'>
                <Index />
              </Route>
            </Switch>
          </Publiclayout>
        </Route>
      </Switch>
    </Router >
  );
};

export default App;
