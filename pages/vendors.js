import Card from "./components/Card";
import Pagination from "./components/Pagination";
import { Typography } from "@mui/material";
import myStyle from "../styles/Home.module.css";
import Searchbar from "./components/Searchbar";
import Selectlist from "./components/SelectList";
import Filter from "./components/Filter";
import Export from "./components/Export";
import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

export default ({ margin }) => {
  const [page, setPage] = React.useState(1);
  let theme = createTheme({
    palette: {
      primary: { main: "rgb(44, 75, 104)" },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className={myStyle.container} style={{ marginLeft: margin }}>
        <div className={myStyle.flex}>
          <Typography variant="h3" sx={{ fontWeight: 900 }}>
            Vendors{" "}
          </Typography>{" "}
          <div style={{ position: "absolute", right: "5px" }}>
            <Export />
          </div>
        </div>
        <div style={{ marginTop: "50px" }} className={myStyle.flex}>
          <Searchbar /> <Selectlist />
          <Filter />
        </div>
        <div className={myStyle.subcontainer}>
          <Card
            colorcode="red"
            title="All Vendors"
            page={page}
            origin={"vendor"}
          />
        </div>
        <Pagination setPage={setPage} page={page} />
      </div>
    </ThemeProvider>
  );
};
