import React from "react";
import "../../application/App.css";
import SideNavigation from "../components/SideNavigation/SideNavigation";
import Footer from "../components/Footer/Footer";

function Admin_naklady() {
  return (
    <>
      <header className="header-docaskuj-admin">
        <div>
          <h1 className="header-motto">Dočasky zachraňujú životy.</h1>
        </div>
      </header>

      <div className="container-admin">
        <main id="main-admin">
          <div id="content-admin">
            <p>Zadaj data pre naklady</p>
          </div>
        </main>
      </div>

      <div side-navigation-menu>
        <SideNavigation />
      </div>
      <Footer />
    </>
  );
}

export default Admin_naklady;
