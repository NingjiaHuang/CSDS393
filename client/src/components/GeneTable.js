import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { Button } from 'semantic-ui-react'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function GeneTable(){
  const [bs_value, bs_setValue] = useState('N/N');
  const [bd_value, bd_setValue] = useState('N/N');
  const [hs_value, hs_setValue] = useState('N/N');
  const [hd_value, hd_setValue] = useState('N/N');
  const [ps_value, ps_setValue] = useState('N/N');
  const [pd_value, pd_setValue] = useState('N/N');

  const [click_value, click_setValue] = useState("")

  const clickme = async (e) => {
    e.preventDefault()
    try {
        click_setValue([bs_value,bd_value,ps_value,pd_value,hs_value,hd_value]);
        const body = {click_value}
        const response = await fetch("http://localhost:4020/genecalculator", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        const parseRes = await response.json();
    } catch(err) {
        console.error(err.message);
    }
}
  const classes = useStyles();
  



  return (
    
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Types</TableCell>
            <TableCell align="center">Sire Genetic Results</TableCell>
            <TableCell align="center">Dam Genetic Results</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
           
            <TableRow>
              <TableCell component="th" scope="row">
                Blood Type
              </TableCell>
              <TableCell align="center">
              <select
                className="custom-select"
                value={bs_value}
                onChange={(e) => {
                  const selectedFood = e.target.value;
                  bs_setValue(selectedFood);
                }}
              >
                <option value="N/N">N/N</option>
                <option value="N/c">N/c</option>
                <option value="N/b">N/b</option>
                <option value="b/b">b/b</option>
                <option value="c/b">c/b</option>
                <option value="c/c">c/c</option>
              </select>
                <p>
                  You selected {bs_value}
                </p>

              </TableCell>
              <TableCell align="center">
                <select
                className="custom-select"
                value={bd_value}
                onChange={(e) => {
                  const selectedFood = e.target.value;
                  bd_setValue(selectedFood);
                }}
              >
                <option value="N/N">N/N</option>
                <option value="N/c">N/c</option>
                <option value="N/b">N/b</option>
                <option value="b/b">b/b</option>
                <option value="c/b">c/b</option>
                <option value="c/c">c/c</option>
              </select>
                <p>
                  You selected {bd_value}
                </p>
              </TableCell>
            </TableRow>


            <TableRow>
              <TableCell component="th" scope="row">
                PDK1
              </TableCell>
              <TableCell align="center">
              <select
                className="custom-select"
                value={ps_value}
                onChange={(e) => {
                  const selectedFood = e.target.value;
                  ps_setValue(selectedFood);
                }}
              >
                <option value="N/N">N/N</option>
                <option value="N/P">N/P</option>
                <option value="P/P">P/P</option>
              </select>
                <p>
                  You selected {ps_value}
                </p>

              </TableCell>
              <TableCell align="center">
              <select
                className="custom-select"
                value={pd_value}
                onChange={(e) => {
                  const selectedFood = e.target.value;
                  pd_setValue(selectedFood);
                }}
              >
                <option value="N/N">N/N</option>
                <option value="N/P">N/P</option>
                <option value="P/P">P/P</option>
              </select>
                <p>
                  You selected {pd_value}
                </p>

              </TableCell>
            </TableRow>

            
            <TableRow>
              <TableCell component="th" scope="row">
                HCM
              </TableCell>
              <TableCell align="center">
              <select
                className="custom-select"
                value={hs_value}
                onChange={(e) => {
                  const selectedFood = e.target.value;
                  hs_setValue(selectedFood);
                }}
              >
                <option value="N/N">N/N</option>
                <option value="N/HCMrd">N/HCMrd</option>
                <option value="HCMrd/HCMrd">HCMrdP/HCMrd</option>
              </select>
                <p>
                  You selected {hs_value}
                </p>

              
              </TableCell>
              <TableCell align="center">
              <select
                className="custom-select"
                value={hd_value}
                onChange={(e) => {
                  const selectedFood = e.target.value;
                  hd_setValue(selectedFood);
                }}
              >
                <option value="N/N">N/N</option>
                <option value="N/HCMrd">N/HCMrd</option>
                <option value="HCMrd/HCMrd">HCMrdP/HCMrd</option>
              </select>
                <p>
                  You selected {hd_value}
                </p>

              </TableCell>
            </TableRow>

            <TableRow>
            <TableCell component="th" scope="row">
                <p>You clicked {click_value}</p>
                <Button 
                data-testid="calBtn"
                content='Calculate' 
                icon='signup' 
                size='sm'  
                style={{ marginLeft: "auto" }} 
                onClick={clickme}>
                </Button>
                <p>
                  You selected Blood Type: {bs_value}, {bd_value}; PKD: {ps_value} ,{pd_value}; HCM: {hs_value} ,{hd_value}
                </p>
            
              </TableCell>
            </TableRow>
  
        </TableBody>
      </Table>
    </TableContainer>

  )
}
