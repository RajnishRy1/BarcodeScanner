import { useState } from "react";
import { useParams } from "react-router-dom";
import image1 from './logo192.png'
import './css/Card.css'
import Share from './Modules/Share';

const link = "http://10.50.1.7:7285/api/get/price/"
 
const Product = () =>{
    const params=useParams();

    const [name,setName]=useState('');
    const [retailPrice,setRetailPrice]=useState('');
    const [discountPrice,setDiscountPrice]=useState('');
    const imageUrl=window.location.href;

    fetch(link + params.id)
    .then(raw=>raw.json())
    .then((response)=>{
      setName(response.data[0].product_name);
      setRetailPrice(response.data[0].price);
      setDiscountPrice(response.data[0].price - response.data[0].discount);  
    })
    .catch((err)=>{
      console.log(err);
    });

    return(
      <div style={{border:'1px solid red'}} id='share'>
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
                  title="deal"
                  text="My web share adventures"
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