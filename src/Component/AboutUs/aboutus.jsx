import '../About/about.css'


export const AboutUs =({title,description}) =>{
    return (
        <>
            <div className="about-container">
                <div className="about-info">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        
        </>
    )
}