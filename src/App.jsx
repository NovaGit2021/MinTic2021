
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/styles.css';
import Authlayout from './layouts/Authlayout';
import Privatelayout from './layouts/Privatelayout';
import Publiclayout from './layouts/Publiclayout';
import Login from './pages/Login';
import Admin from './pages/admin/Index';
import Index from './pages/Index';
import Registro from './pages/Registro';
import Vehiculos from './pages/admin/Vehiculos';
import Clientes from './pages/admin/Clientes';


function App() {
  return (
    <Router>
      <Switch>
        <Route path={['/admin', '/admin/vehiculos','/admin/clientes']} >
          <Privatelayout>
            <Switch>
              <route path='/admin/vehiculos'>
                <Vehiculos/>
                               

              </route>
              <route path='/admin/clientes'>
               <Clientes/> 
              </route>
              
             
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
