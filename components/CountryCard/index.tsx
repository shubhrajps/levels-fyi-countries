import React, { useState } from 'react';
import { Country } from '../../utils/types';
import './CountryCard.css';

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  const openGoogleMaps = () => {
    window.open(country.maps?.googleMaps || '', '_blank');
  };

  return (
    <div className={`country-card ${flipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="card-inner">
        <div className="card-front bg-white rounded-lg shadow-md p-4">
          <img src={country.flags.svg} alt={`${country.name.common} flag`} loading='lazy' className="w-full h-48 object-cover rounded-t-lg" />
          <h2 className="text-xl text-black font-bold mt-4">{country.name.common}</h2>
          <p className="text-gray-600"><span className="font-bold">Capital:</span> {country.capital?.[0]}</p>
          <p className="text-gray-600"><span className="font-bold">Population:</span> {country.population.toLocaleString()}</p>
        </div>
        <div className="card-back bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl text-black font-bold mt-4">{country.flag} {country.name.common}</h2>
          <p className="text-gray-600"><span className="font-bold">Area:</span> {country.area.toLocaleString()} km²</p>
          <p className="text-gray-600"><span className="font-bold">Region:</span> {country.region}</p>
          <p className="text-gray-600"><span className="font-bold">Subregion:</span> {country.subregion || 'N/A'}</p>
          <p className="text-gray-600"><span className="font-bold">Demonym:</span> {Object.values(country.demonyms || {}).map(d => d.m).join(', ') || 'N/A'}</p>
          <p className="text-gray-600"><span className="font-bold">Timezones:</span> {country.timezones.join(', ')}</p>
          <p className="text-gray-600"><span className="font-bold">Languages:</span> {Object.values(country.languages || {}).join(', ')}</p>
          <p className="text-gray-600"><span className="font-bold">Currencies:</span> {Object.values(country.currencies || {}).map(currency => currency.name).join(', ')}</p>
          <p 
            className="text-green-600 font-thin text-right cursor-pointer mt-4 hover:underline" 
            onClick={openGoogleMaps}
          >
            View in map
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;