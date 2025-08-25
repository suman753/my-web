import React, {useState} from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {
    const [loading,setLoading] = useState(false);
    const [successMessage, setSuccessMessage]=useState("");

const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    const formData = new FormData(event.target);

    formData.append("access_key", "c2ca7840-ba5a-40b9-8f9e-24ba626f44dd");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());
    setLoading(false);

    if (res.success) {
      alert(res.message);  
      event.target.reset();
      setTimeout(()=>setSuccessMessage(""),5000);
    }
   
  };


  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get In Touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Feel free to reach out for project discussions, freelance opportunities, or collaboration. I’ll be glad to connect and respond as quickly as possible.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                     <img src={mail_icon} alt="" /><p>sumandatta7029@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                     <img src={call_icon} alt="" /><p>+91 7029847511</p>                       
                    </div>
                    <div className="contact-detail">
                     <img src={location_icon} alt="" /><p>West Bengal, India</p>                     
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label>Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' required />
                <label>Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' required />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="7    " placeholder='Enter your message' required></textarea>
                <button type='submit' className='contact-submit' disabled={loading}>
                    {loading?"Submitting....":"Submit Now"}
                </button>
            
                
            </form>
        </div>
      
    </div>
  )
}

export default Contact
