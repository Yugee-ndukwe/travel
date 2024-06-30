import './home.css';
import {MyNav} from '../Navbar/navbar'
import { Hero } from '../Hero/hero';
// import VID from '../../assets/video 1.jpg'
import { Destination } from '../Destination/destination';
import { Trip } from '../Trip/trip';
import {Footer} from '../Footer/footer';


export function Home(){
    return(
        <>
        <MyNav/>
            <Hero
            cName="hero"
            heroImg="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/travel-insurance-woman-on-boat.jpeg.jpg"
            title='Explore Your Dreams'
            text='Pick a destination today!'
            buttonText="Travel Plan"
            url="/signup"
            btnClass="show"
            
            />
            <Destination/>
            <Trip/>
            <Footer/>
        </>
    )
}