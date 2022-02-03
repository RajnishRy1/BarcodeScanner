import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import image1 from './logo192.png'
import './css/Card.css'
import Share from './Modules/Share';
import { Button } from "@material-ui/core";

const link = "https://jsonplaceholder.typicode.com/users/"
 
const Product = () =>{
    const params=useParams(); 

    // useEffect(()=>{
    //   const script = document.createElement("script");
    //   script.src="/addtohomescreen.js";
    //   script.async=true;
    //   document.body.appendChild(script);
    // });
    const [name,setName]=useState('');
    const [retailPrice,setRetailPrice]=useState('');
    const [discountPrice,setDiscountPrice]=useState('');
    const imageUrl=window.location.href;

    fetch(link + params.id)
    .then(raw=>raw.json())
    .then((response)=>{
      setName(response.name);
      setRetailPrice(response.address.zipcode);
      setDiscountPrice(response.address.geo.lng);  
    })
    .catch((err)=>{
      console.log(err);
    });

    return(
      <div style={{border:'1px solid red'}} id='share'>
        <script src="/addtohomescreejs">

        </script>
          <img alt="img"src={image1}></img>
          <h3 style={{textAlign:'center'}}>{name}</h3>
          <table>
              <thead>
                  <tr>
                      <th>Retail Price</th>
                      <th>You Pay</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>
                          {retailPrice}
                      </td>
                      <td>
                          {discountPrice}
                      </td>
                  </tr>
              </tbody>
          </table>
          <Share
                  label="share this deal!"
                  title="Deal"
                  text="Deal"
                  link={imageUrl}
          ></Share>
      </div>
  );
};

// const shareDetails=()=>{
//     var node=document.getElementById('share');
//     htmlToImage.toPng(node)
//     .then((dataUrl)=>{
//       setImageUrl(dataUrl);
//     })
//     .catch((err)=>{
//       console.log(err);
//     })
//   }

export default Product;