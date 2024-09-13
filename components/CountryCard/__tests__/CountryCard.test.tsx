// components/CountryCard/__tests__/CountryCard.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CountryCard from '../index';
import { Country } from '../../../utils/types';
import '@testing-library/jest-dom';

describe('CountryCard', () => {
  const mockCountry: Country = {
    name: {
      common: 'United States',
      official: 'United States of America',
      nativeName: {
        eng: { official: 'United States of America', common: 'United States' },
      },
    },
    tld: ['.us'],
    cca2: 'US',
    cca3: 'USA',
    ccn3: '840',
    cioc: 'USA',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      USD: { name: 'United States dollar', symbol: '$' },
    },
    capital: ['Washington, D.C.'],
    altSpellings: ['US', 'USA', 'United States of America'],
    region: 'Americas',
    subregion: 'North America',
    languages: {
      eng: 'English',
    },
    translations: {
      deu: { official: 'Vereinigte Staaten von Amerika', common: 'Vereinigte Staaten' },
      fra: { official: 'États-Unis d\'Amérique', common: 'États-Unis' },
    },
    latlng: [38.0, -97.0],
    landlocked: false,
    area: 9833517,
    demonyms: {
      eng: { f: 'American', m: 'American' },
    },
    flags: {
      png: 'https://flagcdn.com/w320/us.png',
      svg: 'https://flagcdn.com/us.svg',
    },
    maps: {
      googleMaps: 'https://goo.gl/maps/mJzdaBwKBbm2B81q9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1983629',
    },
    population: 331002651,
    timezones: ['UTC-05:00'],
    continents: ['North America'],
    coatOfArms: {
      png: 'https://example.com/coat-of-arms.png',
      svg: 'https://example.com/coat-of-arms.svg',
    },
    startOfWeek: 'sunday',
  };

  it('renders the country name', () => {
    render(<CountryCard country={mockCountry} />);
    const countryNameElement = screen.getByTestId('country-name').innerHTML;
    expect(countryNameElement).toBe('United States');
  });

  it('displays the country flag', () => {
    render(<CountryCard country={mockCountry} />);
    const flagImg = screen.getByTestId('country-flag');
    expect(flagImg).toBeInTheDocument();
  });

  it('flips the card on click', () => {
    render(<CountryCard country={mockCountry} />);
    const card = screen.getByTestId('country');
    expect(card).not.toHaveClass('flipped');
    fireEvent.click(card);
    expect(card).toHaveClass('flipped');
  });

  it('opens Google Maps on country name click', () => {
    render(<CountryCard country={mockCountry} />);
    const countryName = screen.getByTestId('country-flag');
    const openGoogleMapsSpy = jest.spyOn(window, 'open');
    fireEvent.click(countryName);
    expect(openGoogleMapsSpy).toHaveBeenCalledWith('https://goo.gl/maps/mJzdaBwKBbm2B81q9', '_blank');
    openGoogleMapsSpy.mockRestore();
  });
});