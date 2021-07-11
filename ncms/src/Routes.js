import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './App';
import Hospitals from "./pages/Hospitals";
import PatientAdmission from "./pages/PatientAdmission";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";


const Routes = () => {
  return (
    <BrowserRouter basename="ncms">
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/hospitals" exact component={Hospitals} />
        <Route path="/patientadmission" exact component={PatientAdmission} />
        <Route path="/login" exact component={Login} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
