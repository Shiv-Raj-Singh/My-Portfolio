import './contact.css'

const Contact = ({back}) => {
    return (
        <>
        <div className="user" style={{
            background:back
        }} >

        <div className="user-container">
            <div className="user-form">
            <form>
                <div className="mb-3">
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Name' />
            </div>
            <div className="mb-3">
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Email' aria-describedby="emailHelp" />
            </div>
            <div classNam="form-floating">
                    <textarea
                    name='message'
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