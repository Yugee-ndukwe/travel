import { MyNav } from "../Navbar/navbar"
import { Hero } from "../Hero/hero"
import VID from '../../assets/video 1.jpg'
import { AboutUs } from "../AboutUs/aboutus"
import {Footer} from '../Footer/footer'
import { FadeLoader } from 'react-spinners';
import { useState, useEffect } from 'react';


export function About(){
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
        ) : (
            <>
            <MyNav/>
            <Hero
            cName="hero-about"
            heroImg={VID}
            title='About Us'
            
            btnClass="hide"
            />
            <AboutUs
            title="Our History"
            description='Founded in 2024, Triptor began as a passion project of three avid travelers who shared a love for exploring new cultures and discovering hidden gems around the world. Inspired by their adventures and the countless memories made along the way, they decided to create a platform that would make travel planning easier and more enjoyable for everyone. Combining their expertise in travel, technology, and customer service, they launched Triptor with the vision of transforming the way people experience the world.'
            
            />

            <AboutUs
            title="Our Mission"
            description='Our mission at Triptor is to inspire and empower travelers to explore the world with confidence and ease. We aim to provide exceptional travel experiences by offering personalized itineraries, curated recommendations, and seamless booking services. We are committed to fostering a community of passionate travelers who share a love for discovery, adventure, and cultural exchange.'
            
            />
             <AboutUs
            title="Our Vision"
            description='Our vision is to become the leading travel and tour platform that transforms dreams into unforgettable journeys. We aspire to connect people with the world`s most incredible destinations, promoting sustainable and responsible travel practices. By leveraging cutting-edge technology and our deep knowledge of global travel trends, we aim to create a future where everyone can embark on the adventure of a lifetime, regardless of their background or budget.'
            
            />
            <Footer/>
            
            </>
        )}
           
        </>
    )
}