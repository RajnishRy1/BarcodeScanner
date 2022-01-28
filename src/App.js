import logo from './logo.svg';
import './App.css';
import {Grid, Container, Card, CardContent, makeStyles, Button} from '@material-ui/core';
import QrReader from 'react-qr-reader';
import { useState } from 'react';
import { render } from 'react-dom';
import {startScanner,stopScanner} from './Modules/html5qr';
// import QrCode from './Modules/QrCode';
import { Html5Qrcode } from 'html5-qrcode';

function App() {

  const classes = useStyles();

  const [mode, setMode] = useState(false);

  const [decoded, setDecoded]=useState('');
  
  
  let obj=new Html5Qrcode("reader");


  const scanQR=(result)=>{
    if(result){
      setDecoded(result); 
    }
  }

  const startScanning=()=>{
    startScanner(obj);
  }
  
  const stopScanning=()=>{
    stopScanner(obj);
  }

  return (
    <Container className={classes.container}>

      <Card>
        <h2 className={classes.title}>Scan QR Code</h2>
        <Button onClick={startScanning}>Start</Button>
        <Button onClick={stopScanning}>Stop</Button>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xl={4} lg={4} sm={12} xs={12} >
            <div id="reader" width="600px"></div>
            </Grid>
          </Grid>
        </CardContent>
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

export default App;
