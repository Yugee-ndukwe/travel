import './destination.css'
import TOWER from '../../assets/tower.jpg'
import MUSEUM from '../../assets/imuseum.jpeg'
import BUDDHIST from '../../assets/buddhist-temple.jpeg'
import GARDEN from '../../assets/garden.jpg'
import OPERA from '../../assets/opera.webp'
import BONDI from '../../assets/bondi.avif'
import GRAND from '../../assets/grand-palace.jpeg'
import WAT from '../../assets/iwat-arun.jpeg'
import MANCHU from '../../assets/manchu.jpg'
import PERU from '../../assets/peru-mountain.jpg'
import IPANEMA from '../../assets/ipanema.jpeg'
import SUGARLOAF from '../../assets/sugarloaf.jpeg'
import { DestinationData } from '../DestinatonData/destinationData'

export function Destination() {
    return(
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Traveling gives you an opportunity to see the world within a timeframe.</p>

          <DestinationData
          classNam="first-des"
            heading= "Paris, France"
            text= "Paris, France Known as`The City of Light,` Paris is famous for its beautiful cityscape, rich history, art, and fashion. Must-see attractions include the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral."
            img1= {TOWER}
            img2= {MUSEUM}
          
          />
          <DestinationData
           classNam="first-des-reverse"
            heading= "Kyoto, Japan"
            text= " A city known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses. Kyoto is a blend of ancient culture and modern living.."
            img1= {BUDDHIST}
            img2= {GARDEN}
          
          />
           <DestinationData
            classNam="first-des"
            heading= "Sydney, Australia"
            text= "  Famous for its Sydney Opera House, Harbour Bridge, and beautiful beaches like Bondi Beach. Sydney offers a vibrant cultural scene and stunning natural attractions."
            img1= {OPERA}
            img2= {BONDI}
          
          />
           <DestinationData
            classNam="first-des-reverse"
            heading= "Bangkok, Thailand"
            text= "   The capital city of Thailand, known for its ornate shrines and vibrant street life. Major attractions include the Grand Palace, Wat Arun, and the bustling markets."
            img1= {GRAND}
            img2= {WAT}
          
          />
           <DestinationData
            classNam="first-des"
            heading= "Machu Picchu, Peru"
            text= "  An ancient Incan city set high in the Andes Mountains. It's renowned for its archaeological significance and breathtaking mountain scenery"
            img1= {PERU}
            img2= {MANCHU}
          
          />
           <DestinationData
            classNam="first-des-reverse"
            heading= "Rio de Janeiro, Brazil"
            text= "  Famous for its Carnival festival, Christ the Redeemer statue, Sugarloaf Mountain, and stunning beaches like Copacabana and Ipanema."
            img1= {SUGARLOAF}
            img2= {IPANEMA}
          
          />
        </div>
    )
}