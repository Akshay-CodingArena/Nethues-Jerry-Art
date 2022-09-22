import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import style from "../../styles/Home.module.css";
import Table from "./Table";

export default function MediaCard(props) {
  let expand = false;
  if (props.origin === "vendor" || props.origin === "open purchase orders") {
    expand = true;
  }

  return (
    <div style={{ flexGrow: "1" }}>
      <Card sx={{ maxWidth: "100%" }}>
        <div className={style.flex}>
          <div
            className={style.color}
            style={{ backgroundColor: props.colorcode }}
          ></div>
          <h2 className={style.colorTitle}>{props.title}</h2>
        </div>
        <div className={style.cardContent}>
          {expand ? (
            <Table page={props.page} expand={expand} table={props.title} />
          ) : props.origin === "dashboard" ? (
            <Table table={props.title} />
          ) : (
            <Table />
          )}
        </div>
      </Card>
    </div>
  );
}
