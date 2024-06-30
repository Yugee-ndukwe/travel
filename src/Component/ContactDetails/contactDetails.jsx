import '../Contact/contact.css'

export function ContactDetails(){
    return(
        <>
            <div className="form-container">
                <h1>Send Us a Message.</h1>
                <form>
                   <div className="half">
                        <input type="text" placeholder="Name" required/>
                        <input type="email" placeholder="Email" required/>
                   </div>
                    
                        <input type="text" placeholder="Subject" required className='subject' />
                    
                        <textarea  placeholder="Message" required></textarea>
                        <button>Send</button>
                </form>
            </div>
        </>
    )
}