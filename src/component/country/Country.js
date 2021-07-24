import CountryCard from "./countryCard";
function Countries(props) {
  const {countries} = props;  
    return (
        <div>  
        <div><h3>Countries</h3></div>
        {countries.map((country, index) => ( 
            <CountryCard 
                key={index}
                name={country.name}
                flag={country.flag}
                capital={country.capital} 
                languages={country.languages} 
            />
            ))}
        </div>
    )
} 
export default Countries