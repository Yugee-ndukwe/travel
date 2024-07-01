import { MyNav } from "../Navbar/navbar";
import { Hero } from "../Hero/hero";
import VID from '../../assets/travel.jpg'
import { ContactDetails } from "../ContactDetails/contactDetails";
import {Footer} from '../Footer/footer'
import { FadeLoader } from 'react-spinners';
import { useState, useEffect } from 'react';

export function Contact(){
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        // Cleanup timer in case the component unmounts before the timeout
        return () => clearTimeout(timer);
    }, []);

    return(
        <>
        {loading ? (
            <div className="spinner">
            <FadeLoader color='#222' className='fade'/>
        </div>
        ): (
            <>
             <MyNav/>
            <Hero
            cName="hero-about"
            heroImg={VID}
            title='Start Your Journey with Us '
            
            btnClass="hide"
            />
            <ContactDetails/>
            <Footer/>
            </>
        )}
           
        </>
    )
}