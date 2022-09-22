import { Button, Card, TableCell, TableRow } from "@material-ui/core";
import React from "react";
import style from "../styles/Home.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import Table from "@mui/material/Table";
import Mystyle from "../styles/Login.module.css";
const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
        rel="stylesheet"
      />

      <Card className={style.login} sx={{ maxWidth: "100%" }}>
        <h2 className={style.cardMargin}>
          Sequential Operational Networking Guardian
        </h2>
        <div className={style.flex}>
          <div className={style.color} style={{ backgroundColor: "red" }}></div>
          <h2 className={style.colorTitle}>Login</h2>
        </div>
        <div className={style.cardContent}>
          <button className={Mystyle.loginButton}>Login</button>
        </div>
        <Link href="/forgotpassword">
          <h4 className={Mystyle.forgotPassword}>forgot password</h4>
        </Link>
      </Card>
    </div>
  );
};

export default Login;
