import React from "react";
import { List, ListItem, ListItemText, Divider, ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";
import "./styles.css";
import models from "../../modelData/models";

function UserList() {
  const users = models.userListModel() || [];
  return (
    <div>
      <List component="nav">
        {users.map((u) => (
          <div key={u._id}>
            <ListItem disablePadding>
              <ListItemButton component={Link} to={`/users/${u._id}`}>
                <ListItemText primary={`${u.first_name} ${u.last_name}`} />
              </ListItemButton>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );
}
export default UserList;
