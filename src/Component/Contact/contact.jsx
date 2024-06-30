import { MyNav } from "../Navbar/navbar";
import { Hero } from "../Hero/hero";
import VID from '../../assets/travel.jpg'
import { ContactDetails } from "../ContactDetails/contactDetails";
import {Footer} from '../Footer/footer'

export function Contact(){
    return(
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
    )
}