//Pagination state will be added in the redux store

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Link from "next/link"
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Collapse } from "@material-ui/core";

const paginate=100;
const styles = theme => ({
  root: {
    width: "100%",
    marginBottom:40,
    marginTop: theme.spacing.unit * 3,
    overflowX: "hidden"
  },
  table: {
    maxWidth: 20000,
  },
  tableRow: {
    "&$hover:hover": {
      backgroundColor: "rgb(44,75,104)"
    }
  },
  clickableCell:{
    "$hover:hover &":{
      textDecoration: "underline",
      cursor:"pointer",
      color:'white',
      cursor:'pointer'
    }
  },
  tableCell: {
    "$hover:hover &": {
      color: "white",
    },
  },
  hover: {}
});



function demoInternationImports(){
  return {
    keys:['Vendor', 'Open POs', 'Invoice Totals', 'Total'],
    data:[['Adria Art', 4,'$3,450', '$34,500'],['Alfi China',4,'$3,450','$34,500']]
  }
}

function demoOpenPurchaseOrders(){
  return {
    keys:['Vendor', 'Open POs', 'Invoice Totals', 'Total'],
    data:[['Adria Art', 4,'$3,450', '$34,500'],['Alfi China',4,'$3,450','$34,500']]
  }
}

function demoWireStatus(){
  return {
    keys:['Vendor', 'PO Number', 'Invoice Number','Actual Ship Date','ETA Port','Invoice Total','Deposit','Balance','Amount to Be Paid','Approval'],
    data:[['Adria Art','HD55052','2144656878978','12/11/2021','12/15/2021','$5,889.78','N/A','$5,889.78','$5,889.78','Needs Approval'],['Adria Art','HD55052','2144656878978','12/11/2021','12/15/2021','$5,889.78','N/A','$5,889.78','$5,889.78','Needs Approval']]
  }
}

function vendorAll(){
  return {
          keys:['Vendor', 'Vendor ID', 'Open POs', 'Total Open Units', 'Total Open Dollars'],
          data:[['Adria Art','009872',4,5320,'$32,450'],['Selmon','009872',4,5320,'$32,450']]
  }
}

function vendorSubTable(){
  return {keys:['PO Number','Date Ordered','Confirmation Reply','Est. Time of Departure','Est. Time of Arrival Port','Est. Delivery to Henderson','HBL/ Tracking','Notes', 'Freight Forwarder', 'Invoice Total USD', 'Invoice Total Euro/ Other Currency'],
          data:[['Adria Art','009872',4,5320,'$32,450'],['Selmon Boi','009872',4,5320,'$32,450']]
}
}


function SimpleTable(props) {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);
  const [openIndex,setOpenIndex] = React.useState(false)
  console.log("My Table",props)
  var data
  if(!props.expand){
    console.log("I'm in")
  if(props.table === 'Wires'){
     data=demoWireStatus()
     console.log("Wires done")
  }
  else if(props.table === "Open Purchase Orders"){
    data = demoOpenPurchaseOrders()
    console.log("Purcahse done")
  }
  else if(props.table === "International Imports"){
    data = demoInternationImports()
    console.log("International done")
  }
}
else{
  data = vendorAll()

}
data=data??vendorAll()
  if(props.page){
    if(data['data'].length>paginate){
    data['data'] = data['data'].slice((props.page-1)*paginate,((props.page)*paginate)+paginate)
    console.log("rows is",rows, props.expanded)
  }
}
  const handleView=(index)=>{
    setOpen(!open)
    setOpenIndex(index)
    console.log(index)
  }
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            { data['keys'].map((title,index)=>(
            <TableCell style={{fontWeight:'bold'}} component="th"  align="left" key={"mainkey"+index}>{title}</TableCell>
              ))}
            {props.expand?<TableCell align="right"></TableCell>:null}
          </TableRow>
        </TableHead>
        <TableBody>
          {data['data'].map((row,index) => (
            <>
            <TableRow
              hover
              key={row[0]}
              classes={{ hover: classes.hover }}
              className={classes.tableRow}
            >
              <TableCell
                style={{fontWeight:'bold'}}
                className={classes.clickableCell}
                component="th"
                scope="row"
            
              >
               <Link href={"/vendor/"+row[0]}>{row[0]}</Link> 
              </TableCell>
              {row.slice(1,row.length).map((row,index)=>
              <TableCell className={classes.tableCell} key={"maindata"+(index+1)} align="left">
                {row}
              </TableCell>
)}
             {   props.expand?<TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => handleView(index)
            }
          >
            {open  ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>: null}
            </TableRow>

            {open && openIndex === index ?           <TableRow>
              <TableCell colSpan={6}><Collapse in={open} timeout="auto" unmountOnExit><Table><TableHead><TableRow>             
              {vendorSubTable()['keys'].map((title,index)=><TableCell style={{fontWeight:'bold'}} key={"subkey"+index}  className={classes.clickableCell}    component="th">{title}</TableCell>)}
              </TableRow>
              </TableHead>
              <TableBody>
              <TableRow>             
              {vendorSubTable()['data'][index+props.page-1].map((title,index)=><TableCell key={"subdata"+index}  className={classes.clickableCell}    component="th">{title}</TableCell>)}
              </TableRow>
              </TableBody>
              </Table></Collapse> </TableCell>
          </TableRow>:null}
           
          </>
              ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);