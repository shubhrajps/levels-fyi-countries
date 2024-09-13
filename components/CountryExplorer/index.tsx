"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryCard from '../CountryCard';
import Skeleton from '../Skeleton';
import { Country } from '../../utils/types';

const CountryExplorer: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      try {
        const response = await axios.get<Country[]>('/api/countries');
        setCountries(response.data);
        setFilteredCountries(response.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    const filtered = countries.filter(country =>
      country.name.common.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [searchTerm, countries]);

  return (
    <div className='mx-8'>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Countries.fyi</h1>
        <input
          type="text"
          placeholder="Search for a country..."
          className="border text-black border-gray-300 rounded-md px-4 py-2 mb-8 w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {loading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <Skeleton key={index} />
            ))
          ) : (
            filteredCountries.map((country) => (
              <CountryCard key={country.name.common} country={country} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryExplorer;