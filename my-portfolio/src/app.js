import express from 'express';
import sendMailFunction  from './NodeMailer.js';

const app = express()
app.use(express.json())


app.get('/' , (req,res)=>{
    res.send("Hi Welcome on Server of portfolio ")
})
app.get('/send/email' , sendMailFunction)

app.listen(3000 , ()=>{
    console.log('app is Running on 3000');
})