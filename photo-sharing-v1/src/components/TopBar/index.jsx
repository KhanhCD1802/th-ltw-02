import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import "./styles.css";
import models from "../../modelData/models";

function TopBar() {
  const { pathname } = useLocation();
  let rightText = "Photo sharing app";

  if (pathname.startsWith("/photos/")) {
    const id = pathname.split("/")[2];
    const u = models.userModel(id);
    if (u) rightText = `Photos of ${u.first_name} ${u.last_name}`;
  } else if (pathname.startsWith("/users/")) {
    const id = pathname.split("/")[2];
    const u = models.userModel(id);
    if (u) rightText = `${u.first_name} ${u.last_name}`;
  } else if (pathname === "/users") {
    rightText = "User list";
  }

  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Cao Dang Khanh</Typography>
        <Typography variant="h6">{rightText}</Typography>
      </Toolbar>
    </AppBar>
  );
}
export default TopBar;
