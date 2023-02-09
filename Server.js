const express = require('express')
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()


MedicalBills = {"bills":[]};
const Server = express();
Server.use(cors());
Server.use(express.json());
Server.use(express.urlencoded({ extended: false }));

Server.get('/v1/getUserBill', (req, res) => {
  res.send(MedicalBills);
});

Server.post("/v1/createUserBill",(req,res)=>{
    try{
    MedicalBills["bills"].push({"patientName":req.body["patientName"],"hospitalName":req.body["hospitalName"],"dateOfService":req.body["dateOfService"],"billAmount":req.body["billAmount"]})
    res.send({"Message":"Successfully Added Medical Bill","bill":{"patientName":req.body["patientName"],"hospitalName":req.body["hospitalName"],"dateOfService":req.body["dateOfService"],"billAmount":req.body["billAmount"]}})
    }
    catch(e){
    res.send(`Failed To Add Bill \n ${e}`)
    }
    
});


Server.listen(process.env.PORT||5000, () =>
  console.log(`Example Server listening on port ${process.env.PORT}`),
);