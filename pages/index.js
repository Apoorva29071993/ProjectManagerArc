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
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import {MuiPickersUtilsProvider , KeyboardDatePicker, DatePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles= makeStyles(theme => ({
  service : {
    fontWeight : 300
  },
  users : {
    marginRight : 0
  }
}));

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

  const platformOptions = ["Web" , "iOS" , "Android"];
  const featureOptions = ["Photo/Video","GPS","File Transfer",
  "Users/Authentication","Biometrics","Push Notifications"]
  const [websiteChecked , setWebsiteChecked] = useState(false);
  const [iOSChecked , setIosChecked] = useState(false);
  const [androidChecked , setAndroidChecked] = useState(false);
  const [customSoftwareChecked , setCustomSoftwareChecked] = useState(false);
  const [dialogOpen,setDialogOpen] = useState(false);
  const [name,setName] = useState("");
  const [date,setDate] = useState(new Date());
  const [total,setTotal] = useState("");
  const [service,setService] = useState("");
  const [complexity,setComplexity] = useState("");
  const [users,setUsers] = useState("");
  const [platforms,setPlatforms] = useState([]);
  const [features,setFeatures] = useState([]);

  return (
          <MuiPickersUtilsProvider utils={DateFnsUtils} >
           <Grid container direction="column">
            <Grid item style={{marginTop : "2em" , marginLeft : "5em"}}>
            <Typography variant="h1">Projects</Typography>
            </Grid>

            <Grid>
              <TextField 
              placeholder="Search Project Details or create new entry"
              style={{width : "35em" , marginLeft : "5em"}}
              InputProps={{
                endAdornment : (
                <InputAdornment position="end" style={{cursor : "pointer"}} onClick={() => setDialogOpen(true)}>
                <AddIcon color="primary" style={{fontSize : 30}}/>
                </InputAdornment>)
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
                      <TableCell align="center">{row.features}</TableCell>
                      <TableCell align="center">{row.complexity}</TableCell>
                      <TableCell align="center">{row.platforms}</TableCell>
                      <TableCell align="center">{row.users}</TableCell>
                      <TableCell align="center">{row.total}</TableCell>
                      </TableRow>))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>

              <Dialog fullWidth maxWidth="md" open={dialogOpen} onClose={() => setDialogOpen(false)}>
                  <Grid container justify="center">
                    <Grid item>
                        <Typography variant="h1" gutterBottom >
                          Add a new Project
                        </Typography>
                    </Grid>
                  </Grid>

                  <DialogContent>
                    <Grid container justify="space-between">
                    
                        <Grid item>
                          <Grid item container direction="column" sm>
                            <Grid item>
                              <TextField label="Name" id="name" value={name} fullWidth
                                onChange={(event) => setName(event.target.value) } />
                            </Grid>
                            <Grid item container direction="column" style={{marginTop : "5em"}}>
                              <Grid item>
                                <Typography variant="h4">
                                  Service
                                </Typography>
                              </Grid>
                              <Grid item>
                                <RadioGroup aria-label="service" name="service"
                                value={service} onChange={(event) => setService(event.target.value) } >
                                <FormControlLabel classes={{label : classes.service}} value="Website" label="Website"
                                  control={<Radio />} />
                                  <FormControlLabel classes={{label : classes.service}} value="Mobile App" label="Mobile App"
                                  control={<Radio />} />
                                  <FormControlLabel classes={{label : classes.service}} value="Custom Software" label="Custom Software"
                                  control={<Radio />} />
                                </RadioGroup>
                              </Grid>
                              <Grid item style={{marginTop : "5em"}}>
                                <Select labelId="platforms" id="platforms"
                                 multiple 
                                 style={{width : "12em"}}
                                 displayEmpty
                                 renderValue={platforms.length > 0 ? undefined : () => "Platforms"}
                                 value={platforms} 
                                 onChange={(event) => setPlatforms(event.target.value)}>
                                  {platformOptions.map(option => 
                                    <MenuItem key={option} value={option}>{option}</MenuItem>)}
                                </Select>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      
                        <Grid item>
                          <Grid item container direction="column" sm alignItems="center" style={{marginTop : 16}}>
                            <Grid item>
                              <KeyboardDatePicker format="MM/dd/yyyy" value={date}
                              onChange={newDate => setDate(newDate)} />
                            </Grid>
                            <Grid item>
                            <Grid item container direction="column" style={{marginTop : "5em"}}>
                              <Grid item>
                                <Typography variant="h4">
                                  Complexity
                                </Typography>
                              </Grid>
                              <Grid item>
                                <RadioGroup aria-label="complexity" name="complexity"
                                value={complexity} onChange={(event) => setComplexity(event.target.value) } >
                                <FormControlLabel classes={{label : classes.service}} value="Low" label="Low"
                                  control={<Radio />} />
                                  <FormControlLabel classes={{label : classes.service}} value="Medium" label="Medium"
                                  control={<Radio />} />
                                  <FormControlLabel classes={{label : classes.service}} value="high" label="High"
                                  control={<Radio />} />
                                </RadioGroup>
                              </Grid>
                            </Grid>
                            </Grid>
                          </Grid>
                        </Grid>

                        <Grid item>
                          <Grid item container direction="column" sm >
                            <Grid item>
                            <TextField 
                                InputProps={{startAdornment : 
                                <InputAdornment position="start">$</InputAdornment> }}
                                label="Total" id="total" value={total}
                                onChange={(event) => setTotal(event.target.value) } />
                            </Grid>
                            <Grid item>
                            <Grid item container direction="column" alignItems="flex-end" style={{marginTop : "5em"}}>
                              <Grid item>
                                <Typography variant="h4">
                                  Users
                                </Typography>
                              </Grid>
                              <Grid item>
                                <RadioGroup aria-label="users" name="users"
                                value={users} onChange={(event) => setUsers(event.target.value) } >
                                <FormControlLabel classes={{label : classes.service , root : classes.users}} 
                                value="0-10" label="0-10"
                                  control={<Radio />} />
                                  <FormControlLabel classes={{label : classes.service , root : classes.users}} 
                                  value="10-100" label="10-100"
                                  control={<Radio />} />
                                  <FormControlLabel classes={{label : classes.service , root : classes.users}} 
                                  value="100+" label="100+"
                                  control={<Radio />} />
                                </RadioGroup>
                              </Grid>
                              <Grid item style={{marginTop : "5em"}}>
                                <Select labelId="features" id="features"
                                 multiple 
                                 style={{width : "12em"}}
                                 MenuProps={{style : {zIndex : 1302}}}
                                 displayEmpty
                                 renderValue={features.length > 0 ? undefined : () => "Features"}
                                 value={features} 
                                 onChange={(event) => setFeatures(event.target.value)}>
                                  {featureOptions.map(option => 
                                    <MenuItem key={option} value={option}>{option}</MenuItem>)}
                                </Select>
                              </Grid>
                            </Grid>
                            </Grid>
                    
                          </Grid>
                        </Grid>

                    </Grid>
                  </DialogContent>

              </Dialog>

            </Grid>
            </MuiPickersUtilsProvider>
 );
}