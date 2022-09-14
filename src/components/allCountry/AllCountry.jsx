import React, {useState,useEffect} from 'react'
import { apiURL } from '../utility/api';

const AllCountry = () => {
    
    const [countries, setCountries] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    const getAllcountries = async()=>{
        try {
            const res = await fetch(`${apiURL}/all`)

            if(!res) throw new Error ('Something went wrong!');
            
            const data = await res.json();
            console.log(data);
            setCountries(data);
        
            setIsLoading(false);
        } catch (error) {
        setIsLoading(false);
        setError(error.message);
        }
    };

    useEffect( () => {
        getAllcountries();
    },[])
  
    return (
    <div className='all_country_wrapper'>
        <div className='country_top'>

        </div>
        <div className='country_bottom'>
            {isLoading && !error && <h4>Loading.......</h4>}
            {error && !isLoading && <h4>{error}</h4>}

            {
                countries?.map(country=>(
                    <div className='country_card'>
                        <div className='country_img'>
                            <img src={country.flags.png} alt="" />
                        </div>
                        <div className='country_data'>
                            <h2>{country.name.common}</h2>
                            <h5>POPULATION: {country.population}</h5>
                            <h5>REGION: {country.region}</h5>
                            <h5>CAPITAL CITY: {country.capital} </h5>
                        </div>    
                    </div>
                ))
            }

        </div>
      
    </div>
  )
};

export default AllCountry
