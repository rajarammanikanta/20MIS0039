
const axios=require('axios');  

const mydata=[2,4,5,6]


axios.post(`http://localhost:9876/numbers/${[mydata]}`)
   .then(res=>{
    console.log("API RESPONSE STATUS: ",res.status);
    console.log("RESPONSE DATA: ",res.data);

   })
   .catch(error=>{
    console.log("ERROR",error);
   })