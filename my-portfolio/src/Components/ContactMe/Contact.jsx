import { useState } from 'react';
import './contact.css'
import axios from 'axios';
const dummy = {
    name : '' , email : ' ' , message : ''
}

const Contact = ({back}) => {
    const [user , setUser] = useState(dummy)
    const onChangeHandle = (e)=>{
        setUser({
            ...user , [e.target.name] :e.target.value
        })
    }

    const onSubmitHandle =async (e)=>{
        e.preventDefault()
        try {
            const {data} = await axios.post('https://portfolio-server-qm0x.onrender.com/send/email' , user)
            data.status && alert('Response Send Successfully ')
            console.log(data);
            setUser(dummy)

        } catch (error) {
            alert(error.message)
        }
    }
    return (
        <>
        <div className="user" >
            <h4 className="h4 text-center"> Contact-Me </h4>
        <div className="user-container">
            <div className="user-form">
            <form  onSubmit={onSubmitHandle} >
                <div className="mb-3">
                <input type="text" onChange={onChangeHandle} className="form-control" name='name' value={user.name} id="exampleInputPassword1" placeholder='Name' />
            </div>
            <div className="mb-3">
                <input type="email" name='email' onChange={onChangeHandle} value={user.email} className="form-control" id="exampleInputEmail1" placeholder='Email' aria-describedby="emailHelp" />
            </div>
            <div classNam="form-floating">
                    <textarea
                    name='message'
                    value={user.message}
                    onChange={onChangeHandle}
                    className='message'
                    cols={37}
                    rows={5}
                    placeholder='Your Message'
                    required
                    ></textarea>
            </div>



                <button type="submit" id='btn2' className="btn btn1 btn-primary">Submit</button>
            </form>
            </div>
            <div className="user-pic">
                    <div className="picture">

                    </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default Contact;