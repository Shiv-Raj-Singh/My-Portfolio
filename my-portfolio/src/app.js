import express from 'express';
import sendMailFunction  from './NodeMailer.js';
import cors from 'cors';

const app = express()
app.use(express.json())
app.use(cors())

app.get('/' , (req,res)=>{
    res.send("Hi Welcome on Server of portfolio ")
})
app.post('/send/email' , sendMailFunction)

app.listen(3000 , ()=>{
    console.log('app is Running on 3000');
})
