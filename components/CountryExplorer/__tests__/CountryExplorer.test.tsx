// components/CountryExplorer/__tests__/CountryExplorer.test.tsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import CountryExplorer from '../index';
import { Country } from '../../../utils/types';
import '@testing-library/jest-dom';

jest.mock('axios');

describe('CountryExplorer', () => {
  const mockCountries: Country[] = [
    {
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
    },
    {
      name: {
        common: 'Canada',
        official: 'Canada',
        nativeName: {
          eng: { official: 'Canada', common: 'Canada' },
          fra: { official: 'Canada', common: 'Canada' },
        },
      },
      tld: ['.ca'],
      cca2: 'CA',
      cca3: 'CAN',
      ccn3: '124',
      cioc: 'CAN',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        CAD: { name: 'Canadian dollar', symbol: '$' },
      },
      capital: ['Ottawa'],
      altSpellings: ['CA', 'Canada'],
      region: 'Americas',
      subregion: 'North America',
      languages: {
        eng: 'English',
        fra: 'French',
      },
      translations: {
        deu: { official: 'Kanada', common: 'Kanada' },
        fra: { official: 'Canada', common: 'Canada' },
      },
      latlng: [56.0, -106.0],
      landlocked: false,
      area: 9984670,
      demonyms: {
        eng: { f: 'Canadian', m: 'Canadian' },
        fra: { f: 'Canadienne', m: 'Canadien' },
      },
      flags: {
        png: 'https://flagcdn.com/w320/ca.png',
        svg: 'https://flagcdn.com/ca.svg',
      },
      maps: {
        googleMaps: 'https://goo.gl/maps/F7Qs7Ks8Ks8Ks8K7',
        openStreetMaps: 'https://www.openstreetmap.org/relation/1428125',
      },
      population: 38005238,
      timezones: ['UTC-08:00', 'UTC-07:00', 'UTC-06:00'],
      continents: ['North America'],
      coatOfArms: {
        png: 'https://example.com/coat-of-arms-canada.png',
        svg: 'https://example.com/coat-of-arms-canada.svg',
      },
      startOfWeek: 'monday',
    },
  ];

  beforeEach(() => {
    (axios.get as jest.Mock).mockResolvedValue({ data: mockCountries });
  });

  it('renders the CountryExplorer component', () => {
    render(<CountryExplorer />);
    expect(screen.getByText('Countries.fyi')).toBeInTheDocument();
  });

  it('displays the search input', () => {
    render(<CountryExplorer />);
    expect(screen.getByPlaceholderText('Search for a country...')).toBeInTheDocument();
  });

  it('displays the country cards after fetching data', async () => {
    render(<CountryExplorer />);
    await waitFor(() => {
      expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(4);
    });
  });

  it('displays the skeleton loading state initially', () => {
    render(<CountryExplorer />);
    expect(screen.getAllByTestId('skeleton-div')).toHaveLength(8);
  });

  it('filters countries based on search term', async () => {
    render(<CountryExplorer />);
    const searchInput = screen.getByPlaceholderText('Search for a country...');
    fireEvent.change(searchInput, { target: { value: 'United' } });
    
    await waitFor(() => {
      expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(2);
      expect(screen.getAllByText('United States')).toHaveLength(2);
      expect(screen.queryByText('Canada')).not.toBeInTheDocument();
    });
  });
});