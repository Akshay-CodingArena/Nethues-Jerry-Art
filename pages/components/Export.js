import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const useStyles = makeStyles({
  labelRoot: {
    "&:hover": {
      borderRadius: 4,
      color: "#334f67",
      border: "2px solid #334f67",
    },
  },
});

const Export = () => {
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
      <div>
        <Button
          className={classes.labelRoot}
          sx={{ height: 50 }}
          variant="contained"
          style={{ fontWeight: "bold" }}
        >
          Export Cover Sheet
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default Export;
