import logo from "../../assets/codepen.png";
import "./Header.css";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CloudIcon from "@mui/icons-material/Cloud";
import SettingsIcon from "@mui/icons-material/Settings";
import PushPinIcon from "@mui/icons-material/PushPin";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "black",
          height: 65,
          borderBottom: "1px solid #1d1e22",
        }}
      >
        <Toolbar>
          <img
            src={logo}
            alt=""
            width="35px"
            style={{
              color: "white",
              cursor: "pointer",
              marginLeft: -10,
            }}
          />

          <Typography variant="h5" sx={{ flexGrow: 1 }} className="logo-title">
            Code Pen <ModeEditIcon style={{ fontSize: 18 }} />
          </Typography>

          <button className="side-btn fav">
            <FavoriteIcon style={{ fontSize: 18 }} />
          </button>
          <button className="side-btn save">
            <CloudIcon style={{ fontSize: 18, marginRight: 5 }} />
            <span>Save</span>
          </button>
          <button className="side-btn setting">
            <SettingsIcon style={{ fontSize: 20, marginRight: 3 }} />
            <span>Settings</span>
          </button>
          <button className="side-btn pin">
            <PushPinIcon style={{ fontSize: 20 }} />
          </button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
