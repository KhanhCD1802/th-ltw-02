import React from "react";
import { Typography } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import "./styles.css";
import models from "../../modelData/models";

const req = require.context("../../images", false, /\.(png|jpe?g|gif)$/);
const imgSrc = (fileName) => {
  try { return req(`./${fileName}`); } catch { return ""; }
};

function UserPhotos() {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId) || [];

  if (!photos.length) return <Typography>This user has no photos.</Typography>;

  return (
    <div>
      {photos.map((p) => (
        <div key={p._id} style={{ marginBottom: 24 }}>
          <img src={imgSrc(p.file_name)} alt="" width="300" />
          <Typography variant="caption" display="block">{p.date_time}</Typography>

          {(p.comments || []).map((c) => (
            <div key={c._id} style={{ marginTop: 6 }}>
              <Typography variant="caption" display="block">{c.date_time}</Typography>
              <Typography variant="body2">
                <Link to={`/users/${c.user._id}`}>
                  {c.user.first_name} {c.user.last_name}
                </Link>
                {": "}{c.comment}
              </Typography>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
export default UserPhotos;
