import { MenuItem } from "@mui/material";
import React from "react";
import { MenuItemsProps } from "../../utils/interfaceTypes";

const MenuItems: React.FC<MenuItemsProps> = ({ text, onClick }) => {
  return <MenuItem onClick={onClick}>{text}</MenuItem>;
};

export default MenuItems;
