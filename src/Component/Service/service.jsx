import { MyNav } from "../Navbar/navbar"
import { Hero } from "../Hero/hero"
import VID from '../../assets/services.png'
import { OurServices } from "../ourServices/ourServices"
import {Footer} from '../Footer/footer'


export function Service(){
    return(
        <>
             <MyNav/>
            <Hero
            cName="hero-about"
            heroImg={VID}
            title='What we Offer'
            btnClass="hide"
            />
            <OurServices/>
            <Footer/>
        </>
    )
}