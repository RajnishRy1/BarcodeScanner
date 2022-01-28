import { Html5QrcodeScanner } from "html5-qrcode";
import { Html5Qrcode } from "html5-qrcode";
import { render } from "react-dom";




// function onScanSuccess(decodedText, decodedResult) {
//     // handle the scanned code as you like, for example:
//     console.log(`Code matched = ${decodedText}`, decodedResult);
//   }

// function onScanFailure(error) {
//     // handle scan failure, usually better to ignore and keep scanning.
//     // for example:
//     console.warn(`Code scan error = ${error}`);
//   }


// const Scanner = () =>{
//     let html5QrcodeScanner = new Html5QrcodeScanner("reader",{ fps: 10, qrbox: {width: 250, height: 250} },/* verbose= */ false);    
//     return html5QrcodeScanner.render(onScanSuccess, onScanFailure);
// }
var cameraID=null;

Html5Qrcode.getCameras()
.then(devices=>{
    if(devices && devices.length){
        cameraID=devices[0].id;
    }
})
.catch(err=>{
    console.log(err);
});



const startScanner = (obj) =>{
    // let obj=new Html5Qrcode("reader");
    obj.start(
        cameraID,
        {fps:10,
        qrbox:{ width: 250, height: 250 }
        },
        (decodedText, decodedResult)=>{
            console.log(decodedText);
            console.log(decodedResult);
        },
        (errorMessage)=>{
            // console.log(errorMessage);
        }
    )
    .catch(err=>{
        console.log(err);
    });
}

const stopScanner=(obj)=>{
    // let obj=new Html5Qrcode("reader");
    obj.stop()
    .then((ignore)=>{
    
    })
    .catch(err=>{
        console.log(err);
    });
}


export {startScanner, stopScanner};