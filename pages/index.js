import React , {useState} from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles , useTheme} from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AddIcon from "@material-ui/icons/Add";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { FormControl } from "@material-ui/core";
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import FilterListIcon from "@material-ui/icons/FilterList";

const useStyles= makeStyles(theme => {});

function createData(name,date,service,features,complexity,platforms,users,total) {
  return {name,date,service,features,complexity,platforms,users,total};
}

export default function ProjectManager() {
  const classes = useStyles();
  const theme = useTheme();
  const [rows , setRows] = useState([
    createData("Apoorva Jakati", "23/07/20","Website","E-Commerce","N/A","N/A","N/A","$1500"),
    createData("Bill Gates", "29/08/20","Custom Software","GPS,PushNotifications,Users/Authentication,FileTranfer",
    "Medium","WebApplication","0-10","$1800"),
    createData("Steve Jobs", "13/07/22","Custom Software","Photo/Video,File Transfer,Users/Authentication",
    "Low","Web Application","10-100","$1250")
  ]);

  const [websiteChecked , setWebsiteChecked] = useState(false);
  const [iOSChecked , setIosChecked] = useState(false);
  const [androidChecked , setAndroidChecked] = useState(false);
  const [customSoftwareChecked , setCustomSoftwareChecked] = useState(false);

  return <Grid container direction="column">
            <Grid item style={{marginTop : "2em" , marginLeft : "5em"}}>
            <Typography variant="h1">Projects</Typography>
            </Grid>

            <Grid>
              <TextField 
              placeholder="Search Project Details or create new entry"
              style={{width : "35em" , marginLeft : "5em"}}
              InputProps={{
                endAdornment : (
                <InputAdornment position="end">
                <AddIcon color="primary" style={{fontSize : 30}}/></InputAdornment>)
              }} 
              />
            </Grid>

            <Grid item style={{marginLeft : "5em" , marginTop : "2em"}}>
              <FormGroup row>
                <FormControlLabel style={{marginRight : "5em"}} control={<Switch checked={websiteChecked} 
                color="primary" onChange={() => setWebsiteChecked(!websiteChecked)}/>} 
                label="Websites" labelPlacement="start" />
                <FormControlLabel style={{marginRight : "5em"}} control={<Switch checked={iOSChecked} 
                color="primary" onChange={() => setIosChecked(!iOSChecked)}/>} 
                label="iOS Apps" labelPlacement="start" />
                <FormControlLabel style={{marginRight : "5em"}} control={<Switch checked={androidChecked} 
                color="primary" onChange={() => setAndroidChecked(!androidChecked)}/>} 
                label="Android Apps" labelPlacement="start" />
                <FormControlLabel control={<Switch checked={customSoftwareChecked} 
                color="primary" onChange={() => setCustomSoftwareChecked(!customSoftwareChecked)}/>} 
                label="Custom Software" labelPlacement="start" />
              </FormGroup>
            </Grid>  

              <Grid item container justify="flex-end" style={{marginTop : "5em"}}>
                <Grid item style={{marginRight : 75}}>
                <FilterListIcon color="secondary" style={{fontSize : 50}}/>
                </Grid>
              </Grid>

              <Grid item style={{marginBottom : "15em"}}>
                <TableContainer component={Paper} elevation={0}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Date</TableCell>
                        <TableCell align="center">Service</TableCell>
                        <TableCell align="center">Features</TableCell>
                        <TableCell align="center">Complexity</TableCell>
                        <TableCell align="center">Platforms</TableCell>
                        <TableCell align="center">Users</TableCell>
                        <TableCell align="center">Total</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row , index) => ( <TableRow key={index}>
                      <TableCell align="center">{row.name}</TableCell>
                      <TableCell align="center">{row.date}</TableCell>
                      <TableCell align="center">{row.service}</TableCell>
                      <TableCell style={{maxWidth : "5em"}} align="center">{row.features}</TableCell>
                      <TableCell align="center">{row.complexity}</TableCell>
                      <TableCell align="center">{row.platforms}</TableCell>
                      <TableCell align="center">{row.users}</TableCell>
                      <TableCell align="center">{row.total}</TableCell>
                      </TableRow>))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>


         </Grid>
}