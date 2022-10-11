import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Content from "./components/Content/Content";
import { Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import TaskManager from "././pages/TaskManager";
import Home from "././pages/Home";
import Costs from "././pages/Costs";
import VetCare from "././pages/VetCare";
import Dashboard_details from "././pages/Dashboard_details";

function App() {
  return (
    <div>
      <div id="wrapper">
        <Header />
        <div className="app-container">
          <main id="main-page">
            <Switch>
              <Route path="/home" component={Home} />
              <Route exact path="/" component={Home} />
              <Route path="/taskManager" component={TaskManager} />
              <Route path="/costs" component={Costs} />
              <Route path="/vetCare" component={VetCare} />
              <Route
                path="/vetCare/dashboard/:id"
                component={Dashboard_details}
              />
            </Switch>
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
