import React from 'react';
import { Country } from '../utils/types';

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={country.flags.svg} alt={`${country.name.common} flag`} className="w-full h-48 object-cover rounded-t-lg" />
      <h2 className="text-xl font-bold mt-4">{country.name.common}</h2>
      <p className="text-gray-600">Capital: {country.capital?.[0]}</p>
      <p className="text-gray-600">Population: {country.population.toLocaleString()}</p>
    </div>
  );
};

export default CountryCard;