import '../Destination/destination.css'
import TOWER from '../../assets/tower.jpg'
import MUSEUM from '../../assets/imuseum.jpeg'

export function DestinationData({heading, text,img1,img2,classNam}) {
    return(
        <>
              <div className={classNam}>
                <div className="first-des-text">
                    <h2>{heading}</h2>
                    <p>{text}</p>
                </div>
                <div className="images">
                    <img src={img1} alt="img" />
                    <img src={img2} alt="img" />
                </div>
            </div>
        
        </>
    )
}