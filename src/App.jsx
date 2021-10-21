
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/styles.css';
import Authlayout from './layouts/Authlayout';
import Privatelayout from './layouts/Privatelayout';
import Publiclayout from './layouts/Publiclayout';
import Login from './pages/Login';
import Admin from './pages/admin/Index';
import Index from './pages/Index';
import Registro from './pages/Registro';
import Zapatillas from './pages/admin/Zapatillas';
import Perfil from './pages/admin/Perfil';
import Ventas from './pages/admin/Ventas';
import Usuarios from './pages/admin/Usuarios';
import { Auth0Provider } from '@auth0/auth0-react';


function App() {
  return (
  <Auth0Provider
  domain="dev-34tpn-g9.us.auth0.com"
  clientId="GZcGDT45h4m1vKY1PRTDTjtzCQtZe7fb"
  redirectUri="http://localhost:3000/admin"
  audience="api-autenticacion-zapatillas">
    <div className='App'>
    <Router>
      <Switch>
        <Route path={['/admin', '/admin/zapatillas', '/admin/Perfil', '/admin/Ventas', '/admin/Usuarios']}>
          <Privatelayout>
            <Switch>
              <Route path='/admin/zapatillas'>
                <Zapatillas />
              </Route>
              <Route path='/admin/Perfil'>
                <Perfil />
              </Route>
              <Route path='/admin/Ventas'>
                <Ventas />
              </Route>
              <Route path='/admin/Usuarios'>
                <Usuarios />
              </Route>
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
        </Route >
      </Switch>
    </Router >
    </div>
  </Auth0Provider> 
  );
}



export default App;