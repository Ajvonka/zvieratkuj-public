import { Link } from "react-router-dom";
import { SideNavigationData } from "./SideNavigationData";
import "./SideNavigation.css";
import Logo from "../../images/Logo.png";

function SideNavigation() {
  return (
    <nav className="side-navigation-menu">
      <ul className="side-navigation-menu-items">
        <li className="side-navigation-toggle">
          <img
            className="header-logo-admin"
            src={Logo}
            alt="Logo"
            onClick={() => window.open("https://zvieratkuj.sk/", "_blank")}
          ></img>
        </li>
        {SideNavigationData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default SideNavigation;
