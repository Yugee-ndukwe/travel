import './trip.css';
import { TripData } from '../TripData/tripData';
import TRIP from '../../assets/lake.jpg'
import TRIP2 from '../../assets/oia.jpeg'
import TRIP3 from '../../assets/Galleria-Borghese.jpg'

export function Trip() {
    return(
        <>
            <div className="trip">
                <h1>Recent Trips</h1>
                <p>Discover unique destinations using google map.</p>
                <div className="trip-card">
                    <TripData
                    image={TRIP}
                    heading='Trip to Queenstown, New Zealand'
                    text="Queenstown is more than just a destination—it's an experience. Whether you seek heart-pounding adventures, serene natural beauty, or cultural enrichment, Queenstown offers something extraordinary for everyone. Start planning your unforgettable journey to Queenstown, New Zealand, and discover why it's called the ` Adventure Capital of the World ." 
                    
                    />
                     <TripData
                    image={TRIP2}
                    heading='Trip to Santorini, Greece'
                    text="Imagine stepping into a postcard where white-washed buildings with blue domes cascade down cliffs towards the sparkling azure sea. Welcome to Santorini, Greece—a breathtaking island that captures the heart and soul of the Aegean. Known for its stunning sunsets, volcanic beaches, and vibrant culture, Santorini is a dream destination that promises romance, adventure, and pure relaxation." 
                    
                    />
                     <TripData
                    image={TRIP3}
                    heading='Trip to Rome, Italy: The Eternal City'
                    text="Step into a living museum where ancient history meets vibrant modern life. Rome, Italy, is a city of endless wonders, where every corner reveals remnants of a glorious past intertwined with contemporary culture. From the awe-inspiring Colosseum to the serene beauty of the Vatican, Rome offers a captivating blend of history, art, and Italian charm that will enchant you at every turn." 
                    
                    />
                </div>
            </div>
        
        </>
    )
}