import { Typography } from "@mui/material"
import myStyle from "../styles/Home.module.css"
import Card from "./components/Card"
import Nav from "./components/Nav"

const Dashboard = ({margin}) => {
    return (
        <>
        <div className={myStyle.container} style={{marginLeft:margin}}>
            <Typography variant="h3" sx={{fontWeight:900}}>Dashboard</Typography>
            <div className={myStyle.card}>
                <Card colorcode="red" title="International Imports" origin="dashboard"/>
                <Card colorcode="green" title="Open Purchase Orders" origin="dashboard"/>
            </div>
            <div className={myStyle.subcontainer}>
            <Card colorcode="grey" title="Wires" origin="dashboard"/>
            </div>
        </div>
        </>
    );
}

export default Dashboard;
