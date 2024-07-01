import { MyNav } from "../Navbar/navbar"
import { Hero } from "../Hero/hero"
import VID from '../../assets/services.png'
import { OurServices } from "../ourServices/ourServices"
import {Footer} from '../Footer/footer'
import { useState, useEffect } from "react"
import { FadeLoader } from "react-spinners"


export function Service(){
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
            title='What we Offer'
            btnClass="hide"
            />
            <OurServices/>
            <Footer/>
            </>
        )}
            
        </>
    )
}