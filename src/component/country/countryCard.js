import './country.css'

function CountryCard({key, name, flag, languages, capital}) {
    return (
        <div className="cards" key={key}>
            <div className="card">
            <img className="img" alt={name} src={flag} />
                <div className="container">
                    
                    <p><b>{name}</b></p>  
                    {capital && (<p>Capital: <strong>{capital}</strong></p>)}
                    <p>Languages: 
                    {languages.map((lang, index) => (
                        <div className="hide"> <strong>{lang.name}</strong> </div> 
                        ))} 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CountryCard
