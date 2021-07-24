import './stats.css';

function MostUsedLangCard({queue, name, count}) {
    return (
        <div className="list" >
                <div className="card-body"> 
                    <b>{queue} - {name} </b>  
                    <br/>
                    Used by <b>{count}</b> countries
                </div>
        </div>
    )
} 
export default MostUsedLangCard
