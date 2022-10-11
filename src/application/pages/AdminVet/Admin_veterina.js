import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../../../application/App.css";
import SideNavigation from "../../components/SideNavigation/SideNavigation";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
//import SortTable from "../components/Table/SortTable";
import Ockovanie from "../../components/Table/Ockovanie";
import PopupDialog from "../../components/controls/PopupDialog";
import Input from "../../components/controls/Input";

const useStyles = makeStyles((theme) => ({
  headerLogo: {
    cursor: "pointer",
    width: "50px",
    marginRight: "20px",
  },
}));

function Admin_veterina() {
  const classes = useStyles();

  return (
    <>
      <Header style={{ display: "none" }} />
      <div className="container-admin">
        <main id="main-admin">
          <div id="content-admin">
            <div id="ockovanie">
              <div>
                <PopupDialog />
                <Ockovanie />
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="side-navigation">
        <SideNavigation />
      </div>

      <Footer />
    </>
  );
}

export default Admin_veterina;
