import React from "react";
import "../../application/App.css";
import SideNavigation from "../components/SideNavigation/SideNavigation";
import Footer from "../components/Footer/Footer";
import ChartDonut from "../components/ChartDonut";

function Admin() {
  return (
    <>
      <header className="header-docaskuj-admin">
        <div></div>
      </header>

      <div className="container-admin">
        <main id="main-admin">
          <div id="content-admin"></div>
        </main>
      </div>

      <div side-navigation-menu>
        <SideNavigation />
      </div>
      <ChartDonut />
      <Footer />
    </>
  );
}

export default Admin;
