import React from "react";
import DeskHeader from "./DeskHeader/DeskHeader";
import ColumnHeader from "./ColumnHeader/ColumnHeader";
import CardHeader from "./CardHeader/CardHeader";
import DefaultHeader from "./DefaultHeader/DefaultHeader";

const Header = ({ screen, navigation, params }) => {
  switch (screen) {
    case "DeskScreen":
      return <DeskHeader navigation={navigation} />;
    case "ColumnScreen":
      return <ColumnHeader params={params} navigation={navigation} />;
    case "CardScreen":
      return <CardHeader params={params} navigation={navigation} />;
    case "AuthScreen":
      return null;
    default:
      return <DefaultHeader navigation={navigation} />;
  }
};

export default Header;
