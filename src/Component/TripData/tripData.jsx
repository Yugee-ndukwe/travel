import '../Trip/trip.css';

export function TripData({image,heading,text}) {
    return (
        <>
            <div className="t-card">
                <div className='t-image'>
                    <img src={image} alt="pic" />
                </div>
                <h4>{heading}</h4>
                <p>{text}</p>
            </div>
        
        </>
    )
}