import React, { useState } from 'react';
import { MyNav } from '../Navbar/navbar';
import { Hero } from '../Hero/hero';
import './signup.css';
import {Footer} from '../Footer/footer'
// import {CircleLoader} from 'react-loader'

export function SignUp() {
    const [tripDetails, setTripDetails] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleTrip = (e) => {
        e.preventDefault();
        setLoading(true);

        const newTrip = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            gender: e.target.gender.value,
            destination: e.target.destination.value,
            duration: e.target.duration.value,
            startDate: e.target.startDate.value,
            endDate: e.target.endDate.value,
        };

        // Simulate form submission
        setTimeout(() => {
            setTripDetails([...tripDetails, newTrip]);
            setLoading(false);
            e.target.reset(); // Reset the form fields
           

            setTimeout(()=>{
                alert("Submission Successful");
            },1000)
        }, 2000); // Simulate a delay for form submission
    };

    return (
        <>
            <MyNav />
            <Hero
                cName="hero-about"
                heroImg='https://i.swncdn.com/media/950w/via/images/2022/05/18/25540-istockgetty-images-plusben-taylor_source_file.jpg'
                title='Plan That Trip With Us Today'
            />
            <div className='signup-page'>
                <h1>Where Do You Want To Visit?</h1>
                <form onSubmit={handleTrip}>
                    {loading ? (
                        // <CircleLoader />
                        <div>Submitting Your Trip</div>
                    ) : (
                        <>
                            <input type="text" name="firstName" placeholder="First Name" required />
                            <input type="text" name="lastName" placeholder="Last Name" required />
                            <input type="email" name="email" placeholder="Email" required />

                            <select name="gender" required>
                                <option value="" disabled selected>Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>

                            <select name="destination" required>
                                <option value="" disabled selected>Choose a Destination</option>
                                <option value="Paris, France">Paris, France</option>
                                <option value="Tokyo, Japan">Tokyo, Japan</option>
                                <option value="Sydney, Australia">Sydney, Australia</option>
                                <option value="Bangkok, Thailand">Bangkok, Thailand</option>
                                <option value="Machu Picchu, Peru">Machu Picchu, Peru</option>
                                <option value="Rio de Janeiro, Brazil">Rio de Janeiro, Brazil</option>
                                <option value="Queenstown, New Zealand">Queenstown, New Zealand</option>
                                <option value="Santorini, Greece">Santorini, Greece</option>
                                <option value="Rome, Italy">Rome, Italy</option>
                            </select>
                            <input type="number" name="duration" placeholder="Duration (days)" required />
                            <input type="date" name="startDate" required />
                            <input type="date" name="endDate" required />

                            <button type="submit" disabled={loading}>Add Trip</button>
                        </>
                    )}
                </form>
               
            </div>
            <Footer/>
        </>
    );
}
