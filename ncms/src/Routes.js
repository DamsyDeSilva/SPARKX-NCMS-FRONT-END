import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './App';
import Hospitals from "./pages/Hospitals";
import PatientAdmission from "./pages/PatientAdmission";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Stats from "./pages/Stats";
import Discharge from "./pages/Discharge";


const Routes = () => {
  return (
    <BrowserRouter basename="ncms">
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/login" exact component={Login} />
        <Route path="/hospitals" exact component={Hospitals} />
        <Route path="/patientadmission" exact component={PatientAdmission} />
        <Route path="/patientdischarge" exact component={Discharge} />
        <Route path="/stats" exact component={Stats} />
        
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
