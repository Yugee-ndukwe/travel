import '../Service/service.css'

export function OurServices() {
    return(
        <>
            <div className="container service-container">
                <h3>Our Services Include</h3>
              <div className="row service-info">
              <div className='col-lg-6'>
                <h5>Flight Booking:</h5>
               <ul>
                    <li>&#10148; Compare and book flights from multiple airlines.</li>
                    <li>&#10148; Provide details on flight schedules, fares, and seat availability.</li>
                    <li>&#10148; Offer deals and discounts on airfare.</li>
                </ul>
               </div>
               <div className='col-lg-6'>
                <h5>Accommodation Booking:</h5>
               <ul>
                    <li>&#10148; Book hotels, hostels, vacation rentals, and other types of accommodations.</li>
                    <li>&#10148; Provide user reviews, ratings, and detailed descriptions of properties.</li>
                </ul>
               </div>
               <div className='col-lg-6'>
                <h5>Car Rentals and Transportation:</h5>
               <ul>
                    <li>&#10148; Book rental cars, airport transfers, and local transportation services.</li>
                    <li>&#10148; Provide comparisons of different rental companies and vehicle options.</li>
                </ul>
               </div>
               <div className='col-lg-6'>
                <h5>Tour Packages:</h5>
               <ul>
                    <li>&#10148; Offer pre-designed tour packages for various destinations and interests.</li>
                    <li>&#10148; Customize tour packages to meet specific needs and preferences.</li>
                    <li>&#10148; Provide details on inclusions, exclusions, and itineraries.</li>

                </ul>
               </div>
               <div>
                <h5>Activities and Experiences:</h5>
               <ul>
                    <li>&#10148; Book local tours, activities, and experiences such as sightseeing tours, adventure sports, and cultural events.</li>
                    <li>&#10148; Offer tickets for attractions, museums, and events.</li>
                </ul>
               </div>
              </div>
               
            </div>
        
        </>
    )
}