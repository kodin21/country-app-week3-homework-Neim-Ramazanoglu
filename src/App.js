import {useState, useEffect} from 'react'; 
import Countries from './component/country/Country';
import MostUsedLang from './component/stats/stats';
import './App.css'; 
 
const getCountries = () => 
  fetch('https://restcountries.eu/rest/v2/all')
  .then(response => response.json());
  
function App() {
  const [countrySelected, setCountrySelected] = useState(true);
  const [data, setData] = useState({ countries: [] }); 
 
  useEffect(() => {  
    getCountries()
      .then(data => {
        setData({
          countries: data 
        })
      }); 
  }, []);

  return (
    <div className="App"> 
      <div className="">
        <button className="Btn" onClick={() => setCountrySelected(true)}>Country List</button>
        <button className="Btn" onClick={() => setCountrySelected(false)}>Statistics</button>  
        
        {countrySelected && (<Countries countries={data.countries}></Countries>)} 
        <div className="list">{!countrySelected && (<MostUsedLang countries={data.countries}></MostUsedLang>)} </div>
        
      </div>
    </div>
  );
}

export default App;
