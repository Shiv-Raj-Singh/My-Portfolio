import nodemailer from 'nodemailer';

export default async function sendMailFunction(req,res){
  try {
  console.log(req.body);
  const {name , email , message} = req.body
  const transporter = await nodemailer.createTransport({
  service : 'gmail' ,
  auth: {
      user: `mt932747@gmail.com`,
      pass: `cstmqhaxxvzrxftf`
  },
  });
  
  var mailOptions = {
      from: `mt932747@gmail.com`,
      to: `mt932747@gmail.com`,
  
      subject: `${name} wants hire You ` ,
      text : `email : ${email} ,
message :  ${message} `
    };
      
    const info =  await transporter.sendMail(mailOptions)
      console.log(info);
      return res.status(200).json({
        status : true , message : 'Success' , data : info
      })

  } catch (error) {
    return res.status(400).send({
      status:false , message : error.message
    })
  }
}


// user.send()