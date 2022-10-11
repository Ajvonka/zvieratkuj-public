import { Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import TaskManager from "../../pages/TaskManager";
import Home from "../../pages/Home";
import Costs from "../../pages/Costs";
import VetCare from "../../pages/VetCare";
import Dashboard_details from "../../pages/Dashboard_details";

function Content() {
  return (
    <Router>
      <Route exact path="/home" component={Home} />
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route exact path="/taskManager" component={TaskManager} />
      <Route exact path="/costs" component={Costs} />
      <Route exact path="/admin">
        <Redirect to="/admin/veterina" />
      </Route>
      <Route exact path="/vetCare" component={VetCare} />
      <Route
        exact
        path="/vetCare/dashboard/:id"
        component={Dashboard_details}
      />
    </Router>
  );
}

export default Content;
