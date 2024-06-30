import './footer.css';

export const Footer =() =>{
    return(
        <>
            <div className="footer">
                <div className="footer-top">
                    <div>
                        <h1>Triptor</h1>
                        <p>Choose Your Favourite Destination.</p>
                    </div>
                    <div>
                        <a href="/"><i className='fa-brands fa-facebook-square'></i></a>
                        <a href="/"><i className='fa-brands fa-instagram-square'></i></a>
                        <a href="/"><i className='fa-brands fa-twitter-square'></i></a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div>
                        <h4>Projects</h4>
                        <a href="/">Status</a>
                        <a href="/">Changelog</a>
                        <a href="/">All Version</a>
                        <a href="/">License</a>
                    </div>

                    <div>
                        <h4>Help</h4>
                        <a href="/">Support</a>
                        <a href="/">FAQ</a>
                        <a href="/">Contact us</a>
                       
                    </div>

                    <div>
                        <h4>Community</h4>
                        <a href="/">Issues</a>
                        <a href="/">Project</a>
                        <a href="/">Twitter</a>
                        
                    </div>

                    <div>
                        <h4>Others</h4>
                        <a href="/">Terms of Service</a>
                        <a href="/">Privacy Policy</a>
                        <a href="/">License</a>
                       
                    </div>
                </div>
            </div>
        </>
    )
}

