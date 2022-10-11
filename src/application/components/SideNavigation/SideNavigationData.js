import React from "react";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import * as RiIcons from "react-icons/ri";

export const SideNavigationData = [
  {
    title: "Veterina",
    path: "/admin/veterina",
    icon: <GiIcons.GiLoveInjection />,
    cName: "side-navigation-text",
  },
  {
    title: "Dočasniatka",
    path: "/admin/docasniatka",
    icon: <FaIcons.FaDog />,
    cName: "side-navigation-text",
  },
  {
    title: "Náklady",
    path: "/admin/naklady",
    icon: <RiIcons.RiMoneyEuroCircleLine />,
    cName: "side-navigation-text",
  },
  {
    title: "Home",
    path: "/domov",
    icon: <FaIcons.FaHome />,
    cName: "side-navigation-text",
  },
];
