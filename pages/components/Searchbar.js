import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  labelRoot: {
    "&:hover": {
      borderRadius: 4,
      color: "#334f67",
      border: "2px solid #334f67",
    },
  },
});
export default function FreeSolo() {
  let theme = createTheme({
    palette: {
      primary: {
        light: "#ffa726",
        main: "#334f67",
        dark: "#ced4da",
      },
    },
  });
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: "flex" }}>
        <input
          style={{ height: "48px", width: "483px" }}
          placeholder="Search Vendors"
        />
        <Button
          style={{
            height: "48px",
            width: "136px",
            fontWeight: "bold",
            borderRadius: "0px 15px 15px 0px",
          }}
          variant="contained"
          color="primary"
          className={classes.labelRoot}
        >
          Search
        </Button>
      </div>
    </ThemeProvider>
  );
}
