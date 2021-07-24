import {useEffect, useState} from 'react'; 
import MostUsedLangCard from './statsCard';


 function MostUsedLang(props) {
    const {countries} = props; 
    const {limit} = 10;
    const [languages, setLanguages] = useState([]); 

    useEffect(() => {    
        let langs = []; 
        countries.map((country, index) => {  
            return country.languages;
        }).map((_langs, i) => { 

            _langs.forEach(_lang => { 
                let findIndex = langs.findIndex(lng => lng.iso639_1 === _lang.iso639_1);
                if(findIndex === -1){ 
                    langs.push({..._lang, count:1});
                }else{
                    langs[findIndex].count += 1;
                }
            }); 
        });   
        langs.sort((a, b) => (a.count < b.count) ? 1 : -1);
        setLanguages(langs);   
    }, []);

    return (
        <div>  
        <div ><h3>Most Spoken Languages</h3></div> 
        
        {languages.map((lang, index) => ( 
            (index < 10 && <MostUsedLangCard 
                queue={index+1}
                name={lang.name}
                count={lang.count} 
            />)
            ))}
        </div> 
    )
}
export default MostUsedLang
