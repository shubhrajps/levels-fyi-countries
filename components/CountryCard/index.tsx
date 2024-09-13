import React, { useState } from 'react';
import { Country } from '../../utils/types';
import './CountryCard.css';
import Image from 'next/image';

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
    <div data-testid="country" className={`country-card ${flipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="card-inner">
        <div className="card-front bg-white rounded-lg shadow-md p-4">
          <Image
            src={country.flags.svg} 
            alt={`${country.name.common} flag`} 
            loading="lazy" 
            width={500} // Specify width
            height={300} // Specify height
            className="w-full h-48 object-cover rounded-t-lg" 
          />
          <h2 className="text-xl text-black font-bold mt-4 overflow-hidden whitespace-nowrap text-ellipsis" data-testid="country-name">{country.name.common}</h2>
          <p className="text-gray-600"><span className="font-bold">Capital:</span> {country.capital?.[0]}</p>
          <p className="text-gray-600"><span className="font-bold">Population:</span> {country.population.toLocaleString()}</p>
        </div>
        <div className="card-back bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl text-black font-bold mt-4 overflow-hidden whitespace-nowrap text-ellipsis hover:underline" data-testid="country-flag" onClick={openGoogleMaps}>{country.flag} {country.name.common}</h2>
          <p className="text-gray-600"><span className="font-bold">Area:</span> {country.area.toLocaleString()} km²</p>
          <p className="text-gray-600"><span className="font-bold">Region:</span> {country.region}</p>
          <p className="text-gray-600"><span className="font-bold">Subregion:</span> {country.subregion || 'N/A'}</p>
          <p className="text-gray-600"><span className="font-bold">Demonym:</span> {Object.values(country.demonyms || {}).map(d => d.m).join(', ') || 'N/A'}</p>
          <p className="text-gray-600"><span className="font-bold">Timezones:</span> {country.timezones.slice(0,3).join(', ')}</p>
          <p className="text-gray-600"><span className="font-bold">Languages:</span> {Object.values(country.languages || {}).join(', ')}</p>
          <p className="text-gray-600"><span className="font-bold">Currencies:</span> {Object.values(country.currencies || {}).map(currency => currency.name).join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;