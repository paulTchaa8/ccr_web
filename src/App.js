import { Route, Switch, BrowserRouter } from 'react-router-dom'
import ManageRegistration from './components/ManageRegistration'
import ManageConnexion from './components/ManageConnexion'
import ManageForgotPassword from './components/ManageForgotPassword'
import ManageResetPassword from './components/ManageResetPassword'
import Dashboard from './components/Dashboard/Dashboard'
import ManageMessage from './components/Dashboard/ManageMessage'
import ManageProfile from './components/Profil/ManageProfile'
import SolrSearch from './components/Solr/SolrSearch'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div>
      <ToastContainer position="top-center" autoclose={1500} hideProgressBar={false} />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/register" component={ManageRegistration} />
          <Route path="/login" component={ManageConnexion} />
          <Route path="/forgot-password" component={ManageForgotPassword} />
          <Route path="/reset-password" component={ManageResetPassword} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/messages" component={ManageMessage} />
          <Route path="/profile/me" component={ManageProfile} />
          <Route path="/solr/search" component={SolrSearch} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
