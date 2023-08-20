'use client';

import * as React from 'react';

import AboutUs from '@/sections/AboutUs';
import Footer from '@/sections/Footer';
import Header from '@/sections/Header';
import Location from '@/sections/Location';
import Services from '@/sections/Services';

export default function HomePage() {
  return (
    <main className='gidcss fade-in'>
      <Header />
      <Services />
      <AboutUs />
      <Location />
      <Footer />
    </main>
  );
}
