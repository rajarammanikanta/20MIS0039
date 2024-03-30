
const axios=require('axios');  

const mydata={
    "companyName": 'Afford Medical College Technologies',
    "clientID": '9deae171-56b3-4a54-8ad5-90e89b46de5b',
    "clientSecret": 'egDWUtqRKgnkFley',
    "ownerName": 'Rajaram Manikanta',
    "ownerEmail": 'rajarammanikantamani@gmail.com',
    "rollNo": '20MIS0039'
} 


axios.post('http://20.244.56.144/test/auth',mydata)
   .then(res=>{
    console.log("API RESPONSE STATUS: ",res.status);
    console.log("RESPONSE DATA: ",res.data);

   })
   .catch(error=>{
    console.log("ERROR",error);
   })