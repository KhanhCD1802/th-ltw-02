import React from "react";
import { Typography } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import "./styles.css";
import models from "../../modelData/models";

function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);

  if (!user) return <Typography variant="body1">User not found.</Typography>;

  return (
    <div>
      <Typography variant="h5">{user.first_name} {user.last_name}</Typography>
      <Typography><b>Location:</b> {user.location}</Typography>
      <Typography><b>Occupation:</b> {user.occupation}</Typography>
      <Typography><b>Description:</b> {user.description}</Typography>
      <Typography style={{ marginTop: 10 }}>
        <Link to={`/photos/${userId}`}>View photos of {user.first_name}</Link>
      </Typography>
    </div>
  );
}
export default UserDetail;
