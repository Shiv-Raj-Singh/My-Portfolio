import { useRef, useState } from 'react';
import './contact.css'
import axios from 'axios';
const dummy = {
    name : '' , email : ' ' , message : ''
}

const Contact = ({back}) => {
    const [user , setUser] = useState(dummy)
    const btn = useRef()
    const onChangeHandle = (e)=>{
        setUser({
            ...user , [e.target.name] :e.target.value
        })
    }

    const onSubmitHandle =async (e)=>{
        e.preventDefault()
        btn.current.setAttribute('disabled' , true)
        try {
            
            const {data} = await axios.post('https://portfolio-server-qm0x.onrender.com/send/email' , user)
            data.status && alert('Response Send Successfully ')
            console.log(data);
            setUser(dummy)
            btn.current.removeAttribute('disabled')
            
        } catch (error) {
            alert(error.message)
            btn.current.removeAttribute('disabled')
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
                <input type="text" required onChange={onChangeHandle} className="form-control" name='name' value={user.name} id="exampleInputPassword1" placeholder='Name' />
            </div>
            <div className="mb-3">
                <input type="email" required name='email' onChange={onChangeHandle} value={user.email} className="form-control" id="exampleInputEmail1" placeholder='Email' aria-describedby="emailHelp" />
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



                <button type="submit" id='btn2' ref={btn} className="btn btn1 btn-primary">Submit</button>
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