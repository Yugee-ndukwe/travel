import './home.css';
import { MyNav } from '../Navbar/navbar';
import { Hero } from '../Hero/hero';
import { Destination } from '../Destination/destination';
import { Trip } from '../Trip/trip';
import { Footer } from '../Footer/footer';
import { FadeLoader } from 'react-spinners';
import { useState, useEffect } from 'react';

export function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        // Cleanup timer in case the component unmounts before the timeout
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
           
            {loading ? (
                <div className="spinner">
                    <FadeLoader color='#222' className='fade'/>
                </div>
            ) : (
                <>
                     <MyNav />
                    <Hero
                        cName="hero"
                        heroImg="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/travel-insurance-woman-on-boat.jpeg.jpg"
                        title="Explore Your Dreams"
                        text="Pick a destination today!"
                        buttonText="Travel Plan"
                        url="/signup"
                        btnClass="show"
                    />
                    <Destination />
                    <Trip />
                    <Footer />
                </>
            )}
        </>
    );
}
