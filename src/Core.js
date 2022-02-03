
import './App.css';
import {Grid, Container, Card, CardContent, makeStyles, Button} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {startScanner,stopScanner} from './Modules/html5qr';
import { Html5Qrcode } from 'html5-qrcode';
import {useHistory} from 'react-router-dom';
import './css/Card.css'

function Core() {

  const classes = useStyles();
  let obj =null;

  useEffect(()=>{
    startScanning();
  });

  const successCallback=(resText,Result)=>{
    var arr=resText.split("&");
    var code = arr[0].split("$");
    var code=1;

    stopScanning();

    //Redirect to URL with code
    // window.location.replace("/success/"+ code);
    let url="/product/"+ code;
    history.push(url);
    // ReactDOM.render(<Redirect to='/product/157589'/>,document.getElementById("reader"));
  }

  const history = useHistory();

  const startScanning=()=>{
    obj=new Html5Qrcode("reader");
    startScanner(obj,successCallback);
  }

  const scanNow=()=>{
    obj.resume();
  }

  const stopScanning=()=>{
    stopScanner(obj);
  }

  return (
    <Container className={classes.container}>
      <Card>
        <h2 className={classes.title}>Scan QR Code</h2>
        <div>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xl={4} lg={4} sm={12} xs={12} >
                <div id="reader" width="600px"></div>
                {/* {decodedText!=="" ? (
                  <div>
                  <Details detobj={decoded}></Details>
                  <br></br>

                  </div>
                  
                ):null} */}
                </Grid>
              </Grid>
            </CardContent>
            <div style={{borderSpacing:'5px'}}>
            <Button onClick={scanNow} variant="contained" color="primary">scan now</Button>
            <button className='add-button'> Add </button>
          </div>
        </div>
      </Card>
    </Container>
  );
}

const useStyles = makeStyles((theme)=>({
  container:{
    marginTop:10
  },
  title:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    background:'#3f51b5',
    color: '#fff',
    padding: 20
  }
}));

export default Core;
