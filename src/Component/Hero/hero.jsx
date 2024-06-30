import './hero.css';
import VID from '../../assets/video 1.jpg'

export function Hero({cName,heroImg,title,text,url,btnClass,buttonText}){
    return(
        <>
            <div className={cName}>
                <img src={heroImg} alt="video" />
                <div className="hero-text">
                    <h1>{title}</h1>
                    <p>{text}</p>
                    <a href={url} className={btnClass}>{buttonText}</a>
                </div>

            </div>
        
        </>
    )
}