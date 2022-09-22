import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "../Assets/Menu.png";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Dashboard from "../dashboard";
import Link from "next/link";
import Vendors from "../vendors";
import styles from "../../styles/Home.module.css";

const drawerWidth = "25vw";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft(props) {
  console.log("activePage", props);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  console.log("state", open);

  const handleNavigate = (text) => {
    console.log(text);
    setPage(text);
  };

  console.log("Menu", MenuIcon);

  return (
    <Box sx={{ display: "flex" }}>
      <div
        className={styles.drawer}
        style={{
          // /*
          position: "sticky",
          top: "-331px",
          marginTop: "2px",
          height: "calc((231px + 100vh))",
          backgroundColor: "white",
          width: "110px",
          //   */
          /*
          position: "absolute",
          top: "131px",
          height: "calc((131px + 100%))",
          backgroundColor: "white",
          width: "110px",
            */
        }}
      >
        <Toolbar>
          <img
            onClick={handleDrawerOpen}
            style={{ marginTop: "40px", marginLeft: "10px" }}
            className={styles.drawerIcon}
            src={MenuIcon.src}
          />
        </Toolbar>

        <Drawer
          className={styles.drawerOpen}
          PaperProps={{
            sx: {
              width: drawerWidth,
              position: "absolute",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {[
              "Dashboard",
              "Vendors",
              "International Imports",
              "Wire Status",
              "Open Purchase Orders",
            ].map((text, index) => (
              <Link href={{ pathname: "/page/" + text.toLowerCase() }}>
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    {text == "Wire Status" ? (
                      <ListItemText
                        style={{ marginLeft: "40px" }}
                        primary={text}
                      />
                    ) : (
                      <ListItemText primary={text} />
                    )}
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
      </div>
      <div></div>
      {props.activePage === "vendors" ? (
        open ? (
          <Vendors margin={drawerWidth} />
        ) : (
          <Vendors margin={"27px"} />
        )
      ) : null}
      {props.activePage === "dashboard" ? (
        open ? (
          <Dashboard margin={drawerWidth} />
        ) : (
          <Dashboard margin={"27px"} />
        )
      ) : null}
    </Box>
  );
}
