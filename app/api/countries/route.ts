import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching country data:', error);
    return NextResponse.json({ error: 'Failed to fetch country data' }, { status: 500 });
  }
}